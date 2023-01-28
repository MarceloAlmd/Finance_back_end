const knex = require("../database/knex");

class FinanceController {
    async create(request, response) {
        const {title, description, type, value} = request.body;
        const user_id = request.user.id;

        await knex("finance").insert({
            title,
            description,
            type,
            value,
            user_id
        });


        return response.status(201).json({
            status: "201",
            message: "Sucesso ao lançar um financeiro!"
        })

    };

    async show(request, response) {
        const {id} = request.params;

        const finance = await knex("finance").where({id}).first();

        return response.status(200).json(finance)
    }

    async delete(request, response) {
        const {id} = request.params;

        await knex("finance").where({id}).delete();

        return response.status(200).json({
            status: "200",
            message:"Sucesso ao deletar !"
        });
    };

    async index(request, response) {
        const {title} = request.query
        const user_id = request.user.id;
        const financial = await knex("finance")
        .where({user_id})
        .whereLike("title", `%${title}%`)
        .orderBy("title");

        return response.json(financial);
    }
};

module.exports = FinanceController;