const { Router } = require("express");
const router = Router();

//get post put delete
router.get("/tarefa", (req, res) => {
    res.send("Listando todas as tarefas...");
});

router.post("/tarefas", (req, res) => {
    res.send("Criando nova tarefa...");
});

router.put("/tarefas/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Atualizando tarefa ${id}...`);
});

router.delete("/tarefas/:id", (req, res) => {
    const  { id } = req.params;
    res.send(`Deletando tarefa ${id}...`);
});

module.exports = router;