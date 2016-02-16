'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var QuestionTypes = ["multiple choice", "multiple select", "fill in the blank"];

/**
 * Question Schema
 */
var QuestionSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  /* 
  TODO: tests standards fields 
  */
  type: {
    type: String, 
    enum: QuestionTypes,
    required: 'Question type cannot be blank'
  },
  content: {
    type: String,
	required: true
  },
  answers: [{
	  content:{
	    type: String,
	    default: '',  
	  },
	  value: {
	    type: Number,
		default: -1,
	  },
	  tolerance:{
		type: Number,
		default: 0
	  },
	  correct:{
		type: Boolean,
		default: false,
	  }
  }]
});

mongoose.model('Question', QuestionSchema);
