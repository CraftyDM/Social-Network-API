const express = require('express');
const db = erquire('./config/connection.js');
const routes = require('./routes');

const ap = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Server now listening to port ${PORT}!`);
    });
  });
  