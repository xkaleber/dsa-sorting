function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// This is the main function that will sort an array using radix sort
// It will use the helper functions getDigit, digitCount, and mostDigits
// It will sort the array in ascending order
// It will return the sorted array
// It will use the counting sort algorithm to sort the array

function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);
    for (let i = 0; i < maxDigitCount; i++) {
        // Create buckets for each digit
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        // Flatten the buckets back into the array
        arr = [].concat(...buckets);
    }
    return arr;
}

module.exports = { radixSort };