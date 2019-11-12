import express from 'express';
import cors from 'cors';
import favicon from 'serve-favicon';

import pathconfig from '../../config/path.config';
import router from './router';

const app = express();
// app.use(express.static('public'));
app.use('/public', express.static(pathconfig.dist))
// favicon
app.use(favicon(pathconfig.ico))

const PORT = process.env.PORT||3000;
// 跨域方式一
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

// 跨域方式二
const corsOptions = {
  origin: `http://localhost:${PORT}`,
  // origin: 'http://example.com',
  // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
router(app);
// app.use((err, req, res, next) => {
// 	res.status(500).send('Sorry,Something goes wrong!')
// })
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
