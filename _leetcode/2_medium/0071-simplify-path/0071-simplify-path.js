/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.replaceAll("//", "/");

    const paths = path.split("/");
    const stack = [];
    
    for (const path of paths) {
        if (!path) continue;
        

        if (path === "..") {
            if (stack.length > 0) stack.pop();
            continue;
        }
        if (path === ".") continue;
        stack.push(path);
    }
    
    return "/" + stack.join("/")
};