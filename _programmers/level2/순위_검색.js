// 순위 검색
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/72412

function solution(infos, queries) {
  const combinations = (array, length = array.length) => {
    const res = [];

    const dfs = (cur, start) => {
      if (cur.length === length) {
        res.push([...cur]);
        return;
      }

      for (let i = start; i < array.length; i += 1) {
        cur.push(array[i]);
        dfs(cur, i + 1);
        cur.pop();
      }
    };

    dfs([], 0);

    return res;
  };

  const bisectLeft = (array, target, left = 0, right = array.length) => {
    // [left, right) half inclusive range

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      // left-most
      if (array[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };

  const people = {};

  for (const info of infos) {
    const [lang, job, career, food, point] = info.split(" ");
    const otherInfo = [lang, job, career, food];

    const sames = [];
    for (let i = 0; i <= otherInfo.length; i += 1) {
      const combs = combinations(otherInfo, i).map((v) => v.join(""));
      for (const comb of combs) {
        if (people[comb] === undefined) people[comb] = [];
        people[comb].push(+point);
      }
    }
  }

  for (const key in people) {
    people[key].sort((a, b) => a - b);
  }

  const res = [];

  for (let query of queries) {
    query = query.replaceAll(" and ", "").replaceAll("-", "");
    query = query.split(" ");
    const point = query.pop();

    const key = query.join("");

    if (people[key] === undefined) {
      res.push(0);
    } else {
      const index = bisectLeft(people[key], point);
      res.push(people[key].length - index);
    }
  }
  return res;
}
