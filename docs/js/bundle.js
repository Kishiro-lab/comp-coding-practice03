/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("// ハンバーガーアイコンを押したときの処理\r\n// burger header-nav body-mask\r\n\r\nconst burgerBtn = document.querySelector('.burger-btn');\r\nconst headerNav = document.querySelector('.header-nav');\r\nconst body = document.querySelector('body');\r\n\r\nburgerBtn.addEventListener('click', () => {\r\n  if(burgerBtn.classList.contains('cross')) {\r\n    burgerBtn.classList.remove('cross');\r\n    headerNav.classList.remove('open');\r\n    body.classList.remove('masked');\r\n  } else {\r\n    burgerBtn.classList.add('cross');\r\n    headerNav.classList.add('open');\r\n    body.classList.add('masked');\r\n  }\r\n});\r\n\r\n// Intersection Observer API\r\n// site-logoとmenuアイコンの色を変える処理\r\n\r\nconst kv = document.querySelector('.kv-wrapper');\r\nconst fv = document.querySelector('.fv');\r\nconst siteTitle = document.querySelector('.site-title');\r\n\r\nfunction kvCallback(entries) {\r\n  if (entries[0].isIntersecting) {\r\n    siteTitle.classList.remove('black');\r\n  } else {\r\n    siteTitle.classList.add('black');\r\n  }\r\n}\r\nfunction fvCallback(entries) {\r\n  if (entries[0].isIntersecting) {\r\n    burgerBtn.classList.remove('black');\r\n  } else {\r\n    burgerBtn.classList.add('black');\r\n  }\r\n}\r\n\r\n// ページに応じてthresholdの値を変える\r\nlet kvThreshold;\r\nlet fvThreshold;\r\nif (document.title == 'Practice03') {\r\n  kvThreshold = .06;\r\n  fvThreshold = .04;\r\n} else {\r\n  kvThreshold = .09;\r\n  fvThreshold = .07;\r\n}\r\nconst kvOptions = {\r\n  threshold: [kvThreshold],\r\n}\r\nconst fvOptions = {\r\n  threshold: [fvThreshold],\r\n}\r\n// observerを作成して観測\r\nconst kvObserver = new IntersectionObserver(kvCallback, kvOptions);\r\nconst fvObserver = new IntersectionObserver(fvCallback, fvOptions);\r\n\r\nkvObserver.observe(kv);\r\nfvObserver.observe(fv);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://practice03/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;