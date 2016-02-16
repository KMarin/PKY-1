'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  
var ClassTypes = ["Algebra 1", "Algebra 2"];

/**
 * Exam Schema
 */
var ExamSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
	type: String  
  },
  class: {
    type: String,
    enum: ClassTypes,
    required: 'Exam class cannot be blank'
  },
  questions: [{ 
    type: Schema.Types.ObjectId, 
	ref: 'Question' 
   }]
 
});

mongoose.model('Exam', ExamSchema);
