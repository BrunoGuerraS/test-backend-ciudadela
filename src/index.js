const createApp = require("./app");
const config = require("./config/config");

(async () => {
  
  const app = await createApp();
  app.listen(config.port, () => {
    console.log(`Mi port ${config.port}`);
  });
})();
