const express = require('express');
const sequelize = require('./config/database');
const Routes = require("./routes/index.routes")


const app = express();

sequelize.sync().then(() => console.log("database connected sucessfully o/"));

app.use(express.json());

app.use("/", Routes);

app.listen(3000, () => {
  console.log("Server started on port 3000 =)");
});