import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivroPorEditora)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivros)
  .put("/livros/:id", LivroController.atualizarLivros)
  .delete("/livros/:id", LivroController.removerLivros);

export default router;
