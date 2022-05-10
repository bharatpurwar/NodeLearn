
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    //console.log(__dirname);
    //res.send("<h1>hello</h1>");
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    //res.send("hello");
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("server started at 3000");
});