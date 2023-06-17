//import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
//create express application
const app = express();

// Configure Body-parser

// Send JSON responses

app.use(bodyParser.json());

// Get objects from Request

app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration

app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(

    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

  );

  res.setHeader(

    "Access-Control-Allow-Methods",

    "GET, POST, DELETE, OPTIONS, PATCH, PUT"

  );

  next();

});
//Function generatedId
function generateId(T) {
    let max;
    if (T.length == 0) {
      max = 0;
    } else {
      max = T[0].id;
      for (let i = 0; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id;
        }
      }
    }
    return max + 1;
  }
//User Tab simulation 
let users = [
    { id: 1,  firstName: "Cristiano", lastName: "Ronaldo", email: "cristiano@gmail.com", pwd: "123123", tel:"22014564", address:"Porto" },
    { id: 2,  firstName: "Asma", lastName: "Akaichi", email: "asma@gmail.com", pwd: "123123", tel:"20000111", address:"Tunis" },
    { id: 1,  firstName: "Salah", lastName: "Ben Ali", email: "salah@gmail.com", pwd: "123123", tel:"23000111", address:"Tunis" },
  ]
let products=[
    {id:1,img:"assets/img/product/p9.jpg", name:"T-shirst", price:20, stock:"20pc", category:"clothes"},
    {id:2, img:"assets/img/product/p10.jpg", name:"Samsung", price:200, stock:"30pc", category:"Smartphone"},
    {id:3,img:"assets/img/product/p11.jpg", name:"Dell", price:1000, stock:"50pc", category:"Laptop"},
    {id:4, img:"assets/img/product/p12.jpg", name:"Bag", price:25, stock:"20pc", category:"Bag"},
    {id:5, img:"assets/img/product/p13.jpg", name:"Nokia", price:300, stock:"20pc", category:"Samrtphone"},
    {id:6, img:"assets/img/product/p14.jpg", name:"Dress", price:70, stock:"30pc", category:"clothes"},

]
//BL signup
app.post("/users", (req,res)=>{
  let user=req.body;
    console.log("Here into BL", user);
})
//BL Get All Products
app.get("/products", (req,res)=>{
  
res.json({productArray:products})
console.log("Here all products", products);
})
//BL Add Product
app.post("/products", (req,res)=>{
console.log("Here product objjj", req.body);
let product=req.body;
product.id=generateId(products)
products.push(product)
res.json({message:"Added with succes"})
});
//Get Product By Id
app.get("/products/:id", (req,res)=>{
console.log("Here into BL: get product by Id");
let id=req.params.id;
for (let i = 0; i < products.length; i++) {
  if (products[i].id==id) {
   findedProduct=products[i];
  break;  
  };
};
res.json({product:findedProduct});
});
//Search Product By name/price
app.post("/users/search", (req,res)=>{
console.log("Here user", req.body);
let findedProduct= products.filter((obj)=>{return (obj.name==req.body.name || obj.price==req.body.price) });
console.log("Here finded", findedProduct);
res.json({searchArray:findedProduct})
})
//make app importable
module.exports = app;
