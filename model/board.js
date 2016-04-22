//dependencies
var schemas = require('./schema/schema.js');
var boardRepository = require('./boardRepository.js');

//Define "constructor"
var board = function(data){
	this.data = data
};
//define data for easy saving into backend
board.prototype.data = {};

//Define generic setter and getter
board.prototype.set = function (name, value) {
	this.data[name] = value;
};

board.prototype.get = function (name){
	return this.data[name];
};

board.prototype.findById = function (id, next){
	boardRepository.findById(id, function(err, board) {
		if (err) throw err;
		// show the one board
		next(board)
	});
};

board.prototype.findAllNames = function(next){

	boardRepository.find({},{name:1}, function(err, boards){
		if(err) throw errl
		//object of all the boards
		next(boards)
	})
}

module.exports = board;