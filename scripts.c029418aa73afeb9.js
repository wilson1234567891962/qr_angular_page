function getKey(e){try{return localStorage.getItem(e)}catch(i){return"[]"}}function backPage(){var e=/(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(navigator.userAgent);void 0!==typeof navigator.userAgent&&/android/i.test(navigator.userAgent)?Android.backPage():e&&window.webkit.messageHandlers.goBack.postMessage("")}function checkPermissionWebView(e){const i=/(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(navigator.userAgent);if(void 0!==typeof navigator.userAgent&&/android/i.test(navigator.userAgent))return Android.checkPermissionWebView(e);if(i){const a=new Promise((r,s)=>{const n=o=>{r(o.data),window.removeEventListener("message",n)};window.addEventListener("message",n)});return this.window.webkit.messageHandlers.checkPermissionWebView.postMessage(e),a}return!0}function requestPermissionLaunch(e){const i=/(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(navigator.userAgent);if(void 0!==typeof navigator.userAgent&&/android/i.test(navigator.userAgent))return Android.requestPermissionLaunch(e);if(i){const t=new Promise((a,r)=>{const s=n=>{a(n.data),window.removeEventListener("message",s)};window.addEventListener("message",s)});return this.window.webkit.messageHandlers.requestPermissionLaunch.postMessage(e),t}return!0}function hideOrShowOptionLogin(e){const i=/(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(navigator.userAgent);if(void 0!==typeof navigator.userAgent&&/android/i.test(navigator.userAgent))return Android.hideOrShowOptionLogin(e);if(i){const t=new Promise((a,r)=>{const s=n=>{a(n.data),window.removeEventListener("message",s)};window.addEventListener("message",s)});return this.window.webkit.messageHandlers.hideOrShowOptionLogin.postMessage(e),t}return!0}function getObjectData(e){const i=/(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(navigator.userAgent);if(void 0!==typeof navigator.userAgent&&/android/i.test(navigator.userAgent))return Android.getObjectData(e);if(void 0===navigator.userAgent||!/android/i.test(navigator.userAgent)){if(i){const t=new Promise((a,r)=>{const s=n=>{a(n.data),window.removeEventListener("message",s)};window.addEventListener("message",s)});return window.webkit.messageHandlers.getObjectData.postMessage(e),t}if("4"===e)return'{"saveData": ""}'}}function shareDocument(e,i){const t=/(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(navigator.userAgent);if("undefined"!=typeof Android&&null!==Android)return Android.shareDocument(e,i);if(t){const a=new Promise((r,s)=>{const n=o=>{r(o.data),window.removeEventListener("message",n)};window.addEventListener("message",n)});return this.window.webkit.messageHandlers.shareDocument.postMessage(e+","+i),a}return!!i}function openPage(e,i){var t=/(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(navigator.userAgent);"undefined"!=typeof Android&&null!==Android?Android.openPage(e,i):t&&this.window.webkit.messageHandlers.openPage.postMessage(e+","+i)}function readTheQR(e){const i=/(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(navigator.userAgent);"undefined"!=typeof Android&&null!==Android?Android.readTheQR(e):i&&this.window.webkit.messageHandlers.readTheQR.postMessage(e)}function saveData(e,i){var t=/(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(navigator.userAgent);"undefined"!=typeof Android&&null!==Android?Android.saveData(e,i):t&&window.webkit.messageHandlers.saveData.postMessage(e+","+i)}