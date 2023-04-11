const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());

//replace  <username> and <password> with credentials provided to you
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.whizzvw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  verified: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
