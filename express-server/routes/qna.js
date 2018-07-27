var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../config/mysql-config.js');
var connection = mysql.createConnection(dbconfig);

var query = require('../const/query/qna.js');

/* GET qna listing. */
router.get('/', function(req, res, next) {
	connection.connect();
	
	connection.query(query.selectAll,
		function(err, rows, fields) {
			if (err) throw err;
			console.log(rows);
			res.send(rows);
		});
	
	connection.end();
});

module.exports = router;
