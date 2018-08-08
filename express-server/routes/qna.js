var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbconfig = require('../config/mysql-config.js');
var connection = mysql.createConnection(dbconfig);

var query = require('../const/query/qna.js');

/* GET qna listing. */
router.get('/', function(req, res, next) {
	//TODO: exception
	if (typeof req.query.id !== 'undefined' && req.query.id) {
		console.log(req.query.id);
		var id = req.query.id;
	} else {
		console.log("id 검색하자아")
		var id = '%'
	}
	connection.query(query.selectById, id,
		function(err, rows, fields) {
			if (err) throw err;
			console.log(rows);
			res.send(rows);
		});
});

module.exports = router;
