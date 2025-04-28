// This is a selection sort implementation in JavaScript.
// It sorts an array of numbers in ascending order using the selection sort algorithm.
// It iterates through the array, finding the minimum element in the unsorted portion and swapping it with the first unsorted element.
// It continues this process until the entire array is sorted.
// It returns the sorted array.

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => (
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            swap(arr, i, minIdx);
        }
    }
    return arr;
}

module.exports = { selectionSort };