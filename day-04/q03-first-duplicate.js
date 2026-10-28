function firstDuplicate(arr) {
    let seen = [];

    for (let i = 0; i < arr.length; i++) {
        if (seen.includes(arr[i])) {
            return arr[i];
        }

        seen.push(arr[i]);
    }

    return null;
}

console.log(firstDuplicate([4, 2, 7, 2, 4]));
console.log(firstDuplicate([1, 2, 3, 4]));