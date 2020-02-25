'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    profilePicture: {
        allowNull: true,
        type: DataTypes.STRING
    },
    passwordHash: {
        allowNull: false,
        type: DataTypes.CHAR(64)
    },
  }, {
    tableName: "users",
    defaultScope: {
        rawAttributes: { exclude: ["passwordHash"]}
    }
  });

  User.associate = function(models) {
    this.hasMany(models.LearningPath, { as: "learningPaths" });
    this.hasMany(models.Favorites, { as: 'favorites' });
  };

  // User.associate = function(models) {
  //   models.User.hasMany(models.UserSessions);
  // };

  return User;
};