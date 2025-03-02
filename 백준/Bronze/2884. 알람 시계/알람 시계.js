const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [ hour, min ] = input[0].split(" ").map(Number)

  // M이 45분보다 작으면 시간(H)을 1시간 빌려서 분(M)에 60을 더한 후 45를 빼준다.
  if (min < 45) {
    min = min + 60 - 45; // M + 15와 동일
    // H가 0이면 전날 23시로 변경, 아니면 1시간 빼준다.
    hour = (hour === 0) ? 23 : hour - 1;
  } else {
    // M이 45분 이상이면 그냥 45를 빼준다.
    min = min - 45;
  }

console.log(`${hour} ${min}`)