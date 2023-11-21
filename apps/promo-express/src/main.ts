import express from 'express';

import { environment } from './environments/environment';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static('assets'));

// app.use(bodyParser.urlencoded({extend:true}));

const WEBPACK_DEV_URL = 'http://localhost:3001';
const STATIC_PREFIX = environment.production ? '/assets/' : WEBPACK_DEV_URL + '/assets/';

app.get('/', (req, res) => {
  res.render('index', { STATIC_PREFIX, title: 'Hey', message: 'Hello there!'});
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
