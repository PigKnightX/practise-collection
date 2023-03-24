// 1. 数组打平
function flatArrWithFlat(arr) {
    return arr.flat(Infinity);
}

function flatArrWithReduce(arr) {
    const resultArr = arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flatArrWithReduce(cur) : cur);
    }, []);
    return resultArr;
}

// 2. 数组去重

function uniqueArrWithSet(arr) {
    return Array.from(new Set(arr));
}

function uniqueArrWithSplice(params) {}

function uniqueArrWithIndexOf(params) {}

function uniqueArrWithInclude(params) {}

function uniqueArrWithFilter(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
}

function uniqueArrWithMap(params) {}

// 3. 类数组转化为数组

// 4. Array.prototype.filter()

function customFilter(callback, thisArg) {
    if (!this) {
        throw new TypeError('this is null or not undefined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }

    const res = [];
    const length = this?.length >>> 0;

    for (let i = 0; i < length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            res.push(this[i]);
        }
    }

    return res;
}

// 5. Array.prototype.map()
// 6. Array.prototype.forEach()

// 7. Array.prototype.reduce()
/**
 *
 * @param {*} callback (accumulator, currentValue, index, array) => {}
 * @param {*} initialValue
 */
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

export {
    flatArrWithFlat,
    flatArrWithReduce,
    uniqueArrWithSet,
    uniqueArrWithSplice,
    uniqueArrWithMap,
    uniqueArrWithIndexOf,
    uniqueArrWithFilter,
    uniqueArrWithInclude,
    customFilter,
    customReduce,
};
