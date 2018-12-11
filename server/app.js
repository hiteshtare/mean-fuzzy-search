//Node Modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

//Initialize express app
const app = express();

//Custom Modules
const fuzzyRoute = require('./api/routes/fuzzyRoute');

//Middlewares
app.use(morgan('dev')); // Logging
app.use(bodyParser.urlencoded({ // Body Parser
  extended: false
}));
app.use(bodyParser.json());

//Host static files
app.use(express.static(path.join(__dirname, 'public')));

//Cross Origin Resource Scripting
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
// Routes which should handle requests
app.use("/fuzzy", fuzzyRoute);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;