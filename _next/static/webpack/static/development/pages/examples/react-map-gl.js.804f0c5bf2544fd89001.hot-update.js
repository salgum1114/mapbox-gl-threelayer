webpackHotUpdate("static\\development\\pages\\examples\\react-map-gl.js",{

/***/ "./components/Left.tsx":
/*!*****************************!*\
  !*** ./components/Left.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var StyledSider = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Sider).withConfig({
  displayName: "Left__StyledSider",
  componentId: "ptuot9-0"
})(["background:", ";height:100%;"], function (props) {
  return props.themes.light.backgroundColor;
});
_c = StyledSider;
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Left__Logo",
  componentId: "ptuot9-1"
})(["height:32px;background-image:url('/logo.png');background-size:cover;background-repeat:no-repeat;margin:16px;cursor:pointer;"]);
_c2 = Logo;

var Left = function Left() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var themes = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"]);

  var handleClick = function handleClick() {
    router.push('/');
  };

  console.log(router.pathname);
  return __jsx(StyledSider, {
    themes: themes,
    width: 240
  }, __jsx(Logo, {
    onClick: handleClick
  }), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    mode: "inline",
    defaultOpenKeys: ["".concat("", "/examples"), "".concat("", "/apis")],
    selectedKeys: [router.pathname]
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat("", "/")
  }, __jsx("a", null, "Introduction"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/getting-started"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat("", "/getting-started")
  }, __jsx("a", null, "Getting started"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.SubMenu, {
    title: "Examples",
    key: "/examples"
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.ItemGroup, {
    title: "Usage"
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Divider, null), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/mapbox-gl"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat("", "/examples/mapbox-gl")
  }, __jsx("a", null, "mapbox-gl"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/react-map-gl"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat("", "/examples/react-map-gl")
  }, __jsx("a", null, "react-map-gl"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/react-mapbox-gl"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat("", "/examples/react-mapbox-gl")
  }, __jsx("a", null, "react-mapbox-gl")))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.ItemGroup, {
    title: "Model"
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Divider, null), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/gltf"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat("", "/examples/gltf")
  }, __jsx("a", null, "GTLF"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/obj"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat("", "/examples/obj")
  }, __jsx("a", null, "OBJ"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/mtl"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "".concat("", "/examples/mtl")
  }, __jsx("a", null, "OBJ"))))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.SubMenu, {
    title: "APIs",
    key: "/apis"
  })));
};

_s(Left, "i/5FscHPv2dc4VHx51X9AVwLbto=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c3 = Left;
/* harmony default export */ __webpack_exports__["default"] = (Left);

var _c, _c2, _c3;

$RefreshReg$(_c, "StyledSider");
$RefreshReg$(_c2, "Logo");
$RefreshReg$(_c3, "Left");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xlZnQudHN4Il0sIm5hbWVzIjpbIlN0eWxlZFNpZGVyIiwic3R5bGVkIiwiU2lkZXIiLCJwcm9wcyIsInRoZW1lcyIsImxpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiTG9nbyIsImRpdiIsIkxlZnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwiaGFuZGxlQ2xpY2siLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsSUFBTUEsV0FBVyxHQUFHQyxpRUFBTSxDQUFDLHVEQUFPQyxLQUFSLENBQVQ7QUFBQTtBQUFBO0FBQUEscUNBQ0YsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxlQUF2QjtBQUFBLENBREgsQ0FBakI7S0FBTU4sVztBQUtOLElBQU1PLElBQUksR0FBR04seURBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSxtSUFBVjtNQUFNRCxJOztBQVNOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1QLE1BQU0sR0FBR1Esd0RBQVUsQ0FBQ0MsOERBQUQsQ0FBekI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QkosVUFBTSxDQUFDSyxJQUFQLENBQVksR0FBWjtBQUNBLEdBRkQ7O0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFNLENBQUNRLFFBQW5CO0FBQ0EsU0FDQyxNQUFDLFdBQUQ7QUFBYSxVQUFNLEVBQUVkLE1BQXJCO0FBQTZCLFNBQUssRUFBRTtBQUFwQyxLQUNDLE1BQUMsSUFBRDtBQUFNLFdBQU8sRUFBRVU7QUFBZixJQURELEVBRUM7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLG1CQUFlLEVBQUUsV0FBSUssRUFBSiwwQkFBc0NBLEVBQXRDLFdBRmxCO0FBR0MsZ0JBQVksRUFBRSxDQUFDVCxNQUFNLENBQUNRLFFBQVI7QUFIZixLQUtDLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLFlBQUtDLEVBQUw7QUFBVixLQUNDLGdDQURELENBREQsQ0FMRCxFQVVDLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLFlBQUtBLEVBQUw7QUFBVixLQUNDLG1DQURELENBREQsQ0FWRCxFQWVDLDJEQUFNLE9BQU47QUFBYyxTQUFLLEVBQUMsVUFBcEI7QUFBK0IsT0FBRyxFQUFDO0FBQW5DLEtBQ0MsMkRBQU0sU0FBTjtBQUFnQixTQUFLLEVBQUM7QUFBdEIsS0FDQywyREFBTSxPQUFOLE9BREQsRUFFQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxZQUFLQSxFQUFMO0FBQVYsS0FDQyw2QkFERCxDQURELENBRkQsRUFPQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxZQUFLQSxFQUFMO0FBQVYsS0FDQyxnQ0FERCxDQURELENBUEQsRUFZQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxZQUFLQSxFQUFMO0FBQVYsS0FDQyxtQ0FERCxDQURELENBWkQsQ0FERCxFQW1CQywyREFBTSxTQUFOO0FBQWdCLFNBQUssRUFBQztBQUF0QixLQUNDLDJEQUFNLE9BQU4sT0FERCxFQUVDLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLFlBQUtBLEVBQUw7QUFBVixLQUNDLHdCQURELENBREQsQ0FGRCxFQU9DLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLFlBQUtBLEVBQUw7QUFBVixLQUNDLHVCQURELENBREQsQ0FQRCxFQVlDLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLFlBQUtBLEVBQUw7QUFBVixLQUNDLHVCQURELENBREQsQ0FaRCxDQW5CRCxDQWZELEVBcURDLDJEQUFNLE9BQU47QUFBYyxTQUFLLEVBQUMsTUFBcEI7QUFBMkIsT0FBRyxFQUFDO0FBQS9CLElBckRELENBRkQsQ0FERDtBQTREQSxDQW5FRDs7R0FBTVYsSTtVQUNVRSxxRDs7O01BRFZGLEk7QUFxRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxleGFtcGxlc1xccmVhY3QtbWFwLWdsLmpzLjgwNGYwYzViZjI1NDRmZDg5MDAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBNZW51LCBMYXlvdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgVGhlbWVzIH0gZnJvbSAnLi4vcGFnZXMvX2FwcCc7XG5cbmNvbnN0IFN0eWxlZFNpZGVyID0gc3R5bGVkKExheW91dC5TaWRlcik8eyB0aGVtZXM6IFRoZW1lcyB9PmBcblx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZXMubGlnaHQuYmFja2dyb3VuZENvbG9yfTtcblx0aGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG5cdGhlaWdodDogMzJweDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvbG9nby5wbmcnKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0bWFyZ2luOiAxNnB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBMZWZ0ID0gKCkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgdGhlbWVzID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcblx0XHRyb3V0ZXIucHVzaCgnLycpO1xuXHR9O1xuXHRjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpO1xuXHRyZXR1cm4gKFxuXHRcdDxTdHlsZWRTaWRlciB0aGVtZXM9e3RoZW1lc30gd2lkdGg9ezI0MH0+XG5cdFx0XHQ8TG9nbyBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cblx0XHRcdDxNZW51XG5cdFx0XHRcdG1vZGU9XCJpbmxpbmVcIlxuXHRcdFx0XHRkZWZhdWx0T3BlbktleXM9e1tgJHtwcm9jZXNzLmVudi5wcmVmaXh9L2V4YW1wbGVzYCwgYCR7cHJvY2Vzcy5lbnYucHJlZml4fS9hcGlzYF19XG5cdFx0XHRcdHNlbGVjdGVkS2V5cz17W3JvdXRlci5wYXRobmFtZV19XG5cdFx0XHQ+XG5cdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiL1wiPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LnByZWZpeH0vYH0+XG5cdFx0XHRcdFx0XHQ8YT5JbnRyb2R1Y3Rpb248L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L01lbnUuSXRlbT5cblx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCIvZ2V0dGluZy1zdGFydGVkXCI+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYucHJlZml4fS9nZXR0aW5nLXN0YXJ0ZWRgfT5cblx0XHRcdFx0XHRcdDxhPkdldHRpbmcgc3RhcnRlZDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvTWVudS5JdGVtPlxuXHRcdFx0XHQ8TWVudS5TdWJNZW51IHRpdGxlPVwiRXhhbXBsZXNcIiBrZXk9XCIvZXhhbXBsZXNcIj5cblx0XHRcdFx0XHQ8TWVudS5JdGVtR3JvdXAgdGl0bGU9XCJVc2FnZVwiPlxuXHRcdFx0XHRcdFx0PE1lbnUuRGl2aWRlciAvPlxuXHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCIvZXhhbXBsZXMvbWFwYm94LWdsXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LnByZWZpeH0vZXhhbXBsZXMvbWFwYm94LWdsYH0+XG5cdFx0XHRcdFx0XHRcdFx0PGE+bWFwYm94LWdsPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiL2V4YW1wbGVzL3JlYWN0LW1hcC1nbFwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5wcmVmaXh9L2V4YW1wbGVzL3JlYWN0LW1hcC1nbGB9PlxuXHRcdFx0XHRcdFx0XHRcdDxhPnJlYWN0LW1hcC1nbDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cIi9leGFtcGxlcy9yZWFjdC1tYXBib3gtZ2xcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYucHJlZml4fS9leGFtcGxlcy9yZWFjdC1tYXBib3gtZ2xgfT5cblx0XHRcdFx0XHRcdFx0XHQ8YT5yZWFjdC1tYXBib3gtZ2w8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvTWVudS5JdGVtPlxuXHRcdFx0XHRcdDwvTWVudS5JdGVtR3JvdXA+XG5cdFx0XHRcdFx0PE1lbnUuSXRlbUdyb3VwIHRpdGxlPVwiTW9kZWxcIj5cblx0XHRcdFx0XHRcdDxNZW51LkRpdmlkZXIgLz5cblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiL2V4YW1wbGVzL2dsdGZcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYucHJlZml4fS9leGFtcGxlcy9nbHRmYH0+XG5cdFx0XHRcdFx0XHRcdFx0PGE+R1RMRjwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cIi9leGFtcGxlcy9vYmpcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYucHJlZml4fS9leGFtcGxlcy9vYmpgfT5cblx0XHRcdFx0XHRcdFx0XHQ8YT5PQko8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvTWVudS5JdGVtPlxuXHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCIvZXhhbXBsZXMvbXRsXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LnByZWZpeH0vZXhhbXBsZXMvbXRsYH0+XG5cdFx0XHRcdFx0XHRcdFx0PGE+T0JKPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cblx0XHRcdFx0XHQ8L01lbnUuSXRlbUdyb3VwPlxuXHRcdFx0XHQ8L01lbnUuU3ViTWVudT5cblx0XHRcdFx0PE1lbnUuU3ViTWVudSB0aXRsZT1cIkFQSXNcIiBrZXk9XCIvYXBpc1wiPjwvTWVudS5TdWJNZW51PlxuXHRcdFx0PC9NZW51PlxuXHRcdDwvU3R5bGVkU2lkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWZ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==