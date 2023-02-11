const PORT = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const e = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+"public/index.html")
})
app.get('*', function(req, res){
  res.sendFile(__dirname+"/public/404.html")
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
  });