'use strict';

var difficultyEnum = ['beginner', 'intermediate', 'advanced'];

module.exports = (sequelize, DataTypes) => {
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
    tags: {
        allowNull: true,
        type: DataTypes.STRING
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
    this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
    });
  };

  return LearningPath;
};