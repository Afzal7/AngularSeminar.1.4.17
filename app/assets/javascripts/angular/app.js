var app = angular.module('angularSeminar', ['ui.router', 'templates']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider
	.state('index',{
		url: '/',
		templateUrl: 'post.html',
		controller: 'applicationController'
	});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode({
		enabled:true,
		requireBase: false
	});

}]);

app.controller('applicationController',['$scope', '$http', function($scope, $http){

	$scope.users = [
		{name: 'Ankur', age: 35}, 
		{name: 'Manish', age: 45}, 
		{name: 'Gopal', age: 25}
	];

	$scope.delete = function(index){
		$scope.users.splice(index,1);
	}

}]);