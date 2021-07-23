const http = require('http'),
    express = require("express"),
    connectDb = require("./config/db"),
    mq = require("./config/mq"),
    compression = require("compression"),
    bodyParser = require("body-parser"),
    dotenv = require('dotenv'),
    en = require('./helper/language/en.json');

// Initializing the server(app)
const app = express();

dotenv.config();

// const server = spdy.createServer(options, app);
const server = http.createServer(app);


// Initializing the middlewares
app.use(compression());
app.use(bodyParser.json());
app.use(express.json({ limit: "300kb" }));
app.use(bodyParser.urlencoded({ extended: false }));


// Connecting to database
connectDb();

// message queue connection
mq;

// Routes
app.use("/user", require("./routes/api/user"));
app.use("/", require("./routes/api/config"));


// ports
const PORT = process.env.PORT || 3000;


// create http server
server.listen(PORT, () => console.log(en.serverIsRunning + PORT));