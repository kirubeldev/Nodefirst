import {createServer} from 'http';
import fs from 'fs/promises'; // Use fs/promises for async/await
import url from 'url';
import path from 'path';

// Use a fallback port if process.env.PORT is undefined
const port = process.env.PORT || 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);

const server = createServer(async (req, res) => {
  console.log(req.url);

  try {
    if (req.method === 'GET') {
      let filepath;

      if (req.url === '/') {
        filepath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about') {
        filepath = path.join(__dirname, 'public', 'about.html');
      } else {
        // Use correct error instantiation
        throw new Error("Page not found");
      }

      // Read file asynchronously using fs/promises
      const data = await fs.readFile(filepath);

      // Set the status code and headers correctly
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server Error');
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
