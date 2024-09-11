// ==UserScript==
// @name         TDX GimmeButton
// @description  Adds a button to the TDX Ticket detail page to grab ticket. It literally only saves one click. I dunno why I made this, but I did and I use it. Shut up.
// @version      2.0
// @updateURL    https://github.com/ccgthree/tamper-monkey-stuff/raw/main/TDXGimmeButton.user.js
// @downloadURL  https://github.com/ccgthree/tamper-monkey-stuff/raw/main/TDXGimmeButton.user.js
// @author       Coe Gwathney - https://github.com/ccgthree
// @match        https://uah.teamdynamix.com/TDNext/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=teamdynamix.com
// @grant        none
// ==/UserScript==

if ( document.location.href.includes("TicketDet") ) {
    var nameString = "Gwathney";
    var responsible = document.getElementById("upResponsibility").innerText;

    let newNav = document.createElement("li");
    newNav.id = "takeTicket";
    newNav.class = "btn-group";

    let buttonContent;

    let gimmeButton = document.createElement("button");
    gimmeButton.id = "btnTake";
    gimmeButton.type = "button";
    gimmeButton.className = "btn btn-danger btn-sm";
    gimmeButton.onclick = "";
    gimmeButton.style.setProperty('background-color','grey','important');
    gimmeButton.title = "Take Ticket";
    gimmeButton.innerHTML = '<span class="fa-solid fa-handshake fa-nopad" aria-hidden="true"></span><span class="padding-left-xs">Take Ticket</span>'

    if ( !responsible.includes(nameString) ) {
        gimmeButton.onclick = function() {
            __doPostBack('btnTakeTicket','');
            setTimeout(() => {
                location.reload()
            }, 1000);
        }
        gimmeButton.style.setProperty('background-color','#bf3935','important');
    }

    // if ( responsible.includes(nameString) ) {
    //     buttonContent = '<button id="btnTake" type="button" aria-label="Take" class="btn btn-danger btn-sm" aria-expanded="false" style="background-color:grey!important;" onclick="" title="Take Ticket"><span class="fa-solid fa-handshake fa-nopad" aria-hidden="true"></span><span class="padding-left-xs">Take Ticket</span></button>';
    //     } else {
    //     buttonContent = '<button id="btnTake" type="button" aria-label="Take" class="btn btn-danger btn-sm" aria-expanded="false" onclick="__doPostBack(\'btnTakeTicket\',\'\');" title="Take Ticket"><span class="fa-solid fa-handshake fa-nopad" aria-hidden="true"></span><span class="padding-left-xs">Take Ticket</span></button>';
    // }

    //newNav.innerHTML = buttonContent;

    newNav.appendChild(gimmeButton);

    document.getElementsByClassName("nav nav-pills pull-left padding-top-xs padding-left")[0].appendChild(newNav);
    //document.getElementById("takeTicket").appendChild(newButtonInnards);
}
