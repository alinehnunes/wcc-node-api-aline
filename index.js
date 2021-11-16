const express = require("express");
const app = express();
const port = 8080;

app.get("/", function(req, res){
    res.send("Minha primeira requisição!");
})


app.listen(port, function(){
    console.log("Ouvindo a porta: ", port);
});