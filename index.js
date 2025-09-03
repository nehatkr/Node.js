<<<<<<< HEAD
const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send("Hello Express Js")
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Now server is running on the port ${port}`);
    
})


app.get('/', (req, res) => {
  res.send('Welcome to our homepage');
});
=======
// console.log("hey node js");
// console.log("We will do it");

const lodash = require('lodash')

const names = ['neha', 'rahul', 'shweta', 'rishika'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
>>>>>>> 1920393ce315a7ddad6c41aa4bfcc2f7d2b52648
