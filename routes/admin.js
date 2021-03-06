// const rootDir = require("../util/path.js")
// const path = require("path");
 
const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

// //admin/add-product => POST
// router.post("/add-product", (req, res, next) => { //only parse the body of the incomming post request
//     products.push({title : req.body.title});
//     res.redirect("/");
// });

// //admin/add-product => GET
// router.get("/add-product", (req, res, next) => {
//     res.sendFile(path.join(rootDir, "views", "add-products.html"))
// });

// router.post("/add-product",(req, res, next)=>{
//     products.push({title: req.body.title});
//     res.redirect("/");
    
// });
// //using templating engine to render the views 
// router.get("/add-product",(req, res, next)=>{
//     res.render("add-products",{
//         pageTitle: "add-products",
//         path:"/add-product"
//     });
// });

router.post("/add-product",adminController.postAddProduct);

router.post("/edit-product", adminController.postEditProducts);

router.get("/products", adminController.getProducts);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.get("/add-product",adminController.getAddProduct);

router.post("/delete-product", adminController.postDeleteProducts);

// exports.routes = router;
// exports.products = products;
module.exports = router;
