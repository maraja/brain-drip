'use strict';

module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable('learningPathTags', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    tagId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        key: "id",
        model: "tags"
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    learningPathId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        key: "id",
        model: "learningPaths"
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
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

module.exports.down = queryInterface => queryInterface.dropTable("learningPathTags");
