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
  });
});

router.get('/phones', phoneController.getAll);
router.get('/phones/:phoneId', phoneController.getOne);
router.delete('phones/:phoneId', phoneController.remove);

router.get('/categories', categoryController.getAll);
router.get('/categories/:categoryId', categoryController.getOne);

export const handler = serverless(app);
