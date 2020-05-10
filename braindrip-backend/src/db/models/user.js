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
        googleId: {
            allowNull: true,
            type: DataTypes.STRING,
            unique: true
        },
        facebookId: {
            allowNull: true,
            type: DataTypes.STRING,
            unique: true
        },
        passwordHash: {
            allowNull: true,
            type: DataTypes.CHAR(64)
        }
    }, {
        tableName: "users",
        defaultScope: {
            rawAttributes: {
                exclude: ["passwordHash"]
            }
        }
    });

    User.associate = function (models) {
        this.hasMany(models.LearningPath, {as: "learningPaths"});
        this.hasMany(models.LearningBucket, {as: "learningBuckets"});
        this.hasMany(models.Favorites, {as: 'favorites'});
        this.hasMany(models.Upvotes, {as: 'upvotes'});
        this.hasMany(models.Downvotes, {as: 'downvotes'});
    };

    // User.associate = function(models) {
    // models.User.hasMany(models.UserSessions);
    // };

    return User;
};
