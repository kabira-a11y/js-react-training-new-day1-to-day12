const usersList = document.querySelector("#users-list");
const status = document.querySelector("#status");

export function showLoading() {
  status.hidden = false;
  status.className = "message";
  status.textContent = "Loading users...";
  usersList.replaceChildren();
}

export function showError(message) {
  status.hidden = false;
  status.className = "message error";
  status.textContent = message;
}

export function renderUsers(users) {
  usersList.replaceChildren();

  const fragment = document.createDocumentFragment();

  users.forEach((user) => {
    const card = document.createElement("article");
    card.className = "user-card";

    const name = document.createElement("h2");
    name.textContent = user.name;

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    const city = document.createElement("p");
    city.textContent = `City: ${user.address?.city ?? "Unknown"}`;

    card.append(name, email, city);
    fragment.append(card);
  });

  usersList.append(fragment);
  status.hidden = true;
}
