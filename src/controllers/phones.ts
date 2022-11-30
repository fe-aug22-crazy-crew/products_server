import { Request, Response } from 'express';
import * as phonesService from '../services/phones';

export const getAll = async(req: Request, res: Response) => {
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

export const getByQueries = async(req: Request, res: Response) => {
  const searchParams = req.query;

  if (!searchParams) {
    res.send(await phonesService.getAll());
  }
};
