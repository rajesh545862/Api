const express = require('express');
const bodyParser = require('body-parser');
const User = require('./user');
const app = express();

app.use(bodyParser.json());

app.get('/users', async (req, res) => {
  const searchStr = req.query.searchStr || '';
  const locations = req.query.locations || [];
  const verified = req.query.verified || false;
  
  let query = {};
  
  if (searchStr !== '') {
    query.name = { $regex: searchStr, $options: 'i' };
  }
  
  if (locations.length > 0) {
    query.location = { $in: locations };
  }
  
  if (verified) {
    query.verified = true;
  }
  
  const users = await User.find(query).sort({ name: 'asc' }).exec();
  
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

