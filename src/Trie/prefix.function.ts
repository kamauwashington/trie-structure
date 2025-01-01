import { TrieNode } from "./trie-node.class";

/**
 * Walks a given Trie structure to find a prefix identified as a partial or complete word
 *
 * @param input - A word or phrase.
 * @param trieNode - An instance of a Trie class, this does not have to be the root node.
 * @returns A TrieNode if the end of the input character has a matching Node
 */
export function prefix(input : string, trieNode : TrieNode) : TrieNode | undefined {
    // this Trie will be overwritten as the Trie is walked
    let workingTrieNode : TrieNode = trieNode;

    // we need to keep track of this count outside of the loop for later comparison
    let i : number;

    // walk the Trie letter for letter left to right, and from Trie top downward
    for (i=0;i<input.length;i++) {

        // capture the character at the index location i in input
        const currentChar : string = input.charAt(i).toLowerCase();

        if (!workingTrieNode.children[currentChar])  {
            break;
        }

        // set the current Trie to the child Trie to continue the walk
        workingTrieNode = workingTrieNode.children[currentChar];
    }

    // the number of Trie's iterated over needs to match the length of the input 
    // with the last Trie being the end of the word
    return (i == input.length)? workingTrieNode : undefined
}