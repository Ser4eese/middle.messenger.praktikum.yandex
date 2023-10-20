import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(express.static('dist'));
app.get('/*', (_req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});
app.listen(PORT);
