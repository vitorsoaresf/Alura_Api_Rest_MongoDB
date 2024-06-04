import { livros } from "../models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };

  static cadastrarLivros = (req, res) => {
    const newLivro = new livros(req.body);

    newLivro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar livro` });
      } else {
        res.status(201).send(newLivro.toJSON());
      }
    });
  };
}

export default LivroController;
