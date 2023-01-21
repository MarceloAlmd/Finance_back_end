const knex = require("../database/knex");

class FinanceController {
    async create(request, response) {
        const {title, description, type, value} = request.body;
        const {user_id} = request.params;

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

        return response.status(200).json({finance})
    }
};

module.exports = FinanceController;