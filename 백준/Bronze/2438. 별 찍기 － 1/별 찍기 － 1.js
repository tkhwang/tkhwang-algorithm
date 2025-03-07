const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

for (let i = 1; i <= N; i += 1) {
    console.log(`*`.repeat(i));
}