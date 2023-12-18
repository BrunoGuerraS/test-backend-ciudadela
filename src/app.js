const express = require("express");
const cors = require("cors");
const useGraphql = require("./graphql");
const routerApi = require("./routes");

const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("Hola mi server en express");
  });
  routerApi(app);
  await useGraphql(app);

  return app;
};

module.exports = createApp;
