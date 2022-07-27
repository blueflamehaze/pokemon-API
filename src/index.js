// Import express
const express = require("express");

// Variable declarations to start the server.
// Asign express function to app
const app = express();
// Specify the port in which the server will run
const port = 5000;

// Import routerApi to manage routes
const routerApi = require("./routes/main.controller");

// Add a root endpoint
app.get("/", (request, response) => {
  document.write(
    "Bienvenido a la API Pokemon. Usa alguna ruta valida para continaur"
  );
  console.log("Bienvenido a la API pokemon");
});

app.listen(port, () => {
  console.log("Initializing server");
});

// Add the router to the app
routerApi(app);
