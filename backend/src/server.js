const express = require("express");

const app = express();

//interceptador
app.get('/teste',(req, res) =>{
    return res.send('Hello world');
})

app.listen(3333);

