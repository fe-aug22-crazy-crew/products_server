import { Request, Response } from 'express';
import * as categoriesService from '../services/categories';

export const getAll = async(req: Request, res: Response) => {
  const category = await categoriesService.getAll();

  res.send(category);
};

export const getOne = async(req: Request, res: Response) => {
  const { categoryId } = req.params;
  const foundCategory = await categoriesService.getCategoryById(+categoryId);

  if (!foundCategory) {
    res.sendStatus(404);

    return;
  }

  res.send(foundCategory);
};
