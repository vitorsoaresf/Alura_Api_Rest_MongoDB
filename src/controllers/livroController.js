import { livros } from "../models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };

  static listarLivroPorId = (req, res) => {
    const idBook = req.params.id;

    livros.findById(idBook, (err, livros) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - falha ao carregar livro` });
      } else {
        res.status(200).send(livros);
      }

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

  static atualizarLivros = (req, res) => {
    const idBook = req.params.id;

    livros.findByIdAndUpdate(idBook, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha na atualização do livro` });
      } else {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      }
    });
  };
}

export default LivroController;
