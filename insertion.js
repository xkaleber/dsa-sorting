function insertionSort(arr) {
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        count++;
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    console.log("TOTAL COUNT:", count);
    return arr;
}

module.exports = { insertionSort };