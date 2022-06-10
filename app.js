const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const articleRoutes = require('./api/articleRoutes');
// const userRoutes = require('./api/userRoutes.js');
const app = express();

const dbURI = 'mongodb+srv://freeRabbit:test1234@cluster0.o5l7t.mongodb.net/MM_News?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(7000))
  .catch(err => console.log(err));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// app.use('/api/user', userRoutes);
app.use('/api/article', articleRoutes);