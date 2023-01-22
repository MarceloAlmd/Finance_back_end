const {Router} = require("express");

const SessionsController = require("../controller/SessionsController");
const sessionsController = new SessionsController;

const sessionRouter = Router();
sessionRouter.post("/", sessionsController.create);

module.exports = sessionRouter;