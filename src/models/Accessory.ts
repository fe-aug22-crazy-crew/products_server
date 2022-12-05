import { sequelize } from '../utils/db';
import { DataTypes } from 'sequelize';
import { Category } from './Category';

export const Accessory = sequelize.define(
  'accessory',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      field: 'category_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accessoryId: {
      field: 'accessory_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemId: {
      field: 'item_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
    },
    fullPrice: {
      field: 'full_price',
      type: DataTypes.INTEGER,
    },
    price: {
      field: 'price',
      type: DataTypes.INTEGER,
    },
    color: {
      field: 'color',
      type: DataTypes.STRING,
    },
    image: {
      field: 'image',
      type: DataTypes.STRING,
    },
    compatibility: {
      field: 'compatibility',
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'accessories',
  },
);

Accessory.belongsTo(Category, {
  foreignKey: 'category_id',
  constraints: false,
});
