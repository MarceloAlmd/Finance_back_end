const AppError = require("../utils/AppError")
class UserController {
    async create(request, response) {
        const {name, email, password} = request.bodyxxx;
        response.json({name, email, password})
    }
}

module.exports = UserController