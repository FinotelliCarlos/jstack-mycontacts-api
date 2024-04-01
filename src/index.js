const express = require("express");
require("express-async-errors");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, _request, response, _next) => {
  console.log("#### Error Handler");
  console.log(error);
  console.log("Error Handler #### ");
  response.sendStatus(500);
});

app.listen(3000, () =>
  console.log("💥 Server its running, access here: http://localhost:3000")
);
