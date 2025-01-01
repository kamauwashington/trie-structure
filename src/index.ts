import { TrieNode, insert, suggest, search } from "./Trie";
import words from "./data/words.json";
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import express, { Application, Request, Response } from 'express';

// initialize a root TrieNode
const trieNode : TrieNode = new TrieNode();

// load the Trie with words (this can be loaded from other sources)
for (let word of words) {
    insert(word,trieNode);
}

// Load Swagger YAML definition
const swaggerDocument = yaml.load('./swagger.yaml');


//-------------------- standard Express JS implementation (nothing special here) ------------------//

const app: Application = express();
const port = 3000;

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.post('/match', (req: Request, res: Response) => {
    const success : boolean = search(req.body?.input,trieNode);
    res.json({
        success : success
    })
});

app.post('/suggest', (req: Request, res: Response) => {
    const results : string[] = Array.from(suggest(req.body?.input,trieNode,req.body?.size || 10));
    res.json({
        suggestions : results
    })
});

app.post('/insert', (req: Request, res: Response) => {
    const workingTrieNode : TrieNode = insert(req.body?.input,trieNode);
    res.json({
        success : workingTrieNode.endOfWord
    })
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});