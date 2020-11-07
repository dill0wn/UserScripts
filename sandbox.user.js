// ==UserScript==
// @name         Desktop Notification Tester
// @description  Testing Desktop notifications with tampermonkey
// @author       dill0wn
// @version      1.0.0
// @updateUrl    https://github.com/dill0wn/UserScripts/raw/master/sandbox.user.js
// @downloadUrl  https://github.com/dill0wn/UserScripts/raw/master/sandbox.user.js
// @namespace    http://example.tld
// @match        https://direct.playstation.com/*
// @grant        GM_notification
// ==/UserScript==

/*
    README:
    - In TM Setttings, set Script Update -> Check Interval to 'Every 6 Hours'
*/

/*
    @updateUrl Notes:
    - You don't need @updateUrl, if installed by clicking a *.user.js link
    - @updateUrl + @downloadUrl are not necessary, but can provide canonical style behavior, esp if copy/paste installed
    - TM doesn't check immediately for updates
    - github.com can cache updates for a few minutes.
*/

function notifyMe() {

    GM_notification({
        title:'Delayed Notification',
        text: `Hey there! You\'ve been notified! (Version ${GM_info.script.version})`,
        silent:false,
        onclick: function() {
            window.focus();
        },
        timeout:0
    });
}

setTimeout(notifyMe, 2000);

// setTimeout(function() {
//     location.reload();
// }, 4000);
