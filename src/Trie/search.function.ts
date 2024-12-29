import { TrieNode } from "./trie-node.class";

/**
 * Walks a given Trie structure to find an exact match Trie and determines if an input exists on the Trie
 *
 * @param input - A word or phrase.
 * @param trie - An instance of a Trie class, this does not have to be the root node.
 * @returns A Tuple of [boolean,Trie] where Trie is the last Trie found or last Trie stopped
 */
export function search(input : string, trie : TrieNode) : [result : boolean, lastTrie : TrieNode] {
    // this Trie will be overwritten as the Trie is walked
    let workingTrie : TrieNode = trie;

    // we need to keep track of this count outside of the loop for later comparison
    let i : number;

    // walk the Trie letter for letter left to right, and from Trie top downward
    for (i=0;i<input.length;i++) {

        // capture the character at the index location i in input
        const currentChar : string = input.charAt(i).toLowerCase();

        if (!workingTrie.children[currentChar])  {
            // reset to root Trie if a match cannot be found, and break the loop
            workingTrie = trie;
            break;
        }

        // set the current Trie to the child Trie to continue the walk
        workingTrie = workingTrie.children[currentChar];
    }

    // the number of Trie's iterated over needs to match the length of the input 
    // with the last Trie being the end of the word
    return [(i == input.length) && workingTrie.endOfWord,workingTrie];
}