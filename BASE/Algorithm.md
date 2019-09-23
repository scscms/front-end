# 算法<sup>shine</sup>

```javascript
function ArrayList(size) {
        const array = [];
        for (let i = size; i > 0; i--){
            array.push(Math.floor(Math.random()*50));
        }
        this.toString = function () {
            return array.join();
        };
        this.swap = function(a,b){
            array[a] = [array[b], array[b] = array[a]][0]
        }
        // 冒泡排序 O(n2)
        this.bubbleSort = function () {
            let length = array.length;
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - 1 - i; j++) {
                    console.log('index')
                    if (array[j] > array[j + 1]) {
                        this.swap(j, j + 1);
                    }
                }
            }
        };
        // 选择排序 O(n2)
        this.selectionSort = function () {
            let length = array.length, indexMin;
            for (let i = 0; i < length - 1; i++) {
                indexMin = i;
                for (let j = i; j < length; j++) {
                    console.log('index')
                    if (array[indexMin] > array[j]) {
                        indexMin = j;
                    }
                }
                if (i !== indexMin) {
                    this.swap(i, indexMin);
                }
            }
        };
        // 插入排序
        this.insertionSort = function () {
            let length = array.length, j, temp;
            for (let i = 1; i < length; i++) {
                j = i;
                temp = array[i];
                while (j > 0 && array[j - 1] > temp) {
                    console.log('index')
                    array[j] = array[j - 1];
                    j--;
                }
                array[j] = temp;
            }
        };
        // 归并排序
        this.mergeSortRec = function (arr=array) {
            console.log(JSON.stringify(arr))
            let length = arr.length;
            if (length === 1) {
                return arr;
            }
            let mid = Math.floor(length / 2)
            let left = arr.slice(0, mid)
            let right = arr.slice(mid, length);
            return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));
        };
        this.merge = function (left, right) {
            let result = [], il = 0,ir = 0;
            console.log('left：',JSON.stringify(left),'right：',JSON.stringify(right))
            while (il < left.length && ir < right.length) {
                if (left[il] < right[ir]) {
                    result.push(left[il++]);
                } else {
                    result.push(right[ir++]);
                }
            }
            while (il < left.length) {
                result.push(left[il++]);
            }
            while (ir < right.length) {
                result.push(right[ir++]);
            }
            console.log('结果：',JSON.stringify(result))
            return result;
        };
        // 快速排序
        this.quickSort = function (arr=array) {
            let len = arr.length
            if (len <= 1) {
                return arr
            }
            let leftArr = []
            let rightArr = []
            let pivotIndex = Math.floor(arr.length / 2);
            let pivot = arr.splice(pivotIndex, 1)[0]
            for (let i = 0; i < len - 1; i++) {
                if (arr[i] < pivot) {
                    leftArr.push(arr[i])
                } else {
                    rightArr.push(arr[i])
                }
            }
            return this.quickSort(leftArr).concat([pivot], this.quickSort(rightArr))
        }
        // 快速排序ES6
        function quickSort(arr) {
            if (arr.length <= 1) {
                return arr
            }
            const [pivot, ...rest] = arr
            return [...quickSort(rest.filter(item => item < pivot)), pivot, ...quickSort(rest.filter(item => item >= pivot))]
        }
    }
    let array = new ArrayList(5);
    array.mergeSortRec()
    console.log(array.toString())
```
