import express from "express";
// all API endpoints
const routs = require("./app/routes/config"); // fetch the API endpoints

const app = express();

app.use("/", routs);

app.listen(3000, () =>
  console.log(`
  🚀 Server ready at: http://localhost:3000`)
);
