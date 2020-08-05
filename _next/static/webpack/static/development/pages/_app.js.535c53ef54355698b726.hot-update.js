webpackHotUpdate("static\\development\\pages\\_app.js",{

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
    defaultOpenKeys: ['/examples', '/apis'],
    selectedKeys: [router.pathname]
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "./"
  }, __jsx("a", null, "Introduction"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/getting-started"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "./getting-started"
  }, __jsx("a", null, "Getting started"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.SubMenu, {
    title: "Examples",
    key: "/examples"
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.ItemGroup, {
    title: "Usage"
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Divider, null), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/mapbox-gl"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "./examples/mapbox-gl"
  }, __jsx("a", null, "mapbox-gl"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/react-map-gl"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "./examples/react-map-gl"
  }, __jsx("a", null, "react-map-gl"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/react-mapbox-gl"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "./examples/react-mapbox-gl"
  }, __jsx("a", null, "react-mapbox-gl")))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.ItemGroup, {
    title: "Model"
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Divider, null), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/gltf"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "./examples/gltf"
  }, __jsx("a", null, "GTLF"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/obj"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "./examples/obj"
  }, __jsx("a", null, "OBJ"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/mtl"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "./examples/mtl"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xlZnQudHN4Il0sIm5hbWVzIjpbIlN0eWxlZFNpZGVyIiwic3R5bGVkIiwiU2lkZXIiLCJwcm9wcyIsInRoZW1lcyIsImxpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiTG9nbyIsImRpdiIsIkxlZnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwiaGFuZGxlQ2xpY2siLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxXQUFXLEdBQUdDLGlFQUFNLENBQUMsdURBQU9DLEtBQVIsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxQ0FDRixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJDLGVBQXZCO0FBQUEsQ0FESCxDQUFqQjtLQUFNTixXO0FBS04sSUFBTU8sSUFBSSxHQUFHTix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1JQUFWO01BQU1ELEk7O0FBU04sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTVAsTUFBTSxHQUFHUSx3REFBVSxDQUFDQyw4REFBRCxDQUF6Qjs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCSixVQUFNLENBQUNLLElBQVAsQ0FBWSxHQUFaO0FBQ0EsR0FGRDs7QUFHQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQU0sQ0FBQ1EsUUFBbkI7QUFDQSxTQUNDLE1BQUMsV0FBRDtBQUFhLFVBQU0sRUFBRWQsTUFBckI7QUFBNkIsU0FBSyxFQUFFO0FBQXBDLEtBQ0MsTUFBQyxJQUFEO0FBQU0sV0FBTyxFQUFFVTtBQUFmLElBREQsRUFFQztBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLG1CQUFlLEVBQUUsQ0FBQyxXQUFELEVBQWMsT0FBZCxDQUFyQztBQUE2RCxnQkFBWSxFQUFFLENBQUNKLE1BQU0sQ0FBQ1EsUUFBUjtBQUEzRSxLQUNDLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNDLGdDQURELENBREQsQ0FERCxFQU1DLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNDLG1DQURELENBREQsQ0FORCxFQVdDLDJEQUFNLE9BQU47QUFBYyxTQUFLLEVBQUMsVUFBcEI7QUFBK0IsT0FBRyxFQUFDO0FBQW5DLEtBQ0MsMkRBQU0sU0FBTjtBQUFnQixTQUFLLEVBQUM7QUFBdEIsS0FDQywyREFBTSxPQUFOLE9BREQsRUFFQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDQyw2QkFERCxDQURELENBRkQsRUFPQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDQyxnQ0FERCxDQURELENBUEQsRUFZQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDQyxtQ0FERCxDQURELENBWkQsQ0FERCxFQW1CQywyREFBTSxTQUFOO0FBQWdCLFNBQUssRUFBQztBQUF0QixLQUNDLDJEQUFNLE9BQU4sT0FERCxFQUVDLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNDLHdCQURELENBREQsQ0FGRCxFQU9DLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNDLHVCQURELENBREQsQ0FQRCxFQVlDLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUM7QUFBZixLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNDLHVCQURELENBREQsQ0FaRCxDQW5CRCxDQVhELEVBaURDLDJEQUFNLE9BQU47QUFBYyxTQUFLLEVBQUMsTUFBcEI7QUFBMkIsT0FBRyxFQUFDO0FBQS9CLElBakRELENBRkQsQ0FERDtBQXdEQSxDQS9ERDs7R0FBTVQsSTtVQUNVRSxxRDs7O01BRFZGLEk7QUFpRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjUzNWM1M2VmNTQzNTU2OThiNzI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBNZW51LCBMYXlvdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgVGhlbWVzIH0gZnJvbSAnLi4vcGFnZXMvX2FwcCc7XG5cbmNvbnN0IFN0eWxlZFNpZGVyID0gc3R5bGVkKExheW91dC5TaWRlcik8eyB0aGVtZXM6IFRoZW1lcyB9PmBcblx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZXMubGlnaHQuYmFja2dyb3VuZENvbG9yfTtcblx0aGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG5cdGhlaWdodDogMzJweDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvbG9nby5wbmcnKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0bWFyZ2luOiAxNnB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBMZWZ0ID0gKCkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgdGhlbWVzID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcblx0XHRyb3V0ZXIucHVzaCgnLycpO1xuXHR9O1xuXHRjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpO1xuXHRyZXR1cm4gKFxuXHRcdDxTdHlsZWRTaWRlciB0aGVtZXM9e3RoZW1lc30gd2lkdGg9ezI0MH0+XG5cdFx0XHQ8TG9nbyBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cblx0XHRcdDxNZW51IG1vZGU9XCJpbmxpbmVcIiBkZWZhdWx0T3BlbktleXM9e1snL2V4YW1wbGVzJywgJy9hcGlzJ119IHNlbGVjdGVkS2V5cz17W3JvdXRlci5wYXRobmFtZV19PlxuXHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cIi9cIj5cblx0XHRcdFx0XHQ8TGluayBocmVmPVwiLi9cIj5cblx0XHRcdFx0XHRcdDxhPkludHJvZHVjdGlvbjwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvTWVudS5JdGVtPlxuXHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cIi9nZXR0aW5nLXN0YXJ0ZWRcIj5cblx0XHRcdFx0XHQ8TGluayBocmVmPVwiLi9nZXR0aW5nLXN0YXJ0ZWRcIj5cblx0XHRcdFx0XHRcdDxhPkdldHRpbmcgc3RhcnRlZDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvTWVudS5JdGVtPlxuXHRcdFx0XHQ8TWVudS5TdWJNZW51IHRpdGxlPVwiRXhhbXBsZXNcIiBrZXk9XCIvZXhhbXBsZXNcIj5cblx0XHRcdFx0XHQ8TWVudS5JdGVtR3JvdXAgdGl0bGU9XCJVc2FnZVwiPlxuXHRcdFx0XHRcdFx0PE1lbnUuRGl2aWRlciAvPlxuXHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCIvZXhhbXBsZXMvbWFwYm94LWdsXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIuL2V4YW1wbGVzL21hcGJveC1nbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhPm1hcGJveC1nbDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cIi9leGFtcGxlcy9yZWFjdC1tYXAtZ2xcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi4vZXhhbXBsZXMvcmVhY3QtbWFwLWdsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGE+cmVhY3QtbWFwLWdsPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiL2V4YW1wbGVzL3JlYWN0LW1hcGJveC1nbFwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiLi9leGFtcGxlcy9yZWFjdC1tYXBib3gtZ2xcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YT5yZWFjdC1tYXBib3gtZ2w8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvTWVudS5JdGVtPlxuXHRcdFx0XHRcdDwvTWVudS5JdGVtR3JvdXA+XG5cdFx0XHRcdFx0PE1lbnUuSXRlbUdyb3VwIHRpdGxlPVwiTW9kZWxcIj5cblx0XHRcdFx0XHRcdDxNZW51LkRpdmlkZXIgLz5cblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiL2V4YW1wbGVzL2dsdGZcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi4vZXhhbXBsZXMvZ2x0ZlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhPkdUTEY8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvTWVudS5JdGVtPlxuXHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCIvZXhhbXBsZXMvb2JqXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIuL2V4YW1wbGVzL29ialwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhPk9CSjwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cIi9leGFtcGxlcy9tdGxcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi4vZXhhbXBsZXMvbXRsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGE+T0JKPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cblx0XHRcdFx0XHQ8L01lbnUuSXRlbUdyb3VwPlxuXHRcdFx0XHQ8L01lbnUuU3ViTWVudT5cblx0XHRcdFx0PE1lbnUuU3ViTWVudSB0aXRsZT1cIkFQSXNcIiBrZXk9XCIvYXBpc1wiPjwvTWVudS5TdWJNZW51PlxuXHRcdFx0PC9NZW51PlxuXHRcdDwvU3R5bGVkU2lkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWZ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==