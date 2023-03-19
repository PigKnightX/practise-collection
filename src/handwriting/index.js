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

function uniqueArrWithFilter(params) {}

function uniqueArrWithMap(params) {}

export {
  flatArrWithFlat,
  flatArrWithReduce,
  uniqueArrWithSet,
  uniqueArrWithSplice,
  uniqueArrWithMap,
  uniqueArrWithIndexOf,
  uniqueArrWithFilter,
  uniqueArrWithInclude,
};
