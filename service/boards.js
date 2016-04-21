//Boards.js
var Board = require('../model/board.js');

var boards = {
	getAllNames: function(req, res){
		new Board().findAllNames(function(Board){
			res.json(Board);
		})
	}
};

 module.exports = boards;