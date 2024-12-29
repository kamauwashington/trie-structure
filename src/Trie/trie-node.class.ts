import { ITrieCollection } from "./trie-collection.interface";

export class TrieNode  {
    children : ITrieCollection = {};
    childNodes : (TrieNode|undefined)[] = new Array<TrieNode|undefined>(26);
    endOfWord : boolean = false;
}