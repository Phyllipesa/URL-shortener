const express = require('express');
const sequelize = require('./config/database');

const app = express();

sequelize.sync().then(() => console.log("database connected sucessfully o/"));

app.use(express.json());

app.listen(3000, () => {
  console.log("Server started on port 3000 =)");
});