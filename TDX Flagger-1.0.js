// ==UserScript==
// @name         TDX Flagger
// @version      1.0
// @description  Adds a button to the TDX Ticket detail page to flag a ticket.
// @author       Coe Gwathney - https://github.com/ccgthree
// @match        https://uah.teamdynamix.com/TDNext/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=teamdynamix.com
// @grant        none
// ==/UserScript==

if ( document.location.href.includes("TicketDet?") ) {
    var flagStatus = document.getElementById("btnToggleFlag");

    let newNav = document.createElement("li");
    newNav.id = "flagToggle";
    newNav.class = "btn-group";

    let buttonContent;

    buttonContent = '<button id="btnFlag" type="button" aria-label="FlagThis" class="btn btn-info btn-sm" aria-expanded="false" onclick="__doPostBack(\'btnToggleFlag\',\'\');" title="' + flagStatus.innerText + '"><span class="fa-solid fa-flag fa-nopad" aria-hidden="true"></span><span class="padding-left-xs">' + flagStatus.innerText + '</span></button>';

    console.log(buttonContent);

    newNav.innerHTML = buttonContent;

    document.getElementsByClassName("nav nav-pills pull-left padding-top-xs padding-left")[0].appendChild(newNav);
    //document.getElementById("flagToggle").appendChild(newButtonInnards);
}
