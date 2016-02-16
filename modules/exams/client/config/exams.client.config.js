(function () {
  'use strict';

  angular
    .module('exams')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Exams',
      state: 'exams',
      type: 'dropdown',
      roles: ['admin', 'user']
    });
	
    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'exams', {
      title: 'View Exams',
      state: 'exams.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'exams', {
      title: 'Create Exam',
      state: 'exams.create',
      roles: ['user']
    });
  }
})();
