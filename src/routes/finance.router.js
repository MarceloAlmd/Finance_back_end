const {Router} = require("express");

const FinanceController = require("../controller/FinanceController");

const routesFinance = Router();

const financeController = new FinanceController;

routesFinance.post("/:user_id", financeController.create);
routesFinance.get("/:id", financeController.show);

module.exports = routesFinance;
    