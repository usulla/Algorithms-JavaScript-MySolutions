// Binary search of element

const binarySearch = (arr, searchEl) => {
    let middle = Math.floor(arr.length / 2),
        length = arr.length,
        cutArr;
    if ((length == 1 && arr[0] !== searchEl) || arr[length-1] <  searchEl) {
        return false;
    } else if (arr[middle] == searchEl) {
        return arr[middle];
    } else if (searchEl < arr[middle]) {
        cutArr = arr.slice(0, middle);
    } else {
        cutArr = arr.slice(middle + 1);
    }
    return binarySearch(cutArr, searchEl);
};

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9]);