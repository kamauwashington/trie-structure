import { TrieNode, insert, suggest, search } from "./Trie";
import words from "./data/words.json";

// initialize a root TrieNode
const trieNode : TrieNode = new TrieNode();

// load the Trie with words (this can be loaded from other sources)
for (let word of words) {
    insert(word,trieNode);
}

console.log(search("amount",trieNode))





