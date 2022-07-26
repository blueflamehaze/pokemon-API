// Import express
const express = require("express");

// Variable declarations to start the server.
// Asign express function to app
const app = express();
// Specify the port in which the server will run
const port = 5000;

app.listen(port, () => {
  console.log("Initializing server");
});
