/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const N = equations.length;
    
    const uf = new UnionFind(26);
    
    const ch2index = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);
    
    for (const equation of equations) {
        const [ left, check, _, right ] = equation.split("");

        if (check === "!") continue;
        uf.union(ch2index(left), ch2index(right));
    }
    
    for (const equation of equations) {
        const [ left, check, _, right ] = equation.split("");
        
        if (check === "=") continue;
        
        if (uf.connected(ch2index(left), ch2index(right))) return false;
    }    
    
    return true;
};

   class UnionFind {
      constructor(n) {
        this.root = Array(n)
          .fill(null)
          .map((_, i) => i)
        this.rank = Array(n).fill(1)
        this.components = n
      }

      find(node) {
        if (node === this.root[node]) return node
        return (this.root[node] = this.find(this.root[node]))
      }

      union(x, y) {
        const rootX = this.find(x)
        const rootY = this.find(y)

        if (rootX === rootY) return false

        if (this.rank[rootX] < this.rank[rootY]) {
          this.root[rootX] = rootY
        } else if (this.rank[rootX] > this.rank[rootY]) {
          this.root[rootY] = rootX
        } else {
          this.root[rootY] = rootX
          this.rank[rootX] += 1
        }
        this.components -= 1
        return true
      }

      connected(x, y) {
        return this.find(x) === this.find(y)
      }

      getComponents() {
        return this.components
      }
    }
