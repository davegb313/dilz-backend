import express from "express";

const app = express();

// all API endpoints
const routs = require('./app/routes/config'); // fetch the API endpoints
app.use('/', routs);


app.listen(3000, () =>
  console.log(`
  🚀 Server ready at: http://localhost:3000`)
);
