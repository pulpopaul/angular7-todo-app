const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));


// parse requests of content-type - application/json
app.use(bodyParser.json())


// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/express-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//this avoids CORS issues in localhost. Review for deployment
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', (req, res) => {
  res.json({ "message": "Welcome to the todo api." });
});

// Require Notes routes
require('./routes/note.routes.js')(app);

const port = 3000;

app.listen(port, () => console.log('Server running...'));
