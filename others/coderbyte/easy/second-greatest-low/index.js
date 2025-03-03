function SecondGreatLow(arr) {

  // Large
  let arr_wo_max = arr
    .filter((v, i) => v !== Math.max.apply(null, arr));
  let sec_larget = Math.max.apply(null, arr_wo_max);

  // Small
  let arr_wo_min = arr
    .filter((v, i) => v !== Math.min.apply(null, arr));
  let sec_smallest = Math.min.apply(null, arr_wo_min);

  return sec_smallest + " " + sec_larget;
}

module.exports = SecondGreatLow;