class TarefaController {
    buscar() {
        return "Buscando Tarefas...";
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
