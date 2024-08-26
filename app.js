const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
  res.send('Pong!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;


