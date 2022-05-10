const fs = require("fs");
var superheros = require("superheroes");

// fs.copyFileSync("text.txt", "des.txt");
var name = superheros.random();
console.log(name);