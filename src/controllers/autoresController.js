import { autores } from "../models/Autor.js";

class AutoresController {
  static listarAutores = (req, res) => {
    autores.find((err, autor) => {
      res.status(200).json(autor);
    });
  };

  static listarAutoresPorId = (req, res) => {
    const idAutor = req.params.id;

    autores.findById(idAutor, (err, autor) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - falha ao carregar autor` });
      } else {
        res.status(200).send(autor);
      }
    });
  };

  static cadastrarAutores = (req, res) => {
    const newAutor = new autores(req.body);

    newAutor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar autor` });
      } else {
        res.status(201).send(newAutor.toJSON());
      }
    });
  };

  static atualizarAutores = (req, res) => {
    const idAutor = req.params.id;

    autores.findByIdAndUpdate(idAutor, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha na atualização do autor` });
      } else {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      }
    });
  };

  static removerAutores = (req, res) => {
    const idAutor = req.params.id;

    autores.findByIdAndRemove(idAutor, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha na remoção do autor` });
      } else {
        res.status(204).send();
      }
    });
  };
}

export default AutoresController;
