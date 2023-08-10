// ==UserScript==
// @name         TDX Reload
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://uah.teamdynamix.com/TDNext/Home/Desktop/Default.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=teamdynamix.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Refresh every three minutes.
    setTimeout(function(){ location.reload(); }, 180*1000);
})();