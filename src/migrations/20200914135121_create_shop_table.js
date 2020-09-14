
exports.up = function (knex) {
  return knex.schema.createTable('shop', function (table) {
    table.string('id').primary();
    table.string('name');
    table.string('cnpj');
    table.string('phone');
    table.string('email');
    table.string('pass');
    table.string('end_cep');
    table.string('end_uf');
    table.string('end_city');
    table.string('end_street');
    table.string('end_district');
    table.string('end_number');
    table.string('end_complement');

    table.string('created_at');
    table.boolean('deleted');
    table.string('deleted_at');

    table.string('reset_pass_key');
    table.string('signup_token');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('shop')
};
