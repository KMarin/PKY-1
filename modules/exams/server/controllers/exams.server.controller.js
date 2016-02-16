'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Exam = mongoose.model('Exam'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create an article
 */
exports.create = function (req, res) {
  var exam = new Exam(req.body);
  
  console.log(exam);

  exam.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(exam);
    }
  });
};

/**
 * Show the current exam
 */
exports.read = function (req, res) {
  res.json(req.exam);
};

/**
 * Update an exam
 */
exports.update = function (req, res) {
  var exam = req.exam;
  exam.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(exam);
    }
  });
};

/**
 * Delete an exam
 */
exports.delete = function (req, res) {
  var exam = req.exam;
  exam.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(exam);
    }
  });
};

/**
 * List of Exams
 */
exports.listAll = function (req, res) {
  Exam.find().sort('-created').populate('questions').exec(function (err, exams) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(exams);
    }
  });
};

exports.listByClassID = function (req, res) {
	res.json(req.exams);
};

/**
 * Exam middleware
 */
exports.examByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Invalid exam ID'
    });
  }

  Exam.findById(id).populate('questions').exec(function (err, exam) {
    if (err) {
      return next(err);
    } else if (!exam) {
      return res.status(404).send({
        message: 'No exam with that identifier has been found'
      });
    }
    req.exam = exam;
    next();
  });
};

exports.examsByClassID = function (req, res, next, classID) {
  Exam.find({'class': classID}).sort('-created').populate('questions').exec(function (err, exams) {
    if (err) {
      return next(err);
    } else if (!exams) {
      return res.status(404).send({
        message: 'No exams associated with' + classID + ' found'
      });
    }
    req.exams = exams;
    next();
  });
};
