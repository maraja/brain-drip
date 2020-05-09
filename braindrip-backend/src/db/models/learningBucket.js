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
    userId: {
      allowNull: false,
      type: DataTypes.UUID
    }
  }, {
    tableName: "learningBuckets"
});

  LearningBuckets.associate = function(models) {
    this.hasMany(models.LearningBucketResource, { as: 'learningBucketResources' });
    this.belongsTo(models.User, {
        foreignKey: 'id',
        as: 'user'
    });
  };

  return LearningBuckets;
};