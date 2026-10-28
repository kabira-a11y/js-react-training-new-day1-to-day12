import { getCoverUrl } from "./api.js";

const bookList = document.querySelector("#book-list");
const status = document.querySelector("#status");
const resultCount = document.querySelector("#result-count");
const dialog = document.querySelector("#book-dialog");
const bookDetail = document.querySelector("#book-detail");
const closeDialogButton = document.querySelector("#close-dialog");

export function showLoading() {
  status.hidden = false;
  status.textContent = "Loading books...";
  bookList.replaceChildren();
  resultCount.textContent = "";
}

export function showError(message) {
  status.hidden = false;
  status.textContent = message;
  bookList.replaceChildren();
  resultCount.textContent = "";
}

export function showEmptyResults() {
  status.hidden = false;
  status.textContent = "No books found. Try another title or year filter.";
  bookList.replaceChildren();
  resultCount.textContent = "0 books";
}

export function renderBooks(books, onSelectBook) {
  bookList.replaceChildren();

  status.hidden = true;
  resultCount.textContent =
    `${books.length} ${books.length === 1 ? "book" : "books"}`;

  const fragment = document.createDocumentFragment();

  books.forEach((book) => {
    const card = document.createElement("article");
    card.className = "book-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View details for ${book.title}`);

    const coverUrl = getCoverUrl(book.cover_i);

    if (coverUrl) {
      const cover = document.createElement("img");
      cover.className = "book-cover";
      cover.src = coverUrl;
      cover.alt = `Cover of ${book.title}`;
      cover.loading = "lazy";

      cover.addEventListener("error", () => {
        const placeholder = document.createElement("div");
        placeholder.className = "cover-placeholder";
        placeholder.textContent = "Cover unavailable";
        cover.replaceWith(placeholder);
      }, { once: true });

      card.append(cover);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "cover-placeholder";
      placeholder.textContent = "No cover available";
      card.append(placeholder);
    }

    const title = document.createElement("h3");
    title.textContent = book.title || "Untitled";

    const author = document.createElement("p");
    author.textContent =
      `Author: ${(book.author_name || ["Unknown"]).join(", ")}`;

    const year = document.createElement("p");
    year.textContent =
      `First published: ${book.first_publish_year ?? "Unknown"}`;

    card.append(title, author, year);

    card.addEventListener("click", () => onSelectBook(book));

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelectBook(book);
      }
    });

    fragment.append(card);
  });

  bookList.append(fragment);
}

export function showBookDetails(book) {
  bookDetail.replaceChildren();

  const coverUrl = getCoverUrl(book.cover_i);

  if (coverUrl) {
    const cover = document.createElement("img");
    cover.className = "detail-cover";
    cover.src = coverUrl;
    cover.alt = `Cover of ${book.title}`;

    cover.addEventListener("error", () => {
      const placeholder = document.createElement("p");
      placeholder.className = "cover-placeholder detail-placeholder";
      placeholder.textContent = "Cover unavailable";
      cover.replaceWith(placeholder);
    }, { once: true });

    bookDetail.append(cover);
  }

  const title = document.createElement("h2");
  title.id = "detail-title";
  title.textContent = book.title || "Untitled";

  const author = document.createElement("p");
  author.textContent =
    `Author: ${(book.author_name || ["Unknown"]).join(", ")}`;

  const year = document.createElement("p");
  year.textContent =
    `First published: ${book.first_publish_year ?? "Unknown"}`;

  const editions = document.createElement("p");
  editions.textContent =
    `Known editions: ${book.edition_count ?? "Unknown"}`;

  bookDetail.append(title, author, year, editions);

  if (!dialog.open) {
    dialog.showModal();
  }
}

closeDialogButton.addEventListener("click", () => {
  dialog.close();
});