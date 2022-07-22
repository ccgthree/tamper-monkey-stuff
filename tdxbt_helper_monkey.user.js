// ==UserScript==
// @name         TDXBT Helper Monkey
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  TDXBT Helper Monkey opens your BeyondTrust rep console when generating a new support session in TeamDynamix.
// @author       Coe Gwathney <ccg0023@uah.edu>
// @match        https://uah.teamdynamix.com/SBTDNext/Integrations/1283/236/details?ticketID=*&tdSessionID=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=teamdynamix.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    const submitButton = document.getElementsByClassName("btn-primary");
    submitButton[0].addEventListener('click', function(){
        window.open('https://remote.uah.edu/api/client_script?type=rep&operation=generate&action=login');
    }, false);
})();
