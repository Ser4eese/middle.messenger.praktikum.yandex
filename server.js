import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;


app.use(express.static('dist'))
app.get('/*', function(_req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});
app.listen(PORT);
