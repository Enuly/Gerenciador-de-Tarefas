const tarefasRouter = require("./tarefas.routes")
module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({extend: true}));
    app.use("/tarefas.routes", tarefasRouter);
}