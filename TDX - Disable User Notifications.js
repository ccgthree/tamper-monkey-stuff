// ==UserScript==
// @name         TDX Phishing Response - Disable User Notifications
// @namespace    http://tampermonkey.net/
// @version      2026-10-15
// @description  Unchecks and disables the notify user checkbox on the phished account reponse form.
// @author       ccg0023
// @match        https://uah.teamdynamix.com/TDNext/Apps/1283/Tickets/New?formId=65041
// @icon         https://www.google.com/s2/favicons?sz=64&domain=teamdynamix.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let checkbox = (document.getElementsByName("Item.NotifyRequestor"))[0];

    checkbox.checked = false;
    checkbox.disabled = true;

})();
