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