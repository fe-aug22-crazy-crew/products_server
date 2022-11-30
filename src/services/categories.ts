import { Category } from '../models/Category';

export const getAll = async() => {
  return Category.findAll();
};

export const getCategoryById = async(categoryId: number) => {
  return Category.findByPk(categoryId);
};
