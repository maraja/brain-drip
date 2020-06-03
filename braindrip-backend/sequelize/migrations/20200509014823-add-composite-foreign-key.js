'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.debug('here');
    return Promise.all([
      queryInterface.addConstraint('upvotes', ['userId', 'learningPathId'], {
        type: 'unique',
        name: 'upvotes_unique'
      }),
      queryInterface.addConstraint('downvotes', ['userId', 'learningPathId'], {
        type: 'unique',
        name: 'downvotes_unique'
      }),
      queryInterface.addConstraint('favorites', ['userId', 'learningPathId'], {
        type: 'unique',
        name: 'favorites_unique'
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint('upvotes', 'upvotes_unique'),
      queryInterface.removeConstraint('downvotes', 'downvotes_unique'),
      queryInterface.removeConstraint('favorites', 'favorites_unique'),
    ]);
  }
};
