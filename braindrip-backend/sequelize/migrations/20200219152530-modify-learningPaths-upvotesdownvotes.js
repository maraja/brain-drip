'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise.all([
      queryInterface.addColumn(
        'learningPaths',
        'upVotes',
        {
          allowNull: false, 
          type: Sequelize.INTEGER,
          defaultValue: 0
        }
      ),
      queryInterface.addColumn(
        'learningPaths',
        'downVotes',
        {
          allowNull: false, 
          type: Sequelize.INTEGER,
          defaultValue: 0
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise.all([
      queryInterface.removeColumn('learningPaths', 'upVotes'),
      queryInterface.removeColumn('learningPaths', 'downVotes')
    ]);
  }
};
