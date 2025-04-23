const db = require("../config/db")
class TarefaModel {
    listar() {
        const sql = "SELECT * FROM tarefas";
        return new Promise((resolve, reject) => {
            console.time("Tempo de listagem");
            db.query(sql, {}, (error, resposta) => {
                if (error) {
                    console.log("Erro ao listar...");
                    reject(error);
                }
                console.timeEnd("Tempo de listagem");
                console.log("Sucesso ao listar...");
                resolve(resposta);
            });
        });
    }
}

module.exports = new TarefaModel