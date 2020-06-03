'use strict';

const typeEnum = ['Video', 'Article', 'Blog Post', 'Research Paper']

<<<<<<< HEAD
module.exports = function (sequelize, DataTypes) {
=======
module.exports = (sequelize, DataTypes) => {
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
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
<<<<<<< HEAD
        },
        defaultValue: 'Article'
=======
        }
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
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