'use strict';

function inverse(arr, num) {
    if (!Array.isArray(arr)) return null;

    if (!num) return arr.slice().reverse();

    // пока не особо понимаю, как можно компактнее реализовать проверку на наличие второго аргумента
    if (typeof num !== 'number') return null;

    const reversedPart = (num >= 0) ? arr.slice(num, arr.length).reverse() : arr.slice(0, num).reverse();
    const restPart = (num >= 0) ? arr.slice(0, num) : arr.slice(num);

    return (num >= 0) ? restPart.concat(reversedPart) : reversedPart.concat(restPart);
}
