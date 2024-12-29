import { TrieNode } from "./trie-node.class";

/**
 * Walks a given Trie structure through all branches returning Trie node paths when endOfWord is encountered
 *
 * @param input - A word or phrase.
 * @param trie - An instance of a Trie class, this does not have to be the root node.
 * @returns A Generator of type string, for use in for..of loops
 */
export function* words(trie : TrieNode, prefix : string = '') : Generator<string>  {
    // pause execution and return the word to the generator's caller if the Trie is marked with endOfWord
    if (trie.endOfWord && prefix) yield prefix;

    // loop through the child Nodes to walk downard through the Trie
    for (let child of Object.getOwnPropertyNames(trie.children)) {

        // walk the Trie recursively building words by concatenating the current char with the Trie Node char
        yield* words(trie.children[child],prefix+child);
    }
}