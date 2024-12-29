import { TrieNode } from "./trie-node.class";

/**
 * Walks a given Trie structure building or using existing Trie nodes to "insert" a word or phrase
 *
 * @param input - A word or phrase.
 * @param trieNode - An instance of a TrieNode class, this does not have to be the root node.
 * @returns The end of word TrieNode (existing or created by the insert)
 */
export function insert(input : string, trieNode : TrieNode) : TrieNode {
    // this Trie will be overwritten as the Trie is walked
    let workingNode : TrieNode = trieNode;

    // walk the Trie letter for letter left to right, and from Trie top downward
    for (let i=0;i<input.length;i++) {

        // capture the character at the index location i in input
        const currentChar : string = input.charAt(i).toLowerCase();

        // if the current character doesn't exist on the Trie, create a new one and initialize it
        if (!workingNode.children[currentChar]) workingNode.children[currentChar] = new TrieNode();

        // continue walking the Trie
        workingNode = workingNode.children[currentChar];
    }

    // the end of the word will be reached when the loop is done, set it to true for future lookups
    workingNode.endOfWord = true;

    // return the last Trie for usage in consuming operations
    return workingNode;
}

export function insert2(input : string, trieNode : TrieNode) : void {
    // this Trie will be overwritten as the Trie is walked
    let workingNode : TrieNode = trieNode;

    for (let character of input) {
        let pos = character.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        if (!workingNode.childNodes[pos]) workingNode.childNodes[pos] = new TrieNode();
        workingNode = workingNode.childNodes[pos];
    }

    workingNode.endOfWord = true;
}