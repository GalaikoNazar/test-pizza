const mysql = require("mysql2");
const nodemailer = require("nodemailer");

// MySQL
module.exports.connection = mysql
  .createConnection({
    host: "",
    user: "",
    database: "",
    password: ""
  })
  .promise();

module.exports.transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "",
    pass: ""
  },
  tls: {
    rejectUnauthorized: false
  }
});
