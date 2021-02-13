/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/01/20
*Version:                                         *1.2
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/01/20    v1.0    Joshua Milbourne    Created home.js
        01/31/21    v1.1    Joshua Milbourne    fixed order of clear for and submit in processEntries()
        01/31/21    v1.2    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/

"use strict";
// $ function
const $ = (id) => document.getElementById(id);

// process and validate entries
const processEntries = function () {
    // variables and entries
    let email = $("email_address_news").value;
    let fisrtName = $("first_name_news").value;
    let lastName = $("last_name_news").value;
    let isValid = true;

    // data validation
    if (email === "") {
        $("error_email_news").firstChild.nodeValue = "Required";
        isValid = false;
    } else if (!isEmail(email)) {
        $("error_email_news").firstChild.nodeValue =
            "Please enter a valid email";
        isValid = false;
    } else {
        $("error_email_news").firstChild.nodeValue = "";
    }

    if (fisrtName == "") {
        $("error_first_name_news").firstChild.nodeValue = "Required";
        isValid = false;
    } else {
        $("error_first_name_news").firstChild.nodeValue = "";
    }

    if (lastName == "") {
        $("error_last_name_news").firstChild.nodeValue = "Required";
        isValid = false;
    } else {
        $("error_last_name_news").firstChild.nodeValue = "";
    }

    // if valid data submit form
    if (isValid == true) {
        // clear error messages
        $("error_email_news").firstChild.nodeValue = "";
        $("error_first_name_news").firstChild.nodeValue = "";
        $("error_last_name_news").firstChild.nodeValue = "";
        
        // submit form
        // swapped submit and clear JM 01/31/21 to allow form to submit to form
        submitForm();
        // clearForm();
    }
};

// clear text boxes on double click
const clearEmail = function () {
    $("email_address_news").value = "";
};
const clearFirstName = function () {
    $("first_name_news").value = "";
};
const clearLastName = function () {
    $("last_name_news").value = "";
};

const clearForm = function () {
    clearEmail();
    clearFirstName();
    clearLastName();
};

const submitForm = function () {
    document.getElementById("newsletter_form").submit();
};

//event handler
window.onload = function () {
    // subscribe button
    $("join_newsletter").onclick = processEntries;

    // clear entries on double click of text box
    $("email_address_news").ondblclick = clearEmail;
    $("first_name_news").ondblclick = clearFirstName;
    $("last_name_news").ondblclick = clearLastName;
};
