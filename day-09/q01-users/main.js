import { fetchUsers } from "./api.js";
import { showLoading, showError, renderUsers } from "./ui.js";

async function init() {
  showLoading();

  try {
    const users = await fetchUsers();
    renderUsers(users);
  } catch (error) {
    showError(
      `Could not load users. ${error.message}`
    );
  }
}

init();
