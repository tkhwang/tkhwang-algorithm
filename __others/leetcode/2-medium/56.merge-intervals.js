/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 0) return [];

  const START = 0,
    END = 1,
    result = [];

  intervals.sort((a, b) => a[START] - b[START]);
  console.log(intervals);

  for (let i = 1; i < intervals.length; i += 1) {
    const before = intervals[i - 1];
    const current = intervals[i];

    // Overlap
    if (before[END] >= current[START] && current[END] >= before[START]) {
      current[START] = Math.min(before[START], current[START]);
      current[END] = Math.max(before[END], current[END]);
    } else {
      result.push(before);
    }
  }

  result.push(intervals[intervals.length - 1]);

  return result;
};
