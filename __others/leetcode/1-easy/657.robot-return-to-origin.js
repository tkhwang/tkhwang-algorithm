/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const direction2num = dir => {
    switch (dir) {
      case "U":
        return [0, 1];
      case "D":
        return [0, -1];
      case "L":
        return [-1, 0];
      case "R":
        return [1, 0];
    }
  };

  let position = [0, 0],
    x,
    y;

  for (const pos of moves) {
    [x, y] = direction2num(pos);
    position[0] += x;
    position[1] += y;
  }

  return position[0] === 0 && position[1] === 0;
};
