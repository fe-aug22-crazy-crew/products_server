import QueryString from 'qs';
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

export const getByQueries = async(
  query: string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[],
  limit: number,
) => {
  let orderByQuery;

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
      return Phone.findAll();
  }

  const params = {
    ...normalizePhone,
    order: [orderByQuery, ['id', 'ASC']],
    limit,
  };

  return Phone.findAll(params);
};
