const express = require("express");
const app = express();

// define middleware function
const myFirstMiddleware = (req, res, next)=>
{
    console.log("This first middleware will run on every request");
    next(); //to run every time  
}

app.use(myFirstMiddleware);

app.get('/', (req,res)=>{
    res.send('Home Page')
})
app.get('/about', (req,res)=>{
    res.send('About Page')
})
app.listen(3000,()=>{
    console.log(`Server is running on the port 3000`);
    
})