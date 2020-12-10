module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/faqs/price-mechanics.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/faqs/price-mechanics.md":
/*!***************************************!*\
  !*** ./pages/faqs/price-mechanics.md ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextra-theme-docs */ \"nextra-theme-docs\");\n/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nextra/ssg */ \"nextra/ssg\");\n/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nextra_ssg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_penghaoen2_Documents_GitHub_blockchain_docs_theme_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.config.js */ \"./theme.config.js\");\nvar _jsxFileName = \"/Users/penghaoen2/Documents/GitHub/blockchain-docs/pages/faqs/price-mechanics.md\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n/* @jsx mdx */\n\n\n\n\n\nconst makeShortcode = name => function MDXDefaultShortcode(props) {\n  console.warn(\"Component \" + name + \" was not imported, exported, or provided by MDXProvider as global scope\");\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"div\", _extends({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 10\n    }\n  }));\n};\n\nconst MDXLayout = function NextraPage(props) {\n  return Object(nextra_ssg__WEBPACK_IMPORTED_MODULE_3__[\"withSSG\"])(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2___default()({\n    filename: \"price-mechanics.md\",\n    route: \"/faqs/price-mechanics\",\n    meta: {},\n    pageMap: [{\n      \"name\": \"_app\",\n      \"route\": \"/_app\"\n    }, {\n      \"name\": \"audits\",\n      \"children\": [{\n        \"name\": \"certik\",\n        \"route\": \"/audits/certik\"\n      }],\n      \"route\": \"/audits\"\n    }, {\n      \"name\": \"faqs\",\n      \"children\": [{\n        \"name\": \"basics\",\n        \"route\": \"/faqs/basics\"\n      }, {\n        \"name\": \"bonding\",\n        \"route\": \"/faqs/bonding\"\n      }, {\n        \"name\": \"coupon-mechanics\",\n        \"route\": \"/faqs/coupon-mechanics\"\n      }, {\n        \"name\": \"meta.json\",\n        \"meta\": {\n          \"index\": \"Basics\",\n          \"bonding\": \"Bonding Tokens\",\n          \"coupon-mechanics\": \"Coupons\",\n          \"price-mechanics\": \"Price Mechanics\"\n        }\n      }, {\n        \"name\": \"price-mechanics\",\n        \"route\": \"/faqs/price-mechanics\"\n      }],\n      \"route\": \"/faqs\"\n    }, {\n      \"name\": \"index\",\n      \"route\": \"/\"\n    }, {\n      \"name\": \"meta.json\",\n      \"meta\": {\n        \"index\": \"Home\",\n        \"faqs\": \"FAQs\",\n        \"audits\": \"Audits\",\n        \"resources\": \"Resources\"\n      }\n    }, {\n      \"name\": \"resources\",\n      \"route\": \"/resources\"\n    }]\n  }, _Users_penghaoen2_Documents_GitHub_blockchain_docs_theme_config_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]))(props);\n};\n\nfunction MDXContent(_ref) {\n  let {\n    components\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(MDXLayout, _extends({}, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, `Price Mechanics`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, `If ESD is a stablecoin, is it always worth $1?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, `No. The goal, at maturity, is to see the stablecoin stay very close to \\\\$1.  However, it is expected in the early days of the project, it will be more volatile. Some volatility is natural -- the whole design of the protocol is to adjust the money supply when the price diverges -- consequently, it is not a surprise that it would diverge. However, over time it is expected for the volatility to subside and ESD to maintain its peg against the desired asset.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, `In a `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"a\", _extends({\n    \"href\": \"https://medium.com/@0xans/ess-a-brief-intro-towards-novel-elastic-stablecoin-implementation-607e86654a9f\",\n    \"parentName\": \"p\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), `medium`), ` post by an early community member of ESD he/she explains the mechanism.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, `How ESD's supply grow in relation to token holders?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, `ESD uses a seigniorage model to grow the money supply. This means, if the market demands more ESD (more buyers than sellers of ESD), more of the coin (ESD) will be minted to meet that demand and bring the price back down to $1.  That extra minted money supply is distributed to the current holders of ESD (who have taken steps to lock their holdings to the protocol, as detailed below.)  Keep in mind, if the reverse happens -- demand goes down -- the protocol has to reduce the supply of ESD, having an opposite effect.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, `What is an Epoch?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, `The length of time between adjustment to the money supply. Every epoch, currently 8 hours, the protocol assesses whether the money supply ought to grow or shrink, and then issues rewards or debt to make that happen. As an investor, at the end of every epoch you receive rewards if it expands.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, `Should I advance an Epoch? What does this mean?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, `Epochs happen every eight hours. For technical reasons, someone needs to manually trigger the start of a new epoch.  A number of users have written bots competing for the 100 ESD reward to be the first to trigger it, as a new user I would not worry about this technical detail.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, `Why do some epochs grant rewards and some epochs do not?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, `If there is excess demand for ESD, then the price will trend above \\\\$1 on the Uniswap pool, and that signals the protocol to mint additional token supply. Conversely, if the demand shrinks, excess selling on Uniswap will push the price below $1, which triggers the protocol to generate debt and incentivise token holders to burn ESD to shrink the token supply.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, `If the money supply needs to be shrunk, no supply expansion will be made that epoch. If the money supply was shrunk in the past, those debts will either remain on the protocol, or get bought by users in the form of coupons. Both coupons and debt will be paid off in the future ahead of new rewards, so it is possible to receive no new rewards in a money supply expansion epoch if there are historical debts to be repaid first.`));\n}\n;\nMDXContent.isMDXComponent = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mYXFzL3ByaWNlLW1lY2hhbmljcy5tZD8wNDc2Il0sIm5hbWVzIjpbIm1ha2VTaG9ydGNvZGUiLCJuYW1lIiwiTURYRGVmYXVsdFNob3J0Y29kZSIsInByb3BzIiwiY29uc29sZSIsIndhcm4iLCJNRFhMYXlvdXQiLCJOZXh0cmFQYWdlIiwid2l0aFNTRyIsIndpdGhMYXlvdXQiLCJmaWxlbmFtZSIsInJvdXRlIiwibWV0YSIsInBhZ2VNYXAiLCJsYXlvdXRDb25maWciLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHQyxJQUFJLElBQUksU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2hFQyxTQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFlSixJQUFmLEdBQXNCLHlFQUFuQztBQUNBLFNBQU8sOEVBQVNFLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0QsQ0FIRDs7QUFLQSxNQUFNRyxTQUFTLEdBQUcsU0FBU0MsVUFBVCxDQUFxQkosS0FBckIsRUFBNEI7QUFDMUMsU0FBT0ssMERBQU8sQ0FBQ0Msd0RBQVUsQ0FBQztBQUN4QkMsWUFBUSxFQUFFLG9CQURjO0FBRXhCQyxTQUFLLEVBQUUsdUJBRmlCO0FBR3hCQyxRQUFJLEVBQUUsRUFIa0I7QUFJeEJDLFdBQU8sRUFBRSxDQUFDO0FBQUMsY0FBTyxNQUFSO0FBQWUsZUFBUTtBQUF2QixLQUFELEVBQWlDO0FBQUMsY0FBTyxRQUFSO0FBQWlCLGtCQUFXLENBQUM7QUFBQyxnQkFBTyxRQUFSO0FBQWlCLGlCQUFRO0FBQXpCLE9BQUQsQ0FBNUI7QUFBeUUsZUFBUTtBQUFqRixLQUFqQyxFQUE2SDtBQUFDLGNBQU8sTUFBUjtBQUFlLGtCQUFXLENBQUM7QUFBQyxnQkFBTyxRQUFSO0FBQWlCLGlCQUFRO0FBQXpCLE9BQUQsRUFBMEM7QUFBQyxnQkFBTyxTQUFSO0FBQWtCLGlCQUFRO0FBQTFCLE9BQTFDLEVBQXFGO0FBQUMsZ0JBQU8sa0JBQVI7QUFBMkIsaUJBQVE7QUFBbkMsT0FBckYsRUFBa0o7QUFBQyxnQkFBTyxXQUFSO0FBQW9CLGdCQUFPO0FBQUMsbUJBQVEsUUFBVDtBQUFrQixxQkFBVSxnQkFBNUI7QUFBNkMsOEJBQW1CLFNBQWhFO0FBQTBFLDZCQUFrQjtBQUE1RjtBQUEzQixPQUFsSixFQUE2UjtBQUFDLGdCQUFPLGlCQUFSO0FBQTBCLGlCQUFRO0FBQWxDLE9BQTdSLENBQTFCO0FBQW1YLGVBQVE7QUFBM1gsS0FBN0gsRUFBaWdCO0FBQUMsY0FBTyxPQUFSO0FBQWdCLGVBQVE7QUFBeEIsS0FBamdCLEVBQThoQjtBQUFDLGNBQU8sV0FBUjtBQUFvQixjQUFPO0FBQUMsaUJBQVEsTUFBVDtBQUFnQixnQkFBTyxNQUF2QjtBQUE4QixrQkFBUyxRQUF2QztBQUFnRCxxQkFBWTtBQUE1RDtBQUEzQixLQUE5aEIsRUFBbW9CO0FBQUMsY0FBTyxXQUFSO0FBQW9CLGVBQVE7QUFBNUIsS0FBbm9CO0FBSmUsR0FBRCxFQUt0QkMsMEdBTHNCLENBQVgsQ0FBUCxDQUtXWCxLQUxYLENBQVA7QUFNSCxDQVBEOztBQVFlLFNBQVNZLFVBQVQsT0FHWjtBQUFBLE1BSGdDO0FBQ2pDQztBQURpQyxHQUdoQztBQUFBLE1BREViLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELGVBQWVBLEtBQWY7QUFBc0IsY0FBVSxFQUFFYSxVQUFsQztBQUE4QyxXQUFPLEVBQUMsV0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTSxpQkFBTixDQURLLEVBRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLGdEQUFOLENBRkssRUFHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUssNGNBQUwsQ0FISyxFQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyxPQUFMLEVBQ0Usd0VBQU87QUFDTCxZQUFRLDBHQURIO0FBRUwsa0JBQWM7QUFGVCxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFHSyxRQUhMLENBREYsRUFLSSwwRUFMSixDQUpLLEVBVUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLHFEQUFOLENBVkssRUFXTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUssMGdCQUFMLENBWEssRUFZTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sbUJBQU4sQ0FaSyxFQWFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyxzU0FBTCxDQWJLLEVBY0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLGlEQUFOLENBZEssRUFlTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUssdVJBQUwsQ0FmSyxFQWdCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sMERBQU4sQ0FoQkssRUFpQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLDJXQUFMLENBakJLLEVBa0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyw0YUFBTCxDQWxCSyxDQUFQO0FBcUJEO0FBRUQ7QUFDQUQsVUFBVSxDQUFDRSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6Ii4vcGFnZXMvZmFxcy9wcmljZS1tZWNoYW5pY3MubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgd2l0aExheW91dCBmcm9tICduZXh0cmEtdGhlbWUtZG9jcydcbmltcG9ydCB7IHdpdGhTU0cgfSBmcm9tICduZXh0cmEvc3NnJ1xuaW1wb3J0IGxheW91dENvbmZpZyBmcm9tICcvVXNlcnMvcGVuZ2hhb2VuMi9Eb2N1bWVudHMvR2l0SHViL2Jsb2NrY2hhaW4tZG9jcy90aGVtZS5jb25maWcuanMnXG5cbmNvbnN0IG1ha2VTaG9ydGNvZGUgPSBuYW1lID0+IGZ1bmN0aW9uIE1EWERlZmF1bHRTaG9ydGNvZGUocHJvcHMpIHtcbiAgY29uc29sZS53YXJuKFwiQ29tcG9uZW50IFwiICsgbmFtZSArIFwiIHdhcyBub3QgaW1wb3J0ZWQsIGV4cG9ydGVkLCBvciBwcm92aWRlZCBieSBNRFhQcm92aWRlciBhcyBnbG9iYWwgc2NvcGVcIilcbiAgcmV0dXJuIDxkaXYgey4uLnByb3BzfS8+XG59O1xuXG5jb25zdCBNRFhMYXlvdXQgPSBmdW5jdGlvbiBOZXh0cmFQYWdlIChwcm9wcykge1xuICAgIHJldHVybiB3aXRoU1NHKHdpdGhMYXlvdXQoe1xuICAgICAgZmlsZW5hbWU6IFwicHJpY2UtbWVjaGFuaWNzLm1kXCIsXG4gICAgICByb3V0ZTogXCIvZmFxcy9wcmljZS1tZWNoYW5pY3NcIixcbiAgICAgIG1ldGE6IHt9LFxuICAgICAgcGFnZU1hcDogW3tcIm5hbWVcIjpcIl9hcHBcIixcInJvdXRlXCI6XCIvX2FwcFwifSx7XCJuYW1lXCI6XCJhdWRpdHNcIixcImNoaWxkcmVuXCI6W3tcIm5hbWVcIjpcImNlcnRpa1wiLFwicm91dGVcIjpcIi9hdWRpdHMvY2VydGlrXCJ9XSxcInJvdXRlXCI6XCIvYXVkaXRzXCJ9LHtcIm5hbWVcIjpcImZhcXNcIixcImNoaWxkcmVuXCI6W3tcIm5hbWVcIjpcImJhc2ljc1wiLFwicm91dGVcIjpcIi9mYXFzL2Jhc2ljc1wifSx7XCJuYW1lXCI6XCJib25kaW5nXCIsXCJyb3V0ZVwiOlwiL2ZhcXMvYm9uZGluZ1wifSx7XCJuYW1lXCI6XCJjb3Vwb24tbWVjaGFuaWNzXCIsXCJyb3V0ZVwiOlwiL2ZhcXMvY291cG9uLW1lY2hhbmljc1wifSx7XCJuYW1lXCI6XCJtZXRhLmpzb25cIixcIm1ldGFcIjp7XCJpbmRleFwiOlwiQmFzaWNzXCIsXCJib25kaW5nXCI6XCJCb25kaW5nIFRva2Vuc1wiLFwiY291cG9uLW1lY2hhbmljc1wiOlwiQ291cG9uc1wiLFwicHJpY2UtbWVjaGFuaWNzXCI6XCJQcmljZSBNZWNoYW5pY3NcIn19LHtcIm5hbWVcIjpcInByaWNlLW1lY2hhbmljc1wiLFwicm91dGVcIjpcIi9mYXFzL3ByaWNlLW1lY2hhbmljc1wifV0sXCJyb3V0ZVwiOlwiL2ZhcXNcIn0se1wibmFtZVwiOlwiaW5kZXhcIixcInJvdXRlXCI6XCIvXCJ9LHtcIm5hbWVcIjpcIm1ldGEuanNvblwiLFwibWV0YVwiOntcImluZGV4XCI6XCJIb21lXCIsXCJmYXFzXCI6XCJGQVFzXCIsXCJhdWRpdHNcIjpcIkF1ZGl0c1wiLFwicmVzb3VyY2VzXCI6XCJSZXNvdXJjZXNcIn19LHtcIm5hbWVcIjpcInJlc291cmNlc1wiLFwicm91dGVcIjpcIi9yZXNvdXJjZXNcIn1dXG4gICAgfSwgbGF5b3V0Q29uZmlnKSkocHJvcHMpXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG4gICAgPGgxPntgUHJpY2UgTWVjaGFuaWNzYH08L2gxPlxuICAgIDxoMz57YElmIEVTRCBpcyBhIHN0YWJsZWNvaW4sIGlzIGl0IGFsd2F5cyB3b3J0aCAkMT9gfTwvaDM+XG4gICAgPHA+e2BOby4gVGhlIGdvYWwsIGF0IG1hdHVyaXR5LCBpcyB0byBzZWUgdGhlIHN0YWJsZWNvaW4gc3RheSB2ZXJ5IGNsb3NlIHRvIFxcXFwkMS4gIEhvd2V2ZXIsIGl0IGlzIGV4cGVjdGVkIGluIHRoZSBlYXJseSBkYXlzIG9mIHRoZSBwcm9qZWN0LCBpdCB3aWxsIGJlIG1vcmUgdm9sYXRpbGUuIFNvbWUgdm9sYXRpbGl0eSBpcyBuYXR1cmFsIC0tIHRoZSB3aG9sZSBkZXNpZ24gb2YgdGhlIHByb3RvY29sIGlzIHRvIGFkanVzdCB0aGUgbW9uZXkgc3VwcGx5IHdoZW4gdGhlIHByaWNlIGRpdmVyZ2VzIC0tIGNvbnNlcXVlbnRseSwgaXQgaXMgbm90IGEgc3VycHJpc2UgdGhhdCBpdCB3b3VsZCBkaXZlcmdlLiBIb3dldmVyLCBvdmVyIHRpbWUgaXQgaXMgZXhwZWN0ZWQgZm9yIHRoZSB2b2xhdGlsaXR5IHRvIHN1YnNpZGUgYW5kIEVTRCB0byBtYWludGFpbiBpdHMgcGVnIGFnYWluc3QgdGhlIGRlc2lyZWQgYXNzZXQuYH08L3A+XG4gICAgPHA+e2BJbiBhIGB9XG4gICAgICA8YSB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL21lZGl1bS5jb20vQDB4YW5zL2Vzcy1hLWJyaWVmLWludHJvLXRvd2FyZHMtbm92ZWwtZWxhc3RpYy1zdGFibGVjb2luLWltcGxlbWVudGF0aW9uLTYwN2U4NjY1NGE5ZlwiLFxuICAgICAgICBcInBhcmVudE5hbWVcIjogXCJwXCJcbiAgICAgIH19PntgbWVkaXVtYH08L2E+XG4gICAgICB7YCBwb3N0IGJ5IGFuIGVhcmx5IGNvbW11bml0eSBtZW1iZXIgb2YgRVNEIGhlL3NoZSBleHBsYWlucyB0aGUgbWVjaGFuaXNtLmB9PC9wPlxuICAgIDxoMz57YEhvdyBFU0QncyBzdXBwbHkgZ3JvdyBpbiByZWxhdGlvbiB0byB0b2tlbiBob2xkZXJzP2B9PC9oMz5cbiAgICA8cD57YEVTRCB1c2VzIGEgc2VpZ25pb3JhZ2UgbW9kZWwgdG8gZ3JvdyB0aGUgbW9uZXkgc3VwcGx5LiBUaGlzIG1lYW5zLCBpZiB0aGUgbWFya2V0IGRlbWFuZHMgbW9yZSBFU0QgKG1vcmUgYnV5ZXJzIHRoYW4gc2VsbGVycyBvZiBFU0QpLCBtb3JlIG9mIHRoZSBjb2luIChFU0QpIHdpbGwgYmUgbWludGVkIHRvIG1lZXQgdGhhdCBkZW1hbmQgYW5kIGJyaW5nIHRoZSBwcmljZSBiYWNrIGRvd24gdG8gJDEuICBUaGF0IGV4dHJhIG1pbnRlZCBtb25leSBzdXBwbHkgaXMgZGlzdHJpYnV0ZWQgdG8gdGhlIGN1cnJlbnQgaG9sZGVycyBvZiBFU0QgKHdobyBoYXZlIHRha2VuIHN0ZXBzIHRvIGxvY2sgdGhlaXIgaG9sZGluZ3MgdG8gdGhlIHByb3RvY29sLCBhcyBkZXRhaWxlZCBiZWxvdy4pICBLZWVwIGluIG1pbmQsIGlmIHRoZSByZXZlcnNlIGhhcHBlbnMgLS0gZGVtYW5kIGdvZXMgZG93biAtLSB0aGUgcHJvdG9jb2wgaGFzIHRvIHJlZHVjZSB0aGUgc3VwcGx5IG9mIEVTRCwgaGF2aW5nIGFuIG9wcG9zaXRlIGVmZmVjdC5gfTwvcD5cbiAgICA8aDM+e2BXaGF0IGlzIGFuIEVwb2NoP2B9PC9oMz5cbiAgICA8cD57YFRoZSBsZW5ndGggb2YgdGltZSBiZXR3ZWVuIGFkanVzdG1lbnQgdG8gdGhlIG1vbmV5IHN1cHBseS4gRXZlcnkgZXBvY2gsIGN1cnJlbnRseSA4IGhvdXJzLCB0aGUgcHJvdG9jb2wgYXNzZXNzZXMgd2hldGhlciB0aGUgbW9uZXkgc3VwcGx5IG91Z2h0IHRvIGdyb3cgb3Igc2hyaW5rLCBhbmQgdGhlbiBpc3N1ZXMgcmV3YXJkcyBvciBkZWJ0IHRvIG1ha2UgdGhhdCBoYXBwZW4uIEFzIGFuIGludmVzdG9yLCBhdCB0aGUgZW5kIG9mIGV2ZXJ5IGVwb2NoIHlvdSByZWNlaXZlIHJld2FyZHMgaWYgaXQgZXhwYW5kcy5gfTwvcD5cbiAgICA8aDM+e2BTaG91bGQgSSBhZHZhbmNlIGFuIEVwb2NoPyBXaGF0IGRvZXMgdGhpcyBtZWFuP2B9PC9oMz5cbiAgICA8cD57YEVwb2NocyBoYXBwZW4gZXZlcnkgZWlnaHQgaG91cnMuIEZvciB0ZWNobmljYWwgcmVhc29ucywgc29tZW9uZSBuZWVkcyB0byBtYW51YWxseSB0cmlnZ2VyIHRoZSBzdGFydCBvZiBhIG5ldyBlcG9jaC4gIEEgbnVtYmVyIG9mIHVzZXJzIGhhdmUgd3JpdHRlbiBib3RzIGNvbXBldGluZyBmb3IgdGhlIDEwMCBFU0QgcmV3YXJkIHRvIGJlIHRoZSBmaXJzdCB0byB0cmlnZ2VyIGl0LCBhcyBhIG5ldyB1c2VyIEkgd291bGQgbm90IHdvcnJ5IGFib3V0IHRoaXMgdGVjaG5pY2FsIGRldGFpbC5gfTwvcD5cbiAgICA8aDM+e2BXaHkgZG8gc29tZSBlcG9jaHMgZ3JhbnQgcmV3YXJkcyBhbmQgc29tZSBlcG9jaHMgZG8gbm90P2B9PC9oMz5cbiAgICA8cD57YElmIHRoZXJlIGlzIGV4Y2VzcyBkZW1hbmQgZm9yIEVTRCwgdGhlbiB0aGUgcHJpY2Ugd2lsbCB0cmVuZCBhYm92ZSBcXFxcJDEgb24gdGhlIFVuaXN3YXAgcG9vbCwgYW5kIHRoYXQgc2lnbmFscyB0aGUgcHJvdG9jb2wgdG8gbWludCBhZGRpdGlvbmFsIHRva2VuIHN1cHBseS4gQ29udmVyc2VseSwgaWYgdGhlIGRlbWFuZCBzaHJpbmtzLCBleGNlc3Mgc2VsbGluZyBvbiBVbmlzd2FwIHdpbGwgcHVzaCB0aGUgcHJpY2UgYmVsb3cgJDEsIHdoaWNoIHRyaWdnZXJzIHRoZSBwcm90b2NvbCB0byBnZW5lcmF0ZSBkZWJ0IGFuZCBpbmNlbnRpdmlzZSB0b2tlbiBob2xkZXJzIHRvIGJ1cm4gRVNEIHRvIHNocmluayB0aGUgdG9rZW4gc3VwcGx5LmB9PC9wPlxuICAgIDxwPntgSWYgdGhlIG1vbmV5IHN1cHBseSBuZWVkcyB0byBiZSBzaHJ1bmssIG5vIHN1cHBseSBleHBhbnNpb24gd2lsbCBiZSBtYWRlIHRoYXQgZXBvY2guIElmIHRoZSBtb25leSBzdXBwbHkgd2FzIHNocnVuayBpbiB0aGUgcGFzdCwgdGhvc2UgZGVidHMgd2lsbCBlaXRoZXIgcmVtYWluIG9uIHRoZSBwcm90b2NvbCwgb3IgZ2V0IGJvdWdodCBieSB1c2VycyBpbiB0aGUgZm9ybSBvZiBjb3Vwb25zLiBCb3RoIGNvdXBvbnMgYW5kIGRlYnQgd2lsbCBiZSBwYWlkIG9mZiBpbiB0aGUgZnV0dXJlIGFoZWFkIG9mIG5ldyByZXdhcmRzLCBzbyBpdCBpcyBwb3NzaWJsZSB0byByZWNlaXZlIG5vIG5ldyByZXdhcmRzIGluIGEgbW9uZXkgc3VwcGx5IGV4cGFuc2lvbiBlcG9jaCBpZiB0aGVyZSBhcmUgaGlzdG9yaWNhbCBkZWJ0cyB0byBiZSByZXBhaWQgZmlyc3QuYH08L3A+XG5cbiAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faqs/price-mechanics.md\n");

