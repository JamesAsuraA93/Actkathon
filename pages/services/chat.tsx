import React, { Component } from "react";

declare global {
  interface Window {
    kommunicate: any;
  }
}

const KomChat = () => {
  if (typeof window !== "undefined") {
    let kommunicate = window.kommunicate;
    (function (d, m) {
      var kommunicateSettings = {
        appId: "3706c71f8f471eaae334e954a0c2864fa",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  return <div></div>;
};

export default KomChat;
