import mongoose from "mongoose";

const autorSchema = mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, require: true },
    nacionalidade: { type: String },
  },
  {
    versionKey: false,
  }
);

export const autores = mongoose.model("autores", autorSchema);