/***/ }),

/***/ "./theme.config.js":
/*!*************************!*\
  !*** ./theme.config.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/penghaoen2/Documents/GitHub/blockchain-docs/theme.config.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// theme.config.js\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  github: \"https://github.com/howardpen9/blockchain-docs\",\n  // link of the project repo\n  siteGithub: \"https://github.com/howardpen9/blockchain-docs\",\n  // link of the docs repo path\n  titleSuffix: \"Blockchain 學習\",\n  nextLinks: true,\n  prevLinks: true,\n  search: true,\n  customSearch: null,\n  // <- customizable, you can use algolia for example\n  darkMode: true,\n  footer: true,\n  footerText: \"MIT 2020 ©\",\n  footerEditOnGitHubLink: true,\n  // will link to the docs repo\n  logo: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"mr-2 font-extrabold hidden md:inline\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, \"Blockchain Notes\"), __jsx(\"span\", {\n    className: \"text-gray-600 font-normal hidden md:inline\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"DeFi Tutorial - Orientation \\u6559\\u7A0B \\u7D00\\u9304\")),\n  head: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"meta\", {\n    name: \"msapplication-TileColor\",\n    content: \"#ffffff\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"theme-color\",\n    content: \"#ffffff\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    httpEquiv: \"Content-Language\",\n    content: \"en\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Docs for Empty Set Dollar, an algorithmic stablecoin compatible with DeFi applications\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"og:description\",\n    content: \"Docs for Empty Set Dollar, an algorithmic stablecoin compatible with DeFi applications\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:card\",\n    content: \"summary_large_image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:site\",\n    content: \"@shuding_\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"og:title\",\n    content: \"Empty Set Dollar - Documentation\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(\"meta\", {\n    name: \"apple-mobile-web-app-title\",\n    content: \"Empty Set Dollar - Documentation\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  })),\n  i18n: [{\n    locale: \"en\",\n    text: \"English\"\n  }, {\n    locale: \"zh\",\n    text: \"简体中文\"\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS5jb25maWcuanM/NDdkMyJdLCJuYW1lcyI6WyJnaXRodWIiLCJzaXRlR2l0aHViIiwidGl0bGVTdWZmaXgiLCJuZXh0TGlua3MiLCJwcmV2TGlua3MiLCJzZWFyY2giLCJjdXN0b21TZWFyY2giLCJkYXJrTW9kZSIsImZvb3RlciIsImZvb3RlclRleHQiLCJmb290ZXJFZGl0T25HaXRIdWJMaW5rIiwibG9nbyIsImhlYWQiLCJpMThuIiwibG9jYWxlIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDZTtBQUNiQSxRQUFNLEVBQUUsK0NBREs7QUFDNEM7QUFDekRDLFlBQVUsRUFBRSwrQ0FGQztBQUVnRDtBQUM3REMsYUFBVyxFQUFFLGVBSEE7QUFJYkMsV0FBUyxFQUFFLElBSkU7QUFLYkMsV0FBUyxFQUFFLElBTEU7QUFNYkMsUUFBTSxFQUFFLElBTks7QUFPYkMsY0FBWSxFQUFFLElBUEQ7QUFPTztBQUNwQkMsVUFBUSxFQUFFLElBUkc7QUFTYkMsUUFBTSxFQUFFLElBVEs7QUFVYkMsWUFBVSxFQUFFLFlBVkM7QUFXYkMsd0JBQXNCLEVBQUUsSUFYWDtBQVdpQjtBQUM5QkMsTUFBSSxFQUNGLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxzQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUlFO0FBQU0sYUFBUyxFQUFDLDRDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQUpGLENBYlc7QUFzQmJDLE1BQUksRUFDRixNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMseUJBQVg7QUFBcUMsV0FBTyxFQUFDLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBbUMsV0FBTyxFQUFDLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxXQUFPLEVBQUMsd0ZBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBU0U7QUFDRSxRQUFJLEVBQUMsZ0JBRFA7QUFFRSxXQUFPLEVBQUMsd0ZBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBYUU7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixXQUFPLEVBQUMscUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWNFO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsV0FBTyxFQUFDLFdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixFQWVFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLGtDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFnQkU7QUFDRSxRQUFJLEVBQUMsNEJBRFA7QUFFRSxXQUFPLEVBQUMsa0NBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQXZCVztBQTZDYkMsTUFBSSxFQUFFLENBQ0o7QUFBRUMsVUFBTSxFQUFFLElBQVY7QUFBZ0JDLFFBQUksRUFBRTtBQUF0QixHQURJLEVBRUo7QUFBRUQsVUFBTSxFQUFFLElBQVY7QUFBZ0JDLFFBQUksRUFBRTtBQUF0QixHQUZJO0FBN0NPLENBQWYiLCJmaWxlIjoiLi90aGVtZS5jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGVtZS5jb25maWcuanNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ob3dhcmRwZW45L2Jsb2NrY2hhaW4tZG9jc1wiLCAvLyBsaW5rIG9mIHRoZSBwcm9qZWN0IHJlcG9cbiAgc2l0ZUdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vaG93YXJkcGVuOS9ibG9ja2NoYWluLWRvY3NcIiwgLy8gbGluayBvZiB0aGUgZG9jcyByZXBvIHBhdGhcbiAgdGl0bGVTdWZmaXg6IFwiQmxvY2tjaGFpbiDlrbjnv5JcIixcbiAgbmV4dExpbmtzOiB0cnVlLFxuICBwcmV2TGlua3M6IHRydWUsXG4gIHNlYXJjaDogdHJ1ZSxcbiAgY3VzdG9tU2VhcmNoOiBudWxsLCAvLyA8LSBjdXN0b21pemFibGUsIHlvdSBjYW4gdXNlIGFsZ29saWEgZm9yIGV4YW1wbGVcbiAgZGFya01vZGU6IHRydWUsXG4gIGZvb3RlcjogdHJ1ZSxcbiAgZm9vdGVyVGV4dDogXCJNSVQgMjAyMCDCqVwiLFxuICBmb290ZXJFZGl0T25HaXRIdWJMaW5rOiB0cnVlLCAvLyB3aWxsIGxpbmsgdG8gdGhlIGRvY3MgcmVwb1xuICBsb2dvOiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMiBmb250LWV4dHJhYm9sZCBoaWRkZW4gbWQ6aW5saW5lXCI+XG4gICAgICAgIEJsb2NrY2hhaW4gTm90ZXNcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ub3JtYWwgaGlkZGVuIG1kOmlubGluZVwiPlxuICAgICAgICBEZUZpIFR1dG9yaWFsIC0gT3JpZW50YXRpb24g5pWZ56iLIOe0gOmMhFxuICAgICAgPC9zcGFuPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICksXG4gIGhlYWQ6IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LUxhbmd1YWdlXCIgY29udGVudD1cImVuXCIgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIGNvbnRlbnQ9XCJEb2NzIGZvciBFbXB0eSBTZXQgRG9sbGFyLCBhbiBhbGdvcml0aG1pYyBzdGFibGVjb2luIGNvbXBhdGlibGUgd2l0aCBEZUZpIGFwcGxpY2F0aW9uc1wiXG4gICAgICAvPlxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgY29udGVudD1cIkRvY3MgZm9yIEVtcHR5IFNldCBEb2xsYXIsIGFuIGFsZ29yaXRobWljIHN0YWJsZWNvaW4gY29tcGF0aWJsZSB3aXRoIERlRmkgYXBwbGljYXRpb25zXCJcbiAgICAgIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAc2h1ZGluZ19cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkVtcHR5IFNldCBEb2xsYXIgLSBEb2N1bWVudGF0aW9uXCIgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiXG4gICAgICAgIGNvbnRlbnQ9XCJFbXB0eSBTZXQgRG9sbGFyIC0gRG9jdW1lbnRhdGlvblwiXG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICksXG4gIGkxOG46IFtcbiAgICB7IGxvY2FsZTogXCJlblwiLCB0ZXh0OiBcIkVuZ2xpc2hcIiB9LFxuICAgIHsgbG9jYWxlOiBcInpoXCIsIHRleHQ6IFwi566A5L2T5Lit5paHXCIgfSxcbiAgXSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./theme.config.js\n");

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mdx-js/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCI/M2UxMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWR4LWpzL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mdx-js/react\n");

/***/ }),

/***/ "nextra-theme-docs":
/*!************************************!*\
  !*** external "nextra-theme-docs" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nextra-theme-docs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0cmEtdGhlbWUtZG9jc1wiP2Y3MGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dHJhLXRoZW1lLWRvY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0cmEtdGhlbWUtZG9jc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nextra-theme-docs\n");

/***/ }),

/***/ "nextra/ssg":
/*!*****************************!*\
  !*** external "nextra/ssg" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nextra/ssg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0cmEvc3NnXCI/N2Y5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0cmEvc3NnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dHJhL3NzZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nextra/ssg\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });