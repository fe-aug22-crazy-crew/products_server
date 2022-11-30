import { Category } from '../models/Category';
import { Phone } from '../models/Phone';

export const getAll = async() => {
  return Phone.findAll({
    attributes: [
      'id',
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
  });
};

export const getPhoneById = async(phoneId: number) => {
  return Phone.findByPk(phoneId, {
    attributes: [
      'id',
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
  });
};

export const removePhone = async(phoneId: number) => {
  return Phone.destroy({
    where: {
      id: phoneId,
    },
  });
};

// export const getByQueries = async (sortBy: string, amount: number) => {

// };
