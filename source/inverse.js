'use strict';

function inverse(arr, num) {
    try {
        if (!Array.isArray(arr))
            throw new Error('Переданный аргумент не является массивом');

        if (!num) return arr.slice().reverse();

        if (typeof num !== 'number')
            throw new Error('Второй аргумент должен быть числом или отсутствовать');

    } catch (error) {
        throw error;
    }
    if (num >= 0) {
        const reversedPart = arr.slice(num, arr.length).reverse();
        const restPart = arr.slice(0, num);

        return restPart.concat(reversedPart);
    }

    if (num < 0) {
        const reversedPart = arr.slice(0, num).reverse();
        const restPart = arr.slice(num);

        return reversedPart.concat(restPart);
    }
}
