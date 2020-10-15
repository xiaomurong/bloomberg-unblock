var result = [];

var StyleTag = document.createElement("style");

StyleTag.innerText = "body{overflow:scroll !important;}#graphics-paywall-overlay{display:none !important;}.paywall-inline-tout{display:none !important;}p{display:block !important;}.content-accessories--left-rail,.share-article-button,.share-article-button__option{display:block !important;}.share-article-button__icon{display:inline-block !important;}.brokerboxarticle,.brokerboxarticle.bb-ads__ad{display:block !important;}.figure-expandable,.figure-expandable.image,.lazy-img,.lazy-imgimg{display:block !important;}figcaption,.news-figure-caption-text,.news-figure-credit{display:block !important;}.text-to-speech,.text-to-speech__controls{display:block !important;}.text-to-speech__input-button,.text-to-speech__runtime{display:inline-block !important;}#paywall-banner{display:none !important;}figure,.chart,.chart-js,.chart__container,.chart__containeriframe{display:block !important;}.thirdparty-embed.coronavirus-data-dashboard,.thirdparty-embed__container,.thirdparty-embed__iframe{display:block !important;}";

document.head.appendChild(StyleTag);

// Call completion to finish
completion(result);