const express = require('express');
const mongoose = require('mongoose');
const app = express();
const toyrouter = require('./toyrouter');

app.use(express.json());

app.use('/toys', toyrouter);

mongoose.connect('mongodb://localhost:27017/babytoy', {useNewUrlParser:true}, () => console.log('MOngoose COnnected'));

app.listen(5003, () => console.log('server is running!'));