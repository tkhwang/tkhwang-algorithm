// 2개 이하로 다른 비트
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  const res = [];

  const find = (num) => {
    let trying = num + 1;

    // 효율성 Fail
    //         while (true) {
    //             const check = num ^ trying;
    //             const changed = check.toString(2).split("").filter((v) => v === "1").length;
    //             if (changed === 1 || changed === 2) return trying;
    //             trying += 1;
    //         }

    if (num % 2 === 0) {
      return num + 1;
    } else {
      const org = num.toString(2).split("");
      org.unshift("0");
      const index = org.lastIndexOf("0");
      org[index] = "1";
      org[index + 1] = "0";

      return parseInt(org.join(""), 2);
    }
  };

  for (const num of numbers) {
    res.push(find(num));
  }

  return res;
}
