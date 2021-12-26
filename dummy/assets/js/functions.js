function getKey(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return "[]";
  }
  /*  if (navigator.userAgent.toLowerCase().indexOf('android') > -1 || navigator.userAgent.toLowerCase().indexOf('iphone') > -1) {
      return localStorage.getItem(key);
    }
    return '[]';*/
}

function backPage() {
  var isUIWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(
    navigator.userAgent
  );
  if (
    typeof navigator.userAgent !== undefined &&
    /android/i.test(navigator.userAgent)
  ) {
    Android.backPage();
  } else if (isUIWebview) {
    window.webkit.messageHandlers.goBack.postMessage("");
  }
}

function checkPermissionWebView(item) {
  const isUIWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(
    navigator.userAgent
  );
  if (
    typeof navigator.userAgent !== undefined &&
    /android/i.test(navigator.userAgent)
  ) {
    return Android.checkPermissionWebView(item);
  } else if (isUIWebview) {
    const state = false;
    const promise = new Promise((resolve, reject) => {
      const callback = (event) => {
        resolve(event.data);
        window.removeEventListener("message", callback);
      };
      window.addEventListener("message", callback);
    });
    this.window.webkit.messageHandlers.checkPermissionWebView.postMessage(item);
    return promise;
  } else {
    return true;
  }
}

function requestPermissionLaunch(item) {
  const isUIWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(
    navigator.userAgent
  );
  if (
    typeof navigator.userAgent !== undefined &&
    /android/i.test(navigator.userAgent)
  ) {
    return Android.requestPermissionLaunch(item);
  } else if (isUIWebview) {
    const promise = new Promise((resolve, reject) => {
      const callback = (event) => {
        resolve(event.data);
        window.removeEventListener("message", callback);
      };
      window.addEventListener("message", callback);
    });
    this.window.webkit.messageHandlers.requestPermissionLaunch.postMessage(item);
    return promise;
  } else {
    return true;
  }
}

function hideOrShowOptionLogin(item) {
  const isUIWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(
    navigator.userAgent
  );
  if (
    typeof navigator.userAgent !== undefined &&
    /android/i.test(navigator.userAgent)
  ) {
    return Android.hideOrShowOptionLogin(item);
  } else if (isUIWebview) {
    const promise = new Promise((resolve, reject) => {
      const callback = (event) => {
        resolve(event.data);
        window.removeEventListener("message", callback);
      };
      window.addEventListener("message", callback);
    });
    this.window.webkit.messageHandlers.hideOrShowOptionLogin.postMessage(item);
    return promise;
  } else {
    return true;
  }
}

/**
 *  getObjectData funtion that returns the objectt for the header
 * @param {*} item
 * @returns
 */

