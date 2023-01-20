const {hash, compare} = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");
class UserController {
    async create(request, response) {
        const {name, email, password} = request.body;

        const emailCheck = await knex("users").where({email}).first();

        if(emailCheck) {
            throw new AppError("Este e-mail já está em uso !");
        }

        const hashPassword = await hash(password, 8);

        await knex("users").insert({
            name,
            email,
            password: hashPassword
        });

        return response.status(201).json({
            status: "201",
            message: "Usuário criado com sucesso !"
        });

    };
};

module.exports = UserController;