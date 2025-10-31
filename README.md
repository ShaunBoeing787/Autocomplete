
# 🔮 Advanced Autocomplete System

An intelligent **Autocomplete Suggestion Engine** built with **JavaScript** and the **Trie data structure**, featuring ranking, typo handling, and dynamic data updates.
This project demonstrates how to efficiently generate smart, ranked suggestions — just like modern search bars or IDEs.

---

<img width="1858" height="897" alt="image" src="https://github.com/user-attachments/assets/9fb8b1d7-1194-404f-ab81-1abcf8b2a548" />

---
## 📁 Folder Structure

```
📦 autocomplete-system
├── 📄 index.html      # Frontend UI for autocomplete
├── 📄 main.js         # Handles input events and connects UI to the Trie
├── 📄 trie.js         # Core Trie implementation with ranking logic
├── 📄 words.json      # Dataset containing initial list of words
└── 📄 README.md       # Project documentation
```

---

## 🚀 Features

### 🧠 Core

* **Trie-based Autocomplete** – Fast prefix-based lookups.
* **Instant Suggestions** – Displays completions as the user types.

### ⚡ Advanced Features

#### 1. Ranking / Scoring

* Each word stores a **frequency counter**.
* When a suggestion is selected, its score increases.
* Suggestions are ranked by popularity, showing the most used words first.

#### 2. Case Insensitivity

* All words and input are converted to **lowercase** for consistent searching.

#### 3. Handling Typos ✍️

* Uses **Levenshtein distance** or similar logic to suggest words even with small spelling mistakes (e.g., “aple” → “apple”).

#### 4. Dynamic Data 🔄

* Supports adding or removing words **in real time**.
* Updates can be fetched from a JSON file or connected to a live API.

#### 5. Scalability 🧩

* Optimized for large datasets.
* Could be extended to use **Ternary Search Trees (TST)** or database-backed Tries for huge word lists.

---

## 🛠️ Technologies Used

* **HTML5** – UI layout
* **CSS3** – Styling (can be added inline or in a separate stylesheet)
* **JavaScript (ES6)** – Core logic and interactivity
* **JSON** – Word data source

---

## 💡 How It Works

1. The project loads `words.json` into memory on startup.
2. The words are inserted into a **Trie** for efficient lookup.
3. As the user types in the search bar (`index.html`), `main.js`:

   * Finds matching prefixes in the Trie.
   * Retrieves and sorts suggestions by frequency.
   * Displays the top-ranked results.
4. Selecting a suggestion updates its frequency score, improving future rankings.

---

## 🧪 Example

**User input:**

```
"pro"
```

**Output suggestions:**

```
["program", "project", "progress", "problem"]
```

After several users select “project”:

```
["project", "program", "progress", "problem"]
```

---

## 🧭 How to Run

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/autocomplete-system.git
   cd autocomplete-system
   ```
2. Open `index.html` in your browser.
3. Start typing in the search box to see suggestions appear in real time!

*(Optional)*
If you’re serving data dynamically, you can run a local server:

```bash
npx http-server .
```

---

## 📈 Future Improvements

* ✅ Add debounce for smoother typing performance
* ✅ Use a database or API for dynamic word updates
* ✅ Add user-specific ranking (personalized autocomplete)
* ✅ Improve typo-tolerance using advanced edit-distance algorithms

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature-name'`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 🧾 License

Licensed under the **MIT License** — free for personal and commercial use.

---

## ⭐ Support

If you found this project helpful, please give it a **star** ⭐ on GitHub!


