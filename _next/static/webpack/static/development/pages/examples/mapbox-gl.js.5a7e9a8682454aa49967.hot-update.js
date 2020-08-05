webpackHotUpdate("static\\development\\pages\\examples\\mapbox-gl.js",{

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
    href: "".concat("")
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
    href: "/examples/gltf"
  }, __jsx("a", null, "GTLF"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/obj"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/examples/obj"
  }, __jsx("a", null, "OBJ"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "/examples/mtl"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/examples/mtl"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xlZnQudHN4Il0sIm5hbWVzIjpbIlN0eWxlZFNpZGVyIiwic3R5bGVkIiwiU2lkZXIiLCJwcm9wcyIsInRoZW1lcyIsImxpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiTG9nbyIsImRpdiIsIkxlZnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwiaGFuZGxlQ2xpY2siLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsSUFBTUEsV0FBVyxHQUFHQyxpRUFBTSxDQUFDLHVEQUFPQyxLQUFSLENBQVQ7QUFBQTtBQUFBO0FBQUEscUNBQ0YsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxlQUF2QjtBQUFBLENBREgsQ0FBakI7S0FBTU4sVztBQUtOLElBQU1PLElBQUksR0FBR04seURBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSxtSUFBVjtNQUFNRCxJOztBQVNOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1QLE1BQU0sR0FBR1Esd0RBQVUsQ0FBQ0MsOERBQUQsQ0FBekI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QkosVUFBTSxDQUFDSyxJQUFQLENBQVksR0FBWjtBQUNBLEdBRkQ7O0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFNLENBQUNRLFFBQW5CO0FBQ0EsU0FDQyxNQUFDLFdBQUQ7QUFBYSxVQUFNLEVBQUVkLE1BQXJCO0FBQTZCLFNBQUssRUFBRTtBQUFwQyxLQUNDLE1BQUMsSUFBRDtBQUFNLFdBQU8sRUFBRVU7QUFBZixJQURELEVBRUM7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFvQixtQkFBZSxFQUFFLENBQUMsV0FBRCxFQUFjLE9BQWQsQ0FBckM7QUFBNkQsZ0JBQVksRUFBRSxDQUFDSixNQUFNLENBQUNRLFFBQVI7QUFBM0UsS0FDQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxZQUFLQyxFQUFMO0FBQVYsS0FDQyxnQ0FERCxDQURELENBREQsRUFNQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxZQUFLQSxFQUFMO0FBQVYsS0FDQyxtQ0FERCxDQURELENBTkQsRUFXQywyREFBTSxPQUFOO0FBQWMsU0FBSyxFQUFDLFVBQXBCO0FBQStCLE9BQUcsRUFBQztBQUFuQyxLQUNDLDJEQUFNLFNBQU47QUFBZ0IsU0FBSyxFQUFDO0FBQXRCLEtBQ0MsMkRBQU0sT0FBTixPQURELEVBRUMsMkRBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksWUFBS0EsRUFBTDtBQUFWLEtBQ0MsNkJBREQsQ0FERCxDQUZELEVBT0MsMkRBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksWUFBS0EsRUFBTDtBQUFWLEtBQ0MsZ0NBREQsQ0FERCxDQVBELEVBWUMsMkRBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQztBQUFmLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksWUFBS0EsRUFBTDtBQUFWLEtBQ0MsbUNBREQsQ0FERCxDQVpELENBREQsRUFtQkMsMkRBQU0sU0FBTjtBQUFnQixTQUFLLEVBQUM7QUFBdEIsS0FDQywyREFBTSxPQUFOLE9BREQsRUFFQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDQyx3QkFERCxDQURELENBRkQsRUFPQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDQyx1QkFERCxDQURELENBUEQsRUFZQywyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDO0FBQWYsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDQyx1QkFERCxDQURELENBWkQsQ0FuQkQsQ0FYRCxFQWlEQywyREFBTSxPQUFOO0FBQWMsU0FBSyxFQUFDLE1BQXBCO0FBQTJCLE9BQUcsRUFBQztBQUEvQixJQWpERCxDQUZELENBREQ7QUF3REEsQ0EvREQ7O0dBQU1WLEk7VUFDVUUscUQ7OztNQURWRixJO0FBaUVTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZXhhbXBsZXNcXG1hcGJveC1nbC5qcy41YTdlOWE4NjgyNDU0YWE0OTk2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTWVudSwgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFRoZW1lcyB9IGZyb20gJy4uL3BhZ2VzL19hcHAnO1xuXG5jb25zdCBTdHlsZWRTaWRlciA9IHN0eWxlZChMYXlvdXQuU2lkZXIpPHsgdGhlbWVzOiBUaGVtZXMgfT5gXG5cdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWVzLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG5cdGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuXHRoZWlnaHQ6IDMycHg7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2xvZ28ucG5nJyk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdG1hcmdpbjogMTZweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgTGVmdCA9ICgpID0+IHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IHRoZW1lcyA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0cm91dGVyLnB1c2goJy8nKTtcblx0fTtcblx0Y29uc29sZS5sb2cocm91dGVyLnBhdGhuYW1lKTtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkU2lkZXIgdGhlbWVzPXt0aGVtZXN9IHdpZHRoPXsyNDB9PlxuXHRcdFx0PExvZ28gb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG5cdFx0XHQ8TWVudSBtb2RlPVwiaW5saW5lXCIgZGVmYXVsdE9wZW5LZXlzPXtbJy9leGFtcGxlcycsICcvYXBpcyddfSBzZWxlY3RlZEtleXM9e1tyb3V0ZXIucGF0aG5hbWVdfT5cblx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCIvXCI+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYucHJlZml4fWB9PlxuXHRcdFx0XHRcdFx0PGE+SW50cm9kdWN0aW9uPC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiL2dldHRpbmctc3RhcnRlZFwiPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LnByZWZpeH0vZ2V0dGluZy1zdGFydGVkYH0+XG5cdFx0XHRcdFx0XHQ8YT5HZXR0aW5nIHN0YXJ0ZWQ8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L01lbnUuSXRlbT5cblx0XHRcdFx0PE1lbnUuU3ViTWVudSB0aXRsZT1cIkV4YW1wbGVzXCIga2V5PVwiL2V4YW1wbGVzXCI+XG5cdFx0XHRcdFx0PE1lbnUuSXRlbUdyb3VwIHRpdGxlPVwiVXNhZ2VcIj5cblx0XHRcdFx0XHRcdDxNZW51LkRpdmlkZXIgLz5cblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiL2V4YW1wbGVzL21hcGJveC1nbFwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5wcmVmaXh9L2V4YW1wbGVzL21hcGJveC1nbGB9PlxuXHRcdFx0XHRcdFx0XHRcdDxhPm1hcGJveC1nbDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cIi9leGFtcGxlcy9yZWFjdC1tYXAtZ2xcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYucHJlZml4fS9leGFtcGxlcy9yZWFjdC1tYXAtZ2xgfT5cblx0XHRcdFx0XHRcdFx0XHQ8YT5yZWFjdC1tYXAtZ2w8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvTWVudS5JdGVtPlxuXHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCIvZXhhbXBsZXMvcmVhY3QtbWFwYm94LWdsXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LnByZWZpeH0vZXhhbXBsZXMvcmVhY3QtbWFwYm94LWdsYH0+XG5cdFx0XHRcdFx0XHRcdFx0PGE+cmVhY3QtbWFwYm94LWdsPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cblx0XHRcdFx0XHQ8L01lbnUuSXRlbUdyb3VwPlxuXHRcdFx0XHRcdDxNZW51Lkl0ZW1Hcm91cCB0aXRsZT1cIk1vZGVsXCI+XG5cdFx0XHRcdFx0XHQ8TWVudS5EaXZpZGVyIC8+XG5cdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cIi9leGFtcGxlcy9nbHRmXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZXhhbXBsZXMvZ2x0ZlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhPkdUTEY8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvTWVudS5JdGVtPlxuXHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCIvZXhhbXBsZXMvb2JqXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZXhhbXBsZXMvb2JqXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGE+T0JKPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiL2V4YW1wbGVzL210bFwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2V4YW1wbGVzL210bFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhPk9CSjwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0PC9NZW51Lkl0ZW1Hcm91cD5cblx0XHRcdFx0PC9NZW51LlN1Yk1lbnU+XG5cdFx0XHRcdDxNZW51LlN1Yk1lbnUgdGl0bGU9XCJBUElzXCIga2V5PVwiL2FwaXNcIj48L01lbnUuU3ViTWVudT5cblx0XHRcdDwvTWVudT5cblx0XHQ8L1N0eWxlZFNpZGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVmdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=