!function(){function e(e){return e&&e.__esModule?e.default:e}var n,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,s=f||a||Function("return this")(),d=Object.prototype.toString,g=Math.max,p=Math.min,v=function(){return s.Date.now()};function y(n){var t=void 0===n?"undefined":e(o)(n);return!!n&&("object"==t||"function"==t)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":e(o)(n))||function(e){return!!e&&"object"==typeof e}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(y(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=y(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var f=u.test(n);return f||c.test(n)?l(n.slice(2),f?2:8):i.test(n)?NaN:+n}function b(e){console.log(e);var n=e[0],t=n.capital,o=n.population,r=n.flags,i=n.languages;console.dir(t),console.log(o),console.log(r),console.log(i)}function h(e){return fetch("https://restcountries.com/v3.1/name/".concat(e,"?").concat("fields=name,capital,population,flags,languages ")).then((function(e){return e.json()}))}n=function(e,n,t){var o,r,i,u,c,l,f=0,a=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(n){var t=o,i=r;return o=r=void 0,f=n,u=e.apply(i,t)}function h(e){return f=e,c=setTimeout(O,n),a?b(e):u}function j(e){var t=e-l;return void 0===l||t>=n||t<0||s&&e-f>=i}function O(){var e=v();if(j(e))return T(e);c=setTimeout(O,function(e){var t=n-(e-l);return s?p(t,i-(e-f)):t}(e))}function T(e){return c=void 0,d&&o?b(e):(o=r=void 0,u)}function w(){var e=v(),t=j(e);if(o=arguments,r=this,l=e,t){if(void 0===c)return h(l);if(s)return c=setTimeout(O,n),b(l)}return void 0===c&&(c=setTimeout(O,n)),u}return n=m(n)||0,y(t)&&(a=!!t.leading,i=(s="maxWait"in t)?g(m(t.maxWait)||0,n):i,d="trailing"in t?!!t.trailing:d),w.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=l=r=c=void 0},w.flush=function(){return void 0===c?u:T(v())},w};({inputField:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info"),background:document.querySelector(".background")}).inputField.addEventListener("input",e(n)((function(e){var n=e.target.value.trim();""===n?console.log("Need more symbols"):h(n).then((function(e){e.length>10?console.log("need more params"):e.length>2&&e.length<10?console.log("norm"):1===e.length?(console.log("ok"),b(e)):console.log("Not find")})).catch((function(e){return e}))}),300))}();
//# sourceMappingURL=index.b12e2860.js.map
