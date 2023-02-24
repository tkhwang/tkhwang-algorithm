// 단어 변환
// Level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
  const set = new Set(words);

  const ch2index = (ch) => ch.charCodeAt(0) - "a".charCodeAt(0);
  const index2ch = (index) => String.fromCharCode(index + "a".charCodeAt(0));

  const bfs = (start, seen) => {
    const queue = [start];
    let steps = 0;

    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i += 1) {
        const cur = queue.shift();
        if (cur === target) return steps;

        for (let j = 0; j < cur.length; j += 1) {
          const curCh = cur[j];

          for (let k = 0; k < 26; k += 1) {
            const nextCh = index2ch(k);
            if (curCh === nextCh) continue;
            const next = cur.slice(0, j) + nextCh + cur.slice(j + 1);
            if (!set.has(next)) continue;
            if (seen.has(next)) continue;

            seen.add(next);
            queue.push(next);
          }
        }
      }

      steps += 1;
    }

    return 0;
  };

  const seen = new Set([begin]);
  return bfs(begin, seen);
}
