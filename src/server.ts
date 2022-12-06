import express from 'express';
import cors from 'cors';
import * as phoneController from './controllers/phones';
import * as categoryController from './controllers/categories';
import * as tabletController from './controllers/tablets';
import * as accessoriesController from './controllers/accessories';
import serverless from 'serverless-http';

const router = express.Router();

const app = express();

app.use(cors());

app.use('/.netlify/functions/server', router);

router.get('/', (req, res) => {
  res.json({
    'fe-aug22-crazy-crew': 'Hello world!',
    '/phones': 'Will return table with all phones.',
    '/phones/new': 'return 10 newest phones. Phones are ordered by id',
    '/phones/hot':
      'return 10 phones with biggest discount. Phones are ordered by id',
    '/phones?qr=QUERY&limit=NUMBER&pg=NUMBER':
      // eslint-disable-next-line max-len
      'QUERY should be one of following: newest, oldest, expensive, cheapest. limit = number of items per page. pg = number of page.',
  });
});

router.get('/phones', phoneController.getAll);

router.get('/phones/new', phoneController.getNewPhones);
router.get('/phones/hot', phoneController.getByDiscount);

router.get('/phones/:phoneId', phoneController.getOne);
router.delete('phones/:phoneId', phoneController.remove);

router.get('/tablets', tabletController.getAll);
router.get('/accessories', accessoriesController.getAll);

router.get('/categories', categoryController.getAll);
router.get('/categories/:categoryId', categoryController.getOne);

export const handler = serverless(app);
