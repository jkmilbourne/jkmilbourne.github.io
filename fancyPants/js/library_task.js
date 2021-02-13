/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/18/20
*Version:                                         *1.
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/18/20    v1.0    Joshua Milbourne    Created library_tasks.js
        01/31/21    v1.1    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/

"use strict";

const taskPrototype = {
	isValid: function() {
	if (this.text === "") { return false; } 
    else { return true; }
	},

	toString: function() {
	let first = this.text.substring(0,1);
	return first.toUpperCase() + this.text.substring(1);
	}
};

const getTask = function(taskText) {
	let task = Object.create(taskPrototype);
	task.text = taskText;
	return task;
};