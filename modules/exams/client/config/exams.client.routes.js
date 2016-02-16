(function () {
  'use strict';

  angular
    .module('exams.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('exams', {
        abstract: true,
        url: '/exams',
        template: '<ui-view/>'
      })
      .state('exams.list', {
        url: '',
        templateUrl: 'modules/exams/client/views/list-exams.client.view.html',
        controller: 'ExamsController',
      })
      .state('exams.create', {
        url: '/create',
        templateUrl: 'modules/exams/client/views/form-exam.client.view.html',
        controller: 'ExamsController',
      })
      .state('exams.edit', {
        url: '/:examId/edit',
        templateUrl: 'modules/exams/client/views/form-exam.client.view.html',
        controller: 'ExamsController',
      })
      .state('exams.view', {
        url: '/:examId',
        templateUrl: 'modules/exams/client/views/view-exam.client.view.html',
        controller: 'ExamsController',
      });
  }

})();
