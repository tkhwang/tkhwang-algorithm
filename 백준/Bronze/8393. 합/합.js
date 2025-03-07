const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = input[0];

let sum = 0;
for (let i = 1; i<= num; i += 1) {
    sum += i;
}

console.log(sum);