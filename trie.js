class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  findNode(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return null;
      }
      node = node.children.get(char);
    }
    return node;
  }

  getSuggestions(prefix) {
    const suggestions = [];
    const node = this.findNode(prefix);

    if (!node) {
      return suggestions;
    }

    this.collectAllWords(node, prefix, suggestions);
    return suggestions;
  }

  collectAllWords(node, currentWord, suggestions) {
    if (node.isEndOfWord) {
      suggestions.push(currentWord);
    }

    for (const [char, childNode] of node.children.entries()) {
      this.collectAllWords(childNode, currentWord + char, suggestions);
    }
  }
}

export default Trie;
