/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const BIG = 1;
const MEDIUM = 2;
const SMALL = 3;

var ParkingSystem = function(big, medium, small) {
    this.sizes = Array(3+1).fill(0);
    this.sizes[BIG] = big;
    this.sizes[MEDIUM] = medium;
    this.sizes[SMALL] = small;
    
    this.used = Array(3+1).fill(0);
    this.used[BIG] = 0;
    this.used[MEDIUM] = 0;
    this.used[SMALL] = 0;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (this.sizes[carType] === 0 || this.used[carType] >= this.sizes[carType]) return false;
    
    this.used[carType] += 1;
    return true;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */