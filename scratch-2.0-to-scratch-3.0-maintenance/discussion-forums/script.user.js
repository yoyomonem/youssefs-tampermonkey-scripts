// ==UserScript==
// @name         Scratch 2.0 Maintenance Pages → 3.0 Maintenance Pages (Discussion Forums Only)
// @namespace    https://scratch.mit.edu
// @namespace    https://github.com/yoyomonem/youssefs-tampermonkey-scripts
// @version      1.0
// @description  This turns Scratch 2.0 maintenance pages into maintenance pages that are in the style of Scratch 3.0, like how the Scratch 2.0 → 3.0 addon from Scratch Addons does it with instances of https://scratch.mit.edu/500. This only works with the Scratch Discussion Forums, so I recommend you use this userscript with the Scratch 2.0 → 3.0 addon from Scratch Addons.
// @author       Youssef
// @match        https://scratch.mit.edu/discuss/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scratch.mit.edu
// @grant        GM_log
// ==/UserScript==

(function() {
  "use strict";

  try {
    const style = document.createElement("style");
    style.id = "scratch-2.0-maintenance-pages-to-3.0-maintenance-pages-discussion-forums-only";
    style.setAttribute("data-is-tampermonkey-added-style", true);
    style.setAttribute("data-tampermonkey-script-name", "Scratch 2.0 Maintenance Pages → 3.0 Maintenance Pages (Discussion Forums Only)");
    style.innerHTML = `
      .box#page-maint, .box#page-maint *:not(iframe), .box-content *:not(iframe) {
        background: none;
        border: none;
        color: rgb(255, 255, 255);
        box-shadow: none;
      }
      body {
        background: rgb(245, 149, 51);
        height: 100vh;
        margin: 0;
      }
    `;
    document.body.appendChild(style);
    const header = document.querySelector(".box-header h1");
    header.style = "color: rgb(255, 255, 255)";
    const logo = document.querySelector("img[src=\"http://scratch-maintenance.s3.amazonaws.com/scratch.png\"]");
    logo.src = "/images/logo_sm.png";
  } catch {
    GM_log("The Scratch Discussion Forums are not in maintenance.");
  }
})();