const {Router} = require("express");

const UserController = require("../controller/UserController");

const routesUsers = Router();

const userController = new UserController;

routesUsers.post("/", userController.create);

module.exports = routesUsers;
    