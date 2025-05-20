const { Router } = require("express");
const router = Router();
const tarefasController = require("../controllers/tarefasController");

//get post put delete
router.get("/tarefas", (req, res) => {
  tarefasController.buscar()
    .then((tarefas) => res.status(200).json(tarefas))
    .catch((error) => res.status(400).json({ erro: error.message }));
});

router.post("/tarefas", (req, res) => {
    const novaTarefa = req.body;
    const tarefa = tarefasController.criar(novaTarefa);
    tarefa
    .then((tarefaCriada) => res.status(201).json(tarefaCriada))
    .catch((error) => res.status(400).json(error.message));
});

router.put("/tarefas/:id", (req, res) => {
    const { id } = req.params;
    const tarefaAtualizada = req.body;
    const tarefa = tarefasController.atualizar(tarefaAtualizada,id);
    tarefa
    .then((resultarefaAtualizada) => 
        res.status(200).json(resultarefaAtualizada)
    )
    .catch((error ) => res.json(400).json(error.message));
});

router.delete("/tarefas/:id", (req, res) => {
    const  { id } = req.params; 
    const tarefa = tarefasController.deletar(id);
    tarefa
    .then((resultarefaDeletada) => 
        res.status(200).json(resultarefaDeletada)
    )
    .catch((error ) => res.json(400).json(error.message));
});

module.exports = router;