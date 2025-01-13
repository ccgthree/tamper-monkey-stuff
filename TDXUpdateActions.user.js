// ==UserScript==
// @name         TDX Update Actions
// @description  Adds a button to the TDX Ticket detail page to grab ticket. It literally only saves one click. I dunno why I made this, but I did and I use it. Shut up.
// @version      1.1
// @author       Coe Gwathney - https://github.com/ccgthree
// @match        https://uah.teamdynamix.com/TDNext/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=teamdynamix.com
// @grant        none
// @run-at       document-idle

// ==/UserScript==

// Need a small, 500ms timeout to allow the DOM to finish loading.
setTimeout(function(){

if ( document.location.href.includes("Update?") ) {
    let statusOptions = {
        "closed": 52802,
        "onHold": 52804
    }

    let closedBody = "✅ Closing as complete."

    function updateTicket(menuChoice,bodyText) {
        let statusMenu = document.getElementById("NewStatusId");
        let updateBody = document.getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName("body")[0];
        statusMenu.value = statusOptions[menuChoice];
        let existingText = updateBody.innerText
        if ( updateBody.innerText.length > 1 ) { bodyText = existingText + '\n' + bodyText };
        updateBody.innerText = bodyText;
        //document.getElementById("NewStatusId").value = statusOptions[menuChoice];
        //document.getElementsByClassName("cke_editable")[0].innerText = bodyText;
    };

    let closeButton = document.createElement("button");
    closeButton.className = "btn btn-danger btn-sm";
    closeButton.innerHTML = '<span class="fa-solid fa-check"></span><span>Close Ticket<span>';
    closeButton.addEventListener(
        'click',
        function(){
            updateTicket("closed",closedBody);
        },
        false);

    let holdOneWkButton = document.createElement("button");
    holdOneWkButton.className = "btn btn-info btn-sm";
    holdOneWkButton.innerHTML = '<span class="fa-solid fa-check"></span><span>Hold: 1wk<span>';
    holdOneWkButton.addEventListener(
        'click',
        function(){
            updateTicket("onHold","Placing on hold for one week.");
        },
        false);

    let targetColumn = document.getElementsByClassName("col-sm-4")[0];

    let buttonPanel = document.createElement("div");
    buttonPanel.className = "panel panel-default";

    let panelTitle = document.createElement("div");
    panelTitle.className = "panel-heading";
    panelTitle.innerHTML = '<h3><span class="fa-solid fa-person-running"></span>Quick Actions</h3>';

    let panelBody = document.createElement("div");
    panelBody.className = "panel-body";
    //panelBody.innerHTML = "<ul><li>foo</li><li>bar</li><li>baz</li></ul>";
    panelBody.appendChild(closeButton);
    //panelBody.appendChild(holdOneWkButton);

    targetColumn.prepend(buttonPanel);
    buttonPanel.append(panelTitle);
    buttonPanel.append(panelBody);

}}, 500);
