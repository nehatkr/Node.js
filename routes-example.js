const express = require("express");

const app = express();

// root route
app.get("/", (req,res)=>{
    res.send("Welcome to our home page");
});

// get all products
app.get("/products", (req,res)=>{
    const products= [
        {
            id:1,
            label:'Product 1'
        },
        {
            id:2,
            label:'Product 2'
        },
        {
            id:3,
            label:'Product 3'
        },
        {
            id: 4,
            label:'Product  4'
        },
        {
            id:5,
            label:'Product 5'
        },
        {
            id:6,
            label:'Product 6'
        },
     
    ];
    res.json(products);
})



// get a single product
app.get('/products/:id', (req,res)=>{
    const productId = parseInt(req.params.id);
        const products= [
        {
            id:1,
            label:'Product 1'
        },
        {
            id:2,
            label:'Product 2'
        },
        {
            id:3,
            label:'Product 3'
        },
        {
            id: 4,
            label:'Product  4'
        },
        {
            id:5,
            label:'Product 5'
        },
        {
            id:6,
            label:'Product 6'
        },
     
    ];

    const getSingleProduct = products.find(product=> product.id === productId);

    if(getSingleProduct){
        res.json(getSingleProduct)
    }else{
        res.status(404).send('Product not found ! please try with different id')
        
    }
})
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is now running at port ${port}`);
    
})