require("dotenv").config();
const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 4002,
  graphUrl: process.env.GRAPH_URL || "",
};

module.exports = config