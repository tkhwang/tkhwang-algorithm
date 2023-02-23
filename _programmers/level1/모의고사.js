// 모의고사
// Level 1
// https://school.programmers.co.kr/learn/courses/30/lessons/42840


function solution(answers) {
  const N = answers.length;

  const answer1Template = [1, 2, 3, 4, 5];
  const answer2Template = [2, 1, 2, 3, 2, 4, 2, 5];
  const answer3Template = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answer1 = Array(N)
    .fill(null)
    .map((v, i) => (v = answer1Template[i % answer1Template.length]));
  const answer2 = Array(N)
    .fill(null)
    .map((v, i) => (v = answer2Template[i % answer2Template.length]));
  const answer3 = Array(N)
    .fill(null)
    .map((v, i) => (v = answer3Template[i % answer3Template.length]));
  const allAnswers = [answer1, answer2, answer3];

  const res = Array(3).fill(0);

  for (const [index, answer] of answers.entries()) {
    for (let i = 0; i < 3; i += 1) {
      if (answer === allAnswers[i][index]) res[i] += 1;
    }
  }

  const max = Math.max(...res);
  return res
    .map((v, i) => [v, i + 1])
    .filter((v) => v[0] === max)
    .map((v) => v[1]);
}
