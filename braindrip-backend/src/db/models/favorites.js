'use strict';


<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
=======
module.exports = (sequelize, DataTypes) => {
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
    var Favorites = sequelize.define('Favorites', {
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
    }, {tableName: "favorites"});

    Favorites.associate = function (models) {
        this.belongsTo(models.LearningPath, {
            foreignKey: 'learningPathId',
            as: 'learningPath'
        });
        this.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    };

    return Favorites;
};
