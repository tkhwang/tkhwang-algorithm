/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    const isSimilar = (one, two) => {
        let count = 0;
        for (let i = 0; i < one.length; i += 1) {
            if (one[i] !== two[i]) count += 1;
        }    
        return count <= 2;
    }
    
    const N = strs.length;
    
    const uf = new UnionFind(N);
    
    for (let i = 0; i < N; i += 1) {
        for (let j = i + 1; j < N; j += 1) {
            const one = strs[i];
            const two = strs[j];
            if (isSimilar(one, two)) {
                const root1 = uf.find(i);
                const root2 = uf.find(j);
                if (root1 !== root2) {
                    uf.union(i, j);
                }
            }
        }
    }
    
    return uf.getComponents();
    
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
