const express = require('express');
const router = require('./routes')

const app = express();

app.use("/api",router);

app.listen(5000,()=>{
    console.log("server running on localhost:5000")
})