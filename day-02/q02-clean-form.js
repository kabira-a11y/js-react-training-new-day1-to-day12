const form = {
    name: "Ali",
    age: "25",
    subscribed: "true",
     phone: ""
};

function convertForm(form) {
    return {
        name: form.name,
        age: Number(form.age),
         subscribed: form.subscribed === "true",
          phone: form.phone === "" ? null : form.phone
        };
}