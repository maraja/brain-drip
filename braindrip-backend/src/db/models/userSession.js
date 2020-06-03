'use strict';
<<<<<<< HEAD
module.exports = function (sequelize, DataTypes) {
=======
module.exports = (sequelize, DataTypes) => {
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
  var UserSession = sequelize.define('UserSession', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    userId: {
        allowNull: false,
        references: {
            key: "id",
            model: "users"
        },
        type: DataTypes.UUID
    },
    expiresAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
  }, {
    paranoid: false,
    tableName: "userSessions", 
    updatedAt: false
});


  return UserSession;
};