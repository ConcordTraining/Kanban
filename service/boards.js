//Boards.js
var Board = require('../model/board.js');

var boards = {
	getById: function(req, res){
		var id = req.query;
		new Board().findById(id, function(returnedBoard){
			res.json(returnedBoard);
		})
	},
	getAllNames: function(req, res){
		new Board().findAllNames(function(Board){
			res.json(Board);
		})
	}
};

 module.exports = boards;