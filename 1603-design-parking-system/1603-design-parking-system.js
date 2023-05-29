/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.parking = {
        1: { max: big, cur: 0 },
        2: { max: medium, cur: 0 },
        3: { max: small, cur: 0 }
    }    
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    const { max, cur } = this.parking[carType];
    if (cur === max) return false;
    
    this.parking[carType].cur += 1;
    return true;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */