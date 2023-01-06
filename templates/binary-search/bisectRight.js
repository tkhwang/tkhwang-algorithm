const bisecRight = (array, target) => {
  const N = array.length;

  // [0, N)
  let left = 0;
  let right = N;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // [mid+1, right)
    if (array[mid] === target) {
      left = mid + 1;
      // select left space =>
    } else if (array[mid] > target) {
      right = mid;
      // select right space =>
    } else if (array[mid] < target) {
      left = mid + 1;
    }
  }
  return left - 1;
};
