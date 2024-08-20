// ==UserScript==
// @name         TDX Flagger
// @version      2.2
// @updateURL    https://github.com/ccgthree/tamper-monkey-stuff/raw/main/TDXFlagger.user.js
// @downloadURL  https://github.com/ccgthree/tamper-monkey-stuff/raw/main/TDXFlagger.user.js
// @description  Adds a button to the TDX Ticket detail page to flag a ticket.
// @author       Coe Gwathney - https://github.com/ccgthree
// @match        https://uah.teamdynamix.com/TDNext/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=teamdynamix.com
// @grant        none
// ==/UserScript==

if ( document.location.href.includes("TicketDet?") ) {
    var flagStatus = document.getElementById("btnToggleFlag");
    
    let flagSpan = document.createElement("span");
    flagSpan.classList.add("fa");
    flagSpan.classList.add("fa-flag");
    flagSpan.style.fontSize = "2em";
    flagSpan.style.color = "red";

    let statusContainer = document.getElementsByClassName("col-sm-3")[0];
    
    if ( flagStatus.innerText == "Unflag" ) {
        statusContainer.appendChild(flagSpan);
    }      

    //<span class="fa fa-flag" style="font-size:2em; color:red;"></span>

    let newNav = document.createElement("li");
    newNav.id = "flagToggle";
    newNav.class = "btn-group";

    let buttonContent;

    let flagButton = document.createElement("button");
    flagButton.id = "btnFlag";
    flagButton.type = "button";
    flagButton.className = "btn btn-info btn-sm";
    flagButton.onclick = function() {
        __doPostBack('btnToggleFlag','');
        location.reload();
    }
    flagButton.title = flagStatus.innerText;
    flagButton.innerHTML = '<span class="fa-solid fa-flag fa-nopad" aria-hidden="true"></span><span class="padding-left-xs">' + flagStatus.innerText + '</span>';


    //buttonContent = '<button id="btnFlag" type="button" aria-label="FlagThis" class="btn btn-info btn-sm" aria-expanded="false" onclick="__doPostBack(\'btnToggleFlag\',\'\');" title="' + flagStatus.innerText + '"><span class="fa-solid fa-flag fa-nopad" aria-hidden="true"></span><span class="padding-left-xs">' + flagStatus.innerText + '</span></button>';

    //newNav.innerHTML = buttonContent;

    newNav.appendChild(flagButton);

    document.getElementsByClassName("nav nav-pills pull-left padding-top-xs padding-left")[0].appendChild(newNav);
    //document.getElementById("flagToggle").appendChild(newButtonInnards);
}
