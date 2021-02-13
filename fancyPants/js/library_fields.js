/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/18/20
*Version:                                         *1.
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/18/20    v1.0    Joshua Milbourne    Created library_fields.js
        01/31/21    v1.1    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/
"use strict";

const fields = {
    email: {
        message: "Must be a valid email address.",
        required: "Email is required.",
        isEmail: "Email is not valid.",
    },

    password: {
        required: "Password is required.",
    },

    verify: {
        required: "Please retype your password.",
        noMatch: ["Passwords do not match.", "password"],
    },

    first_name: {
        required: "First name is required.",
    },

    last_name: {
        required: "Last name is required.",
    },

    phone: {
        message: "Use 555-123-4567 format.",
        required: "Phone number is required.",
        isPhone: "Phone number is not valid.",
    },

    zip: {
        message: "Use 5 or 9 digit ZIP code.",
        required: "ZIP Code is required.",
        isZip: "ZIP Code is not valid.",
    },

    card_number: {
        message: "Use 1111-2222-3333-4444 format.",
        required: "Card number is required.",
        isCC: "Card number is not valid.",
    },

    exp_date: {
        message: "Use mm/yyyy format.",
        required: "Expiration date is required.",
        isDate: "Expiration date is not valid.",
        expired: "Card has expired.",
    },
};
