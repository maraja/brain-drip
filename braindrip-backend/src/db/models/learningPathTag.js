'use strict';


module.exports = function (sequelize, DataTypes) {
    var LearningPathTags = sequelize.define('LearningPathTag', {
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
        tagId: {
            allowNull: false,
            foreignKey: true,
            type: DataTypes.UUID
        },
    }, { tableName: "learningPathTags" });

    LearningPathTags.associate = function (models) {
        this.belongsTo(models.Tag, {
            foreignKey: 'tagId',
        });
        this.belongsTo(models.LearningPath, {
            foreignKey: 'learningPathId',
        });
    };

    return LearningPathTags;
};
