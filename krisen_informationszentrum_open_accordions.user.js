// ==UserScript==
// @name         Krisen Informationsztrum Akkordeons Quickfix
// @namespace    http://github.com/AlexanderSkrock
// @version      0.2
// @description  Ausklappen aller Akkordeons bei den Theme-Settings
// @author       Adagatiya
// @downloadUrl  https://raw.githubusercontent.com/AlexanderSkrock/BrowserScripts/master/krisen_informationszentrum_open_accordions.user.js
// @updateUrl    https://raw.githubusercontent.com/AlexanderSkrock/BrowserScripts/master/krisen_informationszentrum_open_accordions.user.js
// @match        http://krisen-informationszentrum.de/wp-admin/themes.php?page=fw-settings
// @match        https://krisen-informationszentrum.de/wp-admin/themes.php?page=fw-settings
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeClassFromElements(className){
        var elements = document.getElementsByClassName(className);
        while(elements && elements.length > 0){
            elements[0].classList.remove(className);
        }
    }

    var interval = setInterval(() => removeClassFromElements('inside'), 1000);
})();