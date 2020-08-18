module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable("tags", {
      id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID
      },
      name: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true
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

module.exports.down = queryInterface => queryInterface.dropTable("tags");