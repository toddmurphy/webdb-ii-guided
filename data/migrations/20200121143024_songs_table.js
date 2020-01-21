exports.up = function(knex) {
  // REMEMBER the return
  return knex.schema.createTable('songs', tbl => {
    tbl.increments();
    tbl.string('name', 225).index();
    tbl.integer('duration');
    tbl.string('artist').index();
    tbl.boolean('favorite').defaultTo(false); //most RDBMS store 1 for true and 0 for false
    tbl.timestamps(true, true); //adds created_at and updated_at columns
  });
};
//id column, primary key, auto-increment

//undo the changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('songs');
};
