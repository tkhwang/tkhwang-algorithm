function ElementMerger(arr) {

  // [4, 5, 1, 2, 7]
  // [1, 4, 1, 5].
  // [3, 3, 4]
  // [0, 1]
  // [1]

  if (arr.length === 1) {
    return arr[0];
  } else {
    newArr = [];
    arr.forEach((val, ind) => {
      if (ind < arr.length - 1) {
        newArr.push(Math.abs(val - arr[ind + 1]));
      }
    });
    return ElementMerger(newArr);
  }

}

module.exports = ElementMerger;