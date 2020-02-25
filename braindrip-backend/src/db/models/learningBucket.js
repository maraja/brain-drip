'use strict';
module.exports = (sequelize, DataTypes) => {
  var LearningBuckets = sequelize.define('LearningBucket', {
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
  }, {
    tableName: "learningBuckets"
});

  LearningBuckets.associate = function(models) {
    this.hasMany(models.LearningBucketResource, { as: 'learningBucketResources' });
  };

  LearningBuckets.associate = function(models) {
    this.belongsTo(models.User, {
        foreignKey: 'id',
        as: 'userId'
    });
  };

  return LearningBuckets;
};