const {Router} = require("express");

const routerUsers = require("./users.router")
const routerFinance = require("./finance.router")
const routerSession = require("./session.router")

const routes = Router()

routes.use("/users", routerUsers)
routes.use("/finance", routerFinance)
routes.use("/sessions", routerSession)

module.exports = routes