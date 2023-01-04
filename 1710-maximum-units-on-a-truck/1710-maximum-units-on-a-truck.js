/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    const N = boxTypes.length;
    
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b - a });
    
    for (let i = 0; i < N; i += 1) {
        let [ boxes, units ] = boxTypes[i];
        
        while (boxes > 0) {
            maxHeap.enqueue(units);
            boxes -= 1;
        }
    }
    
    let units = 0;
    while (truckSize > 0) {
        units += maxHeap.dequeue();
        truckSize -= 1;
    }
    
    return units;
};