1.Set up the project,
initialize a new Node.js project by running the following command: npm init


This will create a new package.json file in project folder. Then, install the necessary dependencies by running the following commands:
npm install express ,
npm install mongoose ,
npm install body-parser

2.set up a MongoDB database

3. add credentials in the db.js or server.js file : 'mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<dbname>?retryWrites=true&w=majority'

4. Test the Api using Postman by sending GET request to the '/user' ,

enter the url for API endpoint, e.g.  'http://localhost:3000/user' .


5. testing data is provided in seed.js file

to seed the data, run the following command in your terminal: node seed.js


