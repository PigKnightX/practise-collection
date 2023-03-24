import { render, screen } from '@testing-library/react';
import App from './App';

test('excution func', () => {
    function customReduce(callback, initialValue) {
        if (this === undefined) {
            throw new TypeError('this is null or not defined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        let accumulator = initialValue;

        let arr = this;
        if (!accumulator) {
            accumulator = arr[0];
        }

        for (let index = 1; index < arr.length; index++) {
            accumulator = callback.call(
                undefined,
                accumulator,
                arr[index],
                index,
                arr
            );
        }

        return accumulator;
    }

    Array.prototype.customReduce = customReduce;

    const arr = ['a', 's', 'd'];
    const result = arr.customReduce((accumulator, cur) => {
        return accumulator + cur;
    });
    const arr1 = [1, 2, 3, 4, 5];
    const result1 = arr1.customReduce((accumulator, cur) => {
        return accumulator + cur;
    });

    expect(result).toBe('asd');
    expect(result1).toBe(15);
});
