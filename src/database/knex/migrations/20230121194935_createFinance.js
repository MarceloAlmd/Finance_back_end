exports.up = knex => knex.schema.createTable("Finance", table => {
    table.increments("id");
    table.text("title").notNullable();
    table.text("description");
    table.text("type").notNullable();
    table.integer("value").notNullable();
    table.integer("user_id").references("id").inTable("users");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());

})


exports.down = knex => knex.schema.dropTable("Finance") ;