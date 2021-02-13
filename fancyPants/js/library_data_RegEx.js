/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/18/20
*Version:                                         *1.
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/18/20    v1.0    Joshua Milbourne    Created library_data_RegEx.js
        01/31/21    v1.1    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/

"use strict";

// validate email address
const isEmail = function(text) {
    if (text.length === 0) return false;
    let parts = text.split("@");
    if (parts.length !== 2 ) return false;
    if (parts[0].length > 64) return false;
    if (parts[1].length > 255) return false;
    let address = "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
    let quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
    let localPart = new RegExp( address + "|" + quotedText );
    if ( !parts[0].match(localPart) ) return false;
    let hostnames = "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
    let tld = "[a-zA-Z0-9]{2,6}";
    let domainPart = new RegExp("^" + hostnames + tld + "$");
    if ( !parts[1].match(domainPart) ) return false;
    return true;
};

// validate phone numbers
const isPhone = function(phone) {
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if ( !phone.match(phonePattern) ) {
        return false;
    }
    return true;
};

// validate credit card numbers
const isCreditCard = function(creditNum) {
    let creditPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if ( !creditNum.match(creditPattern) ) {
        return false;
    }
    return true;
};

// validate Zip Codes
const isZipCode = function(zipCode) {
    let zipCodePattern = /^\d{5}(-\d{4})?$/;
    if ( !zipCode.match(zipCodePattern) ) {
        return false;
    }
    return true;
};

// validate dates
const isDate = function(date) {
    let datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
    if ( !date.match(datePattern) ) {
        return false;
    }
    return true;
};