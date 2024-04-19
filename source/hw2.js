// Реализоватьсвойство `size`  у всех массивов,
// которое работало бы точно так же, как и `length`.

Object.defineProperty(Array.prototype, 'size', {
    get: function() {
        return this.length;
    },
    set: function(value) {
        if (value < 0) {
            throw new RangeError('Размер массива не может быть отрицательным');
        } else if (value < this.length) {
            this.splice(value);
        } else if (value > this.length) {
            this.length = value;
        }
    }
});


// #1
console.log([0, 1].size); // 2

// #2
var arr = [0, 1, 2];
arr.size = 0;
console.log(arr); // []
