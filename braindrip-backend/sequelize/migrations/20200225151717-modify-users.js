'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => { /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
        return Promise.all([
            queryInterface.addColumn('users', 'googleId', {
                allowNull: true,
                type: Sequelize.STRING,
                unique: true
            }),
            queryInterface.addColumn('users', 'facebookId', {
                allowNull: true,
                type: Sequelize.STRING,
                unique: true
            }),
            queryInterface.changeColumn('users', 'passwordHash', {
                allowNull: true,
                type: Sequelize.CHAR(64)
            })
        ]);
    },

    down: (queryInterface, Sequelize) => { /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
        return Promise.all([
            queryInterface.removeColumn('users', 'googleId'),
            queryInterface.removeColumn('users', 'facebookId')
        ]);
    }
};
