require("dotenv").config();

module.exports = {
  env: {
    appName: process.env.APP_NAME,
    appUrl: process.env.APP_URL,
    email: process.env.MAIN_EMAIL,
  },
};
