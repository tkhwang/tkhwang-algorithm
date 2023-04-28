/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const N = baseStr.length;
    
    const ch2index = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);
    const index2ch = (index) => String.fromCharCode(index + 'a'.charCodeAt(0));
    
    const uf = new UnionFind(26);
    
    for (let i = 0; i < s1.length; i += 1) {
        const one = ch2index(s1[i]);
        const two = ch2index(s2[i]);
        uf.union(one, two);
    }
    
    let res = "";
    for (const ch of baseStr) {
        res += index2ch(uf.find(ch2index(ch)));
    }
    
    return res;
};

class UnionFind {
  constructor(n) {
    this.root = Array(n).fill(null).map((_, i) => i);
    this.components = n;
  }

  find(node) {
    // quick find
    return this.root[node];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return true;

    // 항상 작은 쪽으로
    if (rootX < rootY) {
        for (let i = 0; i < 26; i += 1) {
            if (this.root[i] === rootY) this.root[i] = rootX;
        }
    } else {
        for (let i = 0; i < 26; i += 1) {
            if (this.root[i] === rootX) this.root[i] = rootY;
        }
    }
    this.components -= 1;
    return true;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  getComponents() {
    return this.components;
  }
}
