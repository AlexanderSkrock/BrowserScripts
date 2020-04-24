// ==UserScript==
// @name         Twitch Popout-Chat Optimizer
// @namespace    http://github.com/AlexanderSkrock
// @version      0.2
// @description  Hide unimportant stuff in Twitch Popout-Chat
// @author       Adagatiya
// @downloadUrl  https://gist.githubusercontent.com/AlexanderSkrock/91431c1ddb5d0ed9461c3b58df7479d1/raw/c6c97f977aaf0cbb3e4c09c33188bbe646d63e58/twitchPopoutChatOptimizer.js
// @updateUrl    https://gist.githubusercontent.com/AlexanderSkrock/91431c1ddb5d0ed9461c3b58df7479d1/raw/c6c97f977aaf0cbb3e4c09c33188bbe646d63e58/twitchPopoutChatOptimizer.js
// @match        https://www.twitch.tv/popout/*/chat?popout=
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