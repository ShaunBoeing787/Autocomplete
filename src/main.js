// src/main.js
import Trie from "./trie.js";

document.addEventListener("DOMContentLoaded", async () => {
  const searchInput = document.getElementById("search-input");
  const suggestionsList = document.getElementById("suggestions-list");

  // Load the dictionary from the JSON file
  const response = await fetch("./data/words.json");
  const words = await response.json();

  // Initialize the Trie and insert all words
  const trie = new Trie();
  words.forEach((word) => trie.insert(word));

  // Event listener for user input
  searchInput.addEventListener("input", (event) => {
    const prefix = event.target.value.toLowerCase();

    // Clear previous suggestions
    suggestionsList.innerHTML = "";

    if (prefix) {
      const suggestions = trie.getSuggestions(prefix);

      // Display the new suggestions
      suggestions.forEach((suggestion) => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        suggestionsList.appendChild(li);
      });
    }
  });
});
