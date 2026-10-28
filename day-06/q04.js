const user = {
    name: "Kabir", greet() {
        return "Hello, " + this.name;
    }
};

const greetFunction = user.greet;
const greetBind = user.greet.bind(user);
const anotherUser = { name: "Ali" };
const user2 = {
    name: "Kabir",

    greet: () => {
        return "Hello, " + this.name;
    }
};


