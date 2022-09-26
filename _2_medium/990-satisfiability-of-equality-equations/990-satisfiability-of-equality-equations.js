/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const n = equations.length;
    
    const getCode = (alphabet) => alphabet.charCodeAt(0) - "a".charCodeAt(0);
    
    const unionFind = new UnionFind(26);
    
    // connect
    for (const equation of equations) {
        const [ left, isEqual, _, right] = equation.split("");

        if (isEqual === "!") continue;

        unionFind.union(getCode(left), getCode(right))
    }
    
    // verify
    for (const equation of equations) {
        const [ left, isEqual, _, right] = equation.split("");

        if (isEqual === "!") {
            if (unionFind.connected(getCode(left), getCode(right))) {
                return false;
            }
        }
    }    

    return true;
};

class UnionFind {
    constructor(n) {
        this.root = Array(n).fill(null).map((_,i) => i);
        this.rank = Array(n).fill(1);
        this.components = n;
    }
    
    find(node) {
        if (node === this.root[node]) return node;
        return this.root[node] = this.find(this.root[node]);
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return false;
        
        if (this.rank[rootX] < this.rank[rootY]) {
            this.root[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.root[rootY] = rootX;
        } else {
            this.root[rootY] = rootX;
            this.rank[rootX] += 1;
        }
        this.components -= 1;
        return true
    }
    
    connected(x,y) {
        return this.find(x) === this.find(y)
    }
    
    getComponents() {
        return this.components;
    }
}
