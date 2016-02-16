'use strict';

/**
 * Module dependencies
 */
var examsPolicy = require('../policies/exams.server.policy'),
  exams = require('../controllers/exams.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/exams').all(examsPolicy.isAllowed)
    .get(exams.listAll)
    .post(exams.create);
	
  app.route('/api/exams/:classId').all(examsPolicy.isAllowed)
    .get(exams.listByClassID);

  // Single exam routes
  app.route('/api/exams/:examId').all(examsPolicy.isAllowed)
    .get(exams.read)
    .put(exams.update)
    .delete(exams.delete);

  // Finish by binding the exam middleware
  app.param('classId', exams.examsByClassID);
  app.param('examId', exams.examByID);
};
