const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= 9; i += 1) {
    console.log(`${n} * ${i} = ${n * i}`);
}