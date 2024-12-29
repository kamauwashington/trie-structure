import { ITrieCollection } from "./trie-collection.interface";

export class TrieNode  {
    children : ITrieCollection = {};
    endOfWord : boolean = false;
}