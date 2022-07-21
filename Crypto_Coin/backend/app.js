const express = require("express");
// require("express-async-errors");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Crypto Coin API",
      description: "Crypto Coin Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:4000"]
    }
  },
  // ['.route/*.js']
  apis: ["app.js","./route/*.js"]
};

const corsOptions = {
  origin: process.env.APP_URL, // a FE localhost kell ide
  optionsSuccessStatus: 200,
};

morgan.token("host", function (req, res) {
  return req.hostname;
});

app.use(cors(corsOptions));
app.use(express.json()); // body-ban erkezo json-t parse-olni tudja
app.use(morgan(":method :url :status - HOST: :host  - :response-time ms")); // use this middleware on every request

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// const clientRoutes = require("./route/client");
// app.use("/api/client", clientRoutes);

const userRoutes = require("./route/user.js");
app.use("/api/user", userRoutes);

const apiRoutes = require("./route/coinMarketCapApi");
app.use("/api/coin", apiRoutes);


/**
 * @swagger
 * /:
 *  get:
 *    description: Use for health check
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/", (req, res) => {
  console.log("Health check completed");
  res.sendStatus(200);
});

app.use(errorHandler);

module.exports = app;

/*

*/
