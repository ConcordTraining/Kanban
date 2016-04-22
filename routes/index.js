var express = require('express');
var router = express.Router();
var boards = require('../service/boards')
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join('/index.html'));
});

router.get('/getById', boards.getById);

router.get('/getBoards', boards.getAllNames);

module.exports = router;
