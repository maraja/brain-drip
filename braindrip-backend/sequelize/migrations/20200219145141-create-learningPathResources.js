module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable("learningPathResources", {
      id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID
      },
      learningPathId: {
          allowNull: true,
          references: {
              key: "id",
              model: "learningPaths"
          },
          type: DataTypes.UUID
      },
      url: {
          type: DataTypes.STRING,
          allowNull: false
      },
      topic: {
          type: DataTypes.STRING,
          allowNull: true
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: true
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

module.exports.down = queryInterface => queryInterface.dropTable("learningPathResources");