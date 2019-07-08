const characters = require("../routes/api/characters");

module.exports = app => {
  // use routes
  app.use("/api/users", characters);
};
