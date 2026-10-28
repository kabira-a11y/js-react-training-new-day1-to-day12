import { searchBooks } from "./api.js";

import {
  showLoading,
  showError,
  showEmptyResults,
  renderBooks,
  showBookDetails
} from "./ui.js";

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const yearFilter = document.querySelector("#year-filter");

let allBooks = [];
let searchVersion = 0;
let debounceTimer;

function filterBooks(books) {
  const filter = yearFilter.value;

  if (filter === "before2000") {
    return books.filter(
      (book) =>
        Number.isInteger(book.first_publish_year) &&
        book.first_publish_year < 2000
    );
  }

  if (filter === "from2000") {
    return books.filter(
      (book) =>
        Number.isInteger(book.first_publish_year) &&
        book.first_publish_year >= 2000
    );
  }

  return books;
}

function updateResults() {
  const filteredBooks = filterBooks(allBooks);

  if (filteredBooks.length === 0) {
    showEmptyResults();
    return;
  }

  renderBooks(filteredBooks, showBookDetails);
}

async function performSearch() {
  const title = searchInput.value.trim();
  const version = ++searchVersion;

  if (!title) {
    allBooks = [];
    showError("Please enter a book title before searching.");
    return;
  }

  showLoading();

  try {
    const books = await searchBooks(title);

    // Ignore old responses if a newer search has started.
    if (version !== searchVersion) {
      return;
    }

    allBooks = books;
    updateResults();
  } catch (error) {
    if (version !== searchVersion) {
      return;
    }

    allBooks = [];
    showError(`Could not load books. ${error.message}`);
  }
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearTimeout(debounceTimer);
  performSearch();
});

yearFilter.addEventListener("change", updateResults);

// Debouncing prevents a request on every key press.
// Search starts 400 ms after the user stops typing.
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    performSearch();
  }, 400);
});

// Load JavaScript books when the page opens.
performSearch();