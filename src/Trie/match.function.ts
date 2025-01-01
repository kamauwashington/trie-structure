import { prefix } from "./prefix.function";
import { TrieNode } from "./trie-node.class";

/**
 * Walks a given Trie structure to find an exact match Trie and determines if an input exists on the Trie
 *
 * @param input - A word or phrase.
 * @param trieNode - An instance of a Trie class, this does not have to be the root node.
 * @returns boolean
 */
export function match(input : string, trieNode : TrieNode) : boolean {
    // use prefix to get the last trieNode of the matching Trie structure path
    const workingTrieNode : TrieNode | undefined = prefix(input,trieNode);
    
    // if there is a result and it is the end of the word, then this is an exact match
    return (workingTrieNode)? workingTrieNode.endOfWord : false;
}