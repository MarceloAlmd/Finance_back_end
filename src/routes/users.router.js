const {Router} = require("express");
const multer = require("multer")
const uploadConfig = require("../config/upload")

const UserController = require("../controller/UserController");
const UserAvatarController = require("../controller/UserAvatarController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const routesUsers = Router();
const upload = multer(uploadConfig.MULTER);

const userController = new UserController()
const userAvatarController = new UserAvatarController()

routesUsers.post("/", userController.create);
routesUsers.put("/", ensureAuthenticated, userController.update);
routesUsers.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = routesUsers;
    