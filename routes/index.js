var express = require('express');
var router = express.Router();
var fs = require("fs");
var mysql = require("mysql");
var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456'
	})
	/* GET home page. */
router.post('/', function(req, res, next) {
	connection.connect();
	connection.query('SELECT * FROM class.class_student', function(err, rows, fields) {
		res.header('Access-Control-Allow-Origin', "*")
		res.send(rows)
	});
	connection.end();
});
module.exports = router;