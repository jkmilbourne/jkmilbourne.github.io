/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *10/07/20
*Version:                                         *
*Date Last Modified:                              *
*Modified by:                                     *
*Modification log:                                *
***
*********************************************************************/

"use strict";
// document ready
$(document).ready(function() {

    // Get header height
    var headerHeight = $("#myTopnav").outerHeight();

    // smooth scrolling
    $(".slide_section").click(function(e) {
        var linkHref = $(this).attr("href");

        // animate smooth scroll on click with scrollTop needs jQuery ver2.2
        $("html, body").animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 2000);

        // prevent default navigation
        e.preventDefault();
    });
});


// collapse navbar
function myFunction() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};