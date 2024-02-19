'use strict';
/**
 * Меняет порядок элементов в массиве на противоположный.
 *
 * @param {Array} arr - Исходный массив.
 * @param {number} [num] - Необязательный аргумент. Если передано число n, переставляются все элементы
 *   массива, кроме первых n.
 *   Если число отрицательное, то на месте остаются элементы в конце массива.
 * @returns {Array|null} - Новый массив с измененным порядком элементов или null, если входные данные
 *   ошибочны.
 */
const inverse = (arr, num) => {
    if (!Array.isArray(arr) || (num && typeof num !== 'number')) {
        return null;
    }

    if (!num) {
        return arr.slice().reverse();
    }

    const isNumPositive = num >= 0;
    const reversedPart = isNumPositive ? arr.slice(num, arr.length).reverse() : arr.slice(0, num).reverse();
    const restPart = isNumPositive ? arr.slice(0, num) : arr.slice(num);

    return isNumPositive ? restPart.concat(reversedPart) : reversedPart.concat(restPart);
}
