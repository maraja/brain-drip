'use strict';

<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
=======
module.exports = (sequelize, DataTypes) => {
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
  var LearningBucketResource = sequelize.define('LearningBucketResource', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    learningBucketId: {
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
  }, {
    tableName: "learningBucketResources"
});

  LearningBucketResource.associate = function(models) {
    this.belongsTo(models.LearningBucket, {
        foreignKey: 'learningBucketId',
        as: 'learningBucket'
    });
  };

  return LearningBucketResource;
};