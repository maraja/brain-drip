module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable('learningBucketTags', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    tagId: {
      allowNull: true,
      references: {
        key: "id",
        model: "tags"
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
      type: DataTypes.UUID
    },
    learningBucketId: {
      allowNull: true,
      references: {
        key: "id",
        model: "learningBuckets"
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
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
module.exports.down = queryInterface => queryInterface.dropTable("learningBucketTags");
