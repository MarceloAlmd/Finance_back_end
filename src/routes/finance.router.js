const {Router} = require("express");

const FinanceController = require("../controller/FinanceController");

const routesFinance = Router();

const financeController = new FinanceController;

routesFinance.post("/:user_id", financeController.create);
routesFinance.delete("/:id", financeController.delete);
routesFinance.get("/", financeController.index);
routesFinance.get("/:id", financeController.show);

module.exports = routesFinance;
    