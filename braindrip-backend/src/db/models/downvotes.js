'use strict';


module.exports = (sequelize, DataTypes) => {
    var Downvotes = sequelize.define('Downvotes', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        userId: {
            allowNull: false,
            type: DataTypes.UUID
        },
        learningPathId: {
            allowNull: false,
            type: DataTypes.UUID
        }
    }, {tableName: "downvotes"});

    Downvotes.associate = function (models) {
        this.belongsTo(models.LearningPath, {
            foreignKey: 'learningPathId',
            as: 'learningPath'
        });
        this.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    };

    return Downvotes;
};
