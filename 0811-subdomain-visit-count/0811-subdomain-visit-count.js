/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const obj = {};

    const increment = (obj, url, visits) => {
        if (obj[url] === undefined) obj[url] = 0;
        obj[url] += +visits;
        
        const index = url.indexOf(".");
        if (index === -1) return;
        
        increment(obj, url.slice(index+1), visits);
    }
    
    for (const domain of cpdomains) {
        const [ visits, url ] = domain.split(" ");
    
        increment(obj, url, visits)
    }
    
    return Object.keys(obj).map((key) => `${obj[key]} ${key}`);
};