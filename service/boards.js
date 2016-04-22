//Boards.js
var Board = require('../model/board.js');

var boards = {
	getById: function(req, res){
		var board = new Board(req.query);
		board.findById(board.get("_id"), function(returnedBoard){
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