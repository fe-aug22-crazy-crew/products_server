import { sequelize } from '../utils/db';
import { DataTypes } from 'sequelize';
import { Category } from './Category';

export const Phone = sequelize.define(
  'phone',
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
    phoneId: {
      field: 'phone_id',
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
    screen: {
      field: 'screen',
      type: DataTypes.STRING,
    },
    capacity: {
      field: 'capacity',
      type: DataTypes.STRING,
    },
    color: {
      field: 'color',
      type: DataTypes.STRING,
    },
    ram: {
      field: 'ram',
      type: DataTypes.STRING,
    },
    year: {
      field: 'year',
      type: DataTypes.INTEGER,
    },
    image: {
      field: 'image',
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'phones',
  },
);

Phone.belongsTo(Category, {
  foreignKey: 'category_id',
  constraints: false,
});
