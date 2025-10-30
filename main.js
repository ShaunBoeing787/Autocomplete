import Trie from "./trie.js";

document.addEventListener("DOMContentLoaded", async () => {
  const search = document.getElementById("input");
  const suggestionsList = document.getElementById("list");
  const meaningContent = document.getElementById("meaningContent");
  const response = await fetch("./words.json");
  const words = await response.json();
  const trie = new Trie();

  words.forEach((word) => trie.insert(word));
  // Utility to clear suggestions
  function clearSuggestions() {
    suggestionsList.innerHTML = "";
  }

  // Display a simple loading / error / content in meaning area
  function showMeaningLoading() {
    meaningContent.textContent = "Loading definition...";
    meaningContent.className = "loading";
  }
  function showMeaningError(msg) {
    meaningContent.textContent = msg;
    meaningContent.className = "error";
  }
  function clearMeaning() {
    meaningContent.textContent = "Select a word to see its definition.";
    meaningContent.className = "";
  }

  async function fetchDefinition(word) {
    if (!word) return;
    showMeaningLoading();
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
      if (!res.ok) {
        // API returns 404 for not found
        showMeaningError(`No definition found for "${word}".`);
        return;
      }
      const data = await res.json();
      // data is an array; pick the first entry and build a readable summary
      if (!Array.isArray(data) || data.length === 0) {
        showMeaningError(`No definition found for "${word}".`);
        return;
      }
      const entry = data[0];
      // Build DOM content
      meaningContent.className = "";
      meaningContent.innerHTML = "";
      const title = document.createElement("div");
      title.textContent = entry.word + (entry.phonetic ? ` — ${entry.phonetic}` : "");
      title.className = "wordTitle";
      meaningContent.appendChild(title);

      // for each meaning (partOfSpeech)
      (entry.meanings || []).forEach((m) => {
        const pos = document.createElement("div");
        pos.className = "partOfSpeech";
        pos.textContent = m.partOfSpeech || "";
        meaningContent.appendChild(pos);

        (m.definitions || []).slice(0, 3).forEach((def) => {
          const defEl = document.createElement("div");
          defEl.className = "definition";
          defEl.textContent = def.definition || "";
          meaningContent.appendChild(defEl);
          if (def.example) {
            const ex = document.createElement("div");
            ex.className = "example";
            ex.textContent = `Example: ${def.example}`;
            meaningContent.appendChild(ex);
          }
        });
      });
    } catch (err) {
      showMeaningError("Error fetching definition.");
      console.error(err);
    }
  }

  search.addEventListener("input", (event) => {
    const prefix = event.target.value.trim();
    clearSuggestions();
    if (!prefix) {
      clearMeaning();
      return;
    }
    const suggestions = trie.getSuggestions(prefix).slice(0, 10);
    suggestions.forEach((suggestion) => {
      const li = document.createElement("li");
      li.textContent = suggestion;
      li.tabIndex = 0;
      // click and keyboard support
      li.addEventListener("click", () => fetchDefinition(suggestion));
      li.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter") {
          fetchDefinition(suggestion);
        }
      });
      suggestionsList.appendChild(li);
    });
  });
});
