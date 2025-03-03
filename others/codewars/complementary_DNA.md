# Complementary DNA

## My solution

```js
function DNAStrand(dna){
  const dnaConv = {
    "A" : "T",
    "T" : "A",
    "C" : "G",
    "G" : "C"
  }

  return dna.split("").map((v) => dnaConv[v]).join('')
}
```

## Others solution

```js
function DNAStrand(dna) {
  return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}
```
