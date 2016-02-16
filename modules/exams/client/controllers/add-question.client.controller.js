(function () {
  'use strict';

  angular
    .module('exams')
    .controller('AddQuestionController', AddQuestionController);

  AddQuestionController.$inject = ['$scope','$state','$stateParams', 'ExamsService', 'Authentication','$uibModalInstance','selected_exam'];

  function AddQuestionController($scope, $state, $stateParams, ExamsService, Authentication, $uibModalInstance,selected_exam) {
  $scope.selected_exam = selected_exam;
  $scope.question_content = null;
  $scope.answers_content = [];
  $scope.num_mc_answers = 0;
  
  $scope.add_new_mc_answer = function(){
	  $scope.num_mc_answers += 1;
	  $scope.answers_content.push({
		  content: "",
		  id: $scope.num_mc_answers,
		  correct: false,
	  });
  };
  
  $scope.remove_mc_answer = function(index){
	$scope.answers_content.splice(index, 1);  
  };

  $scope.ok = function () {
    $uibModalInstance.close();
  };
  
  $scope.submit = function(){
	// post question, add question to test  
	var question ={
		type: $scope.selected_type,
		exam: $scope.selected_exam._id,
		content: $scope.question_content,
		answers: $scope.answers_content	
	};

	ExamsService.create_question(question)
	.then(function(response){
		console.log(response);
	}, function(error){
		console.log(error);
	});
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  

	
	
  }
  
})();
