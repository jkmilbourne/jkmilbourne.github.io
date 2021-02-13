/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/03/20
*Version:                                         *1.1
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/03/20    v1.0    Joshua Milbourne    Created contact.js
        01/31/21    v1.1    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/


"use strict";

const processEntries = function() {
    let name = $("bookUsName").value;
    let email = $("bookUsEmail").value;
    let phone = $("bookUsPhone").value;
    let isValid = true;

    if (name == "") {
        $("error_bookUs_name").firstChild.nodeValue = "Please enter a name";
        isValid = false;
    }

    if (email == "") {
        $("error_bookUs_email").firstChild.nodeValue = "Please enter an email address";
        isValid = false;
    } else if (!isEmail(email)) {
        $("error_bookUs_email").firstChild.nodeValue = "Invalid email address";
        isValid = false;
    }

    if (phone == "") {
        $("error_bookUs_phone").firstChild.nodeValue = "Please enter a phone number";
        isValid = false;
    } else if (!isPhone(phone)) {
        $("error_bookUs_phone").firstChild.nodeValue = "Invalid phone number";
    }

    if (isValid) {
        $("bookUsForm").submit();
        $("bookUsForm").reset();
    }
};

const timeStamp = function() {
    let currentDate = new Date();
    let amPm = "AM";
	// Get the date parts
	let month = currentDate.getMonth() + 1;
	// month = (month < 10) ? "0" + month : month;
	let day = currentDate.getDate();
	// day = (day < 10) ? "0" + day : day;
    let year = currentDate.getFullYear();
	// Get the time parts
    let hours = currentDate.getHours();
    if (hours == 0) hours = 12;
    if (hours > 12) {
        hours = hours - 12;
        amPm = "PM"
    }
	let minutes = currentDate.getMinutes();
	minutes = ( minutes < 10 ) ? "0" + minutes : minutes;  // Pad minutes
	let dateString =  hours + ":" + minutes + amPm;
    dateString +=  "  " + month + "/" + day + "/" + year;
    console.log(dateString)
    return dateString;    
};

const setDate = function() {
    $("time_stamp").value = timeStamp();
}

window.onload = function () {
    let today = new Date();
    let thisMonth = today.getMonth();
	// display month and year
	$("month_year").firstChild.nodeValue = "< " + getMonthText(thisMonth) + " " + today.getFullYear() + " >";
	
	let lastDayofMonth = getLastDayofMonth(thisMonth);
    let rows = $("calendar").innerHTML;
    
    let date; // the current date; eg, the 1st, the 22nd, etc
    let day;  // the day of the week; eg, Sat, Sun, etc
    let start;
    
    // loop through the number of days in the month
    for (let i = 0; i < lastDayofMonth; i++) {
        // add one to index and use that number as current date
        today.setDate(i + 1);
        
        // get the current date and day
        date = today.getDate();
        day = today.getDay();
        
        // start a new row if it's the first of the month or the day is Sunday
        if (date === 1 || day === 0) { 
            rows = rows.concat("<tr>"); 
        }

        // add blank dates at the beginning of the calendar until
        // you get to the day of the week the month starts on
        if (date === 1 ) { 
            start = 0;
            while (start < day) {
                rows = rows.concat("<td></td>"); 
                start++;
            }
        } 
        
        // add the date to the calendar
        rows = rows.concat("<td>", date, "</td>");
        
        // add blank dates at the end of the calendar until
        // you get to the last day of the week the month ends in
        if (date === lastDayofMonth) { 
            start = day;
            while (start < 6) {
                rows = rows.concat("<td></td>"); 
                start++;
            }
        } 
        
        // end the row if it's the last of the month or the day is Saturday
        if (date === lastDayofMonth || day === 6) { 
            rows = rows.concat("</tr>"); 
        }
    }
    
    // display calendar rows
    $("calendar").innerHTML = rows;
    $("book_us_btn").onclick = processEntries;
    setDate();
    $("bookUsName").focus();
};
