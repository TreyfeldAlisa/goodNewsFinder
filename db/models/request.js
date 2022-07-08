const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate({ User, Word }) {
      Request.belongsTo(User, { foreignKey: 'user_id' });
      Request.belongsTo(Word, { foreignKey: 'word_id' });
    }
  }
  Request.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      word_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Word',
          key: 'id',
        },
      },
      isGood: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Request',
    }
  );
  return Request;
};
