const { Router } = require("express");
const router = Router();
const tarefasController = require("../controllers/tarefasController");


//get post put delete
router.get("/tarefa", (req, res) => {
    const listaTarefas = tarefasController.buscar();
    listaTarefas
    .then((tarefas) => res.status(200).json(tarefas))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/tarefas", (req, res) => {
    const resposta = tarefasController.criar();
    res.send(resposta);
});

router.put("/tarefas/:id", (req, res) => {
    const { id } = req.params;
    const resposta = tarefasController.atualizar(id);
    res.send(resposta);
});

router.delete("/tarefas/:id", (req, res) => {
    const  { id } = req.params;
    const resposta = tarefasController.deletar(id);
    res.send(resposta);
});

module.exports = router;