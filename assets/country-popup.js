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

/***/ "./src/js/sections/country-popup.js":
/*!******************************************!*\
  !*** ./src/js/sections/country-popup.js ***!
  \******************************************/
/***/ (() => {

eval("const countryPopup = document.getElementById(\"country-popup\");\nconst countryCloseBtn = countryPopup?.querySelector(\".country-popup__close\");\nconst countryLinks = countryPopup.querySelectorAll(\".country-popup__item-link\");\nconst countryInput = countryPopup.querySelector('input[name=\"country_code\"]');\nconst countryForm = countryPopup?.querySelector(\"form\");\nconst isCountryPopupShow = localStorage.getItem(\"isCountryPopupShow\");\n\nif (!isCountryPopupShow) {\n  setTimeout(() => {\n    countryPopup?.classList.add(\"active\");\n  }, 3000);\n}\n\ncountryCloseBtn?.addEventListener(\"click\", () => {\n  countryPopup?.classList.remove(\"active\");\n  localStorage.setItem(\"isCountryPopupShow\", \"true\");\n});\n\ncountryLinks.forEach((link) => {\n  link.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    countryInput.value = e.currentTarget.dataset.value;\n    if (countryForm) countryForm.submit();\n    localStorage.setItem(\"isCountryPopupShow\", \"true\");\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2VjdGlvbnMvY291bnRyeS1wb3B1cC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4td2VicGFjay8uL3NyYy9qcy9zZWN0aW9ucy9jb3VudHJ5LXBvcHVwLmpzPzlkNTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY291bnRyeVBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudHJ5LXBvcHVwXCIpO1xuY29uc3QgY291bnRyeUNsb3NlQnRuID0gY291bnRyeVBvcHVwPy5xdWVyeVNlbGVjdG9yKFwiLmNvdW50cnktcG9wdXBfX2Nsb3NlXCIpO1xuY29uc3QgY291bnRyeUxpbmtzID0gY291bnRyeVBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY291bnRyeS1wb3B1cF9faXRlbS1saW5rXCIpO1xuY29uc3QgY291bnRyeUlucHV0ID0gY291bnRyeVBvcHVwLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJjb3VudHJ5X2NvZGVcIl0nKTtcbmNvbnN0IGNvdW50cnlGb3JtID0gY291bnRyeVBvcHVwPy5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IGlzQ291bnRyeVBvcHVwU2hvdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNDb3VudHJ5UG9wdXBTaG93XCIpO1xuXG5pZiAoIWlzQ291bnRyeVBvcHVwU2hvdykge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb3VudHJ5UG9wdXA/LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0sIDMwMDApO1xufVxuXG5jb3VudHJ5Q2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvdW50cnlQb3B1cD8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0NvdW50cnlQb3B1cFNob3dcIiwgXCJ0cnVlXCIpO1xufSk7XG5cbmNvdW50cnlMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvdW50cnlJbnB1dC52YWx1ZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnZhbHVlO1xuICAgIGlmIChjb3VudHJ5Rm9ybSkgY291bnRyeUZvcm0uc3VibWl0KCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0NvdW50cnlQb3B1cFNob3dcIiwgXCJ0cnVlXCIpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/sections/country-popup.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/sections/country-popup.js"]();
/******/ 	
/******/ })()
;