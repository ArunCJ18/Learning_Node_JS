const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;


//Manual SQL code
// const db = require("../util/database");

// module.exports = class Product {
//     constructor(title, imageUrl, price, description) {
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.price = price;
//         this.description = description;
//     }
//     save(){
//         return db.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
//         [this.title, this.price, this.description, this.imageUrl]);

//     }

//     static delete(){

//     };

//     static fetchAll(){
//         return db.execute("SELECT * FROM products")
//     };
    
//     static getById(id){
//         return db.execute("SELECT * FROM products WHERE products.id = ?",[id]);
//     };
// }




//Without SQL using File
// const fs = require('fs');
// const path = require("path");
// const Cart = require("./cart");
// //creating a file inside data folder from the rootdirectory
// const p = path.join(path.dirname(process.mainModule.filename),
//     "data",
//     "products.json"
// );

// //cb is a callback function which returns file content if file exists
// //else return an empty array []
// const getProductsFromFile = cb => {
//     fs.readFile(p, (err, fileContent) => {
//         if (err) {
//             cb([]);
//         } else {
//             cb(JSON.parse(fileContent));
//         }
//     });
// }

// //constructor recieve the title imagerl price description values in parameter

// module.exports = class Product {
//     constructor(id, title, imageUrl, price, description) {
//         this.id = id;
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.price = price;
//         this.description = description;
//     };

// //using getProductsFromFile it checks filecontent 
// //then push the vaule that constructor recieves to products
// //products converts to a json string and write into the data file 
//     save() {
//         getProductsFromFile((products) => {
//             if(this.id){
//                 const existingProductIndex = products.findIndex(findId => findId.id === this.id);
//                 const updatedProducts = [...products];
//                 updatedProducts[existingProductIndex] = this;
//                 fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//                     console.log(err);
//             });
//         }else{
//             this.id = Math.random().toString();
//             products.push(this);
//                 fs.writeFile(p, JSON.stringify(products), (err) => {
//                 console.log(err);
//             });
//         }
//     });
// }

// static delete(id){
//     getProductsFromFile(products => {
//         const product=products.find(findId => findId.id === id);
//         const updatedProducts = products.filter(prodId => prodId !== id);
//         fs.writeFile(p, JSON.stringify(updatedProducts), err => {
//             if(!err){
//                 Cart.deleteProduct(id, product.price);
//             }
//         });
//     });
// }

// //fetch the values by using the getProductsFromFile function
//     static fetchAll(cb) {
//         getProductsFromFile(cb);
//     };

// //by passing the id in parameter it finds for a product with that id
// //in data file, then display that content through callback

//     static getById(id,cb){
//         getProductsFromFile(products => {
//             const product=products.find(findId => findId.id === id);
//             cb(product);
//         });
//     };
// }
