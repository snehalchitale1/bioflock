const express = require("express");
const bodyParser = require("body-parser");
const port = "5000"

const app = express();
const jsonParser = bodyParser.json() ;


app.get("/Home",(req ,res)=>{
    res.send("hi I am server");
});









app.listen(port,()=>{
    console.log("server started");
});

