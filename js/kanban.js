var kanbanApp = angular.module('kb', ['ngRoute'])
  .config(['$routeProvider',function($routeProvider){
      'use Strict';
      $routeProvider.when('/kanban',{
        templateUrl:'/test.html',
        controller:'TestController'
      });
  }])
	.controller('TestController', ['$scope', 'boardsService', function($scope, boardService){
		'use strict';
		boardService.setBoard().then(
			function success(){
				var board = boardService.getBoard(),
				message;
				if(board){
					message = board;
				} else {
					message = 'no board found';
				}
				$scope.message = message;
			},
			function failure(result){
					console.error(result);
					$scope.message = 'error getting board';
			});
		$scope.message = 'Howdy there world'
	}])
	.factory('boardsService', ['$http', '$q', function ($http, $q){
		'use strict';		
		var board = {},
		config = {url: '/getById', method: 'GET', params: {_id:"570dc7d19f3e83ec1d7d064e"}},
		setBoard = function(){
			var promise = $http(config).then(
				function success(result){
					board = result.data;
					return $q.resolve(result);
				},
				function failure(result){
					return $q.reject(result);
			});
			return $q.resolve(promise);
		},
	  	getBoard = function(){
	      return board;
	    	},
	    getBoardName = function(){
	      return board.name;
	    },
	    getToDo = function(){
	      return board.todo;
	    },
	    getDoing = function(){
	      return board.doing;
	    },
	    getDone = function(){
	      return board.done;
	    }
	return {
      setBoard:setBoard,
      getBoard:getBoard,
      getBoardName:getBoardName,
      getToDo:getToDo,
      getDoing:getDoing,
      getDone:getDone

	};
}])
  .controller('KanbanTableController',['$scope','$element','boardsService',function($scope,$element,boardsService){
    'use strict';
    $scope.tableName = $element.attr('table-name');
    boardsService.setBoard().then(
      function success(){
        var taskStatus = $element.attr('task-status');
	  	$scope.taskStatus = taskStatus;
        var taskGetter = boardsService[taskStatus];
        $scope.tasks = taskGetter();
        var board = boardsService.getBoard();
        $scope.task = board
      },
      function failure(result){
        console.error(result);
        $scope.boardNames=['error getting board names'];
      }
    );
  }])
	.directive('kanbanTable',function(boardsService){
    'use strict';
    var temp = '<h3>{{tableName}}</h3><table border="1"><th>Name</th><th>Description</th><tr ng-repeat="task in tasks"><td>{{task.name}}</td><td>{{task.description}}</td><td><button ng-controller="PromoteButtonController" ng-click="promoteTask()" task-status={{taskStatus}} ng-hide="isDone()" task-name={{task.name}} task-description={{task.description}}>Promote Task</button></td></tr></table>';
	return {
      restrict:"A",
      replace:false,
      template:temp,
      scope:{tasks:'@'},
      controller:'KanbanTableController'
    };
  });