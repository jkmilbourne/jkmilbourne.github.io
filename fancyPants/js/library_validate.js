/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/18/20
*Version:                                         *1.
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/18/20    v1.0    Joshua Milbourne    Created library_validate.js
        01/31/21    v1.1    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/

"use strict";
const Validate = function() {
    this.month = 0;
    this.year = 0;
};

Validate.prototype.isBlank = function(text) {
    return (text === "");
};

Validate.prototype.isMatch = function(text1, text2) {
    return (text1 === text2);
};

Validate.prototype.isEmail = function(text) {
    if (text.length === 0) return false;
    let parts = text.split("@");
    if (parts.length !== 2 ) return false;
    if (parts[0].length > 64) return false;
    if (parts[1].length > 255) return false;
    let address =
        "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
    let quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
    let localPart = new RegExp( address + "|" + quotedText );
    if ( !parts[0].match(localPart) ) return false;
    let hostnames =
        "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
    let tld = "[a-zA-Z0-9]{2,6}";
    let domainPart = new RegExp("^" + hostnames + tld + "$");
    if ( !parts[1].match(domainPart) ) return false;
    return true;
};

Validate.prototype.isPhone = function(text) {
    return /^\d{3}-\d{3}-\d{4}$/.test(text);
};

Validate.prototype.isZip = function(text) {
    return /^\d{5}(-\d{4})?$/.test(text);
};

Validate.prototype.isCC = function(text) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(text);
};

Validate.prototype.isDate = function(text) {
    if ( ! /^[01]\d\/\d{4}$/.test(text) ) return false;
    let dateParts = text.split("/");
    this.month = parseInt(dateParts[0]);
    this.year = parseInt(dateParts[1]);
    if ( this.month < 1 || this.month > 12 ) return false;
    return true;
};

Validate.prototype.hasExpired = function(text) {
    if (this.isDate(text)) {
        let now = new Date();
        let exp = new Date( this.year, this.month);
        return ( now > exp );
    } else { return false; }
};