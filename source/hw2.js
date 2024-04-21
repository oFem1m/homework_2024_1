// Реализоватьсвойство `size`  у всех массивов,
// которое работало бы точно так же, как и `length`.

Object.defineProperty(Array.prototype, 'size', {
    get: function() {
        let count = 0;
        for (let i in this) {
            if (this.hasOwnProperty(i) && !isNaN(parseInt(i))) {
                count++;
            }
        }
        return count;
    },
    set: function(value) {
        if (value < 0) {
            throw new RangeError('Размер массива не может быть отрицательным');
        } else if (value < this.size) {
            this.splice(value);
        } else if (value > this.size) {
            this[value - 1] = undefined;
        }
    }
});


class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

let cars = [
    new Car('Toyota', 'Camry', 2020),
    new Car('Tesla', 'Model S', 2022),
    new Car('BMW', 'X5', 2019)
];


console.log(cars.size)


// #1
console.log([0, 1].size); // 2

// #2
var arr = [0, 1, 2];
arr.size = 0;
console.log(arr); // []
