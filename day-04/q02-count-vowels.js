function countVowels(text) {
    let count = 0;

    for (let letter of text.toLowerCase()) {
        if (
            letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript Training"));