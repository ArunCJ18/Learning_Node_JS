const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
        pageTitle: "add-product",
        path: "/admin/add-product",
        editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    
    req.user
        .createProduct({
            title: title,
            price: price,
            imageUrl: imageUrl,
            description: description
        })
    // Product.create({
    //     title: title,
    //     price: price,
    //     imageUrl: imageUrl,
    //     description: description
    // })
    .then(products =>{
        console.log("Product Created!");
        res.redirect("/admin/products");
    })
    .catch(err =>{
        console.log(err);
    });
    // const product = new Product(title, imageUrl, price, description);
    // product.save().then(() => {
    //     res.redirect("/");
    // })
    // .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect("/admin/products");
    }
    prodId = req.params.productId;
    // Product.findByPk(prodId)
    req.user.getProducts({where:{id: prodId}})
    .then(products => {
        product = products[0];
        if (!product) {
            return res.redirect("/");
        }
        res.render("admin/edit-product", {
            pageTitle: "Edit-product",
            path: "/admin/products",
            editing: editMode,
            product: product

        });
    })
    .catch(err => console.log(err));
    
};
exports.postEditProducts = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    Product.findByPk(prodId)
    .then(product => {
        product.title = updatedTitle;
        product.price = updatedPrice;
        product.imageUrl = updatedImageUrl;
        product.description = updatedDescription;
        return product.save()
    })
    .then(result => {
        console.log("Product Sucessfully Edited");
        res.redirect("/admin/products");
    })
    .catch(err => console.log(err));
}
    

exports.getProducts = (req, res, next) => {
    req.user.getProducts()
        .then(products => {
            res.render("admin/products", {
            pageTitle: "Admin Products",
            prods: products,
            path: "/admin/products"
            });

        })
        .catch(err => console.log(err));
}
exports.postDeleteProducts =(req, res, next) => {
    prodId = req.body.productId;
    Product.findByPk(prodId)
    .then(product => {
    return product.destroy()
    .then(result => {
    console.log("Deleted Product!");
    res.redirect("/admin/products")
        });
    })
    .catch(err => console.log(err));
    
}