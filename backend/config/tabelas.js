class Tabelas {
    init(db) {
        this.db = db;
        this.criarTabelaTarefas();
    }

    criarTabelaTarefas() {
        const sql = `
        CREATE TABLE IF NOT EXISTS tarefas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        titulo VARCHAR(255),
        descricao TEXT,
        status ENUM('pendente', 'em andamento', 'concluida') DEFAULT 'pendente'
    );
        `;
        this.db.query(sql, (error) => {
            if(error) {
                console.log("Erro em criar tabela tarefas");
                console.log(error.message);
                return;
            }
            console.log("Tabela criada com Sucesso")
        });
    }
}
module.exports = new Tabelas();