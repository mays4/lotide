
const assertEqual = require('../assertEqual');
// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([6]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");