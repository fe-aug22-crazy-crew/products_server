import { sequelize } from '../utils/db';
import { DataTypes } from 'sequelize';

export const Category = sequelize.define(
  'category',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'categories',
  },
);
