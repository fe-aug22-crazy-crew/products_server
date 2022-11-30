import express from 'express';
import cors from 'cors';
import * as phoneController from './controllers/phones';
import * as categoryController from './controllers/categories';
import serverless from 'serverless-http';

const router = express.Router();

const app = express();

app.use(cors());

router.get('/', (req, res) => {
  res.json({
    'fe-aug22-crazy-crew': 'Hello world!',
  });
});

router.get('/phones', phoneController.getAll);
router.get('/:phoneId', phoneController.getOne);
router.delete('/:phoneId', phoneController.remove);

router.get('/categories', categoryController.getAll);
router.get('/:categoryId', categoryController.getOne);

app.use('/.netlify/functions/server', router);

app.use('/.netlify/functions/server', router);

export const handler = serverless(app);
