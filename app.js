require("dotenv/config");
const express = require("express");
require("./config/db.config");

const app = express();
require("./setup/index")(app);

//Routers definition
app.use("/auth", require("./routes/auth.route"));
app.use("/user", require("./routes/user.route"));

module.exports = app;
