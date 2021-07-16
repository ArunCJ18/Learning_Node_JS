//controllers which consists of functions 
const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/index", {
            pageTitle: "Index",
            prods: products,
            path: "/"
        });
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/product-list", {
            pageTitle: "Products",
            prods: products,
            path: "/products"

        });
    });
};

exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
        pageTitle: "My Cart",
        path: "/cart"
    });
};

exports.getOrder = (req, res, next) => {
    res.render("shop/orders", {
        pageTitle: "My Order",
        path: "/order"
    });
};

exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        pageTitle: "Checkout",
        path: "/checkout"
    });
};