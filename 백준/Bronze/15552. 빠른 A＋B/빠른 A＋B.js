const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
let result = "";

for (let i = 1; i <= N; i += 1) {
    const [ a, b ] = input[i].split(" ").map(Number);
    result += a + b + "\n";
}

console.log(result);