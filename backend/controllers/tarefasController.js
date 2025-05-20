const tarefasModel = require('../models/tarefasModel');
class TarefaController {
    buscar() {
        return tarefasModel.listar();
    }
    criar(novaTarefa) {
        return tarefasModel.criar(novaTarefa);
    }
    atualizar(id) {
        return "Atualizando Tarefa número "+ id + "...";
    }
    deletar(id) {
        return "Deletando Tarefa número "+ id + "...";
    }
}

module.exports = new TarefaController();
