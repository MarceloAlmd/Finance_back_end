const {Router} = require("express");

const FinanceController = require("../controller/FinanceController");

const routesFinance = Router();

const financeController = new FinanceController;

routesFinance.post("/:user_id", financeController.create);
routesFinance.get("/:id", financeController.show);
routesFinance.delete("/:id", financeController.delete);

module.exports = routesFinance;
    