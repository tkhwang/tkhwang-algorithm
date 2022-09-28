/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    
    for (const p of path.split("/")) {
        console.log(p);
        if (p === "") continue
        if (p === ".") continue
        if (p === "..") stack.pop();
        else stack.push(p)
    }
    
    return "/" + stack.join("/")
};