const tarefasModel = require('../models/tarefasModel');
class TarefaController {
    buscar() {
        return tarefasModel.listar();
    }
    criar() {
        return "Criando Tarefas...";
    }
    atualizar(id) {
        return "Atualizando Tarefa número "+ id + "...";
    }
    deletar(id) {
        return "Deletando Tarefa número "+ id + "...";
    }
}

module.exports = new TarefaController();
