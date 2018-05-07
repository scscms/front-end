# JS函数收藏<sup>shine</sup>

- [全排列](#permutation)

### permutation
```
/**
 * 全排列
 * @param {Array} arr     准备排列的数组
 * @param {Number} size   排列多少位
 * @return {Array}        返回所有组合结果
 */
function permutation(arr, size) {
  const allResult = [];
  const group = (arr, length, result) => {
    let arrLen = arr.length;
    if (length < arrLen) {
      for (let i = 0; i < arrLen; i++) {
        let newResult = [].concat(result);
        newResult.push(arr[i]);
        if (length === 1) {
          allResult.push(newResult.join(''));
        } else {
          let newArr = [].concat(arr);
          newArr.splice(0, i + 1);
          group(newArr, length - 1, newResult);
        }
      }
    }else if (length === arrLen) {
      allResult.push([].concat(result, arr).join(''))
    }
  };
  Array.isArray(arr) && Number.isInteger(size) && group(arr, size, []);
  return allResult;
}
```
