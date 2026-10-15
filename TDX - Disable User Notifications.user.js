// ==UserScript==
// @name         TDX Phishing Response - Disable User Notifications
// @version      1.0
// @updateURL    https://github.com/ccgthree/tamper-monkey-stuff/raw/main/TDX%20-%20Disable%20User%20Notifications.js
// @downloadURL  https://github.com/ccgthree/tamper-monkey-stuff/raw/main/TDX%20-%20Disable%20User%20Notifications.js
// @description  Unchecks and disables the notify user checkbox on the phished account reponse form.
// @author       Coe Gwathney - https://github.com/ccgthree
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
