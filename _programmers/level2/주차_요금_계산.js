// 주차 요금 계산
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const obj = {};

  const [feeBasicTime, feeBasicCost, feeUnitTime, feeUnitCost] = fees;
  const convertHM2M = (hour, min) => Number(hour * 60 + min);

  for (const record of records) {
    const [time, number, inout] = record.split(" ");
    const [hour, min] = time.split(":");

    if (obj[number] === undefined) obj[number] = [];
    obj[number].push([convertHM2M(+hour, +min), inout]);
  }

  const calcCost = (time) => {
    console.log("calcCost:", time);
    if (feeBasicTime > time) return feeBasicCost;
    return (
      feeBasicCost +
      Math.ceil((time - feeBasicTime) / feeUnitTime) * feeUnitCost
    );
  };

  const res = [];

  const keys = Object.keys(obj);
  keys.sort((a, b) => +a - +b);

  keys.forEach((key) => {
    const array = obj[key] || [];

    let prv = null;
    let time = 0;
    for (let i = 0; i < array.length; i += 2) {
      const [prvTime] = array[i];
      const [curTime] = array[i + 1] || [convertHM2M(23, 59)];

      time += curTime - prvTime;
    }
    res.push(calcCost(time));
  });

  return res;
}
