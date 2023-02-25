// 구명보트
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  const N = people.length;

  people.sort((a, b) => a - b);

  let left = 0;
  let right = N - 1;

  let count = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      count += 1;
      left += 1;
      right -= 1;
    } else {
      count += 1;
      right -= 1;
    }
  }
  return count;
}
