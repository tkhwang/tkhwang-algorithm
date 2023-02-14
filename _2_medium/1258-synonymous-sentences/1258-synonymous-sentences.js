/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
var generateSentences = function(synonyms, text) {
    const N = synonyms.length;
    
    const uf = new UnionFind(2 * N);

    const word2index = {};
    let index = 0;
    
    for (const [ u, v ] of synonyms) {
        if (word2index[u] === undefined) {
            word2index[u] = index;
            index += 1;
        }
        if (word2index[v] === undefined) {
            word2index[v] = index;
            index += 1;
        }
        
        uf.union(word2index[u], word2index[v]);
    }
    
    const res = [];

    const dfs = (cur, remains) => {
        if (remains.length === 0) {
            res.push(cur.trim());
            return;
        }
        
        const word = remains[0];
        
        if (word2index[word] === undefined) {
            dfs(cur + `${word} `, remains.slice(1));
        } else {
            const local = [ word ];
            const root = uf.find(word2index[word]);
            for (const otherWord in word2index) {
                if (word === otherWord) continue;
                const otherRoot = uf.find(word2index[otherWord]);
                if (root !== otherRoot) continue;
                
                local.push(otherWord);
            }
            local.sort((a,b) => a.localeCompare(b));
            for (const word of local) {
                dfs(cur + `${word} `, remains.slice(1));   
            }
        }
    }
    
    dfs("", text.split(" "));
    
    return res.sort();
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