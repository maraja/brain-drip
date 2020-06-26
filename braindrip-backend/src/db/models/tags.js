'use strict';


module.exports = function(sequelize, DataTypes) {
    var Tags = sequelize.define('Tags', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        learningPathId: {
            allowNull: true,
            type: DataTypes.UUID
        }
    }, {tableName: "tags"});

    Tags.associate = function (models) {
        this.belongsTo(models.LearningPath, {
            foreignKey: 'learningPathId',
            as: 'learningPath'
        });
    };

    return Tags;
};
