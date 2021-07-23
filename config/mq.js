const ampq = require('amqplib'),
    dotenv = require('dotenv');

dotenv.config();

const mq = ampq.connect(process.env.MQURL || 'Your-message-queue-server-address');


module.exports = mq;