// ==UserScript==
// @name         Twitch Popout-Chat Optimizer
// @namespace    http://github.com/AlexanderSkrock
// @version      0.3
// @description  Hide unimportant stuff in Twitch Popout-Chat
// @author       Adagatiya
// @downloadUrl  https://raw.githubusercontent.com/AlexanderSkrock/BrowserScripts/master/twitchPopoutChatOptimizer.user.js
// @updateUrl    https://raw.githubusercontent.com/AlexanderSkrock/BrowserScripts/master/twitchPopoutChatOptimizer.user.js
// @match        https://www.twitch.tv/popout/*/chat?popout=
// @match        https://www.twitch.tv/popout/moderator/*/chat
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeElementsByClass(className){
        var elements = document.getElementsByClassName(className)
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i])
        };
        return elements.length != 0; // Success if elements were deleted
    }

    function tryUntil(func) {
        var interval = setInterval(() => func() && clearInterval(interval), 1000);
    }

    tryUntil(() => removeElementsByClass('stream-chat-header'));
    tryUntil(() => removeElementsByClass('channel-leaderboard'));
})();