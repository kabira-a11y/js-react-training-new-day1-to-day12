const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  const response = await fetch(USERS_URL);


  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const users = await response.json();

  if (!Array.isArray(users)) {
    throw new Error("Unexpected API response");
  }

  return users;
}
