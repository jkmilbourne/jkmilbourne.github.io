/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/18/20
*Version:                                         *1.
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/18/20    v1.0    Joshua Milbourne    Created register.js
        01/31/21    v1.1    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/

"use strict";
let registerForm;

window.onload = function() {
    //create validation object and set field messages
    registerForm = new RegisterForm();
    registerForm.resetForm();
    
    $("register").onclick = function() {
        if ( registerForm.validateForm() ) { 
            $("registration_form").submit();  //if form data is valid submit form
        }
    };
    
    $("reset").onclick = function() {
        registerForm.resetForm();
    };
};