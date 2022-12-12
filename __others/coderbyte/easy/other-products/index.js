function OtherProducts(arrs) {

  let output = [];

  for (let i = 0; i < arrs.length; i++) {
    let multipliction = 1;

    for (let j = 0; j < arrs.length; j++) {
      if (i !== j) {
        multipliction *= arrs[j];
      }
    }
    output.push(multipliction);
  }

  console.log(output);
  return output;
}

module.exports = OtherProducts;