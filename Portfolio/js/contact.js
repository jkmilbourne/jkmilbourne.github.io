/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/30/20
*Version:                                         *1.0
*Date Last Modified:                              *
*Modified by:                                     *
*Modification log:                                *

        09/30/20  Joshua Milbourne  Created contact.js
***
*********************************************************************/

"use strict";

$(document).ready(function() {
    $("#contact_submit").click( function() {

        // get values
        var firstName = $("#fname").val().trim();
        var lastName = $("#lname").val().trim();
        var email = $("#email").val().trim();
        var email2 = $("#email2").val().trim();
        var phone = $("#phone").val().trim();
        var isOK = true;
        ////////////////////////////////////////// first name
        if (firstName === "") {
            $("#first_name_error").text("Required");
            isOK = false;
        } else {
            $("#first_name_error").text("");
        }
        ////////////////////////////////////////// last name
        if (lastName === "") {
            $("#last_name_error").text("Required");
            isOK = false;
        } else {
            $("#last_name_error").text("");
        }
        ////////////////////////////////////////// email
        if (email === "") {
            $("#email_error").text("Required");
            isOK = false;
        } else if (!isEmail(email)) {
            $("#email_error").text("Invalid Email");
            isOK = false;
        } else {
            $("#email_error").text("");
        }
        ////////////////////////////////////////// email2
        if (email2 !== email) {
            $("#email2_error").text("Not a match");
            isOK = false;
        } else {
            $("#email2_error").text("");
        }
        ////////////////////////////////////////// phone
        if (!isPhone(phone)) {
            $("#phone_error").text("Invalid Number")
            isOK = false;
        } else {
            $("#phone_error").text("");
        }
        /////////////////////////////////////////// isOk
        if (isOK) {
            // show results
            $("#contact_result").removeClass("hide");
            // hide form and submit
            $("#contact_form").addClass("hide").submit();
            clearForm();
        }
    });

    $("#reset").click( function() {
        clearForm();
    });

    $("#back").click( function() {
        // hide results
        $("#contact_result").addClass("hide");
        // show form
        $("#contact_form").removeClass("hide");
    })

});


var clearForm = function() {
    // reset all form input fields
    $("#fname").val("");
    $("#lname").val("");
    $("#email").val("");
    $("#email2").val("");
    $("#phone").val("");
    $("#comments").val("");
    // reset all error spans
    $("#first_name_error").text("");
    $("#last_name_error").text("");
    $("#email_error").text("");
    $("#email2_error").text("");
    $("#phone_error").text("");
};


