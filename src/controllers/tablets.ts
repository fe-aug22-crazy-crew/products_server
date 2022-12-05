import { Request, Response } from 'express';
import * as tabletsService from '../services/tablets';

export const getAll = async(req: Request, res: Response) => {
  const tablets = await tabletsService.getAll();

  res.send(tablets);
};
