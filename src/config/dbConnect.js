import mongoose from "mongoose";
import { credentials } from "./env.js";

mongoose.connect(
  `mongodb+srv://${credentials.username}:${credentials.password}@cluster0.fwnizlg.mongodb.net/alura-node`
);

export const DB = mongoose.connection;
