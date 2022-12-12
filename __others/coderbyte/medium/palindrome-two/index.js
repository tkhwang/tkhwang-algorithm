function PalindromeTwo(str) {

  // A war at Tarawa!
  let words = str.toLowerCase().replace(/[*\-,!\s]/g, "").split(' ');
  let org = words.join('');
  let rvs = words.reverse().join('');

  console.log(org, rvs);
  return org === rvs;
}

module.exports = PalindromeTwo;