const tarefasRouter = require("./tarefas")
module.exports = (app) => {
    app.use("/tarefas", tarefasRouter);
}