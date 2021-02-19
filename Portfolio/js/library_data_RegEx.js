/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/18/20
*Version:                                         *1.0
*Date Last Modified:                              *
*Modified by:                                     *
*Modification log:                                *

        09/18/20  Joshua Milbourne  v1.0  Created library_data_RegEx.js
***
*********************************************************************/

"use strict";
// validate email address
var isEmail = function(text) {
    if (text.length === 0) return false;
    var parts = text.split("@");
    if (parts.length !== 2 ) return false;
    if (parts[0].length > 64) return false;
    if (parts[1].length > 255) return false;
    var address = "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
    var quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
    var localPart = new RegExp( address + "|" + quotedText );
    if ( !parts[0].match(localPart) ) return false;
    var hostnames = "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
    var tld = "[a-zA-Z0-9]{2,6}";
    var domainPart = new RegExp("^" + hostnames + tld + "$");
    if ( !parts[1].match(domainPart) ) return false;
    return true;
};
// validate phone numbers
var isPhone = function(phone) {
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if ( !phone.match(phonePattern) ) {
        return false;
    }
    return true;
};
// validate credit card numbers
var isCreditCard = function(creditNum) {
    var creditPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if ( !creditNum.match(creditPattern) ) {
        return false;
    }
    return true;
};
// validate Zip Codes
var isZipCode = function(zipCode) {
    var zipCodePattern = /^\d{5}(-\d{4})?$/;
    if ( !zipCode.match(zipCodePattern) ) {
        return false;
    }
    return true;
};
// validate dates
var isDate = function(date) {
    var datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
    if ( !date.match(datePattern) ) {
        return false;
    }
    return true;
}