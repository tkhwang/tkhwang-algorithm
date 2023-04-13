Array.prototype.last = function() {
    return this.at(-1) === undefined ? -1 : this.at(-1);
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */