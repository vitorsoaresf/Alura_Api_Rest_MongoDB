const http = require("http");
const port = 8000;
const routes = {
  "/": "curso de node",
  "/livros": "Entrei na página de livros",
  "/autores": "Listagem de autores",
  "/editora": "Listagem de editoras",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
