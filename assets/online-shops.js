/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/sections/online-shops.js":
/*!*****************************************!*\
  !*** ./src/js/sections/online-shops.js ***!
  \*****************************************/
/***/ (() => {

eval("let currentCountry = document.querySelector(\"[data-current-country]\").dataset\n  .currentCountry;\nlet shopsListContainer = document.querySelector(\".online-shops__shops-list\");\n\nlet url = \"\";\nif (window.Shopify.locale != \"en\") {\n  url =\n    window.shopUrl +\n    \"/\" +\n    window.Shopify.locale +\n    \"/pages/retailer-countries-part-1\";\n} else {\n  url = window.shopUrl + \"/pages/retailer-countries-part-1\";\n}\n\nappendNewShopList();\n\nasync function getOnlineShops(url) {\n  const response = await fetch(url);\n  const responseText = await response.text();\n\n  const html = new DOMParser().parseFromString(responseText, \"text/html\");\n  let countryListHTML = html.querySelector(\n    `[data-country=\"${currentCountry}\"]`\n  );\n\n  return countryListHTML;\n}\n\nasync function appendNewShopList() {\n  let test = await getOnlineShops(url);\n\n  if (test) {\n    shopsListContainer.innerHTML = test.innerHTML;\n  } else {\n    if (window.Shopify.locale != \"en\") {\n      url =\n        window.shopUrl +\n        \"/\" +\n        window.Shopify.locale +\n        \"/pages/retailer-countries-part-2\";\n    } else {\n      url = window.shopUrl + \"/pages/retailer-countries-part-2\";\n    }\n\n    test = await getOnlineShops(url);\n\n    if (test) {\n      shopsListContainer.innerHTML = test.innerHTML;\n    } else {\n      shopsListContainer?.classList.add(\"empty\");\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2VjdGlvbnMvb25saW5lLXNob3BzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXdlYnBhY2svLi9zcmMvanMvc2VjdGlvbnMvb25saW5lLXNob3BzLmpzPzZhODkiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGN1cnJlbnRDb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWN1cnJlbnQtY291bnRyeV1cIikuZGF0YXNldFxuICAuY3VycmVudENvdW50cnk7XG5sZXQgc2hvcHNMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmxpbmUtc2hvcHNfX3Nob3BzLWxpc3RcIik7XG5cbmxldCB1cmwgPSBcIlwiO1xuaWYgKHdpbmRvdy5TaG9waWZ5LmxvY2FsZSAhPSBcImVuXCIpIHtcbiAgdXJsID1cbiAgICB3aW5kb3cuc2hvcFVybCArXG4gICAgXCIvXCIgK1xuICAgIHdpbmRvdy5TaG9waWZ5LmxvY2FsZSArXG4gICAgXCIvcGFnZXMvcmV0YWlsZXItY291bnRyaWVzLXBhcnQtMVwiO1xufSBlbHNlIHtcbiAgdXJsID0gd2luZG93LnNob3BVcmwgKyBcIi9wYWdlcy9yZXRhaWxlci1jb3VudHJpZXMtcGFydC0xXCI7XG59XG5cbmFwcGVuZE5ld1Nob3BMaXN0KCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE9ubGluZVNob3BzKHVybCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcblxuICBjb25zdCBodG1sID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhyZXNwb25zZVRleHQsIFwidGV4dC9odG1sXCIpO1xuICBsZXQgY291bnRyeUxpc3RIVE1MID0gaHRtbC5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS1jb3VudHJ5PVwiJHtjdXJyZW50Q291bnRyeX1cIl1gXG4gICk7XG5cbiAgcmV0dXJuIGNvdW50cnlMaXN0SFRNTDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kTmV3U2hvcExpc3QoKSB7XG4gIGxldCB0ZXN0ID0gYXdhaXQgZ2V0T25saW5lU2hvcHModXJsKTtcblxuICBpZiAodGVzdCkge1xuICAgIHNob3BzTGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSB0ZXN0LmlubmVySFRNTDtcbiAgfSBlbHNlIHtcbiAgICBpZiAod2luZG93LlNob3BpZnkubG9jYWxlICE9IFwiZW5cIikge1xuICAgICAgdXJsID1cbiAgICAgICAgd2luZG93LnNob3BVcmwgK1xuICAgICAgICBcIi9cIiArXG4gICAgICAgIHdpbmRvdy5TaG9waWZ5LmxvY2FsZSArXG4gICAgICAgIFwiL3BhZ2VzL3JldGFpbGVyLWNvdW50cmllcy1wYXJ0LTJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gd2luZG93LnNob3BVcmwgKyBcIi9wYWdlcy9yZXRhaWxlci1jb3VudHJpZXMtcGFydC0yXCI7XG4gICAgfVxuXG4gICAgdGVzdCA9IGF3YWl0IGdldE9ubGluZVNob3BzKHVybCk7XG5cbiAgICBpZiAodGVzdCkge1xuICAgICAgc2hvcHNMaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IHRlc3QuaW5uZXJIVE1MO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG9wc0xpc3RDb250YWluZXI/LmNsYXNzTGlzdC5hZGQoXCJlbXB0eVwiKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/sections/online-shops.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/sections/online-shops.js"]();
/******/ 	
/******/ })()
;