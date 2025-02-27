const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [ a, b ] = input[0].split(" ").map(Number)

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);