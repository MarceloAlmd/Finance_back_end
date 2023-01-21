const {Router} = require("express");

const routerUsers = require("./users.router")
const routerFinance = require("./finance.router")

const routes = Router()

routes.use("/users", routerUsers)
routes.use("/finance", routerFinance)

module.exports = routes