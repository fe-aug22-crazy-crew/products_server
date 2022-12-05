import { Request, Response } from 'express';
import * as phonesService from '../services/phones';

export const getAll = async(req: Request, res: Response) => {
  const { qr, limit, pg } = req.query;

  if (limit && qr && pg) {
    const response = await phonesService.getByQueries(qr, +limit, +pg);

    if (response.count < +limit * (+pg - 1)) {
      res.sendStatus(404);
    }

    res.send(response);

    return;
  }

  const phones = await phonesService.getAll();

  res.send(phones);
};

export const getOne = async(req: Request, res: Response) => {
  const { phoneId } = req.params;
  const foundPhone = await phonesService.getPhoneById(+phoneId);

  if (!phoneId) {
    res.sendStatus(404);

    return;
  }

  res.send(foundPhone);
};

export const remove = async(req: Request, res: Response) => {
  const { phoneId } = req.params;
  const foundPhone = await phonesService.getPhoneById(+phoneId);

  if (!foundPhone) {
    res.sendStatus(404);

    return;
  }

  await phonesService.removePhone(+foundPhone);
  res.sendStatus(204);
};

export const getNewPhones = async(req: Request, res: Response) => {
  res.send(await phonesService.getNewPhones());
};

export const getByDiscount = async(req: Request, res: Response) => {
  res.send(await phonesService.getByDiscount());
};
