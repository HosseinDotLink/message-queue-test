const dotenv = require('dotenv'),
    mongoose = require("mongoose"),
    db = process.env.MONGOURL || 'Your-mongodb-address',
    en = require('../helper/language/en.json');

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(en.mongodbConnected);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
