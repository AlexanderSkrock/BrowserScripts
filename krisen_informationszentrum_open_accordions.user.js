// ==UserScript==
// @name         Krisen Informationsztrum Akkordeons Quickfix
// @namespace    http://github.com/AlexanderSkrock
// @version      0.1
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
        var elements = document.getElementsByClassName(className)
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove(className)
        };
        return elements.length !== 0; // Success if elements were deleted
    }

    removeClassFromElements('inside');
})();