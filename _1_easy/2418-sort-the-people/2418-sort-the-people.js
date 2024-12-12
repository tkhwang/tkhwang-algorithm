/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const array = names.map((v,i) => [v, i, heights[i]]);

    array.sort((a,b) => b[2] - a[2]);

    return array.map(([name, index, height]) => name);
};