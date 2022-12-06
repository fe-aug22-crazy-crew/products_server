import { sequelize } from '../utils/db';
import { DataTypes } from 'sequelize';

export const PhoneInfo = sequelize.define(
  'full_phone',
  {
    id: {
      field: 'id',
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    namespaceId: {
      field: 'namespace_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
    },
    capacityAvailable: {
      field: 'capacity_available',
      type: DataTypes.STRING,
      get: function() {
        return JSON.parse(this.getDataValue('capacityAvailable'));
      },
      set: function(val) {
        return this.setDataValue('capacityAvailable', JSON.stringify(val));
      },
    },
    capacity: {
      field: 'capacity',
      type: DataTypes.STRING,
    },
    priceRegular: {
      field: 'price_regular',
      type: DataTypes.INTEGER,
    },
    priceDiscount: {
      field: 'price_discount',
      type: DataTypes.INTEGER,
    },
    colorsAvailable: {
      field: 'colors_available',
      type: DataTypes.STRING,
      get: function() {
        return JSON.parse(this.getDataValue('colorsAvailable'));
      },
      set: function(val) {
        return this.setDataValue('colorsAvailable', JSON.stringify(val));
      },
    },
    color: {
      field: 'color',
      type: DataTypes.STRING,
    },
    images: {
      field: 'images',
      type: DataTypes.STRING,
      get: function() {
        return JSON.parse(this.getDataValue('images'));
      },
      set: function(val) {
        return this.setDataValue('images', JSON.stringify(val));
      },
    },
    description: {
      field: 'description',
      type: DataTypes.TEXT,
      get: function() {
        return JSON.parse(this.getDataValue('description'));
      },
      set: function(val) {
        return this.setDataValue('description', JSON.stringify(val));
      },
    },
    screen: {
      field: 'screen',
      type: DataTypes.STRING,
    },
    resolution: {
      field: 'resolution',
      type: DataTypes.STRING,
    },
    processor: {
      field: 'processor',
      type: DataTypes.STRING,
    },
    ram: {
      field: 'ram',
      type: DataTypes.STRING,
    },
    camera: {
      field: 'camera',
      type: DataTypes.STRING,
    },
    zoom: {
      field: 'zoom',
      type: DataTypes.STRING,
    },
    cell: {
      field: 'cell',
      type: DataTypes.STRING,
      get: function() {
        return JSON.parse(this.getDataValue('cell'));
      },
      set: function(val) {
        return this.setDataValue('cell', JSON.stringify(val));
      },
    },
  },
  {
    tableName: 'phones_info',
  },
);
