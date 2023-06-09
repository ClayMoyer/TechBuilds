const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Receipt extends Model {}

Receipt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "receipt",
  }
);

module.exports = Receipt;
