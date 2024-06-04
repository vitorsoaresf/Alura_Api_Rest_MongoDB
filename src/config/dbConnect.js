import mongoose from "mongoose";
import { credentials } from "./env.js";

mongoose.connect(
  `mongodb+srv://${credentials.username}:${credentials.password}@cluster0.fwnizlg.mongodb.net/?retryWrites=true&w=majority&appName=alura-mongodb`
);

export const DB = mongoose.connection;
