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
    async update(request, response) {
        const {name, email, new_password, old_password} = request.body;
        const user_id = request.user.id;

        const user = await knex("users").where({id: user_id}).first();
        if(!user) {
            throw new AppError("Usuário não encontrado")
        };

        const checkEmailExist = await knex("users").where({email}).first();

        if(checkEmailExist && checkEmailExist.id !== user.id) {
            throw new AppError("Esse e-mail já está em uso");
        };

        user.name = name ?? user.name;
        user.email = email ?? user.email

        if(new_password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga para atualizar");
        };

        if(!new_password && old_password) {
            throw new AppError("Você precisa digitar a nova senha que deseja atualizar");
        };

        if(new_password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);
            if(!checkOldPassword) {
                throw new AppError("A senha antiga não confere");
            } 
            
            user.password = await hash(new_password, 8)
        }

        await knex("users").where({id: user_id}).update({
            name: user.name,
            email: user.email,
            password: user.password,
            updated_at: knex.fn.now()
        })

        return response.status(200).json({
            status: "200",
            message: "sucesso ao atualizar usuário"
        })



    };
};

module.exports = UserController;