function parseAge(input) {
    if (input.trim() === "") {
        throw new Error("Age cannot be empty");
    }

    let age = Number(input);

    if (Number.isNaN(age)) {
        throw new Error("Age must be a number");
    }

    if (age < 0) {
        throw new Error("Age cannot be negative");
    }

    if (age > 120) {
        throw new Error("Age cannot be above 120");
    }

    return age;
}

let testValues = ["22", "", "abc", "-5", "150"];

for (let input of testValues) {
    try {
        console.log("Age:", parseAge(input));
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Check complete");
    }

    console.log("----------");
}