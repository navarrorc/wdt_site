/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* global $ */\n// import moment from \"moment\";\n\n// var rightNow = moment().format(\"MMMM Do YYYY, h:mm:ss a\");\n// console.log(rightNow);\n// // i.e. \"October 23rd 2016, 9:30:24 pm\"\n\n// function getRandomNumber(min, max){\n//     if (min >=0 && max > min){\n//         return Math.floor(Math.random() * (max - min) + min);\n//     }\n//     return Math.floor(Math.random() * 1000000);\n// }\n\n\n// // jQuery Cheat Sheet: http://bit.ly/2dq090t\n// $(\"h1, h3, p\").css(\"color\", \"#F8F8F8\");\n\n// var $h3 = $(\"h3\");\n// $h3.click(function(){\n//     $(\"#description\").fadeToggle(\"slow\");\n// });\n\n// $(\"#button1\").click(function(){\n//     var randomNumber = getRandomNumber();\n//     $(\"#output\").show().text(randomNumber); \n// });\n\n// $(\"#button2\").click(function(){\n//     // see: https://mzl.la/1uDCHOb\n//     var randomNumber = getRandomNumber(1, 21); // whole number between 0 and 19\n//     $(\"#output\").show().text(randomNumber); \n// });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/YzIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgJCAqL1xuLy8gaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbi8vIHZhciByaWdodE5vdyA9IG1vbWVudCgpLmZvcm1hdChcIk1NTU0gRG8gWVlZWSwgaDptbTpzcyBhXCIpO1xuLy8gY29uc29sZS5sb2cocmlnaHROb3cpO1xuLy8gLy8gaS5lLiBcIk9jdG9iZXIgMjNyZCAyMDE2LCA5OjMwOjI0IHBtXCJcblxuLy8gZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KXtcbi8vICAgICBpZiAobWluID49MCAmJiBtYXggPiBtaW4pe1xuLy8gICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4vLyB9XG5cblxuLy8gLy8galF1ZXJ5IENoZWF0IFNoZWV0OiBodHRwOi8vYml0Lmx5LzJkcTA5MHRcbi8vICQoXCJoMSwgaDMsIHBcIikuY3NzKFwiY29sb3JcIiwgXCIjRjhGOEY4XCIpO1xuXG4vLyB2YXIgJGgzID0gJChcImgzXCIpO1xuLy8gJGgzLmNsaWNrKGZ1bmN0aW9uKCl7XG4vLyAgICAgJChcIiNkZXNjcmlwdGlvblwiKS5mYWRlVG9nZ2xlKFwic2xvd1wiKTtcbi8vIH0pO1xuXG4vLyAkKFwiI2J1dHRvbjFcIikuY2xpY2soZnVuY3Rpb24oKXtcbi8vICAgICB2YXIgcmFuZG9tTnVtYmVyID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4vLyAgICAgJChcIiNvdXRwdXRcIikuc2hvdygpLnRleHQocmFuZG9tTnVtYmVyKTsgXG4vLyB9KTtcblxuLy8gJChcIiNidXR0b24yXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4vLyAgICAgLy8gc2VlOiBodHRwczovL216bC5sYS8xdURDSE9iXG4vLyAgICAgdmFyIHJhbmRvbU51bWJlciA9IGdldFJhbmRvbU51bWJlcigxLCAyMSk7IC8vIHdob2xlIG51bWJlciBiZXR3ZWVuIDAgYW5kIDE5XG4vLyAgICAgJChcIiNvdXRwdXRcIikuc2hvdygpLnRleHQocmFuZG9tTnVtYmVyKTsgXG4vLyB9KTtcblwidXNlIHN0cmljdFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);