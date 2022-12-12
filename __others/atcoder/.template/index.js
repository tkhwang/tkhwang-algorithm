'use strict';

const main = input => {
  const [N, M, txt] = input.split('\n');
  const [ A, B ] = M.split(" ");

  console.log(+N + +A + +B, txt);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
