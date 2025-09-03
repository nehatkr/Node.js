const express = require("express");

const app = express();

// root route
app.get("/", (req,res)=>{
    res.send("Welcome to our home page");
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is now running at port ${port}`);
    
})