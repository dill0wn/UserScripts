// ==UserScript==
// @name         Desktop Notification Tester
// @namespace    http://example.tld
// @version      0.6
// @description  Testing Desktop notifications with tampermonkey
// @updateUrl    https://raw.githubusercontent.com/dill0wn/UserScripts/master/sandbox.user.js
// @downloadUrl  https://raw.githubusercontent.com/dill0wn/UserScripts/master/sandbox.user.js
// @author       dill0wn
// @match        https://direct.playstation.com/*
// @grant        GM_notification
// ==/UserScript==


function notifyMe() {

    GM_notification({
        title:'Delayed Notification',
        text:'Hey there! You\'ve been notified! (Version 6)',
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

/*
document.addEventListener('DOMContentLoaded', function() {
 if (!Notification) {
  alert('Desktop notifications not available in your browser. Try Chromium.');
  return;
 }

 if (Notification.permission !== 'granted') {
  Notification.requestPermission();
 }
});


function notifyMe() {
 if (Notification.permission !== 'granted') {
  Notification.requestPermission();
 }
 else {
  var notification = new Notification('Notification title', {
   icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
   body: 'Hey there! You\'ve been notified!',
  });
  notification.onclick = function() {
   window.open('http://stackoverflow.com/a/13328397/1269037');
  };
 }
}

notifyMe();
*/