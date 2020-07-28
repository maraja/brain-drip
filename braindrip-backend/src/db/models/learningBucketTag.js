'use strict';


module.exports = function (sequelize, DataTypes) {
    var LearningBucketTags = sequelize.define('LearningBucketTag', {
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
        tagId: {
            allowNull: false,
            foreignKey: true,
            type: DataTypes.UUID
        },
    }, { tableName: "learningBucketTags" });

    LearningBucketTags.associate = function (models) {
        this.belongsTo(models.Tag, {
            foreignKey: 'tagId',
        });
        this.belongsTo(models.LearningBucket, {
            foreignKey: 'learningBucketId',
        });
    };

    return LearningBucketTags;
};
