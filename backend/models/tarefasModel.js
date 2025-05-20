const db = require("../config/db")
class TarefaModel {
    listar() {
        const sql = "SELECT * FROM tarefas";
        return new Promise((resolve, reject) => {
            console.time("Tempo de listagem");
            db.query(sql, (error, resposta) => {
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
    criar(novaTarefa) {
        const sql = "INSERT INTO tarefas SET ?";
        return new Promise((resolve, reject) => {
             db.query(sql, novaTarefa, (error, resposta) => {
            if (error) {
                console.log("Erro ao listar...");
                reject(error);
                return;
            }
            console.log("Show");
            resolve(resposta);
        })
        });
    }

        atualizar(tarefaAtualizada, id) {
        const sql = "UPDATE tarefas SET? Where id = ?";
        return new Promise((resolve, reject) => {
             db.query(sql, [tarefaAtualizada, id], (error, resposta) => {
            if (error) {
                console.log("Erro ao listar...");
                reject(error);
                return;
            }
            console.log("Show");
            resolve(resposta);
        })
        });
    }

        deletar(id) {
        const sql = "DELETE FROM atendimentos WHERE id = ?";
        return new Promise((resolve, reject) => {
             db.query(sql, id, (error, resposta) => {
            if (error) {
                console.log("Erro ao listar...");
                reject(error);
                return;
            }
            console.log("Show");
            resolve(resposta);
        })
        });
    }
}

module.exports = new TarefaModel