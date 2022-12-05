import { Request, Response } from 'express';
import * as accessoriesService from '../services/accessories';

export const getAll = async(req: Request, res: Response) => {
  const accessories = await accessoriesService.getAll();

  res.send(accessories);
};
