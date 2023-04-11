const User = require('./user');
const db = require('./db');

const users = [
  { name: 'John Smith', location: 'New York', verified: true },
  { name: 'Jane Doe', location: 'Los Angeles', verified: true },
  { name: 'Bob Johnson', location: 'Chicago', verified: true },
  { name: 'Mary Williams', location: 'New York', verified: false },
  { name: 'Tom Brown', location: 'San Francisco', verified: false },
  { name: 'Kate Lee', location: 'Boston', verified: true }
];

User.insertMany(users)
  .then(() => {
    console.log('Data seeded!');
    db.close();
  })
  .catch((err) => {
    console.log(err);
    db.close();
  });
