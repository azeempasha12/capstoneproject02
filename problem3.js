const num = [5,7,7, 8, 8, 10]; // Sorted array with duplicate elements
const search = 6;

const binarySearch = (arr, search, findFirst) => {
    let start = 0, end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === search) {
            result = mid;

            if (findFirst) {
                end = mid - 1; // Continue searching in the left half
            } else {
                start = mid + 1; // Continue searching in the right half
            }
        } else if (arr[mid] < search) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return result;
}

const firstIndex = binarySearch(num, search, true);
const lastIndex = binarySearch(num, search, false);
console.log(firstIndex);
console.log(lastIndex);
