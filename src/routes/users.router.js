const {Router} = require("express");

const UserController = require("../controller/UserController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const routesUsers = Router();

const userController = new UserController;

routesUsers.post("/", userController.create);
routesUsers.put("/", ensureAuthenticated, userController.update);

module.exports = routesUsers;
    