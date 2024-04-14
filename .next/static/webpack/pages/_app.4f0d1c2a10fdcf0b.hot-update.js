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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _UserCard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserCard.module.css */ \"./src/Components/UserCard/UserCard.module.css\");\n/* harmony import */ var _UserCard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UserCard_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _Context_ChatAppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context/ChatAppContext */ \"./src/Context/ChatAppContext.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n// INTERNAL IMPORT\n\n\n\nvar UserCard = function(param) {\n    var el = param.el, i = param.i, sendFriendRequest = param.sendFriendRequest, index = param.index;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_ChatAppContext__WEBPACK_IMPORTED_MODULE_4__.ChatAppContext), contextFriendLists = ref.friendLists, currentUserAccount = ref.account;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isFriend = ref1[0], setIsFriend = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isCurrentUser = ref2[0], setIsCurrentUser = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Current user account:\", currentUserAccount);\n        console.log(\"Displayed user account:\", el.accountAddress);\n        // Check if the displayed user is already a friend\n        var checkFriendship = function() {\n            if (contextFriendLists) {\n                var isAlreadyFriend = contextFriendLists.some(function(friend) {\n                    return friend.pubkey === el.accountAddress;\n                });\n                setIsFriend(isAlreadyFriend);\n            }\n        };\n        // Check if the displayed user is the current user\n        var checkCurrentUser = function() {\n            var currentUser = currentUserAccount.toLowerCase(); // Convert to lowercase\n            var displayedUser = el.accountAddress.toLowerCase(); // Convert to lowercase\n            console.log(\"Checking current user...\", currentUser);\n            if (currentUser === displayedUser) {\n                console.log(\"Current user account:\", currentUser);\n                console.log(\"Displayed user account:\", displayedUser);\n                return true;\n            }\n            console.log(\"Not the current user.\", displayedUser);\n            return false;\n        };\n        checkFriendship();\n        setIsCurrentUser(checkCurrentUser());\n    }, [\n        contextFriendLists,\n        el.accountAddress,\n        currentUserAccount\n    ]);\n    var handleAddFriend = function() {\n        // Check if the user is already friends with the person\n        if (isFriend) {\n            // If already friends, do nothing\n            return;\n        }\n        // Otherwise, send the friend request\n        sendFriendRequest({\n            accountAddress: el.accountAddress,\n            name: el.name\n        });\n        // Update the UI to show that the request is sent\n        setIsFriend(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().UserCard),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().UserCard_box),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().UserCard_box_img),\n                    src: _assets__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"img\".concat(index)],\n                    alt: \"user\",\n                    width: 100,\n                    height: 100\n                }, void 0, false, {\n                    fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().UserCard_box_info),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: el.name\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                el.accountAddress.slice(0, 25),\n                                \"..\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, _this),\n                        isCurrentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().you),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"You\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 25\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().Friend_Add),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleAddFriend,\n                                children: isFriend ? \"Friends\" : \"Add Friend\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                    className: (_UserCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().number),\n                    children: i + 1\n                }, void 0, false, {\n                    fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Project\\\\FINAL\\\\test\\\\CHAT\\\\src\\\\Components\\\\UserCard\\\\UserCard.jsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, _this);\n};\n_s(UserCard, \"G8EV71VIdjplCH3zbKMCwQNTfdY=\");\n_c = UserCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserCard);\nvar _c;\n$RefreshReg$(_c, \"UserCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3lCQUFTOzs7Ozs7aUJBQzdDOzs7OzthQUNKLENBQ1I7QUFDTixDQUFDO0dBcEZLRixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFzRmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9Vc2VyQ2FyZC9Vc2VyQ2FyZC5qc3g/NTNmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbi8vIElOVEVSTkFMIElNUE9SVFxyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9Vc2VyQ2FyZC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGltYWdlcyBmcm9tICcuLi8uLi9hc3NldHMnO1xyXG5pbXBvcnQgeyBDaGF0QXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi9Db250ZXh0L0NoYXRBcHBDb250ZXh0XCI7XHJcblxyXG5jb25zdCBVc2VyQ2FyZCA9ICh7IGVsLCBpLCBzZW5kRnJpZW5kUmVxdWVzdCwgaW5kZXggfSkgPT4geyAvLyBBZGQgJ2luZGV4JyBwcm9wXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZnJpZW5kTGlzdHM6IGNvbnRleHRGcmllbmRMaXN0cyxcclxuICAgICAgICBhY2NvdW50OiBjdXJyZW50VXNlckFjY291bnQsXHJcbiAgICB9ID0gdXNlQ29udGV4dChDaGF0QXBwQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgW2lzRnJpZW5kLCBzZXRJc0ZyaWVuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNDdXJyZW50VXNlciwgc2V0SXNDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgdXNlciBhY2NvdW50OlwiLCBjdXJyZW50VXNlckFjY291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlzcGxheWVkIHVzZXIgYWNjb3VudDpcIiwgZWwuYWNjb3VudEFkZHJlc3MpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGRpc3BsYXllZCB1c2VyIGlzIGFscmVhZHkgYSBmcmllbmRcclxuICAgICAgICBjb25zdCBjaGVja0ZyaWVuZHNoaXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0RnJpZW5kTGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWxyZWFkeUZyaWVuZCA9IGNvbnRleHRGcmllbmRMaXN0cy5zb21lKGZyaWVuZCA9PiBmcmllbmQucHVia2V5ID09PSBlbC5hY2NvdW50QWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0ZyaWVuZChpc0FscmVhZHlGcmllbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBkaXNwbGF5ZWQgdXNlciBpcyB0aGUgY3VycmVudCB1c2VyXHJcbiAgICAgICAgY29uc3QgY2hlY2tDdXJyZW50VXNlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBjdXJyZW50VXNlckFjY291bnQudG9Mb3dlckNhc2UoKTsgLy8gQ29udmVydCB0byBsb3dlcmNhc2VcclxuICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkVXNlciA9IGVsLmFjY291bnRBZGRyZXNzLnRvTG93ZXJDYXNlKCk7IC8vIENvbnZlcnQgdG8gbG93ZXJjYXNlXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGVja2luZyBjdXJyZW50IHVzZXIuLi5cIiwgY3VycmVudFVzZXIpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFVzZXIgPT09IGRpc3BsYXllZFVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCB1c2VyIGFjY291bnQ6XCIsIGN1cnJlbnRVc2VyKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlzcGxheWVkIHVzZXIgYWNjb3VudDpcIiwgZGlzcGxheWVkVXNlcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCB0aGUgY3VycmVudCB1c2VyLlwiLCBkaXNwbGF5ZWRVc2VyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICBjaGVja0ZyaWVuZHNoaXAoKTtcclxuICAgICAgICBzZXRJc0N1cnJlbnRVc2VyKGNoZWNrQ3VycmVudFVzZXIoKSk7XHJcbiAgICB9LCBbY29udGV4dEZyaWVuZExpc3RzLCBlbC5hY2NvdW50QWRkcmVzcywgY3VycmVudFVzZXJBY2NvdW50XSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUFkZEZyaWVuZCA9ICgpID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBpcyBhbHJlYWR5IGZyaWVuZHMgd2l0aCB0aGUgcGVyc29uXHJcbiAgICAgICAgaWYgKGlzRnJpZW5kKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFscmVhZHkgZnJpZW5kcywgZG8gbm90aGluZ1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPdGhlcndpc2UsIHNlbmQgdGhlIGZyaWVuZCByZXF1ZXN0XHJcbiAgICAgICAgc2VuZEZyaWVuZFJlcXVlc3QoeyBhY2NvdW50QWRkcmVzczogZWwuYWNjb3VudEFkZHJlc3MsIG5hbWU6IGVsLm5hbWUgfSk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBVSSB0byBzaG93IHRoYXQgdGhlIHJlcXVlc3QgaXMgc2VudFxyXG4gICAgICAgIHNldElzRnJpZW5kKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ2FyZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ2FyZF9ib3h9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZS5Vc2VyQ2FyZF9ib3hfaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzW2BpbWcke2luZGV4fWBdfSAvLyBVc2UgaW5kZXggdG8gc2VsZWN0IGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwidXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlVzZXJDYXJkX2JveF9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2VsLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD57ZWwuYWNjb3VudEFkZHJlc3Muc2xpY2UoMCwgMjUpfS4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgZGlmZmVyZW50IGJ1dHRvbiB0ZXh0IGJhc2VkIG9uIHdoZXRoZXIgdGhlIHVzZXIgaXMgYWxyZWFkeSBmcmllbmRzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0N1cnJlbnRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUueW91fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Zb3U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLkZyaWVuZF9BZGR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZEZyaWVuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNGcmllbmQgPyBcIkZyaWVuZHNcIiA6IFwiQWRkIEZyaWVuZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17U3R5bGUubnVtYmVyfT57aSArIDF9PC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkltYWdlIiwiU3R5bGUiLCJpbWFnZXMiLCJDaGF0QXBwQ29udGV4dCIsIlVzZXJDYXJkIiwiZWwiLCJpIiwic2VuZEZyaWVuZFJlcXVlc3QiLCJpbmRleCIsImZyaWVuZExpc3RzIiwiY29udGV4dEZyaWVuZExpc3RzIiwiYWNjb3VudCIsImN1cnJlbnRVc2VyQWNjb3VudCIsImlzRnJpZW5kIiwic2V0SXNGcmllbmQiLCJpc0N1cnJlbnRVc2VyIiwic2V0SXNDdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJhY2NvdW50QWRkcmVzcyIsImNoZWNrRnJpZW5kc2hpcCIsImlzQWxyZWFkeUZyaWVuZCIsInNvbWUiLCJmcmllbmQiLCJwdWJrZXkiLCJjaGVja0N1cnJlbnRVc2VyIiwiY3VycmVudFVzZXIiLCJ0b0xvd2VyQ2FzZSIsImRpc3BsYXllZFVzZXIiLCJoYW5kbGVBZGRGcmllbmQiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiVXNlckNhcmRfYm94IiwiVXNlckNhcmRfYm94X2ltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiVXNlckNhcmRfYm94X2luZm8iLCJoMyIsInAiLCJzbGljZSIsInlvdSIsImJ1dHRvbiIsIkZyaWVuZF9BZGQiLCJvbkNsaWNrIiwic21hbGwiLCJudW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/UserCard/UserCard.jsx\n"));

/***/ })

});