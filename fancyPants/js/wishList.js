/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/03/20
*Version:                                         *1.
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/03/20    v1.0    Joshua Milbourne    Created wishList.js
        01/31/21    v1.1    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/

"use strict";

const addToTaskList = function () {
    let taskTextbox = $("task");
    let newTask = getTask(taskTextbox.value);
    if (newTask.isValid()) {
        tasklist.add(newTask);
        tasklist.save();
        tasklist.display();
        taskTextbox.value = "";
    } else {
        alert("Please enter a wish.");
    }
    taskTextbox.focus();
};

const clearTaskList = function () {
    tasklist.clear();
    $("task").focus();
};

const deleteFromTaskList = function () {
    tasklist.delete(this.title); // 'this' = clicked link
    tasklist.save();
    tasklist.display();
    $("task").focus();
};

const editTaskListItem = function () {
    let newText = prompt(
        "Please enter new wish text",
        tasklist.tasks[this.title]
    ); // 'this' = clicked link
    let editedTask = getTask(newText);
    if (editedTask.isValid()) {
        tasklist.edit(this.title, editedTask).save().display();
        $("task").focus();
    } else {
        alert("Please enter a valid wish");
    }
};

window.onload = function () {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;

    tasklist.displayDiv = $("tasks");
    tasklist.deleteClickHandler = deleteFromTaskList;
    tasklist.editClickHandler = editTaskListItem;

    tasklist.load();
    tasklist.display();

    $("task").focus();
};
