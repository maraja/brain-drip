'use strict';

const typeEnum = ['Video', 'Article', 'Blog Post', 'Research Paper']

module.exports = (sequelize, DataTypes) => {
  var LearningPathResource = sequelize.define('LearningPathResource', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    learningPathId: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.UUID
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    topic: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [typeEnum],
            msg: `type must be within ${typeEnum}`
          }
        }
    },
    sequenceNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: "learningPathResources"
});

  LearningPathResource.associate = function(models) {
    this.belongsTo(models.LearningPath, {
        foreignKey: 'learningPathId',
        as: 'learningPath'
    });
  };

  return LearningPathResource;
};