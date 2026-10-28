const sentence = "The cat and the dog and THE bird";

const words = sentence.toLowerCase().split(" ");

const wordCount = new Map();

words.forEach(word => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
});

console.log(wordCount);