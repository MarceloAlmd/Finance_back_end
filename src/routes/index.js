const {Router} = require("express");

const routerUsers = require("./users.router")

const routes = Router()

routes.use("/users", routerUsers)

module.exports = routes