// Create a function that takes a sorted array and a target value. Return the index of the target value in the array. If the target value is not in the array, return -1.

const array = ["a", "b", "c", "d", "e", "f", "x", "y", "z",]
const target = "E".toLowerCase();

export function search(arr, target = null, start = 0, end = arr.length - 1) {
    // Return 0 if theres no target
    if (!target) {
        console.log("no target");
        return 0;
    }

    // Return -1 if the value couldn't be found after searching
    if (start > end) {
        console.log("not found");
        return -1;
    }

    // save the middle value to a variable
    const middle = Math.floor((start + end) / 2);

    // If the middle value is equal to the target then return it
    if (arr[middle] === target) {
        console.log(`${target} found at ${middle}`);
        return middle;
    }

    // If the middle value is after the target search only before it
    if (arr[middle] > target) return search(arr, target, start, middle - 1);

    // If the middle value is before the target search only after it
    if (arr[middle] < target) return search(arr, target, middle + 1, end);

}

console.log(search(array, target))