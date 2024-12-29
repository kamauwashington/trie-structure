import { TrieNode, insert, suggest } from "./Trie";
import { insert2 } from "./Trie/insert.function";
import { search2 } from "./Trie/search.function";



const trieNode : TrieNode = new TrieNode();
// for (let word of words) {
//     trie.insert(word);
// }
insert2("bill",trieNode);
insert2("billie",trieNode);
insert2("billion",trieNode);
insert2("billionaire",trieNode);

insert2("bat",trieNode);
insert2("bar",trieNode);
insert2("barclay",trieNode);
insert2("barcelona",trieNode);


// for (let word of suggest("ba",trie)) {
//     console.log(word);
// }

console.log(search2('barcla',trieNode));

//console.log(JSON.stringify(trieNode,null,2))




