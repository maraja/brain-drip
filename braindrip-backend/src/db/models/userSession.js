'use strict';
module.exports = (sequelize, DataTypes) => {
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