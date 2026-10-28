function reverseWords(sentence) {
    let words = sentence.split(" ");
    let result = "";

    for (let i = words.length - 1; i >= 0; i--) {
        result = result + words[i];

        if (i > 0) {
            result = result + " ";
        }
    }

    return result;
}

console.log(reverseWords("I am learning JavaScript"));