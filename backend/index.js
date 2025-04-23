const express = require("express");
const app = express();
const tarefasRouter = require("./routers/tarefas");
const db = require("./config/db")
const tabelas = require("./config/tabelas")

tabelas.init(db);

app.use(express.json()); 
app.use(tarefasRouter);

app.listen(3000, () => {
  console.log("Rodando...");
});