import Trie from "./trie.js";

document.addEventListener("DOMContentLoaded", async () => {
  const search = document.getElementById("input");
  const suggestionsList = document.getElementById("list");
  const response = await fetch("./words.json");
  const words = await response.json();
  const trie = new Trie();

  words.forEach((word) => trie.insert(word));
  search.addEventListener("input", (event) => {
    const prefix = event.target.value;
    // suggestionsList.innerHTML = "";
    if (prefix) {
      const suggestions = trie.getSuggestions(prefix);
      suggestions.forEach((suggestion) => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        suggestionsList.appendChild(li);
      });
    }
  });
});
