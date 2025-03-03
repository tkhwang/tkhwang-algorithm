"use strict";

const main = (input) => {
  const [N, ...array] = input.split("\n");

  console.log(N);
  console.log(array);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
