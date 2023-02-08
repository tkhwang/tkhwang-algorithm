// https://tkhwang.me/snippets/how-to-use-binary-search-to-find-minimum-or-maximum-in-javascript

const bisectGeneralMin = (array) => {
  let left = MIN_SEARCH_SPACE;
  let right = MAX_SEARCH_SPACE + 1;

  const isOK = (value) => {
    // decision logic
    return true;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (isOK(mid)) {
      // Because mid is checked to be OK, now mid should be the upper bound. [..., mid]
      right = mid;
    } else {
      // Now mid is not OK, so that we need to check from [mid + 1, ...].
      left = mid + 1;
    }
  }

  // After exiting the while loop,
  // left is the minimal k​ satisfying the condition function;
  return left;
};
