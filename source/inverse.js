'use strict';

function inverse(arr, num) {
    if (!Array.isArray(arr) || (num !== undefined && typeof num !== 'number')) return null;

    if (!num) return arr.slice().reverse();

    const reversedPart = (num >= 0) ? arr.slice(num, arr.length).reverse() : arr.slice(0, num).reverse();
    const restPart = (num >= 0) ? arr.slice(0, num) : arr.slice(num);

    return (num >= 0) ? restPart.concat(reversedPart) : reversedPart.concat(restPart);
}
