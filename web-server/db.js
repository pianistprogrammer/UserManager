var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(process.env.DB_URL, { useMongoClient: true });