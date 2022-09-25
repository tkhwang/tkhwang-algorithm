/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names
            .map((v, i) => [v, i])
            .sort(([vA, iA], [vB, iB]) => heights[iB] - heights[iA])
            .map(([v,i]) => v);
};