"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/Components/UserCard/UserCard.jsx":
/*!**********************************************!*\
  !*** ./src/Components/UserCard/UserCard.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _UserCard_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserCard.module.css */ \"./src/Components/UserCard/UserCard.module.css\");\n/* harmony import */ var _UserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_UserCard_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _Context_ChatAppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context/ChatAppContext */ \"./src/Context/ChatAppContext.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n// INTERNAL IMPORT\n\n\n\nvar UserCard = function(param) {\n    var el = param.el, i = param.i, sendFriendRequest = param.sendFriendRequest;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_ChatAppContext__WEBPACK_IMPORTED_MODULE_4__.ChatAppContext), contextFriendLists = ref.friendLists, currentUserAccount = ref.account;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isFriend = ref1[0], setIsFriend = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isCurrentUser = ref2[0], setIsCurrentUser = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(i + 1), userIndex = ref3[0], setUserIndex = ref3[1]; // Initialize user index with i + 1\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHovered = ref4[0], setIsHovered = ref4[1]; // Initialize isHovered state to false\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Check if the displayed user is already a friend\n        var checkFriendship = function() {\n            if (contextFriendLists) {\n                var isAlreadyFriend = contextFriendLists.some(function(friend) {\n                    return friend.pubkey === el.accountAddress;\n                });\n                setIsFriend(isAlreadyFriend);\n            }\n        };\n        // Check if the displayed user is the current user\n        var checkCurrentUser = function() {\n            var currentUser = currentUserAccount.toLowerCase(); // Convert to lowercase\n            var displayedUser = el.accountAddress.toLowerCase(); // Convert to lowercase\n            if (currentUser === displayedUser) {\n                return true;\n            }\n            return false;\n        };\n        // Update the user index\n        setUserIndex(i + 1);\n        checkFriendship();\n        setIsCurrentUser(checkCurrentUser());\n    }, [\n        contextFriendLists,\n        el.accountAddress,\n        currentUserAccount,\n        i\n    ]);\n    var handleAddFriend = function() {\n        // Check if the user is already friends with the person\n        if (isFriend) {\n            removeFriend(el.accountAddress);\n        } else {\n            // Otherwise, send the friend request\n            sendFriendRequest({\n                accountAddress: el.accountAddress,\n                name: el.name\n            });\n            // Update the UI to show that the request is sent\n            setIsFriend(true);\n        }\n    };\n    // Function to remove friend\n    var removeFriend = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(friendAddress) {\n            var contract, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            connectingWithContract()\n                        ];\n                    case 1:\n                        contract = _state.sent();\n                        return [\n                            4,\n                            contract.removeFriend(friendAddress)\n                        ];\n                    case 2:\n                        _state.sent();\n                        // Optionally, you can reload the page or update state to reflect the changes.\n                        // window.location.reload();\n                        // Or you can fetch data again to update the state.\n                        fetchData();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(\"Error removing friend:\", error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function removeFriend(friendAddress) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().UserCard),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().UserCard_box),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().UserCard_box_img),\n                    src: _assets__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"image\".concat(userIndex)],\n                    alt: \"user\",\n                    width: 100,\n                    height: 100\n                }, void 0, false, {\n                    fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().UserCard_box_info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: el.name\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                el.accountAddress.slice(0, 25),\n                                \"..\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, _this),\n                        isCurrentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().you),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"You\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 25\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().Friend_Add),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleAddFriend,\n                                onMouseEnter: function() {\n                                    return setIsHovered(true);\n                                },\n                                onMouseLeave: function() {\n                                    return setIsHovered(false);\n                                },\n                                className: isFriend && isHovered ? \"\".concat((_UserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().removeFriend)) : \"\",\n                                children: isFriend ? isHovered ? \"Remove Friend\" : \"Friends\" : \"Add Friend\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                    className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_7___default().number),\n                    children: userIndex\n                }, void 0, false, {\n                    fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, _this),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, _this);\n};\n_s(UserCard, \"ndyCf8GZTz/5NkiVktlVzmoUA3Q=\");\n_c = UserCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserCard);\nvar _c;\n$RefreshReg$(_c, \"UserCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Vc2VyQ2FyZC9Vc2VyQ2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUErRDtBQUNoQztBQUUvQixrQkFBa0I7QUFDd0I7QUFDUjtBQUM0QjtBQUU5RCxJQUFNUSxRQUFRLEdBQUcsZ0JBQWtDO1FBQS9CQyxFQUFFLFNBQUZBLEVBQUUsRUFBRUMsQ0FBQyxTQUFEQSxDQUFDLEVBQUVDLGlCQUFpQixTQUFqQkEsaUJBQWlCOztJQUN4QyxJQUdJUixHQUEwQixHQUExQkEsaURBQVUsQ0FBQ0ksbUVBQWMsQ0FBQyxFQUYxQkssa0JBQStCLEdBRS9CVCxHQUEwQixDQUYxQlMsV0FBVyxFQUNYRSxrQkFBMkIsR0FDM0JYLEdBQTBCLENBRDFCVyxPQUFPO0lBR1gsSUFBZ0NiLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBeENlLFFBQVEsR0FBaUJmLElBQWUsR0FBaEMsRUFBRWdCLFdBQVcsR0FBSWhCLElBQWUsR0FBbkI7SUFDNUIsSUFBMENBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBbERpQixhQUFhLEdBQXNCakIsSUFBZSxHQUFyQyxFQUFFa0IsZ0JBQWdCLEdBQUlsQixJQUFlLEdBQW5CO0lBQ3RDLElBQWtDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUNTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBMUNVLFNBQVMsR0FBa0JuQixJQUFlLEdBQWpDLEVBQUVvQixZQUFZLEdBQUlwQixJQUFlLEdBQW5CLEVBQXFCLG1DQUFtQztJQUN0RixJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ3FCLFNBQVMsR0FBa0JyQixJQUFlLEdBQWpDLEVBQUVzQixZQUFZLEdBQUl0QixJQUFlLEdBQW5CLEVBQXFCLHNDQUFzQztJQUV6RkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osa0RBQWtEO1FBQ2xELElBQU1zQixlQUFlLEdBQUcsV0FBTTtZQUMxQixJQUFJWCxrQkFBa0IsRUFBRTtnQkFDcEIsSUFBTVksZUFBZSxHQUFHWixrQkFBa0IsQ0FBQ2EsSUFBSSxDQUFDQyxTQUFBQSxNQUFNOzJCQUFJQSxNQUFNLENBQUNDLE1BQU0sS0FBS25CLEVBQUUsQ0FBQ29CLGNBQWM7aUJBQUEsQ0FBQztnQkFDOUZaLFdBQVcsQ0FBQ1EsZUFBZSxDQUFDLENBQUM7WUFDakMsQ0FBQztRQUNMLENBQUM7UUFFRCxrREFBa0Q7UUFDbEQsSUFBTUssZ0JBQWdCLEdBQUcsV0FBTTtZQUMzQixJQUFNQyxXQUFXLEdBQUdoQixrQkFBa0IsQ0FBQ2lCLFdBQVcsRUFBRSxFQUFFLHVCQUF1QjtZQUM3RSxJQUFNQyxhQUFhLEdBQUd4QixFQUFFLENBQUNvQixjQUFjLENBQUNHLFdBQVcsRUFBRSxFQUFFLHVCQUF1QjtZQUU5RSxJQUFJRCxXQUFXLEtBQUtFLGFBQWEsRUFBRTtnQkFDL0IsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCx3QkFBd0I7UUFDeEJaLFlBQVksQ0FBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBCYyxlQUFlLEVBQUUsQ0FBQztRQUNsQkwsZ0JBQWdCLENBQUNXLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLEVBQUU7UUFBQ2pCLGtCQUFrQjtRQUFFSixFQUFFLENBQUNvQixjQUFjO1FBQUVkLGtCQUFrQjtRQUFFTCxDQUFDO0tBQUMsQ0FBQyxDQUFDO0lBRW5FLElBQU13QixlQUFlLEdBQUcsV0FBTTtRQUMxQix1REFBdUQ7UUFDdkQsSUFBSWxCLFFBQVEsRUFBRTtZQUNWbUIsWUFBWSxDQUFDMUIsRUFBRSxDQUFDb0IsY0FBYyxDQUFDLENBQUM7UUFDcEMsT0FBTztZQUNILHFDQUFxQztZQUNyQ2xCLGlCQUFpQixDQUFDO2dCQUFFa0IsY0FBYyxFQUFFcEIsRUFBRSxDQUFDb0IsY0FBYztnQkFBRU8sSUFBSSxFQUFFM0IsRUFBRSxDQUFDMkIsSUFBSTthQUFFLENBQUMsQ0FBQztZQUN4RSxpREFBaUQ7WUFDakRuQixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsSUFBTWtCLFlBQVk7bUJBQUcsNkZBQU9FLGFBQWEsRUFBSztnQkFFaENDLFFBQVEsRUFNVEMsS0FBSzs7Ozs7Ozs7Ozt3QkFOTzs7NEJBQU1DLHNCQUFzQixFQUFFOzBCQUFBOzt3QkFBekNGLFFBQVEsR0FBRyxhQUE4Qjt3QkFDL0M7OzRCQUFNQSxRQUFRLENBQUNILFlBQVksQ0FBQ0UsYUFBYSxDQUFDOzBCQUFBOzt3QkFBMUMsYUFBMEMsQ0FBQzt3QkFDM0MsOEVBQThFO3dCQUM5RSw0QkFBNEI7d0JBQzVCLG1EQUFtRDt3QkFDbkRJLFNBQVMsRUFBRSxDQUFDOzs7Ozs7d0JBQ1BGLEtBQUs7d0JBQ1ZHLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDLHdCQUF3QixFQUFFQSxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7UUFFdkQsQ0FBQzt3QkFYS0osWUFBWSxDQUFVRSxhQUFhOzs7T0FXeEM7SUFFRCxxQkFDSSw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUV2QyxzRUFBYztrQkFDMUIsNEVBQUNzQyxLQUFHO1lBQUNDLFNBQVMsRUFBRXZDLDBFQUFrQjs7OEJBQzlCLDhEQUFDRCxtREFBSztvQkFDRndDLFNBQVMsRUFBRXZDLDhFQUFzQjtvQkFDakMwQyxHQUFHLEVBQUV6QywrQ0FBTSxDQUFDLE9BQU0sQ0FBWSxPQUFWYyxTQUFTLENBQUUsQ0FBQztvQkFDaEM0QixHQUFHLEVBQUMsTUFBTTtvQkFDVkMsS0FBSyxFQUFFLEdBQUc7b0JBQ1ZDLE1BQU0sRUFBRSxHQUFHOzs7Ozt5QkFDYjs4QkFFRiw4REFBQ1AsS0FBRztvQkFBQ0MsU0FBUyxFQUFFdkMsK0VBQXVCOztzQ0FDbkMsOERBQUMrQyxJQUFFO3NDQUFFM0MsRUFBRSxDQUFDMkIsSUFBSTs7Ozs7aUNBQU07c0NBQ2xCLDhEQUFDaUIsR0FBQzs7Z0NBQUU1QyxFQUFFLENBQUNvQixjQUFjLENBQUN5QixLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQ0FBQyxJQUFFOzs7Ozs7aUNBQUk7d0JBRXhDcEMsYUFBYSxpQkFDViw4REFBQ3lCLEtBQUc7NEJBQUNDLFNBQVMsRUFBRXZDLGlFQUFTO3NDQUNyQiw0RUFBQ21ELFFBQU07MENBQUMsS0FBRzs7Ozs7cUNBQVM7Ozs7O2lDQUNsQixpQkFFTiw4REFBQ2IsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFdkMsd0VBQWdCO3NDQUNoQyw0RUFBQ21ELFFBQU07Z0NBQ0hFLE9BQU8sRUFBRXhCLGVBQWU7Z0NBQ3hCeUIsWUFBWSxFQUFFOzJDQUFNcEMsWUFBWSxDQUFDLElBQUksQ0FBQztpQ0FBQTtnQ0FDdENxQyxZQUFZLEVBQUU7MkNBQU1yQyxZQUFZLENBQUMsS0FBSyxDQUFDO2lDQUFBO2dDQUN2Q3FCLFNBQVMsRUFBRTVCLFFBQVEsSUFBSU0sU0FBUyxHQUFHLEVBQUMsQ0FBcUIsT0FBbkJqQiwwRUFBa0IsQ0FBRSxHQUFHLEVBQUU7MENBRTlEVyxRQUFRLEdBQUlNLFNBQVMsR0FBRyxlQUFlLEdBQUcsU0FBUyxHQUFJLFlBQVk7Ozs7O3FDQUMvRDs7Ozs7aUNBQ1A7Ozs7Ozt5QkFFSjs4QkFDTiw4REFBQ3VDLE9BQUs7b0JBQUNqQixTQUFTLEVBQUV2QyxvRUFBWTs4QkFBR2UsU0FBUzs7Ozs7eUJBQVM7Z0JBQUEsR0FBQzs7Ozs7O2lCQUNsRDs7Ozs7YUFDSixDQUNSO0FBQ04sQ0FBQztHQXBHS1osUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBc0dkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvVXNlckNhcmQvVXNlckNhcmQuanN4PzUzZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG4vLyBJTlRFUk5BTCBJTVBPUlRcclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vVXNlckNhcmQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBpbWFnZXMgZnJvbSAnLi4vLi4vYXNzZXRzJztcclxuaW1wb3J0IHsgQ2hhdEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vQ29udGV4dC9DaGF0QXBwQ29udGV4dFwiO1xyXG5cclxuY29uc3QgVXNlckNhcmQgPSAoeyBlbCwgaSwgc2VuZEZyaWVuZFJlcXVlc3QgfSkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGZyaWVuZExpc3RzOiBjb250ZXh0RnJpZW5kTGlzdHMsXHJcbiAgICAgICAgYWNjb3VudDogY3VycmVudFVzZXJBY2NvdW50LFxyXG4gICAgfSA9IHVzZUNvbnRleHQoQ2hhdEFwcENvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IFtpc0ZyaWVuZCwgc2V0SXNGcmllbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzQ3VycmVudFVzZXIsIHNldElzQ3VycmVudFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJJbmRleCwgc2V0VXNlckluZGV4XSA9IHVzZVN0YXRlKGkgKyAxKTsgLy8gSW5pdGlhbGl6ZSB1c2VyIGluZGV4IHdpdGggaSArIDFcclxuICAgIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEluaXRpYWxpemUgaXNIb3ZlcmVkIHN0YXRlIHRvIGZhbHNlXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgIFxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBkaXNwbGF5ZWQgdXNlciBpcyBhbHJlYWR5IGEgZnJpZW5kXHJcbiAgICAgICAgY29uc3QgY2hlY2tGcmllbmRzaGlwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dEZyaWVuZExpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0FscmVhZHlGcmllbmQgPSBjb250ZXh0RnJpZW5kTGlzdHMuc29tZShmcmllbmQgPT4gZnJpZW5kLnB1YmtleSA9PT0gZWwuYWNjb3VudEFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNGcmllbmQoaXNBbHJlYWR5RnJpZW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZGlzcGxheWVkIHVzZXIgaXMgdGhlIGN1cnJlbnQgdXNlclxyXG4gICAgICAgIGNvbnN0IGNoZWNrQ3VycmVudFVzZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gY3VycmVudFVzZXJBY2NvdW50LnRvTG93ZXJDYXNlKCk7IC8vIENvbnZlcnQgdG8gbG93ZXJjYXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZFVzZXIgPSBlbC5hY2NvdW50QWRkcmVzcy50b0xvd2VyQ2FzZSgpOyAvLyBDb252ZXJ0IHRvIGxvd2VyY2FzZVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VXNlciA9PT0gZGlzcGxheWVkVXNlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdXNlciBpbmRleFxyXG4gICAgICAgIHNldFVzZXJJbmRleChpICsgMSk7XHJcbiAgICBcclxuICAgICAgICBjaGVja0ZyaWVuZHNoaXAoKTtcclxuICAgICAgICBzZXRJc0N1cnJlbnRVc2VyKGNoZWNrQ3VycmVudFVzZXIoKSk7XHJcbiAgICB9LCBbY29udGV4dEZyaWVuZExpc3RzLCBlbC5hY2NvdW50QWRkcmVzcywgY3VycmVudFVzZXJBY2NvdW50LCBpXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUFkZEZyaWVuZCA9ICgpID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBpcyBhbHJlYWR5IGZyaWVuZHMgd2l0aCB0aGUgcGVyc29uXHJcbiAgICAgICAgaWYgKGlzRnJpZW5kKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZyaWVuZChlbC5hY2NvdW50QWRkcmVzcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZW5kIHRoZSBmcmllbmQgcmVxdWVzdFxyXG4gICAgICAgICAgICBzZW5kRnJpZW5kUmVxdWVzdCh7IGFjY291bnRBZGRyZXNzOiBlbC5hY2NvdW50QWRkcmVzcywgbmFtZTogZWwubmFtZSB9KTtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBVSSB0byBzaG93IHRoYXQgdGhlIHJlcXVlc3QgaXMgc2VudFxyXG4gICAgICAgICAgICBzZXRJc0ZyaWVuZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBmcmllbmRcclxuICAgIGNvbnN0IHJlbW92ZUZyaWVuZCA9IGFzeW5jIChmcmllbmRBZGRyZXNzKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBjb25uZWN0aW5nV2l0aENvbnRyYWN0KCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNvbnRyYWN0LnJlbW92ZUZyaWVuZChmcmllbmRBZGRyZXNzKTtcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWxseSwgeW91IGNhbiByZWxvYWQgdGhlIHBhZ2Ugb3IgdXBkYXRlIHN0YXRlIHRvIHJlZmxlY3QgdGhlIGNoYW5nZXMuXHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgLy8gT3IgeW91IGNhbiBmZXRjaCBkYXRhIGFnYWluIHRvIHVwZGF0ZSB0aGUgc3RhdGUuXHJcbiAgICAgICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZW1vdmluZyBmcmllbmQ6XCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlVzZXJDYXJkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlVzZXJDYXJkX2JveH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlLlVzZXJDYXJkX2JveF9pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZXNbYGltYWdlJHt1c2VySW5kZXh9YF19IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ2FyZF9ib3hfaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntlbC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2VsLmFjY291bnRBZGRyZXNzLnNsaWNlKDAsIDI1KX0uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUmVuZGVyIGRpZmZlcmVudCBidXR0b24gdGV4dCBiYXNlZCBvbiB3aGV0aGVyIHRoZSB1c2VyIGlzIGFscmVhZHkgZnJpZW5kcyAqL31cclxuICAgICAgICAgICAgICAgICAgICB7aXNDdXJyZW50VXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLnlvdX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPllvdTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuRnJpZW5kX0FkZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRGcmllbmR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0ZyaWVuZCAmJiBpc0hvdmVyZWQgPyBgJHtTdHlsZS5yZW1vdmVGcmllbmR9YCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0ZyaWVuZCA/IChpc0hvdmVyZWQgPyBcIlJlbW92ZSBGcmllbmRcIiA6IFwiRnJpZW5kc1wiKSA6IFwiQWRkIEZyaWVuZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtTdHlsZS5udW1iZXJ9Pnt1c2VySW5kZXh9PC9zbWFsbD4gey8qIERpc3BsYXkgdXNlckluZGV4ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiSW1hZ2UiLCJTdHlsZSIsImltYWdlcyIsIkNoYXRBcHBDb250ZXh0IiwiVXNlckNhcmQiLCJlbCIsImkiLCJzZW5kRnJpZW5kUmVxdWVzdCIsImZyaWVuZExpc3RzIiwiY29udGV4dEZyaWVuZExpc3RzIiwiYWNjb3VudCIsImN1cnJlbnRVc2VyQWNjb3VudCIsImlzRnJpZW5kIiwic2V0SXNGcmllbmQiLCJpc0N1cnJlbnRVc2VyIiwic2V0SXNDdXJyZW50VXNlciIsInVzZXJJbmRleCIsInNldFVzZXJJbmRleCIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImNoZWNrRnJpZW5kc2hpcCIsImlzQWxyZWFkeUZyaWVuZCIsInNvbWUiLCJmcmllbmQiLCJwdWJrZXkiLCJhY2NvdW50QWRkcmVzcyIsImNoZWNrQ3VycmVudFVzZXIiLCJjdXJyZW50VXNlciIsInRvTG93ZXJDYXNlIiwiZGlzcGxheWVkVXNlciIsImhhbmRsZUFkZEZyaWVuZCIsInJlbW92ZUZyaWVuZCIsIm5hbWUiLCJmcmllbmRBZGRyZXNzIiwiY29udHJhY3QiLCJlcnJvciIsImNvbm5lY3RpbmdXaXRoQ29udHJhY3QiLCJmZXRjaERhdGEiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiVXNlckNhcmRfYm94IiwiVXNlckNhcmRfYm94X2ltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiVXNlckNhcmRfYm94X2luZm8iLCJoMyIsInAiLCJzbGljZSIsInlvdSIsImJ1dHRvbiIsIkZyaWVuZF9BZGQiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic21hbGwiLCJudW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/UserCard/UserCard.jsx\n"));

/***/ })

});