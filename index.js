const express = require('express');
const fs = require('fs');
const ServiceHandler = require('./src/ServiceHandler');


const app = express();



app.get("/api/services/getStatus", (req,res) => {
    ServiceHandler
})

app.listen(3000, () => {
    console.log("Server hosting!");
});