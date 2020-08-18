'use strict';


module.exports = function (sequelize, DataTypes) {
    var Tags = sequelize.define('Tag', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
    }, { tableName: "tags" });

    Tags.associate = function (models) {
        this.belongsToMany(models.LearningPath, {
            through: 'LearningPathTag',
            foreignKey: 'tagId',
        }),
        this.belongsToMany(models.LearningBucket, {
            through: 'LearningBucketTag',
            foreignKey: "tagId",
        });
    };

    return Tags;
};
