const express = require('express');
const app = express();

app.use('/',(request,response)=>{
    response.send("response from express");
})

app.listen(8989,()=>{
    console.log("server started");
})