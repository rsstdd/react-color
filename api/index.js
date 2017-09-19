// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import routes from './routes';
// 
// const app = express();
// 
// app.use(cors({allowedHeaders: ['Authorization', 'Content-Type']}));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// 
// app.use('/', routes)
// 
// 
// let port = process.env.PORT || 8000;
// 
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
// 
// export default app;