function getObjectData(item) {
  const isUIWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(
    navigator.userAgent
  );
  if (typeof navigator.userAgent !== undefined && /android/i.test(navigator.userAgent)) {
    return Android.getObjectData(item);
  }
  if (
    navigator.userAgent !== undefined &&
    /android/i.test(navigator.userAgent)
  ) {
    // if (item === "4") {
    //   return { saveData: { "account_type": "FOR", "account_id": "25045144", "account_sub_type": "001", "account_name": "FONDO DE INVERSION" } };
    // } else {
    //   return {
    //     address: "172.22.72.70",
    //     application: "APP Unica",
    //     channel_id: "141",
    //     token: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzbG1DV2RyV2p1SUx1WXVxdENjbHRYdVNlOHZNZFl6REp0OGVXbXNFV3Y0In0.eyJqdGkiOiJiYjQzM2EzNi0xMDczLTQ3NzItYThkYS0yMmIzMzk4NTc5YWMiLCJleHAiOjE2MzkxNTI4ODYsIm5iZiI6MCwiaWF0IjoxNjM5MTQ5Mjg2LCJpc3MiOiJodHRwczovL3Nzby1pdGF1LWl0YXUtY28tc2VjdXJpdHkuYXBwc3FhLml0YXVjby5jb2wvYXV0aC9yZWFsbXMvcmVhbG0tYXBpLWV4dGVybm8iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjo3NzBjNDRjMi1lOGY0LTQ3OTItYTVhNy1iNDhjNDViZTk5MGI6VTIwMjUxMDIyXzIwMjUxMDIyIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiMDNkNTFlZTQiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiJiMjE0OGMzZi02ZmE5LTQzMGItOTk0MC1mMTk5YjkwNDZjYWQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInR5cGVfaWQiOiIxIiwic2Vzc2lvbl9pZCI6IjEwMTgzMDIzMDEwMjIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJVMjAyNTEwMjJfMjAyNTEwMjIiLCJudW1faWQiOiIyMDI1MTAyMiJ9.BSOHtj7P9gm0c93SR1sv7DdjUbPzJuPo4_umKwW7h2MGyX-eCykGHYGCv03jWg4JVI8XJlM-qT0PVnWYwftPXqzqr5l3MRdHy4ekYyeYTQ0MxTD-alhMnppahupti405NBiYO91kMHmgG_1NPnwxrrTMUr_wu9WyzEFhcuxZnjaLMB-5UYYixc46_1R_8naIKuRfPL_brtpyaLcrOgqSff4W2hj6U6qNACF6_EBBbqEK2o3RW2AAysvZ6NyiDRBtyZ3kHl1wJLa1dE76kkhuHvO2ofzq_QVXc4txo-6YF2fOFxu64_Z5BNZ_HWocKpT7KO7nOdpRRruipQSk_XhJKw",
    //     uuid: "",
    //   };
    // }
  } else if (isUIWebview) {
    const promise = new Promise((resolve, reject) => {
      //     if(item === '4'){
      //       resolve('');
      //     }else {
      //     resolve ({
      //     'address':'172.22.72.70',
      //     'application':'app_unica',
      //     'channel_id':'114',
      //     'token':'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzbG1DV2RyV2p1SUx1WXVxdENjbHRYdVNlOHZNZFl6REp0OGVXbXNFV3Y0In0.eyJqdGkiOiI3ZDA3ZGU5Ny00ZmU1LTQ4ZWQtOWZkMy03ZDE5MTE3M2MzYWMiLCJleHAiOjE2MTIyOTcwMTEsIm5iZiI6MCwiaWF0IjoxNjEyMjkzNDExLCJpc3MiOiJodHRwczovL3Nzby1pdGF1LWl0YXUtY28tc2VjdXJpdHkuYXBwc3FhLml0YXVjby5jb2wvYXV0aC9yZWFsbXMvcmVhbG0tYXBpLWV4dGVybm8iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjo3NzBjNDRjMi1lOGY0LTQ3OTItYTVhNy1iNDhjNDViZTk5MGI6VTc2MzEzNjQ1Xzc2MzEzNjQ1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiMDNkNTFlZTQiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiJhYzRiNWE2Yi01ZjNlLTQ4ZWMtODZkMC0yOGMzZDZlZjlkNDMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInR5cGVfaWQiOiIxIiwic2Vzc2lvbl9pZCI6IjE0MTU1MDQ0MzM2NDUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJVNzYzMTM2NDVfNzYzMTM2NDUiLCJudW1faWQiOiI3NjMxMzY0NSJ9.J1MDu_fFnECmVFF8liWxKq3OnZNmls-DrbQMhG7FGhmwGVXno2K4o124xbiYVT6qwrx2zE9roJ8xpTyZCNck9fjgwu8VPE4_7MyvbAvADiFk4iGOtg0A_-i5RwN0tbHQrKNf_W-a505d7gyXxIajb0oaptXmSt8lIH_hfgJ0r5YS9qaC3zphRRiCBzS9Jb3mipVFCNdFAKLfdmJU2DaoYqDmoVrqN2RC6xsWxccDZrp3zJrXfLMgIzBq1X2a1U6vscw7JdgRD9Mm-OzFQ-Eusk_o5acBi3yefNJbvRwDlIGzGMMy7Dj_P5Kn1klbvvgmxYJMcT81bgZCy7529Y2xZQ',
      //     'uuid':''
      //   })
      // }
      const callback = (event) => {
        resolve(event.data);
        window.removeEventListener("message", callback);
      };
      window.addEventListener("message", callback);
    });
    window.webkit.messageHandlers.getObjectData.postMessage(item);
    return promise;
  } else {
    if (item === "4") {
      return '{"saveData": ""}';
    }
  }
}

function shareDocument(item, document) {
  const isUIWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(
    navigator.userAgent
  );
  if (typeof Android !== "undefined" && Android !== null) {
    return Android.shareDocument(item, document);
  } else if (isUIWebview) {
    const promise = new Promise((resolve, reject) => {
      const callback = (event) => {
        resolve(event.data);
        window.removeEventListener("message", callback);
      };
      window.addEventListener("message", callback);
    });
    this.window.webkit.messageHandlers.shareDocument.postMessage(
      item + "," + document
    );
    return promise;
  } else {
    if (document) {
      return true;
    } else {
      return false;
    }
  }
}

function openPage(url, indicator) {
  var isUIWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(
    navigator.userAgent
  );
  if (typeof Android !== "undefined" && Android !== null) {
    Android.openPage(url, indicator);
  } else if (isUIWebview) {
    this.window.webkit.messageHandlers.openPage.postMessage(
      url + "," + indicator
    );
  }
}

function readTheQR(url) {
  const isUIWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(
    navigator.userAgent
  );
  if (typeof Android !== "undefined" && Android !== null) {
    Android.readTheQR(url);
  } else if (isUIWebview) {
    this.window.webkit.messageHandlers.readTheQR.postMessage(url);
  }
}

function saveData(data, state) {
  var isUIWebview = /(iPhone|iPod|iPad).*AppleWebKit(?!state.*Safari)/i.test(
    navigator.userAgent
  );
  if (typeof Android !== "undefined" && Android !== null) {
    Android.saveData(data, state);
  } else if (isUIWebview) {
    window.webkit.messageHandlers.saveData.postMessage(data + "," + state);
  }
}
