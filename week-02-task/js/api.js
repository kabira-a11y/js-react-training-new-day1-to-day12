const API_BASE = "https://openlibrary.org/search.json";

export async function searchBooks(title) {
  const query = title.trim();

  if (!query) {
    throw new Error("Please enter a book title.");
  }

  const params = new URLSearchParams({
    q: query,
    limit: "30",
    fields: "key,title,author_name,first_publish_year,cover_i,edition_count"
  });

  const response = await fetch(`${API_BASE}?${params}`);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data.docs)) {
    throw new Error("Unexpected response from Open Library.");
  }

  return data.docs;
}

export function getCoverUrl(coverId) {
  if (!coverId) {
    return null;
  }

  return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
}