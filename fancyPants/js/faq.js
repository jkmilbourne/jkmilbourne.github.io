/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/03/20
*Version:                                         *1.1
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/03/20    v1.0    Joshua Milbourne    Created faq.js
        01/31/21    v1.1    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/


"use strict";
const $ = (id) => document.getElementById(id);


// toggles for faq
const toggle = function() {
    let a = this;
    let h2 = a.parentNode;
    let div = h2.nextElementSibling;

    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    }
    else {
        h2.className = "minus";
    }

    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    }
    else {
        div.className = "open";
    }
};

//event handler
window.onload = function () {
    let faqs = $("faqs");
    let aElements = faqs.getElementsByTagName("a");

    for (let i = 0; i < aElements.length; i++) {
        aElements[i].onclick = toggle;
    }
};