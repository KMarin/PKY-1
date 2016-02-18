(function () {
  'use strict';

  angular
    .module('exams')
    .controller('AddExamController', AddExamController);

  AddExamController.$inject = ['$scope', '$rootScope', '$state', '$stateParams', 'ExamsService', 'Authentication', '$uibModalInstance'];

  function AddExamController($scope, $rootScope, $state, $stateParams, ExamsService, Authentication, $uibModalInstance) {

    $scope.new_exam = {};
    $scope.classes = ['Algebra 1', 'Algebra 2'];
	
    $scope.submit = function(){
      ExamsService.create_exam($scope.new_exam)
		.then(function(response){
  console.log(response);
  $scope.ok();
		}, function(error){
  console.log(error);
  $scope.ok();
		});
    };
	
    $scope.ok = function () {
      $uibModalInstance.close();
    };

	
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
	
  }
  
})();
