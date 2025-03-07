const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const nums = input[1].split(" ").map(Number)

const min = Math.min(...nums);
const max = Math.max(...nums);

console.log(`${min} ${max}`);