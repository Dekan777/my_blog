(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function s(){const n="Denys_Koshevyi_FrontEndDeveloper.pdf",o=document.createElement("a");o.href=n,o.download="Denys_Koshevyi_FrontEndDeveloper.pdf",document.body.appendChild(o),o.click(),document.body.removeChild(o)}document.addEventListener("DOMContentLoaded",function(){const n=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".nav-studio").forEach(r=>{r.classList.remove("current"),r.getAttribute("href").includes(n)&&r.classList.add("current")})});document.getElementById("downloadButton").addEventListener("click",s);
//# sourceMappingURL=main-BNlSEqko.js.map
