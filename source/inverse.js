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
function inverse(arr, num) {
    if (!Array.isArray(arr) || (num !== undefined && typeof num !== 'number')) return null;

    if (!num) return arr.slice().reverse();

    const reversedPart = (num >= 0) ? arr.slice(num, arr.length).reverse() : arr.slice(0, num).reverse();
    const restPart = (num >= 0) ? arr.slice(0, num) : arr.slice(num);

    return (num >= 0) ? restPart.concat(reversedPart) : reversedPart.concat(restPart);
}
