var result = [];

var StyleTag = document.createElement("style");

StyleTag.innerText = "body{overflow:scroll !important;}#graphics-paywall-overlay{display: none !important;}";

document.head.appendChild(StyleTag);

// Call completion to finish
completion(result);