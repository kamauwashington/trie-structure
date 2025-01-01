import { TrieNode } from "./trie-node.class";
import { match } from "./match.function";
import { words } from "./words.generator";
import { prefix } from "./prefix.function";

/**
 * Walks a given Trie structure to perform an operation similar to the results from an autocomplete operation
 *
 * @param input - A word or phrase.
 * @param trieNode - An instance of a Trie class, this does not have to be the root node.
 * @param numberOfResults - The maximum number of words to return from the Trie structure, default is 10
 * @returns A Generator of type string, for use in for..of loops
 */
export function* suggest(input : string, trieNode : TrieNode, numberOfResults : number = 10) : Generator<string> {

    // use prefix to find the last matching node given the input path
    let workingTrieNode : TrieNode | undefined = prefix(input,trieNode)

    // if the working trie node does not have a value, thus there is no prefix match, immedately return
    if (!workingTrieNode) return;

    // the word count will be used to reduce the amount of results returned
    let wordCount : number = 0;

    // loop through the words generator starting at the lastTrie from search
    for (let word of words(workingTrieNode,input)) {

        // break the loop if the number of results has been reached
        if (wordCount++ == numberOfResults) break;
        
        // pause execution and return the word to the generator's caller
        yield word;
    }
}