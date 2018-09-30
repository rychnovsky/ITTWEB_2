import express from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './app_server/routes/index';
import mongoose from 'mongoose';

// connect to the database
import db from './app_server/utils/db';

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'app_server', 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(
//   sassMiddleware({
//     src: path.join(__dirname, 'public'), //where the sass files are
//     dest: path.join(__dirname, 'public'), //where css should go
//     debug: true, // obvious
//   }),
// );
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Use mongoose promises
mongoose.Promise = Promise;

export default app;
