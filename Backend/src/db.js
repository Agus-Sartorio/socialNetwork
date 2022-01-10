const mongoose = require('mongoose');
require('dotenv').config();
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

  await mongoose.connect(`mongodb://DB_HOST/admin`);
