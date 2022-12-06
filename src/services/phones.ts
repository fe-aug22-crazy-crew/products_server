import QueryString from 'qs';
import { Sequelize } from 'sequelize';
import { PhoneInfo } from '../models/PhoneInfo';
import { Category } from '../models/Category';
import { Phone } from '../models/Phone';

const normalizePhone = {
  attributes: [
    'id',
    'itemId',
    'name',
    'fullPrice',
    'price',
    'screen',
    'capacity',
    'color',
    'ram',
    'year',
    'image',
  ],
  include: {
    model: Category,
    attributes: ['name'],
  },
};

export const getAll = async() => {
  return Phone.findAll(normalizePhone);
};

export const getPhoneById = async(phoneId: number) => {
  return Phone.findByPk(phoneId, normalizePhone);
};

export const removePhone = async(phoneId: number) => {
  return Phone.destroy({
    where: {
      id: phoneId,
    },
  });
};

export const getNewPhones = async() => {
  const params = {
    ...normalizePhone,
    order: [
      ['year', 'DESC'],
      ['id', 'ASC'],
    ],
    limit: 10,
  };

  return Phone.findAll(params);
};

export const getByDiscount = async() => {
  const params = {
    attributes: [
      'id',
      'itemId',
      'name',
      'fullPrice',
      'price',
      'screen',
      'capacity',
      'color',
      'ram',
      'year',
      'image',
      [Sequelize.literal('full_price - price'), 'discount'],
    ],
    include: {
      model: Category,
      attributes: ['name'],
    },
    order: [
      ['discount', 'DESC'],
      ['id', 'ASC'],
    ],
    limit: 10,
  };

  return Phone.findAll(params);
};

export const getByQueries = async(
  query: string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[],
  limit: number,
  page: number,
) => {
  let orderByQuery;
  const offset = limit * (page - 1);

  switch (query) {
    case 'newest':
      orderByQuery = ['year', 'DESC'];
      break;
    case 'oldest':
      orderByQuery = ['year', 'ASC'];
      break;
    case 'expensive':
      orderByQuery = ['price', 'DESC'];
      break;
    case 'cheapest':
      orderByQuery = ['price', 'ASC'];
      break;
    default:
      return Phone.findAndCountAll();
  }

  const params = {
    ...normalizePhone,
    order: [orderByQuery, ['id', 'ASC']],
    limit,
    offset,
  };

  return Phone.findAndCountAll(params);
};

export const getPhoneInfoById = async(phoneId: string) => {
  return PhoneInfo.findByPk(phoneId);
};
