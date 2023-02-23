// 보석 쇼핑
// Level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
  const all = new Set(gems);
  const N = gems.length;
  const freq = {};

  let res = [1, N];
  let freqCount = 0;
  let left = -1;

  for (let right = 0; right < N; right += 1) {
    const cur = gems[right];
    freq[cur] = (freq[cur] || 0) + 1;
    if (freq[cur] === 1) freqCount += 1;

    // 아래와 같이 매번 key length 를 구하니깐 효율성 통과하지 못하여 변수에 length 를 저장하도록 함.
    // while (Object.keys(freq).length === all.size) {
    while (freqCount === all.size) {
      if (right - left + 1 < res[1] - res[0] + 1) {
        res[0] = left + 1;
        res[1] = right + 1;
      }

      const leftNum = gems[left];
      freq[leftNum] -= 1;
      if (freq[leftNum] === 0) {
        freqCount -= 1;
        delete freq[leftNum];
      }
      left += 1;
    }
  }

  return res;
}
