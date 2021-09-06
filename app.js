/**Packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodeParser = bodyParser.urlencoded(
    {extended: true}
);

app.use(jsonParser);
app.use(urlEncodeParser);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.");
});

//user Routes Loading
const vehiculoRoutes = require("./routes/vehiculo.routes");
vehiculoRoutes(app);

app.listen(port, () => {
    console.log("Server is running...")
});