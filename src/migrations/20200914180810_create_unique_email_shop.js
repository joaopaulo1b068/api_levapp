
exports.up = function(knex) {
  return knex.raw('ALTER TABLE shop ADD CONSTRAINT unique_email_shop UNIQUE (email)');
};

exports.down = function(knex) {
    return knex.raw('ALTER TABLE shop DROP CONSTRAINT unique_email_shop')
};
