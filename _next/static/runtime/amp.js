(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/runtime/amp.js"],{

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, _data, curPage, pageUpdated;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return (0, _unfetch["default"])("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            _data = _context.sent;
            curPage = page === '/' ? 'index' : page;
            pageUpdated = Object.keys(_data.c).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource.getEventSourceWrapper)({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    if (event.data.indexOf('action') !== -1) {
      eventCallbacks.forEach(function (cb) {
        return cb(event);
      });
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below


var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behaviour, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent;

function displayContent(callback) {
  // This is the fallback helper that removes Next.js' no-FOUC styles when
  // CSS mode is enabled. This only really activates if you haven't created
  // _any_ styles in your application yet.
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9jbGllbnQvZGV2L2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL2NsaWVudC9kZXYvb24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImRvY3VtZW50IiwiYXNzZXRQcmVmaXgiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJob3RVcGRhdGVQYXRoIiwibW9kdWxlIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJyZXMiLCJjdXJQYWdlIiwicGFnZSIsInBhZ2VVcGRhdGVkIiwiT2JqZWN0IiwibW9kIiwiY29uc29sZSIsInBhdGgiLCJldmVudCIsIm1lc3NhZ2UiLCJ0cnlBcHBseVVwZGF0ZXMiLCJldmVudENhbGxiYWNrcyIsImxhc3RBY3Rpdml0eSIsImxpc3RlbmVycyIsIm9wdGlvbnMiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJzb3VyY2UiLCJpIiwiY2IiLCJjbGVhckludGVydmFsIiwic2V0VGltZW91dCIsImNsb3NlIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwiUmVzcG9uc2UiLCJUZXh0RGVjb2RlciIsIlRleHRFbmNvZGVyIiwiQWJvcnRDb250cm9sbGVyIiwiVGV4dERlY29kZXJQb2x5ZmlsbCIsIm9jdGV0c0NvdW50IiwiY29kZVBvaW50IiwiYml0c05lZWRlZCIsIlJFUExBQ0VSIiwic3RyaW5nIiwib2N0ZXRzIiwib2N0ZXQiLCJ2YWxpZCIsIlN0cmluZyIsInN1cHBvcnRzU3RyZWFtT3B0aW9uIiwic3RyZWFtIiwiayIsInRoYXQiLCJ4aHIiLCJzdGF0ZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJvblN0YXJ0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImNvbnRlbnRUeXBlIiwib25Qcm9ncmVzcyIsInJlc3BvbnNlVGV4dCIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJYSFJXcmFwcGVyIiwibmFtZSIsImMiLCJtYXAiLCJhcnJheSIsImFsbCIsImxpbmUiLCJwYXJ0cyIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJIZWFkZXJzUG9seWZpbGwiLCJYSFJUcmFuc3BvcnQiLCJvZmZzZXQiLCJjaHVuayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsImhlYWRlcnMiLCJvblN0YXJ0Q2FsbGJhY2siLCJvbkZpbmlzaENhbGxiYWNrIiwiSGVhZGVyc1dyYXBwZXIiLCJjb250cm9sbGVyIiwic2lnbmFsIiwidGV4dERlY29kZXIiLCJjcmVkZW50aWFscyIsIndpdGhDcmVkZW50aWFscyIsImNhY2hlIiwicmVhZGVyIiwicmVzcG9uc2UiLCJyZWFkTmV4dENodW5rIiwicmVzdWx0IiwicmVzb2x2ZSIsInJlamVjdCIsIlByb21pc2UiLCJFdmVudFRhcmdldCIsInR5cGVMaXN0ZW5lcnMiLCJsZW5ndGgiLCJsaXN0ZW5lciIsInRocm93RXJyb3IiLCJ0eXBlIiwiZm91bmQiLCJmaWx0ZXJlZCIsIkV2ZW50IiwiTWVzc2FnZUV2ZW50IiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJmaXJlIiwiZiIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImZldGNoIiwiQm9vbGVhbiIsImluaXRpYWxSZXRyeSIsImhlYXJ0YmVhdFRpbWVvdXQiLCJsYXN0RXZlbnRJZCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJDdXJyZW50VHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJlcyIsInRleHRDaHVuayIsInBvc2l0aW9uIiwiZmllbGQiLCJyZXF1ZXN0VVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdEhlYWRlcnMiLCJ4IiwiY2FsbGJhY2siLCJldnRTb3VyY2UiLCJwYXRobmFtZSIsInBhdGhuYW1lRm4iLCJjbG9zZVBpbmciLCJvbmRlbWFuZCIsInBheWxvYWQiLCJsb2NhdGlvbiIs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QUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM3VCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3J1bnRpbWUvYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj1ufHx7fSxuZXcgUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBzPW5ldyBYTUxIdHRwUmVxdWVzdCxvPVtdLHU9W10saT17fSxhPWZ1bmN0aW9uKCl7cmV0dXJue29rOjI9PShzLnN0YXR1cy8xMDB8MCksc3RhdHVzVGV4dDpzLnN0YXR1c1RleHQsc3RhdHVzOnMuc3RhdHVzLHVybDpzLnJlc3BvbnNlVVJMLHRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMucmVzcG9uc2VUZXh0KX0sanNvbjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoSlNPTi5wYXJzZShzLnJlc3BvbnNlVGV4dCkpfSxibG9iOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcy5yZXNwb25zZV0pKX0sY2xvbmU6YSxoZWFkZXJzOntrZXlzOmZ1bmN0aW9uKCl7cmV0dXJuIG99LGVudHJpZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBpW2UudG9Mb3dlckNhc2UoKV19LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpaW4gaX19fX07Zm9yKHZhciBsIGluIHMub3BlbihuLm1ldGhvZHx8XCJnZXRcIixlLCEwKSxzLm9ubG9hZD1mdW5jdGlvbigpe3MuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlteXFxTXFxuXSooW1xcc1xcU10qPykkL2dtLGZ1bmN0aW9uKGUsbix0KXtvLnB1c2gobj1uLnRvTG93ZXJDYXNlKCkpLHUucHVzaChbbix0XSksaVtuXT1pW25dP2lbbl0rXCIsXCIrdDp0fSksdChhKCkpfSxzLm9uZXJyb3I9cixzLndpdGhDcmVkZW50aWFscz1cImluY2x1ZGVcIj09bi5jcmVkZW50aWFscyxuLmhlYWRlcnMpcy5zZXRSZXF1ZXN0SGVhZGVyKGwsbi5oZWFkZXJzW2xdKTtzLnNlbmQobi5ib2R5fHxudWxsKX0pfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2guanMubWFwXG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9cbmltcG9ydCBmZXRjaCBmcm9tICduZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2gnXG5pbXBvcnQgRXZlbnRTb3VyY2VQb2x5ZmlsbCBmcm9tICcuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbCdcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcbmltcG9ydCB7IHNldHVwUGluZyB9IGZyb20gJy4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHMnXG5pbXBvcnQgeyBkaXNwbGF5Q29udGVudCB9IGZyb20gJy4vZm91YydcblxuaWYgKCF3aW5kb3cuRXZlbnRTb3VyY2UpIHtcbiAgd2luZG93LkV2ZW50U291cmNlID0gRXZlbnRTb3VyY2VQb2x5ZmlsbFxufVxuXG5jb25zdCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19ORVhUX0RBVEFfXycpLnRleHRDb250ZW50KVxubGV0IHsgYXNzZXRQcmVmaXgsIHBhZ2UgfSA9IGRhdGFcbmFzc2V0UHJlZml4ID0gYXNzZXRQcmVmaXggfHwgJydcbmxldCBtb3N0UmVjZW50SGFzaCA9IG51bGxcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xubGV0IGN1ckhhc2ggPSBfX3dlYnBhY2tfaGFzaF9fXG5jb25zdCBob3RVcGRhdGVQYXRoID1cbiAgYXNzZXRQcmVmaXggKyAoYXNzZXRQcmVmaXguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nKSArICdfbmV4dC9zdGF0aWMvd2VicGFjay8nXG5cbi8vIElzIHRoZXJlIGEgbmV3ZXIgdmVyc2lvbiBvZiB0aGlzIGNvZGUgYXZhaWxhYmxlP1xuZnVuY3Rpb24gaXNVcGRhdGVBdmFpbGFibGUoKSB7XG4gIC8vIF9fd2VicGFja19oYXNoX18gaXMgdGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgY29tcGlsYXRpb24uXG4gIC8vIEl0J3MgYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgYnkgV2VicGFjay5cbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gIHJldHVybiBtb3N0UmVjZW50SGFzaCAhPT0gX193ZWJwYWNrX2hhc2hfX1xufVxuXG4vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpIHtcbiAgcmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdpZGxlJ1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4vLyByZWxvYWRzIHRoZSBwYWdlIHdoZW4gaXQgaGFzIGNoYW5nZWQuXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKSB7XG4gIGlmICghaXNVcGRhdGVBdmFpbGFibGUoKSB8fCAhY2FuQXBwbHlVcGRhdGVzKCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvdFVwZGF0ZVBhdGh9JHtjdXJIYXNofS5ob3QtdXBkYXRlLmpzb25gKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc3QgY3VyUGFnZSA9IHBhZ2UgPT09ICcvJyA/ICdpbmRleCcgOiBwYWdlXG4gICAgY29uc3QgcGFnZVVwZGF0ZWQgPSBPYmplY3Qua2V5cyhkYXRhLmMpLnNvbWUoKG1vZCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWB9YFxuICAgICAgICApICE9PSAtMSB8fFxuICAgICAgICBtb2QuaW5kZXhPZihcbiAgICAgICAgICBgcGFnZXMke1xuICAgICAgICAgICAgY3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gXG4gICAgICAgICAgfWAucmVwbGFjZSgvXFwvL2csICdcXFxcJylcbiAgICAgICAgKSAhPT0gLTFcbiAgICAgIClcbiAgICB9KVxuXG4gICAgaWYgKHBhZ2VVcGRhdGVkKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY3VySGFzaCA9IG1vc3RSZWNlbnRIYXNoXG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBjaGVja2luZyBmb3IgdXBkYXRlJywgZXJyKVxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICB9XG59XG5cbmdldEV2ZW50U291cmNlV3JhcHBlcih7XG4gIHBhdGg6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcmAsXG59KS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5kYXRhID09PSAnXFx1RDgzRFxcdURDOTMnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG5cbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzeW5jJyB8fCBtZXNzYWdlLmFjdGlvbiA9PT0gJ2J1aWx0Jykge1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBtb3N0UmVjZW50SGFzaCA9IG1lc3NhZ2UuaGFzaFxuICAgICAgdHJ5QXBwbHlVcGRhdGVzKClcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAncmVsb2FkUGFnZScpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgIH1cbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcgKyBldmVudC5kYXRhICsgJ1xcbicgKyBleClcbiAgfVxufSlcblxuc2V0dXBQaW5nKGFzc2V0UHJlZml4LCAoKSA9PiBwYWdlKVxuZGlzcGxheUNvbnRlbnQoKVxuIiwiY29uc3QgZXZlbnRDYWxsYmFja3MgPSBbXVxuXG5mdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICB2YXIgc291cmNlXG4gIHZhciBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIHZhciBsaXN0ZW5lcnMgPSBbXVxuXG4gIGlmICghb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgb3B0aW9ucy50aW1lb3V0ID0gMjAgKiAxMDAwXG4gIH1cblxuICBpbml0KClcbiAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXcgRGF0ZSgpIC0gbGFzdEFjdGl2aXR5ID4gb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICBoYW5kbGVEaXNjb25uZWN0KClcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCAvIDIpXG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzb3VyY2UgPSBuZXcgd2luZG93LkV2ZW50U291cmNlKG9wdGlvbnMucGF0aClcbiAgICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lXG4gICAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0XG4gICAgc291cmNlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKVxuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXShldmVudClcbiAgICB9XG4gICAgaWYgKGV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJykgIT09IC0xKSB7XG4gICAgICBldmVudENhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICBzb3VyY2UuY2xvc2UoKVxuICAgIHNldFRpbWVvdXQoaW5pdCwgb3B0aW9ucy50aW1lb3V0KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9zZTogKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgfSxcbiAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uIChmbikge1xuICAgICAgbGlzdGVuZXJzLnB1c2goZm4pXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLm9uZGVtYW5kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogKGNiKSA9PiB7XG4gICAgICAgIGV2ZW50Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgICB9LFxuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW1wcm92ZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0V2ZW50U291cmNlL1xuLy8gQXZhaWxhYmxlIHVuZGVyIE1JVCBMaWNlbnNlIChNSVQpXG4vLyBPbmx5IHRyaWVzIHRvIHN1cHBvcnQgSUUxMSBhbmQgbm90aGluZyBiZWxvd1xuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcblxudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG52YXIgUmVzcG9uc2UgPSB3aW5kb3cuUmVzcG9uc2VcbnZhciBUZXh0RGVjb2RlciA9IHdpbmRvdy5UZXh0RGVjb2RlclxudmFyIFRleHRFbmNvZGVyID0gd2luZG93LlRleHRFbmNvZGVyXG52YXIgQWJvcnRDb250cm9sbGVyID0gd2luZG93LkFib3J0Q29udHJvbGxlclxuXG5pZiAoQWJvcnRDb250cm9sbGVyID09IHVuZGVmaW5lZCkge1xuICBBYm9ydENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaWduYWwgPSBudWxsXG4gICAgdGhpcy5hYm9ydCA9IGZ1bmN0aW9uICgpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpIHtcbiAgdGhpcy5iaXRzTmVlZGVkID0gMFxuICB0aGlzLmNvZGVQb2ludCA9IDBcbn1cblxuVGV4dERlY29kZXJQb2x5ZmlsbC5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKG9jdGV0cykge1xuICBmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsIHNoaWZ0LCBvY3RldHNDb3VudCkge1xuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAwODAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4MDdmZlxuICAgIH1cbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChjb2RlUG9pbnQgPj0gMHgwODAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweGQ3ZmYpIHx8XG4gICAgICAgIChjb2RlUG9pbnQgPj0gMHhlMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweGZmZmYpXG4gICAgICApXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAweDAxMDAwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgxMGZmZmZcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICBmdW5jdGlvbiBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpIHtcbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDEpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj4gNiA+IDE1ID8gMyA6IGNvZGVQb2ludCA+IDMxID8gMiA6IDFcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAyKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID4gMTUgPyAzIDogMlxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDMpIHtcbiAgICAgIHJldHVybiAzXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigpXG4gIH1cbiAgdmFyIFJFUExBQ0VSID0gMHhmZmZkXG4gIHZhciBzdHJpbmcgPSAnJ1xuICB2YXIgYml0c05lZWRlZCA9IHRoaXMuYml0c05lZWRlZFxuICB2YXIgY29kZVBvaW50ID0gdGhpcy5jb2RlUG9pbnRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvY3RldHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgb2N0ZXQgPSBvY3RldHNbaV1cbiAgICBpZiAoYml0c05lZWRlZCAhPT0gMCkge1xuICAgICAgaWYgKFxuICAgICAgICBvY3RldCA8IDEyOCB8fFxuICAgICAgICBvY3RldCA+IDE5MSB8fFxuICAgICAgICAhdmFsaWQoXG4gICAgICAgICAgKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKSxcbiAgICAgICAgICBiaXRzTmVlZGVkIC0gNixcbiAgICAgICAgICBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAob2N0ZXQgPj0gMCAmJiBvY3RldCA8PSAxMjcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXRcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMTkyICYmIG9jdGV0IDw9IDIyMykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDFcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAzMVxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyMjQgJiYgb2N0ZXQgPD0gMjM5KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMlxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDE1XG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDI0MCAmJiBvY3RldCA8PSAyNDcpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAzXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgN1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgYml0c05lZWRlZCAhPT0gMCAmJlxuICAgICAgICAhdmFsaWQoY29kZVBvaW50LCBiaXRzTmVlZGVkLCBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJpdHNOZWVkZWQgLT0gNlxuICAgICAgY29kZVBvaW50ID0gKGNvZGVQb2ludCA8PCA2KSB8IChvY3RldCAmIDYzKVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSA+PiAxMCkpXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAgIDB4ZGMwMCArICgoY29kZVBvaW50IC0gMHhmZmZmIC0gMSkgJiAweDNmZilcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLmJpdHNOZWVkZWQgPSBiaXRzTmVlZGVkXG4gIHRoaXMuY29kZVBvaW50ID0gY29kZVBvaW50XG4gIHJldHVybiBzdHJpbmdcbn1cblxuLy8gRmlyZWZveCA8IDM4IHRocm93cyBhbiBlcnJvciB3aXRoIHN0cmVhbSBvcHRpb25cbnZhciBzdXBwb3J0c1N0cmVhbU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSgndGVzdCcpLCB7XG4gICAgICAgIHN0cmVhbTogdHJ1ZSxcbiAgICAgIH0pID09PSAndGVzdCdcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIElFLCBFZGdlXG5pZiAoXG4gIFRleHREZWNvZGVyID09IHVuZGVmaW5lZCB8fFxuICBUZXh0RW5jb2RlciA9PSB1bmRlZmluZWQgfHxcbiAgIXN1cHBvcnRzU3RyZWFtT3B0aW9uKClcbikge1xuICBUZXh0RGVjb2RlciA9IFRleHREZWNvZGVyUG9seWZpbGxcbn1cblxudmFyIGsgPSBmdW5jdGlvbiAoKSB7fVxuXG5mdW5jdGlvbiBYSFJXcmFwcGVyKHhocikge1xuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXG4gIHRoaXMucmVzcG9uc2VUeXBlID0gJydcbiAgdGhpcy5yZWFkeVN0YXRlID0gMFxuICB0aGlzLnN0YXR1cyA9IDBcbiAgdGhpcy5zdGF0dXNUZXh0ID0gJydcbiAgdGhpcy5yZXNwb25zZVRleHQgPSAnJ1xuICB0aGlzLm9ucHJvZ3Jlc3MgPSBrXG4gIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICB0aGlzLl9jb250ZW50VHlwZSA9ICcnXG4gIHRoaXMuX3hociA9IHhoclxuICB0aGlzLl9zZW5kVGltZW91dCA9IDBcbiAgdGhpcy5fYWJvcnQgPSBrXG59XG5cblhIUldyYXBwZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgdGhpcy5fYWJvcnQodHJ1ZSlcblxuICB2YXIgdGhhdCA9IHRoaXNcbiAgdmFyIHhociA9IHRoaXMuX3hoclxuICB2YXIgc3RhdGUgPSAxXG4gIHZhciB0aW1lb3V0ID0gMFxuXG4gIHRoaXMuX2Fib3J0ID0gZnVuY3Rpb24gKHNpbGVudCkge1xuICAgIGlmICh0aGF0Ll9zZW5kVGltZW91dCAhPT0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KVxuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSA0XG4gICAgICB4aHIub25sb2FkID0ga1xuICAgICAgeGhyLm9uZXJyb3IgPSBrXG4gICAgICB4aHIub25hYm9ydCA9IGtcbiAgICAgIHhoci5vbnByb2dyZXNzID0ga1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGtcbiAgICAgIC8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICAvLyBPcGVyYSA8IDEwOiBYTUxIdHRwUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICB4aHIuYWJvcnQoKVxuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0XG4gICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUgPSAwXG4gIH1cblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhdGUgPT09IDEpIHtcbiAgICAgIC8vIHN0YXRlID0gMjtcbiAgICAgIHZhciBzdGF0dXMgPSAwXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9ICcnXG4gICAgICB2YXIgY29udGVudFR5cGUgPSB1bmRlZmluZWRcbiAgICAgIGlmICghKCdjb250ZW50VHlwZScgaW4geGhyKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHN0YXR1cyA9IHhoci5zdGF0dXNcbiAgICAgICAgICBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHRcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJylcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXG4gICAgICAgICAgLy8gT3BlcmEgPCAxMSB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMlxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTEyMVxuICAgICAgICAgIHN0YXR1cyA9IDBcbiAgICAgICAgICBzdGF0dXNUZXh0ID0gJydcbiAgICAgICAgICBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgICAgIC8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5NjU4XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc3ODU0XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICBzdGF0dXNUZXh0ID0gJ09LJ1xuICAgICAgICBjb250ZW50VHlwZSA9IHhoci5jb250ZW50VHlwZVxuICAgICAgfVxuICAgICAgaWYgKHN0YXR1cyAhPT0gMCkge1xuICAgICAgICBzdGF0ZSA9IDJcbiAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gMlxuICAgICAgICB0aGF0LnN0YXR1cyA9IHN0YXR1c1xuICAgICAgICB0aGF0LnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0XG4gICAgICAgIHRoYXQuX2NvbnRlbnRUeXBlID0gY29udGVudFR5cGVcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBvblN0YXJ0KClcbiAgICBpZiAoc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gM1xuICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9ICcnXG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJRSA4IC0gOSB3aXRoIFhNTEh0dHBSZXF1ZXN0XG4gICAgICB9XG4gICAgICB0aGF0LnJlYWR5U3RhdGUgPSAzXG4gICAgICB0aGF0LnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dFxuICAgICAgdGhhdC5vbnByb2dyZXNzKClcbiAgICB9XG4gIH1cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEZpcmVmb3ggNTIgZmlyZXMgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSA0KSB3aXRob3V0IGZpbmFsIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gMylcbiAgICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcIlxuICAgIG9uUHJvZ3Jlc3MoKVxuICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSA0XG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICB9XG4gIH1cbiAgdmFyIG9uUmVhZHlTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyICE9IHVuZGVmaW5lZCkge1xuICAgICAgLy8gT3BlcmEgMTJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBvbkZpbmlzaCgpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgIG9uUHJvZ3Jlc3MoKVxuICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgICBvblN0YXJ0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIDUwMClcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgIG9uUHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXG4gIHhoci5vbmxvYWQgPSBvbkZpbmlzaFxuICB4aHIub25lcnJvciA9IG9uRmluaXNoXG4gIC8vIGltcHJvcGVyIGZpeCB0byBtYXRjaCBGaXJlZm94IGJlaGF2aW91ciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XG4gIC8vIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03Njg1OTZcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXG4gIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcbiAgLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXG4gIHhoci5vbmFib3J0ID0gb25GaW5pc2hcblxuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MzY3MjNcbiAgaWYgKFxuICAgICEoJ3NlbmRBc0JpbmFyeScgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgICEoJ21vekFub24nIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSlcbiAgKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzXG4gIH1cblxuICAvLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXG4gIC8vIE9wZXJhIDwgMTJcbiAgLy8gRmlyZWZveCA8IDMuNVxuICAvLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcbiAgLy8gb25wcm9ncmVzcyBpcyBub3QgZmlyZWQgc29tZXRpbWVzIG9yIGRlbGF5ZWRcbiAgLy8gc2VlIGFsc28gIzY0XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBvblJlYWR5U3RhdGVDaGFuZ2VcblxuICBpZiAoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdwYWRkaW5nPXRydWUnXG4gIH1cbiAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpXG5cbiAgaWYgKCdyZWFkeVN0YXRlJyBpbiB4aHIpIHtcbiAgICAvLyB3b3JrYXJvdW5kIGZvciBPcGVyYSAxMiBpc3N1ZSB3aXRoIFwicHJvZ3Jlc3NcIiBldmVudHNcbiAgICAvLyAjOTFcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIDApXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9hYm9ydChmYWxzZSlcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiB4aHIpIHtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgfVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICA/IHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgIDogJydcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxuICBpZiAoXG4gICAgISgnb250aW1lb3V0JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmXG4gICAgZG9jdW1lbnQgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSB1bmRlZmluZWQgJiZcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnXG4gICkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICAgIHRoYXQuc2VuZCgpXG4gICAgfSwgNClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgLy8gd2l0aENyZWRlbnRpYWxzIHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJvcGVuXCIgZm9yIFNhZmFyaSBhbmQgQ2hyb21lICg8IDE5ID8pXG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFsc1xuICB4aHIucmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgdHJ5IHtcbiAgICAvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXG4gICAgeGhyLnNlbmQodW5kZWZpbmVkKVxuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXG4gICAgdGhyb3cgZXJyb3IxXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9Mb3dlckNhc2UobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSArIDB4MjApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIEhlYWRlcnNQb2x5ZmlsbChhbGwpIHtcbiAgLy8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcbiAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIGFycmF5ID0gYWxsLnNwbGl0KCdcXHJcXG4nKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGxpbmUgPSBhcnJheVtpXVxuICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJylcbiAgICB2YXIgbmFtZSA9IHBhcnRzLnNoaWZ0KClcbiAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6ICcpXG4gICAgbWFwW3RvTG93ZXJDYXNlKG5hbWUpXSA9IHZhbHVlXG4gIH1cbiAgdGhpcy5fbWFwID0gbWFwXG59XG5IZWFkZXJzUG9seWZpbGwucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldXG59XG5cbmZ1bmN0aW9uIFhIUlRyYW5zcG9ydCgpIHt9XG5cblhIUlRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChcbiAgeGhyLFxuICBvblN0YXJ0Q2FsbGJhY2ssXG4gIG9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgb25GaW5pc2hDYWxsYmFjayxcbiAgdXJsLFxuICB3aXRoQ3JlZGVudGlhbHMsXG4gIGhlYWRlcnNcbikge1xuICB4aHIub3BlbignR0VUJywgdXJsKVxuICB2YXIgb2Zmc2V0ID0gMFxuICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dFxuICAgIHZhciBjaHVuayA9IHJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpXG4gICAgb2Zmc2V0ICs9IGNodW5rLmxlbmd0aFxuICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuaylcbiAgfVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXNcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHRcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJylcbiAgICAgIHZhciBoZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICBvblN0YXJ0Q2FsbGJhY2soXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dCxcbiAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgIG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVycyksXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB4aHIuYWJvcnQoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgfVxuICB9XG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICd0ZXh0J1xuICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgIH1cbiAgfVxuICB4aHIuc2VuZCgpXG59XG5cbmZ1bmN0aW9uIEhlYWRlcnNXcmFwcGVyKGhlYWRlcnMpIHtcbiAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnNcbn1cbkhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSlcbn1cblxuZnVuY3Rpb24gRmV0Y2hUcmFuc3BvcnQoKSB7fVxuXG5GZXRjaFRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChcbiAgeGhyLFxuICBvblN0YXJ0Q2FsbGJhY2ssXG4gIG9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgb25GaW5pc2hDYWxsYmFjayxcbiAgdXJsLFxuICB3aXRoQ3JlZGVudGlhbHMsXG4gIGhlYWRlcnNcbikge1xuICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWwgLy8gc2VlICMxMjBcbiAgdmFyIHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcbiAgZmV0Y2godXJsLCB7XG4gICAgaGVhZGVyczogaGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogd2l0aENyZWRlbnRpYWxzID8gJ2luY2x1ZGUnIDogJ3NhbWUtb3JpZ2luJyxcbiAgICBzaWduYWw6IHNpZ25hbCxcbiAgICBjYWNoZTogJ25vLXN0b3JlJyxcbiAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHZhciByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpXG4gICAgICBvblN0YXJ0Q2FsbGJhY2soXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLFxuICAgICAgICBuZXcgSGVhZGVyc1dyYXBwZXIocmVzcG9uc2UuaGVhZGVycyksXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICByZWFkZXIuY2FuY2VsKClcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlYWROZXh0Q2h1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVhZGVyXG4gICAgICAgICAgICAucmVhZCgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgIC8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNodW5rID0gdGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSwgeyBzdHJlYW06IHRydWUgfSlcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gICAgICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmVhZE5leHRDaHVuaygpXG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICB9XG4gICAgKVxufVxuXG5mdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKGUpIHtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgZVxuICB9LCAwKVxufVxuXG5FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC50YXJnZXQgPSB0aGlzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciBsZW5ndGggPSB0eXBlTGlzdGVuZXJzLmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHR5cGVMaXN0ZW5lcnNbaV1cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93RXJyb3IoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyA9PSB1bmRlZmluZWQpIHtcbiAgICB0eXBlTGlzdGVuZXJzID0gW11cbiAgICBsaXN0ZW5lcnNbdHlwZV0gPSB0eXBlTGlzdGVuZXJzXG4gIH1cbiAgdmFyIGZvdW5kID0gZmFsc2VcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICBmb3VuZCA9IHRydWVcbiAgICB9XG4gIH1cbiAgaWYgKCFmb3VuZCkge1xuICAgIHR5cGVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxufVxuRXZlbnRUYXJnZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcbiAgdHlwZSA9IFN0cmluZyh0eXBlKVxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWx0ZXJlZCA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSAhPT0gbGlzdGVuZXIpIHtcbiAgICAgICAgZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgbGlzdGVuZXJzW3R5cGVdXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RlbmVyc1t0eXBlXSA9IGZpbHRlcmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50KHR5cGUpIHtcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBNZXNzYWdlRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YVxuICB0aGlzLmxhc3RFdmVudElkID0gb3B0aW9ucy5sYXN0RXZlbnRJZFxufVxuXG5NZXNzYWdlRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbmZ1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSlcbiAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1c1xuICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHRcbiAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzXG59XG5cbkNvbm5lY3Rpb25FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSlcblxudmFyIFdBSVRJTkcgPSAtMVxudmFyIENPTk5FQ1RJTkcgPSAwXG52YXIgT1BFTiA9IDFcbnZhciBDTE9TRUQgPSAyXG5cbnZhciBBRlRFUl9DUiA9IC0xXG52YXIgRklFTERfU1RBUlQgPSAwXG52YXIgRklFTEQgPSAxXG52YXIgVkFMVUVfU1RBUlQgPSAyXG52YXIgVkFMVUUgPSAzXG5cbnZhciBjb250ZW50VHlwZVJlZ0V4cCA9IC9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2lcblxudmFyIE1JTklNVU1fRFVSQVRJT04gPSAxMDAwXG52YXIgTUFYSU1VTV9EVVJBVElPTiA9IDE4MDAwMDAwXG5cbnZhciBwYXJzZUR1cmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlLCBkZWYpIHtcbiAgdmFyIG4gPSBwYXJzZUludCh2YWx1ZSwgMTApXG4gIGlmIChuICE9PSBuKSB7XG4gICAgbiA9IGRlZlxuICB9XG4gIHJldHVybiBjbGFtcER1cmF0aW9uKG4pXG59XG52YXIgY2xhbXBEdXJhdGlvbiA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBNSU5JTVVNX0RVUkFUSU9OKSwgTUFYSU1VTV9EVVJBVElPTilcbn1cblxudmFyIGZpcmUgPSBmdW5jdGlvbiAodGhhdCwgZiwgZXZlbnQpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGYuY2FsbCh0aGF0LCBldmVudClcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvd0Vycm9yKGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsIG9wdGlvbnMpIHtcbiAgRXZlbnRUYXJnZXQuY2FsbCh0aGlzKVxuXG4gIHRoaXMub25vcGVuID0gdW5kZWZpbmVkXG4gIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkXG4gIHRoaXMub25lcnJvciA9IHVuZGVmaW5lZFxuXG4gIHRoaXMudXJsID0gdW5kZWZpbmVkXG4gIHRoaXMucmVhZHlTdGF0ZSA9IHVuZGVmaW5lZFxuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZFxuXG4gIHRoaXMuX2Nsb3NlID0gdW5kZWZpbmVkXG5cbiAgc3RhcnQodGhpcywgdXJsLCBvcHRpb25zKVxufVxuXG52YXIgaXNGZXRjaFN1cHBvcnRlZCA9XG4gIGZldGNoICE9IHVuZGVmaW5lZCAmJiBSZXNwb25zZSAhPSB1bmRlZmluZWQgJiYgJ2JvZHknIGluIFJlc3BvbnNlLnByb3RvdHlwZVxuXG5mdW5jdGlvbiBzdGFydChlcywgdXJsLCBvcHRpb25zKSB7XG4gIHVybCA9IFN0cmluZyh1cmwpXG4gIHZhciB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKVxuXG4gIHZhciBpbml0aWFsUmV0cnkgPSBjbGFtcER1cmF0aW9uKDEwMDApXG4gIHZhciBoZWFydGJlYXRUaW1lb3V0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQgIT0gdW5kZWZpbmVkXG4gICAgICA/IHBhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LCA0NTAwMClcbiAgICAgIDogY2xhbXBEdXJhdGlvbig0NTAwMClcblxuICB2YXIgbGFzdEV2ZW50SWQgPSAnJ1xuICB2YXIgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgdmFyIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgdmFyIGhlYWRlcnMgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb25zLmhlYWRlcnMpKVxuICAgICAgOiB1bmRlZmluZWRcbiAgdmFyIEN1cnJlbnRUcmFuc3BvcnQgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBvcHRpb25zLlRyYW5zcG9ydFxuICAgICAgOiBYTUxIdHRwUmVxdWVzdFxuICB2YXIgeGhyID1cbiAgICBpc0ZldGNoU3VwcG9ydGVkICYmXG4gICAgIShvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQpXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiBuZXcgWEhSV3JhcHBlcihuZXcgQ3VycmVudFRyYW5zcG9ydCgpKVxuICB2YXIgdHJhbnNwb3J0ID0geGhyID09IHVuZGVmaW5lZCA/IG5ldyBGZXRjaFRyYW5zcG9ydCgpIDogbmV3IFhIUlRyYW5zcG9ydCgpXG4gIHZhciBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICB2YXIgdGltZW91dCA9IDBcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkdcbiAgdmFyIGRhdGFCdWZmZXIgPSAnJ1xuICB2YXIgbGFzdEV2ZW50SWRCdWZmZXIgPSAnJ1xuICB2YXIgZXZlbnRUeXBlQnVmZmVyID0gJydcblxuICB2YXIgdGV4dEJ1ZmZlciA9ICcnXG4gIHZhciBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gIHZhciBmaWVsZFN0YXJ0ID0gMFxuICB2YXIgdmFsdWVTdGFydCA9IDBcblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uIChzdGF0dXMsIHN0YXR1c1RleHQsIGNvbnRlbnRUeXBlLCBoZWFkZXJzLCBjYW5jZWwpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjYW5jZWxGdW5jdGlvbiA9IGNhbmNlbFxuICAgICAgaWYgKFxuICAgICAgICBzdGF0dXMgPT09IDIwMCAmJlxuICAgICAgICBjb250ZW50VHlwZSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgY29udGVudFR5cGVSZWdFeHAudGVzdChjb250ZW50VHlwZSlcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50U3RhdGUgPSBPUEVOXG4gICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZVxuICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICBlcy5yZWFkeVN0YXRlID0gT1BFTlxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdvcGVuJywge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgZmlyZShlcywgZXMub25vcGVuLCBldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gJydcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgaWYgKHN0YXR1c1RleHQpIHtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSBzdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgIFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIgK1xuICAgICAgICAgICAgc3RhdHVzICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICBzdGF0dXNUZXh0ICtcbiAgICAgICAgICAgICcgdGhhdCBpcyBub3QgMjAwLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIgK1xuICAgICAgICAgICAgKGNvbnRlbnRUeXBlID09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/ICctJ1xuICAgICAgICAgICAgICA6IGNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywgJyAnKSkgK1xuICAgICAgICAgICAgJy4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKVxuICAgICAgICBjbG9zZSgpXG4gICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodGV4dENodW5rKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTikge1xuICAgICAgdmFyIG4gPSAtMVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Q2h1bmsubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSB0ZXh0Q2h1bmsuY2hhckNvZGVBdChpKVxuICAgICAgICBpZiAoYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgbiA9IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNodW5rID0gKG4gIT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZSgwLCBuICsgMSlcbiAgICAgIHRleHRCdWZmZXIgPSAobiA9PT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKG4gKyAxKVxuICAgICAgaWYgKGNodW5rICE9PSAnJykge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBjaHVuay5sZW5ndGg7IHBvc2l0aW9uICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSBjaHVuay5jaGFyQ29kZUF0KHBvc2l0aW9uKVxuICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSICYmIGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUikge1xuICAgICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGZpZWxkID0gY2h1bmsuc2xpY2UoZmllbGRTdGFydCwgdmFsdWVTdGFydCAtIDEpXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNodW5rLnNsaWNlKFxuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgK1xuICAgICAgICAgICAgICAgICAgKHZhbHVlU3RhcnQgPCBwb3NpdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgY2h1bmsuY2hhckNvZGVBdCh2YWx1ZVN0YXJ0KSA9PT0gJyAnLmNoYXJDb2RlQXQoMClcbiAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgIDogMCksXG4gICAgICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAoZmllbGQgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gJ1xcbidcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdldmVudCcpIHtcbiAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAncmV0cnknKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFJldHJ5ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaW5pdGlhbFJldHJ5KVxuICAgICAgICAgICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdoZWFydGJlYXRUaW1lb3V0Jykge1xuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb25UaW1lb3V0KClcbiAgICAgICAgICAgICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhQnVmZmVyICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxhc3RFdmVudElkID0gbGFzdEV2ZW50SWRCdWZmZXJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJ21lc3NhZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoZXZlbnRUeXBlQnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQnVmZmVyLnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQ6IGxhc3RFdmVudElkQnVmZmVyLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnbWVzc2FnZScpIHtcbiAgICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9ubWVzc2FnZSwgZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENMT1NFRCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGFCdWZmZXIgPSAnJ1xuICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUgPSBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApID8gQUZURVJfQ1IgOiBGSUVMRF9TVEFSVFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGZpZWxkU3RhcnQgPSBwb3NpdGlvblxuICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgIGlmIChjID09PSAnOicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDFcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFX1NUQVJUXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFZBTFVFX1NUQVJUKSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gVkFMVUVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTiB8fCBjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkdcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgfSwgcmV0cnkpXG4gICAgICByZXRyeSA9IGNsYW1wRHVyYXRpb24oTWF0aC5taW4oaW5pdGlhbFJldHJ5ICogMTYsIHJldHJ5ICogMikpXG5cbiAgICAgIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HXG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2Vycm9yJylcbiAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudClcbiAgICB9XG4gIH1cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudFN0YXRlID0gQ0xPU0VEXG4gICAgaWYgKGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgY2FuY2VsRnVuY3Rpb24oKVxuICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgICB9XG4gICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgdGltZW91dCA9IDBcbiAgICB9XG4gICAgZXMucmVhZHlTdGF0ZSA9IENMT1NFRFxuICB9XG5cbiAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0ID0gMFxuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gV0FJVElORykge1xuICAgICAgaWYgKCF3YXNBY3Rpdml0eSAmJiBjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3dFcnJvcihcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTm8gYWN0aXZpdHkgd2l0aGluICcgK1xuICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ICtcbiAgICAgICAgICAgICAgJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuXG4gICAgY3VycmVudFN0YXRlID0gQ09OTkVDVElOR1xuICAgIGRhdGFCdWZmZXIgPSAnJ1xuICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG4gICAgbGFzdEV2ZW50SWRCdWZmZXIgPSBsYXN0RXZlbnRJZFxuICAgIHRleHRCdWZmZXIgPSAnJ1xuICAgIGZpZWxkU3RhcnQgPSAwXG4gICAgdmFsdWVTdGFydCA9IDBcbiAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG5cbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00Mjg5MTZcbiAgICAvLyBSZXF1ZXN0IGhlYWRlciBmaWVsZCBMYXN0LUV2ZW50LUlEIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMuXG4gICAgdmFyIHJlcXVlc3RVUkwgPSB1cmxcbiAgICBpZiAodXJsLnNsaWNlKDAsIDUpICE9PSAnZGF0YTonICYmIHVybC5zbGljZSgwLCA1KSAhPT0gJ2Jsb2I6Jykge1xuICAgICAgaWYgKGxhc3RFdmVudElkICE9PSAnJykge1xuICAgICAgICByZXF1ZXN0VVJMICs9XG4gICAgICAgICAgKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArXG4gICAgICAgICAgJ2xhc3RFdmVudElkPScgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChsYXN0RXZlbnRJZClcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0ge31cbiAgICByZXF1ZXN0SGVhZGVyc1snQWNjZXB0J10gPSAndGV4dC9ldmVudC1zdHJlYW0nXG4gICAgaWYgKGhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW25hbWVdID0gaGVhZGVyc1tuYW1lXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQub3BlbihcbiAgICAgICAgeGhyLFxuICAgICAgICBvblN0YXJ0LFxuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBvbkZpbmlzaCxcbiAgICAgICAgcmVxdWVzdFVSTCxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgICAgICByZXF1ZXN0SGVhZGVyc1xuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjbG9zZSgpXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgfVxuXG4gIGVzLnVybCA9IHVybFxuICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICBlcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHNcbiAgZXMuX2Nsb3NlID0gY2xvc2VcblxuICBvblRpbWVvdXQoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlKVxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORyA9IENPTk5FQ1RJTkdcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQgPSBDTE9TRURcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9jbG9zZSgpXG59XG5cbkV2ZW50U291cmNlUG9seWZpbGwuQ09OTkVDVElORyA9IENPTk5FQ1RJTkdcbkV2ZW50U291cmNlUG9seWZpbGwuT1BFTiA9IE9QRU5cbkV2ZW50U291cmNlUG9seWZpbGwuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTb3VyY2VQb2x5ZmlsbFxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250ZW50KGNhbGxiYWNrKSB7XG4gIC8vIFRoaXMgaXMgdGhlIGZhbGxiYWNrIGhlbHBlciB0aGF0IHJlbW92ZXMgTmV4dC5qcycgbm8tRk9VQyBzdHlsZXMgd2hlblxuICAvLyBDU1MgbW9kZSBpcyBlbmFibGVkLiBUaGlzIG9ubHkgcmVhbGx5IGFjdGl2YXRlcyBpZiB5b3UgaGF2ZW4ndCBjcmVhdGVkXG4gIC8vIF9hbnlfIHN0eWxlcyBpbiB5b3VyIGFwcGxpY2F0aW9uIHlldC5cbiAgOyh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQpKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uZXh0LWhpZGUtZm91Y10nKSwgaSA9IHgubGVuZ3RoO1xuICAgICAgaS0tO1xuXG4gICAgKSB7XG4gICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSlcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9KVxufVxuIiwiLyogZ2xvYmFsIGxvY2F0aW9uICovXG5cbmltcG9ydCBmZXRjaCBmcm9tICduZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2gnXG5pbXBvcnQgeyBnZXRFdmVudFNvdXJjZVdyYXBwZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5cbmxldCBldnRTb3VyY2VcbmV4cG9ydCBsZXQgY3VycmVudFBhZ2VcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUGluZygpIHtcbiAgaWYgKGV2dFNvdXJjZSkgZXZ0U291cmNlLmNsb3NlKClcbiAgZXZ0U291cmNlID0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LCBwYXRobmFtZUZuLCByZXRyeSkge1xuICBjb25zdCBwYXRobmFtZSA9IHBhdGhuYW1lRm4oKVxuXG4gIC8vIE1ha2Ugc3VyZSB0byBvbmx5IGNyZWF0ZSBuZXcgRXZlbnRTb3VyY2UgcmVxdWVzdCBpZiBwYWdlIGhhcyBjaGFuZ2VkXG4gIGlmIChwYXRobmFtZSA9PT0gY3VycmVudFBhZ2UgJiYgIXJldHJ5KSByZXR1cm5cbiAgY3VycmVudFBhZ2UgPSBwYXRobmFtZVxuICAvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbiAgY2xvc2VQaW5nKClcblxuICBjb25zdCB1cmwgPSBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXI/cGFnZT0ke2N1cnJlbnRQYWdlfWBcbiAgZXZ0U291cmNlID0gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHsgcGF0aDogdXJsLCB0aW1lb3V0OiA1MDAwLCBvbmRlbWFuZDogMSB9KVxuXG4gIGV2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEuaW5kZXhPZigneycpID09PSAtMSkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG4gICAgICBpZiAocGF5bG9hZC5pbnZhbGlkKSB7XG4gICAgICAgIC8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuICAgICAgICBmZXRjaChsb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4oKHBhZ2VSZXMpID0+IHtcbiAgICAgICAgICBpZiAocGFnZVJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLCBlcnIpXG4gICAgfVxuICB9KVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9