// 신고 결과 받기
// Level 1
// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, reports, k) {
  const reportUsers = {};
  const bads = {};
  for (const report of reports) {
    const [rpt, bad] = report.split(" ");

    if (bads[bad] === undefined) bads[bad] = new Set();
    bads[bad].add(rpt);

    if (reportUsers[rpt] === undefined) reportUsers[rpt] = new Set();
    reportUsers[rpt].add(bad);
  }

  const res = [];

  for (const user of id_list) {
    let count = 0;
    for (const bad of reportUsers[user] || []) {
      if (bads[bad].size >= k) count += 1;
    }
    res.push(count);
  }
  return res;
}
