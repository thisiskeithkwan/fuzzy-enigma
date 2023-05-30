"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/dbHelpers.js":
/*!**************************!*\
  !*** ./lib/dbHelpers.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveUserData\": function() { return /* binding */ saveUserData; }\n/* harmony export */ });\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nconst saveUserData = async (userId, inputForClinicalHistory, voiceRecording, transcribedText, summary, clinicalHistory)=>{\n    try {\n        const usersCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_0__.firestore, \"users\");\n        const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(usersCollection, userId);\n        const userData = {\n            inputForClinicalHistory,\n            voiceRecording,\n            transcribedText,\n            summary,\n            clinicalHistory,\n            timestamp: new Date()\n        };\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(userDocRef, userData, {\n            merge: true\n        });\n        console.log(\"User data saved successfully\");\n    } catch (error) {\n        console.error(\"Error saving user data:\", error);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGJIZWxwZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUNpQjtBQUV0RCxNQUFNSSxlQUFlLE9BQzFCQyxRQUNBQyx5QkFDQUMsZ0JBQ0FDLGlCQUNBQyxTQUNBQztJQUVBLElBQUk7UUFDRixNQUFNQyxrQkFBa0JWLDhEQUFVQSxDQUFDRCxvREFBU0EsRUFBRTtRQUM5QyxNQUFNWSxhQUFhVix1REFBR0EsQ0FBQ1MsaUJBQWlCTjtRQUV4QyxNQUFNUSxXQUFXO1lBQ2ZQO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FJLFdBQVcsSUFBSUM7UUFDakI7UUFFQSxNQUFNWiwwREFBTUEsQ0FBQ1MsWUFBWUMsVUFBVTtZQUFFRyxPQUFPO1FBQUs7UUFDakRDLFFBQVFDLElBQUk7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUUsTUFBTSwyQkFBMkJBO0lBQzNDO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZGJIZWxwZXJzLmpzPzdlZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgc2V0RG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuZXhwb3J0IGNvbnN0IHNhdmVVc2VyRGF0YSA9IGFzeW5jIChcbiAgdXNlcklkLFxuICBpbnB1dEZvckNsaW5pY2FsSGlzdG9yeSxcbiAgdm9pY2VSZWNvcmRpbmcsXG4gIHRyYW5zY3JpYmVkVGV4dCxcbiAgc3VtbWFyeSxcbiAgY2xpbmljYWxIaXN0b3J5XG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGZpcmVzdG9yZSwgJ3VzZXJzJyk7XG4gICAgY29uc3QgdXNlckRvY1JlZiA9IGRvYyh1c2Vyc0NvbGxlY3Rpb24sIHVzZXJJZCk7XG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgIGlucHV0Rm9yQ2xpbmljYWxIaXN0b3J5LFxuICAgICAgdm9pY2VSZWNvcmRpbmcsXG4gICAgICB0cmFuc2NyaWJlZFRleHQsXG4gICAgICBzdW1tYXJ5LFxuICAgICAgY2xpbmljYWxIaXN0b3J5LFxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgIH07XG5cbiAgICBhd2FpdCBzZXREb2ModXNlckRvY1JlZiwgdXNlckRhdGEsIHsgbWVyZ2U6IHRydWUgfSk7XG4gICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YSBzYXZlZCBzdWNjZXNzZnVsbHknKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgdXNlciBkYXRhOicsIGVycm9yKTtcbiAgfVxufTsiXSwibmFtZXMiOlsiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsInNldERvYyIsInNhdmVVc2VyRGF0YSIsInVzZXJJZCIsImlucHV0Rm9yQ2xpbmljYWxIaXN0b3J5Iiwidm9pY2VSZWNvcmRpbmciLCJ0cmFuc2NyaWJlZFRleHQiLCJzdW1tYXJ5IiwiY2xpbmljYWxIaXN0b3J5IiwidXNlcnNDb2xsZWN0aW9uIiwidXNlckRvY1JlZiIsInVzZXJEYXRhIiwidGltZXN0YW1wIiwiRGF0ZSIsIm1lcmdlIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/dbHelpers.js\n"));

/***/ })

});