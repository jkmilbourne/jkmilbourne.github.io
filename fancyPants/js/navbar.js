/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *01/30/21
*Version:                                         *1.0
*Date Last Modified:                              *01/30/21
*Modified by:                                     *Joshua Milbounre
*Modification log:                                *

    01/30/21    v1.0    Joshua Milbourne    Created navbar.js file
***
*********************************************************************/

"use strict"
const $ = (id) => document.getElementById(id);
const navMobile = $('nav-mobile');
const mobileMenuBtn = $('mobile-menu-btn');
const mobileExitBtn = $('mobile-exit-btn');

mobileMenuBtn.addEventListener('click', () => {
    navMobile.classList.add('nav-mobile-open');
});

mobileExitBtn.addEventListener('click', () => {
    navMobile.classList.remove('nav-mobile-open');
})