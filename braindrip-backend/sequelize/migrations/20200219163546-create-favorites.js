module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable("favorites", {
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
      learningPathId: {
          allowNull: false,
          references: {
              key: "id",
              model: "learningPaths"
          },
          type: DataTypes.UUID
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

module.exports.down = queryInterface => queryInterface.dropTable("favorites");