// ==UserScript==
// @name         Camunda Cockpit Activity Key Toaster
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Anzeige der Key zu einer Activity im Camunda Cockpit
// @author       Alexander Skrock
// @updateURL    https://raw.githubusercontent.com/AlexanderSkrock/BrowserScripts/master/camundaCockpit_toastActivityKey.user.js
// @downloadURL  https://raw.githubusercontent.com/AlexanderSkrock/BrowserScripts/master/camundaCockpit_toastActivityKey.user.js
// @match        *://*/app/cockpit/*
// @require     https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
// @require     https://cdn.jsdelivr.net/npm/toastify-js
// @resource    toastifyCSS https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @grant       GM.getResourceUrl
// ==/UserScript==


function info(message) {
    Toastify({
        text: message,
        duration: 3000,
        stopOnFocus: true,
        gravity: "bottom",
        style: {
            background: "rgba(51, 51, 153, 0.8)",
        }
    }).showToast();
}

(function() {
    'use strict';

    (async function () {
        // Toastify CSS
        var externalFileURL = await GM.getResourceUrl("toastifyCSS");
        const stylesheet = document.createElement("link");
        stylesheet.setAttribute("rel", "stylesheet");
        stylesheet.setAttribute("href", externalFileURL);
        document.documentElement.appendChild(stylesheet);
    })();

    const getElementId = element => element && element.dataset && element.dataset["elementId"];
    $(document).click(evt => {
        const idElement = evt.target.closest(".djs-element");
        if (idElement) {
            info(getElementId(idElement));
        }
    });
})();
