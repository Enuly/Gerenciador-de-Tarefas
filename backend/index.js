const express = require("express");
const app = express();
const tarefasRouter = require("./routers/tarefas");

app.use(express.json()); 
app.use(tarefasRouter);

app.listen(3000, () => {
  console.log("Rodando...");
});