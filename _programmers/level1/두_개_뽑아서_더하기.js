// 두 개 뽑아서 더하기
// Level 1
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const N = numbers.length;

  const set = new Set();

  for (let i = 0; i < N; i += 1) {
    for (let j = i + 1; j < N; j += 1) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  return Array.from(set).sort((a, b) => a - b);
}
