/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

// #1
/*
var backspaceCompare = function(S, T) {
  const newS = [];
  for (let i = 0; i < S.length; i += 1) {
    if (S[i] === '#') {
      newS.pop();
    } else newS.push(S[i]);
  }

  const newT = [];
  for (let i = 0; i < T.length; i += 1) {
    if (T[i] === '#') {
      newT.pop();
    } else newT.push(T[i]);
  }

  console.log(newS, newT);
  return newS.join('') === newT.join('');
};
*/

// #2
var backspaceCompare = function(S, T) {
  const handleSharp = str => {
    const result = [];
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === "#") result.pop();
      else result.push(str[i]);
    }

    return result.join("");
  };

  return handleSharp(S) === handleSharp(T);
};
