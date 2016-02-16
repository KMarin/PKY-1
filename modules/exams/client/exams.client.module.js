(function (app) {
  'use strict';

  app.registerModule('exams');
  app.registerModule('exams.services');
  app.registerModule('exams.routes', ['ui.router', 'exams.services']);
})(ApplicationConfiguration);
