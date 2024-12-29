import { TrieNode } from "./trie-node.class";
import { search } from "./search.function";
import { words } from "./words.generator";

/**
 * Walks a given Trie structure to perform an operation similar to the results from an autocomplete operation
 *
 * @param input - A word or phrase.
 * @param trie - An instance of a Trie class, this does not have to be the root node.
 * @param numberOfResults - The maximum number of words to return from the Trie, default is 10
 * @returns A Generator of type string, for use in for..of loops
 */
export function* suggest(input : string, trie : TrieNode, numberOfResults : number = 10) : Generator<string> {
    // first perform a traditional search, regardless of endOfWord as it returns a starting Trie Node
    const [endOfWord,lastTrie] = search(input,trie);

    // the word count will be used to reduce the amount of results returned
    let wordCount : number = 0;

    // loop through the words generator starting at the lastTrie from search
    for (let word of words(lastTrie,input)) {

        // break the loop if the number of results has been reached
        if (wordCount++ == numberOfResults) break;
        
        // pause execution and return the word to the generator's caller
        yield word;
    }
}