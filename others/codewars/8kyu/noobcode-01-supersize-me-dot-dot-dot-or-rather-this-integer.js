f; // My solution #1
function superSize(num) {
  const nums = String(num).split("");

  const result = [];
  let max;
  let index;
  while (nums.length !== 0) {
    max = Math.max(...nums);
    index = nums.indexOf(String(max));
    result.push(max);
    nums.splice(index, 1);
  }

  return Number(result.join(""));
}

// #2

function superSize(num) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// Other solution
function superSize(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort()
      .reverse()
      .join("")
  );
}
