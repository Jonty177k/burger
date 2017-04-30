var connection = require("./connection.js");

var tableName = "burgers";

var orm = {

	selectAll: function(callback) {

		var s = "SELECT * FROM " + tableName;

		connection.query(s, function(err, result) {
	      callback(result);
	    });
	};

	insertOne: function(newBurg, callback) {

		var s = "INSERT INTO " + tableName + " (burger_name) VALUES (?)";

	    connection.query(s, [newBurg.burger_name], function(err, result) {
	      callback(result);
	    });

	}

	updateOne: function() {

	}


}











module.exports = orm;
