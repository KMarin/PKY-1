(function () {
  'use strict';

  angular
    .module('exams')
    .controller('ExamsController', ExamsController);

  ExamsController.$inject = ['$scope','$state','$stateParams', 'ExamsService', 'Authentication','$uibModal'];

  function ExamsController($scope, $state, $stateParams, ExamsService, Authentication, $uibModal) {
	
	
	
	
	
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/modules/exams/client/views/add-question.client.view.html',
      controller: 'AddQuestionController',
	  windowClass: 'add-question-modal',
      size: "lg",
      resolve: {
        selected_exam: function () {
          return $scope.selected_exam;
        }
      }
    });

    modalInstance.result.then(function (result) {
    }, function () {
      
    });
  };

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$scope.exam = {};
	$scope.exams = [];
	$scope.selected_exam = null;
	
	if($stateParams.examId){
		ExamsService.get_exam($stateParams.examId)
		.then(function(response){
			$scope.exam = response.data;
		});
	}
	else{
		ExamsService.get_exams()
		.then(function(response){
			$scope.exams = response.data;
		});
	}
	
	$scope.add_question = function(){
		
	};

	$scope.select_exam = function(exam){
		$scope.selected_exam = exam;
	};
	
	$scope.create_exam = function(exam){
		ExamsService.create_exam(exam)
		.then(function(response){
			console.log(response);
		}, function(error){
			console.log(error);
		});
	};
	
	$scope.update = function(){
		
	};
	
	$scope.delete = function(){
		
	};
	

	
	
  }
  
})();
