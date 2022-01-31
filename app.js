const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("G R BHASKAR REDDY")
})
app.listen(3000,()=>{
    console.log("3000 listening....")
})