import express from 'express';
import cors from 'cors';
import * as phoneController from './controllers/phones';
import * as categoryController from './controllers/categories';
import serverless from 'serverless-http';
import path from 'path';

const router = express.Router();

const app = express();

app.use(cors());

app.use('/.netlify/functions/server', router);

const staticPath = path.join(__dirname, 'src', 'public');

router.use('/static', express.static(staticPath));

router.get('/', (req, res) => {
  res.json({
    'fe-aug22-crazy-crew': 'Hello world!',
    '/phones': 'Will return table with all phones.',
    '/phones/new': 'return 10 newest phones. Phones are ordered by id',
    '/phones/hot':
      'return 10 phones with biggest discount. Phones are ordered by id',
    '/phones/qr=QUERY&limit=NUMBER&pg=NUMBER':
      // eslint-disable-next-line max-len
      'QUERY should be one of following: newest, oldest, expensive, cheapest. limit = number of items per page. pg = number of page.',
  });
});

router.get('/phones', phoneController.getAll);

router.get('/phones/new', phoneController.getNewPhones);
router.get('/phones/hot', phoneController.getByDiscount);

router.get('/phones/:phoneId', phoneController.getOne);
router.delete('phones/:phoneId', phoneController.remove);

router.get('/categories', categoryController.getAll);
router.get('/categories/:categoryId', categoryController.getOne);

export const handler = serverless(app);
