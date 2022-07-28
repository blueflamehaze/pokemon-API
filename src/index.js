// Import express
const express = require("express");

// Variable declarations to start the server.
// Asign express function to app
const app = express();
// Specify the port in which the server will run
const port = process.env.PORT || 5000;

// Add middleware to use request.body
app.use(express.json());

// Import routerApi to manage routes
const routerApi = require("./routes/main.controller");

// Add a root endpoint
app.get("/", (request, response) => {
  response.send("Bienvenido a la API pokemon");
});

app.listen(port, () => {
  console.log("Initializing server");
});

// Add the router to the app
routerApi(app);
