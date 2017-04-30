var mysql = require("mysql");

var source = {
  localhost: {
    port: 3000,
    host: "localhost",
    user: "root",
    password: "wilmerflores1999k",
    database: "burgers_db"
  }
};

// Creating our connection
var connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
