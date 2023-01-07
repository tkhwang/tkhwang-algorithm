const bisectGeneralMax = (array) => {
  let left = MIN_SEARCH_SPACE;
  let right = MAX_SEARCH_SPACE;

  // Maximize such that isOK(k) is True.
  //  ----------------
  //                 |
  //                 |
  //                 |
  //  [ left, right ], right + 1
  const isOK = (n) => {
    // decision logic
    return true;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (isOK(mid)) {
      // Because mid is checked to be OK, now mid should be the lower bound. [mid, ...]
      left = mid;
    } else {
      // Now mid is not OK, so that we need to check the below [..., mid - 1]
      right = mid - 1;
    }
  }

  // After exiting the while loop,
  // right is the maximum k​ satisfying the condition function;
  return right;
};
