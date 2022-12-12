/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */
/**
 * @param {string} S
 * @return {string[]}
 */

var letterCasePermutation = function(S) {
  const arrS = S.split("");
  const result = [];
  dfs("", 0);
  return result;

  function dfs(current, i) {
    // Base
    if (i === arrS.length) {
      result.push(current);
      return;
    }

    const ch = arrS[i];
    if (0 <= ch && ch <= 9) {
      current += ch;
      dfs(current, i + 1);
    } else {
      dfs(current + arrS[i].toLowerCase(), i + 1);
      dfs(current + arrS[i].toUpperCase(), i + 1);
    }
  }
};

/*
var letterCasePermutation = function(S) {
  const isAlpha = ch => {
    if (("a" <= ch && ch <= "z") || ("A" <= ch && ch <= "Z")) return true;
    else return false;
  };

  const backtrack = (array, result, index) => {
    if (index === array.length) {
      result.push(array.join(""));
    } else {
      let ch = array[index];
      if (isAlpha(ch)) {
        array[index] = ch.toLowerCase();
        backtrack(array, result, index + 1);
        array[index] = ch.toUpperCase();
        backtrack(array, result, index + 1);
      } else {
        backtrack(array, result, index + 1);
      }
    }
  };

  const array = S.split("");
  const result = [];

  backtrack(array, result, 0);
  return result;
};
*/

// 3rd
var letterCasePermutation = function(S) {
  const dfs = (index, str, output, string) => {
    // Base
    if (index === string.length) {
      output.push(str);
      return;
    }

    // Recursive
    if ("a" <= string[index] && string[index] <= "z") {
      dfs(index + 1, str + string[index], output, string);
      dfs(index + 1, str + string[index].toUpperCase(), output, string);
    } else {
      dfs(index + 1, str + string[index], output, string);
    }
  };

  S = S.toLowerCase();

  const output = [];
  dfs(0, "", output, S);
  return output;
};
