const tail = require("../tail")
const assertEqual = require('../assertEqual');


const words = ["yo yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3); //original array should have 3 elements