const tarefasModel = require('../models/tarefasModel');
class TarefaController {
    buscar() {
        return tarefasModel.listar();
    }
    criar(novaTarefa) {
        return tarefasModel.criar(novaTarefa);
    }
    atualizar(tarefaAtualizada, id) {
        return tarefasModel.atualizar(tarefaAtualizada, id);
    }
    deletar(id) {
        return tarefasModel.deletar(id);
    }
}

module.exports = new TarefaController();
