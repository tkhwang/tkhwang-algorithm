function ExOh(str) {

  // let num_x = str.length - str.split('x').join('').length;
  // let num_o = str.length - str.split('o').join('').length;

  let num_x = str.split('').filter(c => c === 'x').length;
  let num_o = str.split('').filter(c => c === 'o').length;

  console.log("num_x = ", num_x);
  console.log("num_o = ", num_o);
}



m = "xoaxo";
console.log(ExOh(m));