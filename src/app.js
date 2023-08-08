import express from "express";

const app = express();
app.use(express.json());

const livros = [
  { id: 1, titulo: "Senhor dos anéis" },
  { id: 2, titulo: "O Hobbit" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  let index = searchBook(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros[index]);
});

app.post("/livros", (req, res) => {
  console.log(req.body);
  livros.push(req.body);
  res.status(201).send("Livro criado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  let index = searchBook(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros[index]);
});

const searchBook = (id) => {
  let findIndex = 0;
  findIndex = livros.findIndex((book) => book.id == id);
  return findIndex;
};

export default app;
