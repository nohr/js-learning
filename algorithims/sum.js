// Create a function that takes an array of numbers and returns a number that is the sum of all values in the array.

const sum = [1, 2, 4, 5];

export function cumulate(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++)
        total += arr[i];

    return total;
}

console.log(cumulate(sum));