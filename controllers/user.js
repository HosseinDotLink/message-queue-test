const User = require("../models/User"),
  en = require('../helper/language/en.json'),
  mq = require('../config/mq');


// add users to DB
exports.add = async (req, res) => {
  try {
    const user = await new User(req.body);
    user.save();

    // add a message to the queue
    mq.then((conn) => {
      return conn.createChannel();
    }).then((ch) => {
      return ch.assertQueue('message').then(function (ok) {
        return ch.sendToQueue('message', Buffer.from(user.firstName + ' ' + user.lastName + ' user added successfully'));
      });
    }).catch(console.warn);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: en.enterDataCorrectly
    });
  }
};