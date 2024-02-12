'use strict';

function inverse(arr, num) {
    if (!Array.isArray(arr)) {
        throw new Error('Переданный аргумент не является массивом');
    }

    const length = arr.length;

    if (num === undefined) {
        return arr.slice().reverse();
    } else if (typeof num === 'number') {
        if (num >= 0) {
            const reversedPart = arr.slice(num, length).reverse();
            const restPart = arr.slice(0, num);
            return restPart.concat(reversedPart);
        } else {
            const reversedPart = arr.slice(0, num).reverse();
            const restPart = arr.slice(num);
            return reversedPart.concat(restPart);
        }
    } else {
        throw new Error('Второй аргумент должен быть числом или отсутствовать');
    }
}

QUnit.module('Тестируем функцию inverse', function () {
    QUnit.test('Функция работает с пустым массивом', function (assert) {
        assert.deepEqual(inverse([]), []);
    });

    QUnit.test('Функция работает с массивом длины один', function (assert) {
        assert.deepEqual(inverse([1]), [1]);
        assert.deepEqual(inverse(['a']), ['a']);
        assert.deepEqual(inverse([null]), [null]);
        assert.deepEqual(inverse([false]), [false]);
    });

    QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse(['a', 'b', 'c', 'd', 'e']), ['e', 'd', 'c', 'b', 'a']);
        assert.deepEqual(inverse([null, false, 0, Infinity, '']), ['', Infinity, 0, false, null]);
    });

    QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 1), [1, 5, 4, 3, 2]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 2), [1, 2, 5, 4, 3]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 15), [1, 2, 3, 4, 5]);
    });

    QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -1), [4, 3, 2, 1, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -2), [3, 2, 1, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -5), [1, 2, 3, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -15), [1, 2, 3, 4, 5]);
    });

    QUnit.test('Функция выбрасывает ошибку при передаче не массива', function (assert) {
        assert.throws(() => inverse('не массив'), /Переданный аргумент не является массивом/);
    });

    QUnit.test('Функция выбрасывает ошибку при передаче некорректного второго аргумента', function (assert) {
        assert.throws(() => inverse([1, 2, 3], 'не число'), /Второй аргумент должен быть числом или отсутствовать/);
    });
});
