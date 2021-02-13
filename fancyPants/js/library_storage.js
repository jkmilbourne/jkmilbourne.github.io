/*********************************************************************
***
*Original Author:                                 *Joshua Milbourne
*Date Created:                                    *09/18/20
*Version:                                         *1.
*Date Last Modified:                              *01/31/21
*Modified by:                                     *Joshua Milbourne
*Modification log:                                *
*
        09/18/20    v1.0    Joshua Milbourne    Created library_storage.js
        01/31/21    v1.1    Joshua Milbourne    cleaned up code and add comments
***
*********************************************************************/

"use strict";
const $ = (id) => document.getElementById(id);

const storagePrototype = {
    get: function() {
        let str = localStorage.getItem(this.key) || "";
        return (str === "")? []: str.split("|");
    },

    set:function(arr) {
        if (Array.isArray(arr)) {
            let str = arr.join("|"); 
            localStorage.setItem(this.key, str);
        }
    },

    clear: function() {
        localStorage.setItem(this.key, "");
    }
};

const getTaskStorage = function(key) {
    let storage = Object.create(storagePrototype);
    storage.key = key;
    return storage;
};
