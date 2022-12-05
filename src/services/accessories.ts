import { Accessory } from '../models/Accessory';

export const getAll = async() => {
  return Accessory.findAll();
};
