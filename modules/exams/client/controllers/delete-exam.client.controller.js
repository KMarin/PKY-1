(function () {
  'use strict';

  angular
    .module('exams')
    .controller('DeleteExamController', DeleteExamController);

  DeleteExamController.$inject = ['$scope', '$rootScope', '$state', '$stateParams', 'ExamsService', 'Authentication', '$uibModalInstance'];

  


  function DeleteExamController($scope, $rootScope, $state, $stateParams, ExamsService, Authentication, $uibModalInstance) {

    $scope.new_exam = {};
    $scope.classes = ['Algebra 1', 'Algebra 2'];

    window.onpopstate = function(event) {
      $uibModalInstance.close();
    };
  
    $scope.delete = function(){
    };
  
    $scope.no = function () {
      $uibModalInstance.close();
    };

  
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  
  }
  
})();
