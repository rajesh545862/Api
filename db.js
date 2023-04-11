const mongoose = require('mongoose');
//replace  <username> and <password> with credentials provided to you
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.whizzvw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!');
});
