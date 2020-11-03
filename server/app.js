const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');

const router = express.Router();
const app = express();

let counter = 5;

var whitelist = ['http://localhost:3000', 'http://localhost:5000', '127.0.0.1']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors(corsOptions))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res, next) => {
  res.json({ counter: counter });
});

app.post("/", (req, res) => {
  console.log(req.body);
  const reqType = req.body.reqType
  const newCounter = reqType === 'add' ? counter + 1 : counter - 1
  counter = newCounter
  console.log(counter)
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
