var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/mysql-config.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
