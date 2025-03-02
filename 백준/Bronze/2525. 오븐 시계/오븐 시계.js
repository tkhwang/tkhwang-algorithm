const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [ hour, min ] = input[0].split(" ").map(Number);
const duration = Number(input[1]);

const totalMin = hour * 60 + min + duration;

const updatedHour = Math.floor(totalMin / 60) % 24;
const updatedMin  = totalMin % 60;

console.log(`${updatedHour} ${updatedMin}`)