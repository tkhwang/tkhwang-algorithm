/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    flowers.sort((a,b)=>a[0]-b[0]);
    let count=0, map={},result=[];
    for(let i=0;i<people.length;i++){
        if(!map[people[i]]){
            count=0;
            for(let j=0;j<flowers.length;j++){
                if(people[i]>=flowers[j][0] && people[i]<=flowers[j][1]){
                    count++;
                } else if(people[i]<flowers[j][0]) {
                    break;
                }
            }
            map[people[i]] = count;
        }
        result.push(map[people[i]]);
    }
    return result;    
};