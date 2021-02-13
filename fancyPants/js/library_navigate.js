/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/18/20
*Version:                                         *1.
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/18/20    v1.0    Joshua Milbourne    Created library_navigate.js
        01/31/21    v1.1    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/

"use strict";
const $ = (id) => document.getElementById(id);

const navigate = {
    showForm: function() {
        $("registration_form").setAttribute("class","show");
        $("registration_result").setAttribute("class","hide");
    },

    showResults: function() {
        $("registration_form").setAttribute("class","hide");
        $("registration_result").setAttribute("class","show");
    }
};
