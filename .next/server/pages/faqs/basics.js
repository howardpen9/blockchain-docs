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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/faqs/basics.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/faqs/basics.md":
/*!******************************!*\
  !*** ./pages/faqs/basics.md ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextra-theme-docs */ \"nextra-theme-docs\");\n/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nextra/ssg */ \"nextra/ssg\");\n/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nextra_ssg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_penghaoen2_Documents_GitHub_blockchain_docs_theme_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.config.js */ \"./theme.config.js\");\nvar _jsxFileName = \"/Users/penghaoen2/Documents/GitHub/blockchain-docs/pages/faqs/basics.md\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n/* @jsx mdx */\n\n\n\n\n\nconst makeShortcode = name => function MDXDefaultShortcode(props) {\n  console.warn(\"Component \" + name + \" was not imported, exported, or provided by MDXProvider as global scope\");\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"div\", _extends({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 10\n    }\n  }));\n};\n\nconst MDXLayout = function NextraPage(props) {\n  return Object(nextra_ssg__WEBPACK_IMPORTED_MODULE_3__[\"withSSG\"])(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2___default()({\n    filename: \"basics.md\",\n    route: \"/faqs/basics\",\n    meta: {},\n    pageMap: [{\n      \"name\": \"_app\",\n      \"route\": \"/_app\"\n    }, {\n      \"name\": \"audits\",\n      \"children\": [{\n        \"name\": \"certik\",\n        \"route\": \"/audits/certik\"\n      }],\n      \"route\": \"/audits\"\n    }, {\n      \"name\": \"faqs\",\n      \"children\": [{\n        \"name\": \"basics\",\n        \"route\": \"/faqs/basics\"\n      }, {\n        \"name\": \"bonding\",\n        \"route\": \"/faqs/bonding\"\n      }, {\n        \"name\": \"coupon-mechanics\",\n        \"route\": \"/faqs/coupon-mechanics\"\n      }, {\n        \"name\": \"meta.json\",\n        \"meta\": {\n          \"index\": \"Basics\",\n          \"bonding\": \"Bonding Tokens\",\n          \"coupon-mechanics\": \"Coupons\",\n          \"price-mechanics\": \"Price Mechanics\"\n        }\n      }, {\n        \"name\": \"price-mechanics\",\n        \"route\": \"/faqs/price-mechanics\"\n      }],\n      \"route\": \"/faqs\"\n    }, {\n      \"name\": \"index\",\n      \"route\": \"/\"\n    }, {\n      \"name\": \"meta.json\",\n      \"meta\": {\n        \"index\": \"Home\",\n        \"faqs\": \"FAQs\",\n        \"audits\": \"Audits\",\n        \"resources\": \"Resources\"\n      }\n    }, {\n      \"name\": \"resources\",\n      \"route\": \"/resources\"\n    }]\n  }, _Users_penghaoen2_Documents_GitHub_blockchain_docs_theme_config_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]))(props);\n};\n\nfunction MDXContent(_ref) {\n  let {\n    components\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(MDXLayout, _extends({}, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, `Empty Set Dollar Basics`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, `What is Empty Set Dollar?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, `Empty Set Dollar (ESD) is an algorithmic stablecoin built to be the reserve currency of Decentralized Finance. It has three key features:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"li\", _extends({\n    \"parentName\": \"ul\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"strong\", _extends({\n    \"parentName\": \"li\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 10\n    }\n  }), `Stability`), ` - ESD uses an algorithmic approach to maintaining price stability around a 1 USDC target. This approach relies on a tuned incentivization mechanism to reward actors who promote stability within the protocol.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"li\", _extends({\n    \"parentName\": \"ul\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"strong\", _extends({\n    \"parentName\": \"li\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 10\n    }\n  }), `Composability`), ` - Even with a dynamic system supply, Empty Set Dollar adheres to the ERC-20 token standard. This makes it work seamlessly across the decentralized finance infrastructure and reduces the likely hood of unforeseen bugs in integrated protocols.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"li\", _extends({\n    \"parentName\": \"ul\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"strong\", _extends({\n    \"parentName\": \"li\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 10\n    }\n  }), `Decentralisation`), ` - Since day one Empty Set Dollar has had completely decentralized on-chain governance. Additionally, the protocol launched with 0 initial supply and no pre-mine for the anonymous founding team.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, `How does ESD differ from other stablecoins?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, `Empty Set Dollar's protocol was designed by taking elements from numerous pre-existing protocols to produce a balanced protocol that avoids the pitfalls of other protocol designs.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, `The resulting protocol sidesteps the centralisation risks of USDC, USDT, & TUSD, attempts to avoid AMPL & BASED’s \"death spirals\", the over-collateralisation requirements of sUSD & DAI, and, most importantly, it integrates seamlessly with existing DeFi protocols.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"img\", _extends({\n    \"src\": \"/esd-comparison.png\",\n    \"parentName\": \"p\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 8\n    }\n  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, `How does ESD become a sustainably useful token?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, `For ESD to become a sustainably useful stablecoin like USDT or DAI, it must begin to be accepted as currency by DeFi and other applications on the Ethereum protocol. In periods of volatility, the token's utility may be diminished. However, as the protocol matures the volatility will reduce increasing its utility.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, `Who created Empty Set Dollar?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, `The original founding team is anonymous. However, if you'd like to contact them you can email them here: `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"a\", _extends({\n    \"href\": \"mailto:emptysetsquad@protonmail.com\",\n    \"parentName\": \"p\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }), `emptysetsquad@protonmail.com`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, `Who controls Empty Set Dollar?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }, `Since launch Empty Set Dollar has had on-chain governance. This means that any changes or upgrades to the protocol need to be voted on by the community of token holders before they are enacted.`));\n}\n;\nMDXContent.isMDXComponent = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mYXFzL2Jhc2ljcy5tZD83NDNkIl0sIm5hbWVzIjpbIm1ha2VTaG9ydGNvZGUiLCJuYW1lIiwiTURYRGVmYXVsdFNob3J0Y29kZSIsInByb3BzIiwiY29uc29sZSIsIndhcm4iLCJNRFhMYXlvdXQiLCJOZXh0cmFQYWdlIiwid2l0aFNTRyIsIndpdGhMYXlvdXQiLCJmaWxlbmFtZSIsInJvdXRlIiwibWV0YSIsInBhZ2VNYXAiLCJsYXlvdXRDb25maWciLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHQyxJQUFJLElBQUksU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2hFQyxTQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFlSixJQUFmLEdBQXNCLHlFQUFuQztBQUNBLFNBQU8sOEVBQVNFLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0QsQ0FIRDs7QUFLQSxNQUFNRyxTQUFTLEdBQUcsU0FBU0MsVUFBVCxDQUFxQkosS0FBckIsRUFBNEI7QUFDMUMsU0FBT0ssMERBQU8sQ0FBQ0Msd0RBQVUsQ0FBQztBQUN4QkMsWUFBUSxFQUFFLFdBRGM7QUFFeEJDLFNBQUssRUFBRSxjQUZpQjtBQUd4QkMsUUFBSSxFQUFFLEVBSGtCO0FBSXhCQyxXQUFPLEVBQUUsQ0FBQztBQUFDLGNBQU8sTUFBUjtBQUFlLGVBQVE7QUFBdkIsS0FBRCxFQUFpQztBQUFDLGNBQU8sUUFBUjtBQUFpQixrQkFBVyxDQUFDO0FBQUMsZ0JBQU8sUUFBUjtBQUFpQixpQkFBUTtBQUF6QixPQUFELENBQTVCO0FBQXlFLGVBQVE7QUFBakYsS0FBakMsRUFBNkg7QUFBQyxjQUFPLE1BQVI7QUFBZSxrQkFBVyxDQUFDO0FBQUMs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLGlEQUFOLENBckNLLEVBc0NMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyw0VEFBTCxDQXRDSyxFQXVDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sK0JBQU4sQ0F2Q0ssRUF3Q0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLDJHQUFMLEVBQ0Usd0VBQU87QUFDTCxZQUFRLHFDQURIO0FBRUwsa0JBQWM7QUFGVCxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFHSyw4QkFITCxDQURGLENBeENLLEVBNkNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTSxnQ0FBTixDQTdDSyxFQThDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUssbU1BQUwsQ0E5Q0ssQ0FBUDtBQWlERDtBQUVEO0FBQ0FELFVBQVUsQ0FBQ0UsY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiIuL3BhZ2VzL2ZhcXMvYmFzaWNzLm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSAnbmV4dHJhLXRoZW1lLWRvY3MnXG5pbXBvcnQgeyB3aXRoU1NHIH0gZnJvbSAnbmV4dHJhL3NzZydcbmltcG9ydCBsYXlvdXRDb25maWcgZnJvbSAnL1VzZXJzL3BlbmdoYW9lbjIvRG9jdW1lbnRzL0dpdEh1Yi9ibG9ja2NoYWluLWRvY3MvdGhlbWUuY29uZmlnLmpzJ1xuXG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gIGNvbnNvbGUud2FybihcIkNvbXBvbmVudCBcIiArIG5hbWUgKyBcIiB3YXMgbm90IGltcG9ydGVkLCBleHBvcnRlZCwgb3IgcHJvdmlkZWQgYnkgTURYUHJvdmlkZXIgYXMgZ2xvYmFsIHNjb3BlXCIpXG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30vPlxufTtcblxuY29uc3QgTURYTGF5b3V0ID0gZnVuY3Rpb24gTmV4dHJhUGFnZSAocHJvcHMpIHtcbiAgICByZXR1cm4gd2l0aFNTRyh3aXRoTGF5b3V0KHtcbiAgICAgIGZpbGVuYW1lOiBcImJhc2ljcy5tZFwiLFxuICAgICAgcm91dGU6IFwiL2ZhcXMvYmFzaWNzXCIsXG4gICAgICBtZXRhOiB7fSxcbiAgICAgIHBhZ2VNYXA6IFt7XCJuYW1lXCI6XCJfYXBwXCIsXCJyb3V0ZVwiOlwiL19hcHBcIn0se1wibmFtZVwiOlwiYXVkaXRzXCIsXCJjaGlsZHJlblwiOlt7XCJuYW1lXCI6XCJjZXJ0aWtcIixcInJvdXRlXCI6XCIvYXVkaXRzL2NlcnRpa1wifV0sXCJyb3V0ZVwiOlwiL2F1ZGl0c1wifSx7XCJuYW1lXCI6XCJmYXFzXCIsXCJjaGlsZHJlblwiOlt7XCJuYW1lXCI6XCJiYXNpY3NcIixcInJvdXRlXCI6XCIvZmFxcy9iYXNpY3NcIn0se1wibmFtZVwiOlwiYm9uZGluZ1wiLFwicm91dGVcIjpcIi9mYXFzL2JvbmRpbmdcIn0se1wibmFtZVwiOlwiY291cG9uLW1lY2hhbmljc1wiLFwicm91dGVcIjpcIi9mYXFzL2NvdXBvbi1tZWNoYW5pY3NcIn0se1wibmFtZVwiOlwibWV0YS5qc29uXCIsXCJtZXRhXCI6e1wiaW5kZXhcIjpcIkJhc2ljc1wiLFwiYm9uZGluZ1wiOlwiQm9uZGluZyBUb2tlbnNcIixcImNvdXBvbi1tZWNoYW5pY3NcIjpcIkNvdXBvbnNcIixcInByaWNlLW1lY2hhbmljc1wiOlwiUHJpY2UgTWVjaGFuaWNzXCJ9fSx7XCJuYW1lXCI6XCJwcmljZS1tZWNoYW5pY3NcIixcInJvdXRlXCI6XCIvZmFxcy9wcmljZS1tZWNoYW5pY3NcIn1dLFwicm91dGVcIjpcIi9mYXFzXCJ9LHtcIm5hbWVcIjpcImluZGV4XCIsXCJyb3V0ZVwiOlwiL1wifSx7XCJuYW1lXCI6XCJtZXRhLmpzb25cIixcIm1ldGFcIjp7XCJpbmRleFwiOlwiSG9tZVwiLFwiZmFxc1wiOlwiRkFRc1wiLFwiYXVkaXRzXCI6XCJBdWRpdHNcIixcInJlc291cmNlc1wiOlwiUmVzb3VyY2VzXCJ9fSx7XCJuYW1lXCI6XCJyZXNvdXJjZXNcIixcInJvdXRlXCI6XCIvcmVzb3VyY2VzXCJ9XVxuICAgIH0sIGxheW91dENvbmZpZykpKHByb3BzKVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuICAgIDxoMT57YEVtcHR5IFNldCBEb2xsYXIgQmFzaWNzYH08L2gxPlxuICAgIDxoMz57YFdoYXQgaXMgRW1wdHkgU2V0IERvbGxhcj9gfTwvaDM+XG4gICAgPHA+e2BFbXB0eSBTZXQgRG9sbGFyIChFU0QpIGlzIGFuIGFsZ29yaXRobWljIHN0YWJsZWNvaW4gYnVpbHQgdG8gYmUgdGhlIHJlc2VydmUgY3VycmVuY3kgb2YgRGVjZW50cmFsaXplZCBGaW5hbmNlLiBJdCBoYXMgdGhyZWUga2V5IGZlYXR1cmVzOmB9PC9wPlxuICAgIDx1bD5cblxuICAgICAgPGxpIHsuLi57XG4gICAgICAgIFwicGFyZW50TmFtZVwiOiBcInVsXCJcbiAgICAgIH19PjxzdHJvbmcgey4uLntcbiAgICAgICAgICBcInBhcmVudE5hbWVcIjogXCJsaVwiXG4gICAgICAgIH19PntgU3RhYmlsaXR5YH08L3N0cm9uZz5cbiAgICAgICAge2AgLSBFU0QgdXNlcyBhbiBhbGdvcml0aG1pYyBhcHByb2FjaCB0byBtYWludGFpbmluZyBwcmljZSBzdGFiaWxpdHkgYXJvdW5kIGEgMSBVU0RDIHRhcmdldC4gVGhpcyBhcHByb2FjaCByZWxpZXMgb24gYSB0dW5lZCBpbmNlbnRpdml6YXRpb24gbWVjaGFuaXNtIHRvIHJld2FyZCBhY3RvcnMgd2hvIHByb21vdGUgc3RhYmlsaXR5IHdpdGhpbiB0aGUgcHJvdG9jb2wuYH08L2xpPlxuXG5cbiAgICAgIDxsaSB7Li4ue1xuICAgICAgICBcInBhcmVudE5hbWVcIjogXCJ1bFwiXG4gICAgICB9fT48c3Ryb25nIHsuLi57XG4gICAgICAgICAgXCJwYXJlbnROYW1lXCI6IFwibGlcIlxuICAgICAgICB9fT57YENvbXBvc2FiaWxpdHlgfTwvc3Ryb25nPlxuICAgICAgICB7YCAtIEV2ZW4gd2l0aCBhIGR5bmFtaWMgc3lzdGVtIHN1cHBseSwgRW1wdHkgU2V0IERvbGxhciBhZGhlcmVzIHRvIHRoZSBFUkMtMjAgdG9rZW4gc3RhbmRhcmQuIFRoaXMgbWFrZXMgaXQgd29yayBzZWFtbGVzc2x5IGFjcm9zcyB0aGUgZGVjZW50cmFsaXplZCBmaW5hbmNlIGluZnJhc3RydWN0dXJlIGFuZCByZWR1Y2VzIHRoZSBsaWtlbHkgaG9vZCBvZiB1bmZvcmVzZWVuIGJ1Z3MgaW4gaW50ZWdyYXRlZCBwcm90b2NvbHMuYH08L2xpPlxuXG5cbiAgICAgIDxsaSB7Li4ue1xuICAgICAgICBcInBhcmVudE5hbWVcIjogXCJ1bFwiXG4gICAgICB9fT48c3Ryb25nIHsuLi57XG4gICAgICAgICAgXCJwYXJlbnROYW1lXCI6IFwibGlcIlxuICAgICAgICB9fT57YERlY2VudHJhbGlzYXRpb25gfTwvc3Ryb25nPlxuICAgICAgICB7YCAtIFNpbmNlIGRheSBvbmUgRW1wdHkgU2V0IERvbGxhciBoYXMgaGFkIGNvbXBsZXRlbHkgZGVjZW50cmFsaXplZCBvbi1jaGFpbiBnb3Zlcm5hbmNlLiBBZGRpdGlvbmFsbHksIHRoZSBwcm90b2NvbCBsYXVuY2hlZCB3aXRoIDAgaW5pdGlhbCBzdXBwbHkgYW5kIG5vIHByZS1taW5lIGZvciB0aGUgYW5vbnltb3VzIGZvdW5kaW5nIHRlYW0uYH08L2xpPlxuXG4gICAgPC91bD5cbiAgICA8aDM+e2BIb3cgZG9lcyBFU0QgZGlmZmVyIGZyb20gb3RoZXIgc3RhYmxlY29pbnM/YH08L2gzPlxuICAgIDxwPntgRW1wdHkgU2V0IERvbGxhcidzIHByb3RvY29sIHdhcyBkZXNpZ25lZCBieSB0YWtpbmcgZWxlbWVudHMgZnJvbSBudW1lcm91cyBwcmUtZXhpc3RpbmcgcHJvdG9jb2xzIHRvIHByb2R1Y2UgYSBiYWxhbmNlZCBwcm90b2NvbCB0aGF0IGF2b2lkcyB0aGUgcGl0ZmFsbHMgb2Ygb3RoZXIgcHJvdG9jb2wgZGVzaWducy5gfTwvcD5cbiAgICA8cD57YFRoZSByZXN1bHRpbmcgcHJvdG9jb2wgc2lkZXN0ZXBzIHRoZSBjZW50cmFsaXNhdGlvbiByaXNrcyBvZiBVU0RDLCBVU0RULCAmIFRVU0QsIGF0dGVtcHRzIHRvIGF2b2lkIEFNUEwgJiBCQVNFROKAmXMgXCJkZWF0aCBzcGlyYWxzXCIsIHRoZSBvdmVyLWNvbGxhdGVyYWxpc2F0aW9uIHJlcXVpcmVtZW50cyBvZiBzVVNEICYgREFJLCBhbmQsIG1vc3QgaW1wb3J0YW50bHksIGl0IGludGVncmF0ZXMgc2VhbWxlc3NseSB3aXRoIGV4aXN0aW5nIERlRmkgcHJvdG9jb2xzLmB9PC9wPlxuICAgIDxwPjxpbWcgey4uLntcbiAgICAgICAgXCJzcmNcIjogXCIvZXNkLWNvbXBhcmlzb24ucG5nXCIsXG4gICAgICAgIFwicGFyZW50TmFtZVwiOiBcInBcIlxuICAgICAgfX0gLz48L3A+XG4gICAgPGgzPntgSG93IGRvZXMgRVNEIGJlY29tZSBhIHN1c3RhaW5hYmx5IHVzZWZ1bCB0b2tlbj9gfTwvaDM+XG4gICAgPHA+e2BGb3IgRVNEIHRvIGJlY29tZSBhIHN1c3RhaW5hYmx5IHVzZWZ1bCBzdGFibGVjb2luIGxpa2UgVVNEVCBvciBEQUksIGl0IG11c3QgYmVnaW4gdG8gYmUgYWNjZXB0ZWQgYXMgY3VycmVuY3kgYnkgRGVGaSBhbmQgb3RoZXIgYXBwbGljYXRpb25zIG9uIHRoZSBFdGhlcmV1bSBwcm90b2NvbC4gSW4gcGVyaW9kcyBvZiB2b2xhdGlsaXR5LCB0aGUgdG9rZW4ncyB1dGlsaXR5IG1heSBiZSBkaW1pbmlzaGVkLiBIb3dldmVyLCBhcyB0aGUgcHJvdG9jb2wgbWF0dXJlcyB0aGUgdm9sYXRpbGl0eSB3aWxsIHJlZHVjZSBpbmNyZWFzaW5nIGl0cyB1dGlsaXR5LmB9PC9wPlxuICAgIDxoMz57YFdobyBjcmVhdGVkIEVtcHR5IFNldCBEb2xsYXI/YH08L2gzPlxuICAgIDxwPntgVGhlIG9yaWdpbmFsIGZvdW5kaW5nIHRlYW0gaXMgYW5vbnltb3VzLiBIb3dldmVyLCBpZiB5b3UnZCBsaWtlIHRvIGNvbnRhY3QgdGhlbSB5b3UgY2FuIGVtYWlsIHRoZW0gaGVyZTogYH1cbiAgICAgIDxhIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIm1haWx0bzplbXB0eXNldHNxdWFkQHByb3Rvbm1haWwuY29tXCIsXG4gICAgICAgIFwicGFyZW50TmFtZVwiOiBcInBcIlxuICAgICAgfX0+e2BlbXB0eXNldHNxdWFkQHByb3Rvbm1haWwuY29tYH08L2E+PC9wPlxuICAgIDxoMz57YFdobyBjb250cm9scyBFbXB0eSBTZXQgRG9sbGFyP2B9PC9oMz5cbiAgICA8cD57YFNpbmNlIGxhdW5jaCBFbXB0eSBTZXQgRG9sbGFyIGhhcyBoYWQgb24tY2hhaW4gZ292ZXJuYW5jZS4gVGhpcyBtZWFucyB0aGF0IGFueSBjaGFuZ2VzIG9yIHVwZ3JhZGVzIHRvIHRoZSBwcm90b2NvbCBuZWVkIHRvIGJlIHZvdGVkIG9uIGJ5IHRoZSBjb21tdW5pdHkgb2YgdG9rZW4gaG9sZGVycyBiZWZvcmUgdGhleSBhcmUgZW5hY3RlZC5gfTwvcD5cblxuICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/faqs/basics.md\n");

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