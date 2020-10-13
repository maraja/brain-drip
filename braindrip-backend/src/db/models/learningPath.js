'use strict';

var difficultyEnum = ['beginner', 'intermediate', 'advanced'];

module.exports = function(sequelize, DataTypes) {
  var LearningPath = sequelize.define('LearningPath', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [difficultyEnum],
            msg: `difficulty must be within ${difficultyEnum}`
          }
        }
    },
    upVotes: {
      allowNull: false, 
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    downVotes: {
      allowNull: false, 
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID
    }
  }, {
    tableName: "learningPaths"
});

  LearningPath.associate = function(models) {
    this.hasMany(models.LearningPathResource, { as: 'learningPathResources' });
    this.hasMany(models.Favorites, { as: 'favorites' });
    this.hasMany(models.Downvotes, { as: 'downvotes' });
    this.hasMany(models.Upvotes, { as: 'upvotes' });
    this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
    });
    this.belongsToMany(models.Tag, {
      through: 'LearningPathTag',
      foreignKey: "learningPathId",
      as: 'tags'
    });
  };

  return LearningPath;
};