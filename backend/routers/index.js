const tarefasRouter = require("./tarefas.routes")
module.exports = (app) => {
    app.use("/tarefas.routes", tarefasRouter);
}