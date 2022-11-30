import { Phone } from '../models/Phone';

export const getAll = async() => {
  return Phone.findAll();
};

export const getPhoneById = async(phoneId: number) => {
  return Phone.findByPk(phoneId);
};

export const removePhone = async(phoneId: number) => {
  return Phone.destroy({
    where: {
      id: phoneId,
    },
  });
};
