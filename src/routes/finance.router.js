const {Router} = require("express");

const FinanceController = require("../controller/FinanceController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const routesFinance = Router();

const financeController = new FinanceController;

routesFinance.use(ensureAuthenticated);

routesFinance.post("/", financeController.create);
routesFinance.delete("/:id", financeController.delete);
routesFinance.get("/", financeController.index);
routesFinance.get("/:id", financeController.show);

module.exports = routesFinance;
    