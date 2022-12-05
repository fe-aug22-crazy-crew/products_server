import { Tablet } from '../models/Tablet';

export const getAll = async() => {
  return Tablet.findAll();
};
