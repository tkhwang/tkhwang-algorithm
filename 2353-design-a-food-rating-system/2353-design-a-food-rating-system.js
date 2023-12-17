/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    this.foodRating = {};
    this.foodCuisine = {};
    this.cuisineRating = {}; // [ food, cuisine, rating ]
    
    for (const [ i, food ] of foods.entries()) {
        this.foodRating[food] = ratings[i];
        this.foodCuisine[food] = cuisines[i];
        if(this.cuisineRating[this.foodCuisine[food]] === undefined) this.cuisineRating[this.foodCuisine[food]] = new MaxPriorityQueue({ compare : (a,b) => b[2] - a[2] || a[0].localeCompare(b[0]) });
        this.cuisineRating[this.foodCuisine[food]].enqueue([ foods[i], cuisines[i], ratings[i] ]);
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    this.foodRating[food] = newRating;
    
    if (this.cuisineRating[this.foodCuisine[food]] === undefined) this.cuisineRating[this.foodCuisine[food]] = new MaxPriorityQueue({ compare : (a,b) => b[2] - a[2] || a[0].localeCompare(b[0]) });

    this.cuisineRating[this.foodCuisine[food]].enqueue([ food, this.foodCuisine[food], newRating ] );
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    while(
        this.cuisineRating[cuisine] &&
        this.cuisineRating[cuisine].size() &&
        this.cuisineRating[cuisine].front()[2] !== this.foodRating[this.cuisineRating[cuisine].front()[0]]
    ) {
         this.cuisineRating[cuisine].dequeue();
    }
    
    return (this.cuisineRating[cuisine] && this.cuisineRating[cuisine].size())
         ? this.cuisineRating[cuisine].front()[0]
         : -1;
    };

/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */