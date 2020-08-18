module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable("learningBuckets", {
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
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        tags: {
            allowNull: true,
            type: DataTypes.STRING
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        charset: "utf8"
    })
}

module.exports.down = queryInterface => queryInterface.dropTable("learningBuckets");