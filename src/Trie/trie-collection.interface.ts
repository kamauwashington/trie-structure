import { TrieNode } from "./trie-node.class";

// ensures that this KV collection only has string for keys, and TrieNodes as values
export interface ITrieCollection {
    [key : string] : TrieNode;
}