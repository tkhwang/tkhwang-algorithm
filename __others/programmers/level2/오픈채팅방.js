// 오픈채팅방
// Level2
// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(records) {
  const N = records.length;

  const obj = {};
  const res = [];
  const operations = [];
  const ins = new Set();
  const outs = new Set();

  for (const [i, record] of records.entries()) {
    const [act, uid, user] = record.split(" ");

    if (act === "Enter") {
      ins.add(uid);
      obj[uid] = user;
    } else if (act === "Leave") {
      if (ins.has(uid)) {
        ins.delete(uid);
        outs.add(uid);
      }
    } else if (act === "Change") {
      if (ins.has(uid)) {
        obj[uid] = user;
      }
    }

    if (act === "Enter" || act === "Leave") {
      operations.push([act, uid]);
    }
  }

  const generate = (act, uid) => {
    return act === "Enter"
      ? `${obj[uid]}님이 들어왔습니다.`
      : `${obj[uid]}님이 나갔습니다.`;
  };

  for (const [i, [act, uid]] of operations.entries()) {
    res.push(generate(act, uid));
  }

  return res;
}
