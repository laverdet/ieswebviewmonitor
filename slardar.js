var t = window;
var e = "SlardarHybrid";
var n = undefined;

if (t && "function" != typeof t[e]) {
  var o = [],
      i = [],
      u = [],
      c = "addEventListener",
      f = "removeEventListener",
      a = "error",
      v = "unhandledrejection";

  t[e] = function () {
    return n ? t[e].apply(null, arguments) : o.push(arguments);
  };

  try {
    t[c](a, s, false);
    t[c](v, l);
  } catch (n) {}

  setTimeout(function () {
    try {
      t[f](a, s);
      t[f](v, l);
    } catch (n) {}

    var e = function (n, t) {
      return (e = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (n, t) {
        n.__proto__ = t;
      } || function (n, t) {
        for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
          n[r] = t[r];
        }
      })(n, t);
    };

    function n(n, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

      function r() {
        this.constructor = n;
      }

      e(n, t);
      n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    }

    var H = function () {
      return (H = Object.assign || function (n) {
        for (var t, r = 1, e = arguments.length; r < e; r++) for (var o in t = arguments[r]) if (Object.prototype.hasOwnProperty.call(t, o)) {
          n[o] = t[o];
        }

        return n;
      }).apply(this, arguments);
    };

    function T(n) {
      var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && n[t],
          e = 0;
      if (r) return r.call(n);
      if (n && "number" == typeof n.length) return {
        next: function () {
          return {
            value: (n = n && e >= n.length ? undefined : n) && n[e++],
            done: !n
          };
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function L(n, t) {
      var r = "function" == typeof Symbol && n[Symbol.iterator];
      if (!r) return n;
      var e,
          o,
          i = r.call(n),
          u = [];

      try {
        for (; (undefined === t || 0 < t--) && !(e = i.next()).done;) u.push(e.value);
      } catch (n) {
        o = {
          error: n
        };
      } finally {
        try {
          if (e && !e.done && (r = i.return)) {
            r.call(i);
          }
        } finally {
          if (o) throw o.error;
        }
      }

      return u;
    }

    function a(n, t, r) {
      if (r || 2 === arguments.length) for (var e, o = 0, i = t.length; o < i; o++) if (!(!e && o in t)) {
        (e = e || Array.prototype.slice.call(t, 0, o))[o] = t[o];
      }
      return n.concat(e || Array.prototype.slice.call(t));
    }

    function y(n) {
      return "object" == typeof n && null !== n && !c(n);
    }

    function o(n) {
      return "[object Object]" === Object.prototype.toString.call(n);
    }

    function w(n) {
      return "function" == typeof n;
    }

    function b(n) {
      return "[object String]" === Object.prototype.toString.call(n);
    }

    function c(n) {
      return "[object Array]" === Object.prototype.toString.call(n);
    }

    function i(n) {
      return "undefined" != typeof Event && function (n, t) {
        try {
          return n instanceof t;
        } catch (n) {
          return;
        }
      }(n, Event);
    }

    function u(n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }

    function f(n, t) {
      if (y(n)) for (var r in n) if (u(n, r)) {
        t.call(null, r, n[r]);
      }
    }

    function t() {
      for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

      for (var r = {}, e = 0; e < n.length;) {
        r = function (n, t) {
          var r,
              e = H({}, n);

          for (r in t) if (Object.prototype.hasOwnProperty.call(t, r) && undefined !== t[r]) {
            if (y(t[r]) && v(t[r])) e[r] = s(y(n[r]) ? n[r] : {}, t[r]);else if (c(t[r])) e[r] = t[r].slice();else e[r] = t[r];
          }

          return e;
        }(r, n[e]);

        e++;
      }

      return r;
    }

    function _() {
      for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

      for (var r = {}, e = 0; e < n.length;) {
        r = s(r, n[e]);
        e++;
      }

      return r;
    }

    var r = Object.getPrototypeOf ? Object.getPrototypeOf({}) : null;

    function v(n) {
      return Object.getPrototypeOf ? Object.getPrototypeOf(n) === r : n.constructor === Object;
    }

    function s(n, t) {
      var r,
          e = H({}, n);

      for (r in t) if (Object.prototype.hasOwnProperty.call(t, r) && undefined !== t[r]) {
        if (y(t[r]) && v(t[r])) e[r] = s(y(n[r]) ? n[r] : {}, t[r]);else if (c(n[r]) || c(t[r])) e[r] = function t(n, r) {
          n = c(n) ? n : [];
          r = c(r) ? r : [];
          return Array.prototype.concat.call(n, r).map(function (n) {
            return !(n instanceof RegExp) && (c(n) || y(n) && v(n)) ? c(n) ? t([], n) : s({}, n) : n;
          });
        }(n[r], t[r]);else e[r] = t[r];
      }

      return e;
    }

    function l(n, t) {
      if (c(n) && 0 !== n.length) for (var r = 0; r < n.length;) {
        if (n[r] === t) return 1;
        r++;
      }
    }

    function d() {
      return !!y(window);
    }

    function h() {
      return d() && y(window.performance) && !!y(window.performance.timing);
    }

    function p(n) {
      var t = document.createElement("a");
      t.href = n;
      n = t.pathname || "/";

      if ("/" !== n[0]) {
        n = "/" + n;
      }

      return {
        href: t.href,
        protocol: t.protocol.slice(0, -1),
        hostname: t.hostname,
        host: t.host,
        search: t.search,
        pathname: n,
        hash: t.hash
      };
    }

    function m(n, t) {
      return !(!n || !t) && (g.test(n) || M.test(t));
    }

    var g = new RegExp("(" + ["cookie", "auth", "jwt", "token", "key", "ticket", "secret", "credential", "session", "password"].join("|") + ")", "i"),
        M = new RegExp("(" + ["bearer", "session"].join("|") + ")", "i");

    function j() {}

    function N() {
      return "complete" === document.readyState;
    }

    function B(n) {
      if ("complete" !== document.readyState) window.addEventListener("load", function () {
        setTimeout(function () {
          n();
        }, 0);
      }, true);else n();
    }

    function x(n) {
      var t = "[object String]" === Object.prototype.toString.call(n);
      return n ? t ? n.length : ArrayBuffer && n instanceof ArrayBuffer ? n.byteLength : window.Blob && n instanceof Blob ? n.size : n.length || 0 : 0;
    }

    function O(n) {
      if (!n) return "";
      if (!w(n.forEach)) return "";
      var r = [];
      n.forEach(function (n) {
        var t;

        if (c(n) && n[0] && !m(n[0], n[1])) {
          t = n[0];
          n = n[1] || "";
          r.push(t + ": " + n);
        }
      });
      return r.join("\r\n");
    }

    function E(n) {
      var t = {},
          r = p(n);
      t.ax_protocol = r.protocol;
      t.ax_domain = r.hostname;
      t.ax_path = r.pathname;
      t.ax_url = (r.href || n).split("?")[0];
      t.ax_search = r.search;
      t.ax_href = r.href;
      return t;
    }

    function S(n) {
      return c(n) && n.length ? function (n) {
        for (var t = [], r = n.length, e = 0; e < r; e++) {
          var o = n[e];
          if (b(o)) t.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"));else if (o && o.source) {
            t.push(o.source);
          }
        }

        return new RegExp(t.join("|"), "i");
      }(n) : null;
    }

    var P = function (n) {
      var t, r;

      if (undefined === n) {
        n = window;
      }

      return d() && null !== (t = n.screen) && undefined !== t && t.width && null !== (r = n.screen) && undefined !== r && r.height ? n.screen.width + "x" + n.screen.height : "0x0";
    },
        k = function () {
      var n = "unknown",
          t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      return t && b(t.effectiveType) ? t.effectiveType : n;
    },
        F = function (t, r) {
      if (w(t)) {
        if (w(window.addEventListener)) {
          window.addEventListener("unload", t);
          window.addEventListener("beforeunload", t);
          window.addEventListener("pagehide", t);
        }

        if (w(document.addEventListener)) {
          document.addEventListener("visibilitychange", function (n) {
            if (w(r)) r(n);else if ("hidden" === document.visibilityState) {
              t(n);
            }
          });
        }
      }
    };

    function R(n) {
      return !!n && Math.random() < Number(n);
    }

    function D(n, t, r) {
      if (1 < (r = undefined === r ? "0" : r).length) throw new TypeError("expect the length of pad to be 1, but got " + n.length);
      return n.length >= t ? n : "" + Array.from({
        length: t - n.length
      }).fill(r).join("") + n;
    }

    function A(n) {
      return n ? Math.floor(Math.random() * Math.pow(10, 12)).toString(16).substr(0, n) : "";
    }

    var I = "x-tt-trace-id",
        C = "x-tt-trace-host",
        q = "x-tt-logid";

    function J(n, t, r) {
      if (undefined === r) {
        r = "01";
      }

      t = "" + D((Date.now() % 4294967295).toString(16), 8) + function (n) {
        if ("number" == typeof n) r = n;else {
          var t = n.replace(/-/g, "");

          if (!/^[0-9]+$/.test(t)) {
            if (18 < t.length) return "18" + A(18);
            n = 22 - t.length - 4;
            return "" + D("" + t.length, 2) + t + A(n);
          }

          r = parseInt(t, 10);
        }
        var r = 22 - (t = r.toString(16)).length - 4;
        return "" + D("" + t.length, 2) + t + A(r);
      }(n) + ("string" == typeof t ? A(4) : D(t.toString(16), 4));

      return "00-" + t + "-" + t.substr(0, 16) + "-" + r;
    }

    function U() {
      var n = function () {
        for (var n = new Array(16), t = 0, r = 0; r < 16; r++) {
          if (0 == (3 & r)) {
            t = 4294967296 * Math.random();
          }

          n[r] = t >>> ((3 & r) << 3) & 255;
        }

        return n;
      }();

      n[6] = 15 & n[6] | 64;
      n[8] = 63 & n[8] | 128;
      return function (n) {
        for (var t = [], r = 0; r < 256; ++r) t[r] = (r + 256).toString(16).substr(1);

        var e = 0,
            o = t;
        return [o[n[e++]], o[n[e++]], o[n[e++]], o[n[e++]], "-", o[n[e++]], o[n[e++]], "-", o[n[e++]], o[n[e++]], "-", o[n[e++]], o[n[e++]], "-", o[n[e++]], o[n[e++]], o[n[e++]], o[n[e++]], o[n[+e]], o[n[15]]].join("");
      }(n);
    }

    var X = .1,
        z = ["/log/sentry/", "/monitor_browser/collect"],
        G = 8e3,
        $ = 4e3;
    U();

    function W(t) {
      return function (n) {
        return t === n;
      };
    }

    var V = U(),
        Y = function (n) {
      return n;
    },
        K = function (e) {
      function o() {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

        var r = e.apply(undefined, a([], L(n), true));
        o.returns = r;
        o.resolved = false;

        if (o.subs) {
          o.subs.forEach(function (n) {
            return n();
          });
        }

        return r;
      }

      o.then = Q(o).then;
      return o;
    },
        Q = function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];

      function u() {
        return t.every(function (n) {
          return n.resolved;
        });
      }

      return Object.defineProperty({
        then: function (r) {
          function e() {
            return n.apply(undefined, a([], L(t.map(function (n) {
              return n.returns;
            })), true));
          }

          var o,
              i,
              n = K(function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

            return i ? o : (i = false, o = r.apply(undefined, a([], L(n), true)));
          });
          if (u()) setTimeout(e);else t.forEach(function (n) {
            function t() {
              return u() && e();
            }

            if (n.subs) n.subs.push(t);else n.subs = [t];
          });
          return Q(n);
        }
      }, "resolved", {
        get: u
      });
    };

    function Z(n) {
      try {
        for (var t, r = n, e = [], o = 0, i = 0, u = " > ".length; r && o++ < 5 && !("html" === (t = function (n) {
          var t,
              r,
              e,
              o,
              i = n,
              u = [];
          if (!i || !i.tagName) return "";
          u.push(i.tagName.toLowerCase());

          if (i.id) {
            u.push("#" + i.id);
          }

          n = i.className;
          if (n && b(n)) for (t = n.split(/\s+/), o = 0; o < t.length; o++) u.push("." + t[o]);
          var c = ["type", "name", "title", "alt"];

          for (o = 0; o < c.length; o++) {
            r = c[o];

            if (e = i.getAttribute(r)) {
              u.push("[" + r + '="' + e + '"]');
            }
          }

          return u.join("");
        }(r)) || 1 < o && 80 <= i + e.length * u + t.length);) {
          e.push(t);
          i += t.length;
          r = r.parentNode;
        }

        return e.reverse().join(" > ");
      } catch (n) {
        return "<unknown>";
      }
    }

    function nn() {
      try {
        new Headers();
        new Request("");
        new Response();
        return window.fetch;
      } catch (n) {}
    }

    function tn() {
      if (y(window)) return window;
    }

    function rn() {
      if (y(document)) return document;
    }

    function en() {
      if (tn() && y(window.performance)) return window.performance;
    }

    function on() {
      if (w(XMLHttpRequest)) return XMLHttpRequest;
    }

    function un() {
      if (tn() && w(window.MutationObserver)) return window.MutationObserver;
    }

    function cn() {
      if (tn() && w(window.PerformanceObserver)) return window.PerformanceObserver;
    }

    function fn(n, t, r) {
      var e = n.commonParams,
          o = n.ajaxMonitorOptions,
          e = (n = e || {}).bid,
          n = n.web_id,
          o = (o || {}).sampleHitTrace,
          t = (t = t, r = p(r = r), t = p(t), r.protocol === t.protocol && r.host === t.host);
      return e && n && o && t;
    }

    var an = function (i, u, c) {
      return function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

        if (!i) return j;
        var r = i[u],
            e = c.apply(undefined, a([r], L(n), true)),
            o = e;

        if (w(o)) {
          o = function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];

            try {
              return e.apply(this, t);
            } catch (n) {
              return w(r) && r.apply(this, t);
            }
          };
        }

        i[u] = o;
        return function (n) {
          if (!(n && o !== i[u])) {
            i[u] = r;
          }
        };
      };
    };

    function vn(n, t) {
      return n instanceof t;
    }

    function sn(n, t) {
      return n instanceof t;
    }

    function ln(n) {
      return null !== (n = (n = n.ajaxMonitorOptions)?.errorRequestCollect) && undefined !== n && n;
    }

    var dn = function (n) {
      function t() {
        return Object.keys(r).forEach(function (n) {
          return !(n in e) && Object.defineProperty(e, n, {
            get: function () {
              return r[n];
            }
          });
        });
      }

      var r = n,
          e = {};
      t();
      return [e, function (n) {
        r = _({}, r, n);
        t();
      }];
    },
        hn = function (n, t, r, e) {
      if (undefined === t) {
        t = {};
      }

      if (undefined === e) {
        e = [];
      }

      try {
        var o = n.apply(undefined, a([], L(e), true));
        return o && o(t, r) || [];
      } catch (n) {
        return [];
      }
    },
        pn = function (n, t) {
      var r = n && new n(t);
      return [function (n, t) {
        if (r && n) {
          r.observe(n, t);
        }
      }, function () {
        return r && r.disconnect();
      }];
    },
        mn = function (r, o, t, i) {
      var e = r && new r(function (n, e) {
        if (n.getEntries) n.getEntries().forEach(function (n, t, r) {
          return o(n, t, r, e);
        });else if (i) {
          i();
        }

        if (t) {
          e.disconnect();
        }
      });
      return [function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];

        if (!r || !e) return i && i();

        try {
          t.forEach(function (n) {
            return -1 < r.supportedEntryTypes.indexOf(n) ? e.observe({
              type: n,
              buffered: false
            }) : void (i && i());
          });
        } catch (n) {
          try {
            e.observe({
              entryTypes: t
            });
          } catch (n) {
            if (i) {
              i();
            }
          }
        }
      }, function () {
        return e && e.disconnect();
      }];
    },
        yn = function (r) {
      var n = r && r.timing || undefined;
      return [n, function () {
        return r && r.now ? r.now() : (Date.now ? Date.now() : +new Date()) - (n && n.navigationStart || 0);
      }, function (n) {
        var t = (r || {}).getEntriesByType;
        return w(t) && t.call(r, n) || [];
      }, function () {
        var n = (r || {}).clearResourceTimings;

        if (w(n)) {
          n.call(r);
        }
      }, function (n) {
        var t = (r || {}).getEntriesByName;
        return w(t) && t.call(r, n) || [];
      }];
    },
        wn = function (n) {
      var t,
          r = window.requestAnimationFrame,
          e = window.cancelAnimationFrame,
          o = !w(r) || n && document && document.hidden ? function (n) {
        n(0);
        return 0;
      } : r,
          i = w(e) ? e : j;
      return [function (n) {
        if (t) {
          i(t);
        }

        t = o(n);
      }, o, i];
    };

    function bn(n, t) {
      if (undefined === t) {
        t = en();
      }

      return (0, L(yn(t), 5)[4])(n).pop();
    }

    function _n(n, e) {
      if (undefined === n) {
        n = on();
      }

      if (undefined === e) {
        e = null === location || undefined === location ? undefined : location.href;
      }

      var o = n && n.prototype;
      if (o) return function (n, t) {
        var r = L(dn(n), 2),
            n = r[0],
            r = r[1];
        an(o, "open", xn)();
        an(o, "send", Tn)(n, t, e || "");
        an(o, "setRequestHeader", On)();
        return [r];
      };
    }

    function gn(n, t, r) {
      var e = "",
          e = vn(n, r) ? n.url : n;
      return e = !(t = undefined === t ? true : t) ? b(e) ? e.split("?")[0] : e : e;
    }

    var Mn = function (n, t, r, e) {
      var o = n._method,
          i = n._requestHeaders,
          u = n._url,
          c = n._start,
          f = n._data,
          o = {
        ev_type: "ajax",
        ax_status: (n.status || 0).toString(),
        ax_type: o,
        ax_request_header: O(i || []),
        ax_domain: "",
        ax_duration: 0,
        ax_path: "",
        ax_protocol: "",
        ax_response_header: "",
        ax_size: 0,
        ax_url: "",
        ax_href: ""
      };

      if ("function" == typeof n.getAllResponseHeaders) {
        o.ax_response_header = function (t) {
          if (b(t)) {
            var n = t.split("\r\n"),
                r = [];
            n.forEach(function (n, t) {
              if (n && w(n.split)) {
                n = n.split(": ");

                if (!m(n[0], n[1])) {
                  r.push([n[0], n[1]]);
                }
              }
            });
            return O(r);
          }

          return y(t) ? O(Object.keys(t).filter(function (n) {
            return !m(n, t[n]);
          }).map(function (n) {
            return [n, t[n]];
          })) : t;
        }(n.getAllResponseHeaders());
      }

      if (!!fn(t, u, e)) {
        if (r = r || n.getResponseHeader(I)) {
          o.trace_id = r;
          o.trace_host = n.getResponseHeader(C) || undefined;
          o.log_id = n.getResponseHeader(q) || undefined;
        }
      }

      o.ax_duration = Date.now() - c;

      if (200 === n.status) {
        o.ax_size = function (n) {
          if ("" === n.responseType || "text" === n.responseType) return x(n.responseText);
          if (n.response) return x(n.response);

          try {
            return x(n.responseText);
          } catch (n) {
            return 0;
          }
        }(n);
      }

      (o = H(H({}, o), E(u))).resource_timing = bn(o.ax_href);
      n = o.ax_status;

      if (ln(t) && "2" !== n[0] && "3" !== n[0]) {
        o.ax_request = {
          body: f ? "" + f : undefined,
          search: p(u).search,
          content_type: i && (null === (i = i.find(function (n) {
            return "content-type" === n[0].toLowerCase();
          })) || undefined === i ? undefined : i[1])
        };
      }

      return o;
    },
        jn = "AjaxMonitor",
        xn = function (o) {
      return function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

        var r = L(n, 2),
            e = r[0],
            r = r[1];
        this._url = r || "";
        this._method = e && e.toLowerCase() || "";
        return o.apply(this, n);
      };
    },
        On = function (r) {
      return function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

        this._requestHeaders = this._requestHeaders || [];

        this._requestHeaders.push(n);

        return r && r.apply(this, n);
      };
    },
        Tn = function (o, i, u, f) {
      var a = null;
      return function () {
        for (var n, t, c, r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];

        if (fn(i, this._url, f)) {
          n = (t = i.commonParams || {}).bid;
          t = t.web_id;

          if (n && t) {
            a = J(t, n);
            this.setRequestHeader(I, a);
          }
        }

        an(c = this, "onreadystatechange", function (r, e, o, i, u) {
          return function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

            if (4 === this.readyState && i) {
              i({
                name: jn,
                type: "get",
                event: Mn(c, e, o, u)
              });
            }

            return r && r.apply(this, n);
          };
        })(i, a, u, f);
        this._start = Date.now();
        this._data = null == r ? undefined : r[0];
        return o.apply(this, r);
      };
    };

    function En(n, t) {
      if (!n) return "";
      var r = [];
      if (sn(n, t)) n.forEach(function (n, t) {
        r.push([t, n]);
      });else if (c(n)) r.push.apply(r, a([], L(n), true));else r.push.apply(r, a([], L(Object.entries(n)), true));
      return O(r);
    }

    function Sn(n, t, r, e, o, i) {
      var u = t.ax_status;

      if (ln(n) && "2" !== u[0] && "3" !== u[0]) {
        u = gn(r, false, o);
        t.ax_request = {
          body: null === (t = e, t = vn(r = r, o) ? r.body : null == t ? undefined : t.body) || undefined === t ? undefined : t.toString(),
          search: p(u).search,
          content_type: function (n, t, r) {
            if (n) {
              if (sn(n, r)) return n.get(t) || undefined;

              if (c(n)) {
                r = n.find(function (n) {
                  return t === n[0];
                });
                return null == r ? undefined : r[1];
              }

              return n[t];
            }
          }(e.headers, "Content-Type", i)
        };
      }
    }

    function Pn(e, o, i, u) {
      if (undefined === e && (e = nn() && tn()), undefined === o && (o = window.Headers), undefined === i && (i = window.Request), undefined === u && (u = null === location || undefined === location ? undefined : location.href), e && o && i) return function (n, t) {
        var r = L(dn(n), 2),
            n = r[0],
            r = r[1];
        an(e, "fetch", Fn)(n, t, o, i, u || "");
        return [r];
      };
    }

    function kn(t) {
      function r(n) {
        if (!(n < o || !e)) {
          u();
          i = window.setTimeout(e, n - t());
          o = n;
        }
      }

      var e,
          o = -1 / 0,
          i = undefined,
          u = function () {
        return window.clearTimeout(i);
      };

      return [function (n, t) {
        e = n;
        r(t);
      }, function () {
        u();
        e = undefined;
      }, r];
    }

    function Rn(n, u) {
      var c = ["img", "script", "iframe", "link", "audio", "video", "source"],
          t = (n = L(pn(n, function (n) {
        var t, r;

        try {
          for (var e = T(n), o = e.next(); !o.done; o = e.next()) {
            var i = o.value;

            if ("childList" === i.type && function n(t, r) {
              var e, o;

              try {
                for (var i = T(t), u = i.next(); !u.done; u = i.next()) {
                  var c = u.value;
                  if (l(r, c.nodeName.toLowerCase()) || c.children && n(c.children, r)) return 1;
                }
              } catch (n) {
                e = {
                  error: n
                };
              } finally {
                try {
                  if (u && !u.done && (o = i.return)) {
                    o.call(i);
                  }
                } finally {
                  if (e) throw e.error;
                }
              }
            }(i.addedNodes, c) || "attributes" === i.type && l(c, i.target.nodeName.toLowerCase())) {
              u(i);
            }
          }
        } catch (n) {
          t = {
            error: n
          };
        } finally {
          try {
            if (o && !o.done && (r = e.return)) {
              r.call(e);
            }
          } finally {
            if (t) throw t.error;
          }
        }
      }), 2))[0];
      return [function () {
        return t(document, {
          attributes: false,
          childList: false,
          subtree: false,
          attributeFilter: ["href", "src"]
        });
      }, n[1]];
    }

    function Dn(n) {
      var n = (t = n || {}).domContentLoadedEventEnd,
          t = t.navigationStart;
      return n ? n - (undefined === t ? 0 : t) : null;
    }

    function An(r) {
      return function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

        this._method = n[0];
        return r.apply(this, n);
      };
    }

    function In(e, o, i) {
      var u = 0;
      return function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

        if ("GET" !== this._method) return e.apply(this, n);
        var r = u += 2;
        o(r, Date.now());
        an(this, "onreadystatechange", function (t) {
          return function (n) {
            if (t) {
              t.call(this, n);
            }

            if (4 === this.readyState) {
              i(r);
            }
          };
        })();
        return e.apply(this, n);
      };
    }

    function Cn(i, u, c) {
      var f = 1;
      return function () {
        for (var n, o = [], t = 0; t < arguments.length; t++) o[t] = arguments[t];

        return "GET" !== ((n = o[0])?.method || (n = o[1])?.method || "GET") ? i.apply(undefined, a([], L(o), true)) : new Promise(function (t, r) {
          var e = f += 2;
          u(e, Date.now());
          i.apply(undefined, a([], L(o), true)).then(function (n) {
            c(e);
            t(n);
          }, function (n) {
            c(e, n);
            r(n);
          });
        });
      };
    }

    function Hn(M, j, x, O) {
      return function (n, r, t) {
        var f,
            a,
            e,
            o,
            i,
            u,
            c,
            v,
            s = L([f = [], a = [], function (u, c) {
          return function (n) {
            var t = n.startTime,
                r = n.duration,
                e = n.fetchStart,
                o = n.responseEnd,
                i = n.entryType;

            if ("longtask" === i) {
              f.push({
                start: t,
                end: t + r
              });

              if (u) {
                u(n);
              }
            } else if ("resource" === i) {
              a.push({
                start: e,
                end: o
              });

              if (c) {
                c(n);
              }
            }
          };
        }], 3),
            l = s[0],
            d = s[1],
            h = s[2],
            p = L((e = M, o = j, p = L([i = {}, function (n, t) {
          return i[n] = t;
        }, function (n) {
          return delete i[n];
        }], 3), w = p[0], s = p[1], p = p[2], u = o && an(o.prototype, "open", An)(), c = o && an(o.prototype, "send", In)(s, p), v = e && an(e, "fetch", Cn)(s, p), [w, function () {
          if (u) {
            u(false);
          }

          if (c) {
            c(false);
          }

          if (v) {
            v(false);
          }
        }]), 2),
            m = p[0],
            y = p[1],
            w = L(Rn(O, function () {
          return r(t() + 5e3);
        }) || [], 2),
            p = w[0],
            b = w[1];

        if (p) {
          p();
        }

        function _() {
          return function (n, t, r) {
            var e, o, i, u;
            if (2 < n.length) return r();
            var c = [];

            try {
              for (var f = T(t), a = f.next(); !a.done; a = f.next()) {
                var v = a.value;
                c.push([v.start, 0], [v.end, 1]);
              }
            } catch (n) {
              e = {
                error: n
              };
            } finally {
              try {
                if (a && !a.done && (o = f.return)) {
                  o.call(f);
                }
              } finally {
                if (e) throw e.error;
              }
            }

            try {
              for (var s = T(n), l = s.next(); !l.done; l = s.next()) {
                var d = l.value;
                c.push([d, 0]);
              }
            } catch (n) {
              i = {
                error: n
              };
            } finally {
              try {
                if (l && !l.done && (u = s.return)) {
                  u.call(s);
                }
              } finally {
                if (i) throw i.error;
              }
            }

            c.sort(function (n, t) {
              return n[0] - t[0];
            });

            for (var h = n.length, p = c.length - 1; 0 <= p; p--) {
              var m = L(c[p], 2),
                  y = m[0];

              switch (m[1]) {
                case 0:
                  h--;
                  break;

                case 1:
                  if (2 < ++h) return y;
              }
            }

            return 0;
          }(function (n) {
            for (var t = Object.keys(n), r = [], e = 0; e < t.length; e++) {
              var o = n[t[e]];

              if ("number" == typeof o) {
                r.push(o);
              }
            }

            return r;
          }(m), d, t);
        }

        var w = L(mn(x, h(function (n) {
          var t = n.startTime,
              n = n.duration;
          return r(t + n + 5e3);
        }, function () {
          return r(_() + 5e3);
        }), true, function () {
          return l.notSupport = false;
        }), 2),
            p = w[0],
            g = w[1];
        p("longtask", "resource");
        n.forEach(h());
        return [l, function () {
          y();
          g();

          if (b) {
            b();
          }
        }, _];
      };
    }

    function Ln(t, n) {
      return (n = n.filter(function (n) {
        return n.name === t;
      })[0]) ? Math.round(n.startTime) : 0;
    }

    function Nn(C) {
      if (undefined === C) {
        C = en();
      }

      return function (n, f) {
        var e = n.prePerformanceObserver,
            t = n.TTIMonitor,
            a = n.renderType,
            r = n.report,
            v = n.fmpMonitor,
            n = n.performanceAuto,
            o = undefined === n || n,
            s = H({}, it),
            i = t || Gn,
            l = 0,
            u = "",
            d = false,
            h = 0,
            p = null,
            n = {
          isAsync: 0,
          prePerformanceObserver: e
        },
            t = L(st(s), 3),
            m = t[0],
            y = t[1],
            w = t[2],
            c = L(yn(C), 2)[1],
            t = L(at(f), 2),
            b = t[0],
            _ = t[1],
            g = ft(),
            M = L(hn(ot), 1)[0],
            j = L(hn(Qn, n), 1)[0],
            x = L(hn(Kn, {
          prePerformanceObserver: e
        }, function (n) {
          n = n.lcp;
          return m({
            lcp: n
          });
        }), 1)[0],
            O = K(function (n) {
          return n.fid;
        }),
            T = L(hn(Wn, 0, O), 1)[0],
            E = K(Y),
            S = L(hn(tt, 0, E), 1)[0],
            P = K(function (n) {
          if (n && 0 < n) return Math.max(Math.round(n - l), 0);
        }),
            n = L(hn(i, n), 4),
            k = n[0],
            R = n[3],
            D = Q(P),
            A = function (n) {
          if (clearTimeout(h), h = 0, f) {
            d = true;
            var t = s.isAsync;
            w(s);
            var r = j().mpfid,
                e = M(),
                o = e && e.event.resources,
                i = L(yn(C), 3),
                u = i[0],
                e = i[2],
                i = ct(u, e),
                u = vt(v, t, a, function () {
              return S().fcp;
            }),
                e = x().lcp;
            m(S());
            m(H(H(H({}, s), i), {
              mpfid: r,
              resources: o,
              has_resource: o ? 1 : 0,
              fmp: u,
              lcp: e
            }));

            if (s.load) {
              m({
                load: s.load
              });
            }

            if (!(t || null !== (e = null == i ? undefined : i.timing) && undefined !== e && e.loadEventEnd || 0 !== (i = null == i ? undefined : i.timing)?.loadEventEnd)) {
              m({
                bounced: false
              });
            }

            var c = function () {
              p = null;

              _(t, y());
            };

            if (p = function () {
              m({
                fid: T()
              });
              m(S());

              if (R) {
                m({
                  tti: Math.round(R() - l)
                });
              }

              c();
            }, O.then(function (n) {
              return m({
                fid: n
              });
            }), E.then(m), P.then(function (n) {
              return m({
                tti: n
              });
            }), n) {
              m(S());

              if (x) {
                m(x());
              }

              return c();
            }

            if (k) {
              k(P);
            }

            D.then(function () {
              return setTimeout(c);
            });
          }
        };

        B(function () {
          return o && (h = setTimeout(A, 200));
        });
        F(function () {
          if (o && !b()) {
            A(false);

            if (r) {
              r();
            }
          }
        });

        var I = function () {
          o = true;
          clearTimeout(h);
          h = 0;
        };

        return [function (n) {
          if (undefined === n) {
            n = "";
          }

          if (p) p();else if (!(!h && b())) {
            if (!g()) {
              I();
            }

            A();
            p();
          }
          s.isAsync = 1;
          t = L(st(s), 3);
          m = t[0];
          y = t[1];
          w = t[2];
          d = false;
          l = Math.round(c());
          u = n;
          var t = {
            isAsync: 1,
            prePerformanceObserver: e
          },
              n = L(hn(ot, t), 1);
          M = n[0];
          n = L(hn(Qn, t), 1);
          j = n[0];
          t = L(hn(i, H(H({}, t), {
            minValue: l
          })), 4);
          k = t[0];
          R = t[3];
          P = K(function (n) {
            if (n && 0 < n) return Math.max(Math.round(n - l), 0);
          });
          var r = {
            fp: 0,
            fcp: 0
          };

          S = function () {
            return r;
          };

          (E = K(Y))(r);
          D = Q(P);
          v = hn(zn);
        }, function () {
          if (d && g() && !h) {
            if (s.isAsync) {
              s.load = Math.round(c() - l);
              s.route_from = u;
            }

            h = setTimeout(A, 200);
          }
        }, function () {
          if (!D.resolved) {
            A(!N());
          }

          return y();
        }, I];
      };
    }

    var Bn = "FetchMonitor",
        Fn = function (i, h, u, p, m, y) {
      return function (f, a) {
        if (undefined === a) {
          a = {};
        }

        var v = gn(f, undefined, m);
        if (!function (n) {
          if (b(n)) {
            var t = L(n.split(":"), 2),
                n = t[0];
            return !t[1] || "http" === n || "https" === n;
          }
        }(v)) return i(f, a);
        var n,
            t,
            r,
            e = h.commonParams || {},
            o = e.bid,
            e = e.web_id,
            s = Date.now(),
            l = {
          ev_type: "ajax",
          ax_size: 0
        };

        try {
          if (fn(h, v, y)) {
            if (!a.headers) {
              a.headers = [];
            }

            if (o && e) {
              l.trace_id = J(o, e);
              n = a.headers;
              t = I;
              r = l.trace_id;
              if (sn(n, p)) n.append(t, r);else if (c(n)) n.push([t, r]);else n[t] = r;
            }
          }
        } catch (n) {}

        l.ax_type = function (n, t, r) {
          t = t && t.method || "get";
          return (t = vn(n, r) ? n.method || t : t).toLowerCase();
        }(f, a, m);

        var l = H(H({}, l), E(gn(f, false, m))),
            d = function () {
          l.resource_timing = bn(l.ax_href);
          Sn(h, l, f, a, m, p);

          if (null != u) {
            u({
              name: Bn,
              type: "get",
              event: l
            });
          }
        };

        return i(f, a).then(function (r) {
          var n, t, e, o, i, u;

          try {
            l.ax_status = (r.status || 0).toString();
            l.ax_duration = Date.now() - s;
            l.ax_response_header = En(r.headers, p);
            l.ax_request_header = En((t = f, e = a, i = m, u = new (o = p)(), vn(t, i) && t.headers && w(t.headers.forEach) && t.headers.forEach(function (n, t) {
              u.append(t, n);
            }), e.headers && new o(e.headers).forEach(function (n, t) {
              u.append(t, n);
            }), u), p);

            var c = function (n, t) {
              if (r.headers.has(n)) {
                l[t] = r.headers.get(n) || undefined;
              }
            };

            if (w((n = r.headers)?.has)) {
              if (r.headers.has("content-length")) {
                l.ax_size = Number(r.headers.get("content-length")) || 0;
              }

              if (fn(h, v, y)) {
                c(C, "trace_host");
                c(I, "trace_id");
                c(q, "log_id");
              }
            }

            setTimeout(function () {
              d();
            }, 100);
          } catch (n) {}

          return r;
        }, function (n) {
          try {
            l.ax_status = "0";
            l.ax_duration = Date.now() - s;
            d();
          } catch (n) {}

          return Promise.reject(n);
        });
      };
    },
        qn = ["SCRIPT", "STYLE", "META", "HEAD"],
        Jn = function (n) {
      return {
        name: "FMPMonitor",
        type: "post",
        event: {
          ev_type: "fmp",
          fmp: n
        }
      };
    },
        Un = function (n, r, t, e) {
      if (!n || -1 < e.indexOf(n.tagName)) return 0;
      var o = n.children,
          o = [].slice.call(undefined === o ? [] : o).reduceRight(function (n, t) {
        return n + Un(t, r + 1, 0 < n, e);
      }, 0);

      if (o <= 0 && !t) {
        if (!w(n.getBoundingClientRect)) return 0;
        t = n.getBoundingClientRect() || {};
        n = t.top;
        t = t.height;
        if (n > window.innerHeight || t <= 0) return 0;
      }

      return o + 1 + .5 * r;
    },
        Xn = function (n) {
      var t = L(undefined === n ? [] : n),
          n = t[0],
          t = t.slice(1);
      return t && t.reduce(function (n, t) {
        var r = L(n, 2),
            e = r[0],
            n = r[1],
            r = t.score - e.score;
        return [t, t.time >= e.time && n.rate < r ? {
          time: t.time,
          rate: r
        } : n];
      }, [n, {
        time: null == n ? undefined : n.time,
        rate: 0
      }])[1].time || 0;
    },
        zn = function (v, s, l) {
      var n;

      if (undefined === v) {
        v = rn();
      }

      if (undefined === s) {
        s = un();
      }

      if (undefined === l) {
        l = (n = function () {
          var n = en();
          if (n && y(n.timing)) return n.timing;
        }())?.navigationStart;
      }

      return function (n, r) {
        function t() {
          return o.push({
            time: Date.now() - e,
            score: Un(v && v.body, 1, true, i)
          });
        }

        var e = Date.now(),
            o = [],
            i = qn.concat(n.ignoreTags || []),
            u = L(wn(false), 1)[0],
            c = L(pn(s, function () {
          return u(t);
        }), 2),
            f = c[0],
            a = c[1],
            n = function (n) {
          if (undefined === n) {
            n = 0;
          }

          a();
          var t = Xn(o),
              n = Jn(t ? t + n : 0);

          if (r) {
            r(n);
          }

          return n;
        },
            c = e - (l || 0);

        f(v, {
          subtree: false,
          childList: false
        });
        return [a, n, n.bind(null, c)];
      };
    },
        Gn = function (b, _, g, M, j) {
      if (undefined === b) {
        b = on();
      }

      if (undefined === _) {
        _ = nn() && tn();
      }

      if (undefined === g) {
        g = cn();
      }

      if (undefined === M) {
        M = un();
      }

      if (undefined === j) {
        j = en();
      }

      return function (n, t, r) {
        function e() {
          d();
          m();

          if (r) {
            r();
          }

          if (f) {
            f.disconnect();
          }

          c.length = 0;
        }

        var o = n.prePerformanceObserver,
            i = n.isAsync,
            i = undefined === i ? 0 : i,
            n = n.minValue,
            u = undefined === n ? null : n,
            n = o || {},
            o = n.precollect,
            c = undefined === o ? [] : o,
            f = n.observer,
            n = L(yn(j), 5),
            a = n[0],
            v = n[1],
            s = n[4],
            n = L(kn(v), 3),
            l = n[0],
            d = n[1],
            h = n[2],
            i = L(Hn(_, b, g, M)(i ? [] : c, h, v), 3),
            p = i[0],
            m = i[1],
            y = i[2],
            w = function (n) {
          var t = s("first-contentful-paint")[0],
              t = function (n, t, r, e, o) {
            if (e - r < 5e3) return null;
            o = 0 === o.length ? n : o[o.length - 1].end;
            return e - o < 5e3 ? null : Math.max(o, t);
          }((t ? t.startTime : Dn(a)) || 0, u || Dn(a) || 0, y(), v() + (n ? 0 : 5e3), p);

          return n ? t ? (e(), void n(Math.round(t))) : h(v() + 1e3) : (e(), t);
        };

        return [function (n) {
          if (p.notSupport) return n();
          var t = p[p.length - 1];
          l(function () {
            return w(n);
          }, Math.max(y() + 5e3, t ? t.end : 0));
        }, p, h, function () {
          return !p.notSupport && w() || 0;
        }];
      };
    },
        $n = "first-input",
        Wn = function (t, o) {
      if (undefined === t) {
        t = cn();
      }

      if (undefined === o) {
        o = en();
      }

      return function (n, r) {
        var e = L(yn(o), 3)[2];
        (0, L(mn(t, function (n) {
          var t = n.processingStart,
              n = n.startTime;
          return r && r({
            name: "FIDMonitor",
            fid: Math.round(t - n)
          });
        }, false), 1)[0])($n);
        return [function () {
          var n = e($n)[0] || {},
              t = n.processingStart,
              n = n.startTime;
          return n ? Math.round(t - n) : 0;
        }];
      };
    },
        Vn = "largest-contentful-paint",
        Yn = ["keydown", "click"],
        Kn = function (c) {
      if (undefined === c) {
        c = cn();
      }

      return function (n, t) {
        var r = n.prePerformanceObserver,
            e = 0;
        (r.precollect || []).forEach(function (n) {
          var t = n.entryType,
              n = n.startTime;

          if (t === Vn) {
            e = n;
          }
        });
        var n = L(mn(c, function (n) {
          n = n.startTime;
          e = n;
        }), 2),
            r = n[0],
            o = n[1];
        r(Vn);

        var i = function () {
          o();
          Yn.forEach(function (n) {
            window.removeEventListener(n, u, false);
          });
        },
            u = function () {
          if (t) {
            t({
              name: "LCPMonitor",
              lcp: e
            });
          }

          i();
        };

        Yn.forEach(function (n) {
          window.addEventListener(n, u, false);
        });
        F(i);
        return [function () {
          return {
            lcp: e
          };
        }];
      };
    },
        Qn = function (u) {
      if (undefined === u) {
        u = cn();
      }

      return function (n) {
        var t = [],
            r = n.isAsync,
            e = n.prePerformanceObserver,
            o = L(mn(u, function (n) {
          return t.push(n);
        }), 2),
            n = o[0],
            i = o[1];

        if (!r && e) {
          (e.precollect || []).forEach(function (n) {
            if ("longtask" === n.entryType) {
              t.push(n);
            }
          });
        }

        n("longtask");
        return [function () {
          i();
          var n = t.reduce(function (n, t) {
            t = t.duration;
            return n < t ? t : n;
          }, 0);
          return {
            name: "MPFIDMonitor",
            mpfid: Math.round(n)
          };
        }];
      };
    },
        Zn = "first-contentful-paint",
        nt = "first-paint",
        tt = function (o, c) {
      if (undefined === o) {
        o = cn();
      }

      if (undefined === c) {
        c = en();
      }

      return function (n, i) {
        function t() {
          var n = r("paint");
          return {
            fp: Ln(nt, n),
            fcp: Ln(Zn, n)
          };
        }

        var u = {},
            r = L(yn(c), 3)[2],
            e = t();

        if (e.fcp && e.fp) {
          if (i) {
            i(e);
          }
        } else (0, L(mn(o, function (n, t, r, e) {
          var o = n.name,
              n = n.startTime;
          u[o] = Math.round(n);

          if (u[nt] && u[Zn]) {
            if (i) {
              i({
                fp: u[nt],
                fcp: u[Zn]
              });
            }

            e.disconnect();
          }
        }, true, function () {
          return i && i(t());
        }), 1)[0])("paint");

        return [t];
      };
    },
        rt = "ResourcePerformanceMonitor",
        et = function (n, t) {
      var r = [];
      if (n.forEach(function (n) {
        if (!(w(t) && t(n))) {
          r.push(n);
        }
      }), r.length) return {
        name: rt,
        type: "post",
        event: {
          ev_type: "resource_performance",
          resources: r
        }
      };
    },
        ot = function (f, a) {
      if (undefined === f) {
        f = en();
      }

      if (undefined === a) {
        a = cn();
      }

      return function (n, t) {
        function e(n) {
          if ((n = et(n, i)) && t) {
            t(n);
          }
        }

        var r = (n = undefined === n ? {} : n).isAsync,
            o = undefined === r ? 0 : r,
            r = n.observe,
            r = undefined !== r && r,
            i = n.checkIgnore,
            n = L(yn(f), 4),
            u = n[2],
            n = n[3],
            c = function () {
          return u("resource");
        };

        if (o) {
          n();
        }

        if (r) {
          e(c());
          (0, L(mn(a, function (n, t, r) {
            return 0 === t && e(r);
          }), 1)[0])("resource");
        }

        return [function () {
          return et(c());
        }];
      };
    },
        it = {
      ev_type: "perf",
      isAsync: 0,
      dns: 0,
      tcp: 0,
      request: 0,
      response: 0,
      processing: 0,
      blank: 0,
      domready: 0,
      load: 0,
      has_resource: 0,
      domparse: 0,
      resource: 0,
      ttfb: 0,
      redirect: 0,
      tti: 0,
      upload_reason: "sample",
      network_type: "",
      timing: {},
      navigation_timing: {},
      navigation: {},
      resources: []
    },
        ut = "PerformanceMonitor",
        ct = function (n, t) {
      if (n && t) {
        var r = n.domainLookupEnd,
            e = n.domainLookupStart,
            o = n.connectEnd,
            i = n.connectStart,
            u = n.responseEnd,
            c = n.responseStart,
            f = n.requestStart,
            a = n.domComplete,
            v = n.domLoading,
            s = n.domInteractive,
            l = n.navigationStart,
            d = n.loadEventEnd,
            h = n.loadEventStart,
            p = n.secureConnectionStart,
            f = {
          dns: r - e,
          tcp: o - i,
          request: c - f,
          response: u - c,
          processing: a - v,
          blank: u - l,
          domready: s - l,
          load: d - l,
          domparse: s - u,
          resource: h - n.domContentLoadedEventEnd,
          ttfb: c - f,
          redirect: n.redirectEnd - n.redirectStart
        };

        if (p) {
          f.ssl = o - p;
        }

        t = t("navigation")[0];

        if (t || n) {
          f.navigation = t || n;
        }

        if (n) {
          f.timing = n;
        }

        if (t) {
          f.navigation_timing = t;
        }

        return f;
      }
    },
        ft = function () {
      var n = true;
      B(function () {
        return n = false;
      });
      return function () {
        return n;
      };
    },
        at = function (r) {
      var e = true;
      return [function () {
        return e;
      }, function (n, t) {
        if (!n) {
          if (e) return;
          e = false;
        }

        if (r) {
          r(t);
        }
      }];
    },
        vt = function (n, t, r, e) {
      if (!n) return 0;
      var o,
          i = L(n, 3),
          u = i[0],
          n = i[1],
          c = i[2];
      if (u(), t) return n().event.fmp || 0;

      try {
        o = [[W(1), function () {
          return c().event.fmp;
        }], [W(2), function () {
          return e();
        }]];
        return function (n) {
          for (var t = 0; t < o.length;) {
            if (o[t][0](n)) return o[t][1](n);
            t += 1;
          }
        }(r) || 0;
      } catch (n) {
        return 0;
      }
    },
        st = function (n) {
      var t = H({}, n);
      return [function (n) {
        n = (t = n ? H(H({}, t), n) : t).fmp;
        t.fmp = n ? Math.max(Math.round(n), t.fcp || 0) : undefined;
      }, function () {
        return {
          name: ut,
          type: "post",
          event: t
        };
      }, function (n) {
        return t = H({}, n);
      }];
    },
        lt = "StaticErrorMonitor";

    function dt(n, t) {
      var r = t.length;
      if (r) for (var e = r - 1; -1 < e; e--) {
        var o = t[e];
        if (o.name === n) return o;
      }
    }

    function ht(n) {
      n = "link" === (t = n).tagName.toLowerCase() ? "href" : "src";
      return w(t.getAttribute) ? t.getAttribute(n) || "" : t[n] || "";
      var t;
    }

    function pt(o, i, u) {
      if (undefined === o) {
        o = tn();
      }

      if (undefined === i) {
        i = en();
      }

      if (undefined === u) {
        u = null === location || undefined === location ? undefined : location.href;
      }

      return function (n, t) {
        var r = L(yn(i), 3)[2],
            e = function () {
          return r("resource");
        };

        if (o) {
          o.addEventListener("error", function (n) {
            n = mt(e(), n, u || "");

            if (n && t) {
              t(n);
            }
          }, false);
        }

        return [function (n) {
          return mt(e(), n, u || "");
        }];
      };
    }

    var mt = function (n, t, r) {
      t = t || window.event || {};

      try {
        e = t.target || t.srcElement || {};
      } catch (n) {
        return;
      }

      t = e.tagName;

      if (b(t)) {
        var e = ht(e);
        if (e && e !== r) return {
          name: lt,
          type: "get",
          event: function (n, t, r) {
            var e = p(n),
                o = {
              ev_type: "static",
              st_type: t,
              st_src: n,
              st_protocol: e.protocol,
              st_domain: e.hostname,
              st_path: e.pathname
            },
                i = r && dt(e.href, r);
            if (i) o.timing = i;
            return o;
          }(e, t.toLowerCase(), n)
        };
      }
    },
        yt = "StaticSRIErrorMonitor";

    function wt(r, e, o) {
      if (undefined === r && (r = tn()), undefined === e && (e = function () {
        if ("Promise" in window) return Promise;
      }()), undefined === o && (o = nn()), r && o && e) return function (n, t) {
        n = Mt(gt(t, n.onError, e, o), r);
        r.addEventListener("error", n, false);
        return [n];
      };
    }

    function bt(o) {
      if (undefined === o) {
        o = rn();
      }

      return function (n) {
        var t = L(jt(100), 2),
            r = t[0],
            e = t[1],
            t = L(Tt(n.maxBreadcrumbs), 2),
            n = t[0],
            t = t[1],
            t = Ot(t);

        if (o) {
          o.addEventListener("click", r("click", xt(t, "dom")));
          o.addEventListener("keypress", e(xt(t, "dom")));
        }

        return [n];
      };
    }

    function _t(u) {
      if (undefined === u) {
        u = tn();
      }

      return function (n, r) {
        var t = n.getBreadcrumbs,
            e = n.enableCatchGlobalJSError,
            o = undefined === e || e,
            e = n.catchUnhandledRejection,
            e = undefined === e || e,
            n = n.release,
            i = kt(undefined === n ? "" : n, function () {
          return t && t() || [];
        }),
            n = function (t) {
          return function (n) {
            n = t(n);
            n = n && i(n);

            if (n && r) {
              r(n);
            }
          };
        };

        if (u) {
          if (o) {
            u.addEventListener("error", n(St));
          }

          if (e) {
            u.addEventListener("unhandledrejection", n(Pt));
          }
        }

        return [function (n) {
          var t = null;
          return (t = "[object ErrorEvent]" === Object.prototype.toString.call(n) ? St(n) : "[object PromiseRejectionEvent]" === Object.prototype.toString.call(n) ? Pt(n) : n) && i(t);
        }];
      };
    }

    var gt = function (i, t, u, r) {
      return function (o) {
        var n;

        if (w(u.all)) {
          u.all([r(o, {
            cache: "force-cache"
          }).then(function (n) {
            return n.ok ? n : new Response();
          }), (n = o + "?vt=" + Date.now(), r(n, {
            cache: "no-store"
          }).then(function (n) {
            return n.ok ? n : new Response();
          }))]).then(function (n) {
            var n = L(n, 2),
                r = n[0],
                e = n[1];
            if (200 === r.status && 200 === e.status) return u.all([r.text(), e.text()]).then(function (n) {
              var t = n[0] || r.status + "," + e.status;
              return [t.length, n[1].length, t, o];
            });
          }).then(function (n) {
            var t, r, e;

            if (n && i) {
              r = (t = L(n, 3))[0];
              e = t[1];

              if (t[2] && r !== e) {
                i({
                  name: yt,
                  type: "get",
                  event: function (n, t, r, e) {
                    return {
                      ev_type: "static_sri",
                      sri: {
                        error_file_size: n,
                        real_file_size: t,
                        error_file_context: r,
                        static_file_src: e,
                        static_file_url: p(e).href || ""
                      }
                    };
                  }.apply(undefined, a([], L(n), true))
                });
              }
            }
          }).catch(function (n) {
            if (t) {
              t(n);
            }
          });
        }
      };
    },
        Mt = function (e, o) {
      return function (n) {
        var t,
            r = n || o.event || {};

        try {
          t = r.target || r.srcElement || {};
        } catch (r) {
          return;
        }

        if (w((n = t).getAttribute) ? n.getAttribute("integrity") : n.integrity) {
          n = w((n = t).getAttribute) ? n.getAttribute("src") : n.src || n.href || "";
          t = (null === (t = t.tagName) || undefined === t ? undefined : t.toLowerCase()) || "";

          if (n && t && n !== location.href) {
            e(n);
          }
        }
      };
    },
        jt = function (o) {
      function i(t, r) {
        var e;
        return function (n) {
          u = undefined;

          if (n && e !== n) {
            r({
              event: e = n,
              name: t
            });
          }
        };
      }

      var u;
      return [i, function (e) {
        return function (n) {
          var t;

          try {
            t = n.target;
          } catch (n) {
            return;
          }

          var r = t && t.tagName;

          if (r && ("INPUT" === r || "TEXTAREA" === r || t.isContentEditable)) {
            if (!u) {
              i("input", e)(n);
            }

            clearTimeout(u);
            u = window.setTimeout(function () {
              u = undefined;
            }, o);
          }
        };
      }];
    },
        xt = function (t, r) {
      return function (n) {
        if (r) try {
          t(n);
        } catch (n) {}
      };
    },
        Ot = function (r) {
      return function (n) {
        var t;

        try {
          t = n.event.target ? Z(n.event.target) : Z(n.event);
        } catch (n) {
          t = "<unknown>";
        }

        if (0 !== t.length) {
          r({
            category: "ui." + n.name,
            message: t
          });
        }
      };
    },
        Tt = function (t) {
      if (undefined === t) {
        t = 20;
      }

      var r = [];
      return [function () {
        return r;
      }, function (n) {
        n = H(H({}, n), {
          timestamp: new Date().getTime()
        });
        r = 0 <= t ? a(a([], L(r), true), [n], true).slice(-t) : a(a([], L(r), true), [n], true);
      }];
    },
        Et = "JSExceptionMonitor",
        St = function (n) {
      n = n.error;
      if (n) return n;
    },
        Pt = function (n) {
      var t;

      try {
        if ("reason" in n) t = n.reason;else if ("detail" in n && "reason" in n.detail) {
          t = n.detail.reason;
        }
      } catch (n) {}

      if (t) return t;
    },
        kt = function (r, e) {
      return function (n) {
        var t;
        if (function (n) {
          switch (Object.prototype.toString.call(n)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMError]":
            case "[object DOMException]":
              return 1;

            default:
              return n instanceof Error;
          }
        }(n)) t = n;else {
          if (o(n) || i(n)) try {
            t = {
              message: JSON.stringify(n)
            };
          } catch (n) {}

          if (b(n)) {
            t = {
              message: n
            };
          }
        }

        if (t) {
          n = {
            ev_type: "js_exception",
            exception: {
              message: (n = t).message,
              name: n.name,
              fileName: n.fileName,
              lineNumber: n.lineNumber,
              columnNumber: n.columnNumber,
              stack: n.stack,
              stacktrace: n.stacktrace,
              framesToPop: n.framesToPop
            },
            release: r,
            breadcrumbs: e()
          };
          return {
            name: Et,
            type: "post",
            event: n
          };
        }
      };
    },
        Rt = (Dt.prototype.sendEvent = function (n) {
      n = this.getEventToBeSent(n);

      if (n) {
        this.idleSendEvent(n);
      }
    }, Dt.prototype.getEventToBeSent = function (n) {
      n = this._modifyEvent(n);
      if (this._shouldSend(n)) return n;
    }, Dt.prototype._modifyEvent = function (n) {
      return n;
    }, Dt.prototype._shouldSend = function (n) {
      return false;
    }, Dt.prototype._send = function (n) {}, Dt.prototype.idleSendEvent = function (n) {
      this._send(n);
    }, Dt);

    function Dt() {}

    var At,
        It = (n(Ct, At = Rt), Ct.prototype.send = function () {
      clearTimeout(this.n);
      this.t();
    }, Ct.prototype.t = function () {
      var n, t;

      if (null !== (n = this.e) && undefined !== n && n.length && null !== (t = this.transport) && undefined !== t && t.batch) {
        this.transport.batch(this.e);
        this.e.length = 0;
      }
    }, Ct.prototype.o = function (n, t, r) {
      if (this.transport) {
        if (this.transport.supportBatch) {
          if (r) {
            t.serviceType = r;
          }

          return this.i(t);
        }

        this.transport[n](t, r);
      }
    }, Ct.prototype.i = function (n) {
      var t = this;
      if (clearTimeout(this.n), this.e.push(n), this.e.length >= this.u) return this.t();
      this.n = setTimeout(function () {
        t.t();
      }, this.c);
    }, Ct.prototype.f = function () {
      window.addEventListener("unload", this.t.bind(this));
    }, Ct);

    function Ct(n) {
      var t = At.call(this) || this;
      t.e = [];
      t.f();
      t.c = n.commonParams.batchReportWait || 1e3;
      t.u = n.commonParams.maxBatchReportLength || 10;
      return t;
    }

    function Ht(n, t) {
      return y(n) ? y(t) ? H(H({}, n), {
        overrides: t
      }) : n : {};
    }

    function Lt(n, t) {
      var r, e;

      if (y(n)) {
        try {
          for (var o = T(Object.keys(n)), i = o.next(); !i.done; i = o.next()) if (typeof n[i.value] !== t) return;
        } catch (n) {
          r = {
            error: n
          };
        } finally {
          try {
            if (i && !i.done && (e = o.return)) {
              e.call(o);
            }
          } finally {
            if (r) throw r.error;
          }
        }

        return 1;
      }
    }

    function Nt(n) {
      var t = n.base,
          n = n.info;
      return {
        jsBase: t,
        jsInfo: null != n ? n : {},
        serviceType: n.ev_type
      };
    }

    var Bt = "CustomMonitor";

    function Ft(n) {
      if (function (n) {
        if (null != n && "object" == typeof n && "string" == typeof n.eventName && "" !== n.eventName) {
          var t = n.metrics,
              r = n.category,
              n = n.timing;
          return !t || Lt(t, "number") ? (!r || Lt(r, "string")) && !(n && !Lt(n, "number")) : undefined;
        }
      }(n)) return {
        name: Bt,
        event: {
          ev_type: "custom",
          data: n
        },
        type: "post"
      };
    }

    var qt = {
      supportBatch: true,
      terminatedPreCollect: j,
      config: j,
      cover: j,
      accumulate: j,
      reportDirectly: j,
      batch: j,
      average: j,
      customReport: j
    },
        Jt = function (n) {
      var e = this;

      this.terminatedPreCollect = function (n) {
        var t, r;

        if (null !== (r = (t = e.log).terminatedPreCollect) && undefined !== r) {
          r.call(t, n);
        }
      };

      this.config = function (n) {
        var t, r;

        if (null !== (r = (t = e.log).config) && undefined !== r) {
          r.call(t, n);
        }
      };

      this.cover = function (n, t) {
        e.log.cover(n, t);
      };

      this.accumulate = function (n, t) {
        e.log.accumulate(n, t);
      };

      this.reportDirectly = function (n, t) {
        e.log.reportDirectly(n, t);
      };

      this.batch = function (n) {
        var t, r;

        if (null !== (r = (t = e.log).batch) && undefined !== r) {
          r.call(t, n);
        }
      };

      this.average = function (n, t) {
        e.log.average(n, t);
      };

      this.customReport = function (n) {
        var t, r;

        if (null !== (r = (t = e.log).customReport) && undefined !== r) {
          r.call(t, n);
        }
      };

      this.log = null !== (n = n.transport) && undefined !== n ? n : qt;
      this.supportBatch = w(this.log.batch);
    };

    var Ut,
        Xt = ((rr = {})[Et] = ["exception.name", "exception.message", "exception.stack"], rr[lt] = ["st_src", "st_type", "st_domain", "st_path"], rr[Bn] = ["ax_url", "ax_status", "ax_type"], rr[jn] = ["ax_url", "ax_status", "ax_type"], rr),
        zt = function (n, t) {
      var r,
          e,
          t = t.split("."),
          o = n;

      try {
        for (var i = T(t), u = i.next(); !u.done; u = i.next()) {
          var c = u.value;
          if (null == o) return;
          o = o[c];
        }
      } catch (n) {
        r = {
          error: n
        };
      } finally {
        try {
          if (u && !u.done && (e = i.return)) {
            e.call(i);
          }
        } finally {
          if (r) throw r.error;
        }
      }

      return o;
    },
        Gt = (n($t, Ut = It), $t.prototype._shouldSend = function (n) {
      if (!y(n) || !n.event) return true;
      var t = this.options.monitors;

      if (n.name === jn || n.name === Bn) {
        var r = S(z || []);
        if (r && r.test(n.event.ax_url)) return true;
      }

      return n.name === jn || n.name === Bn ? function (n) {
        var r = n.sendParams,
            t = n.ajaxMonitor;

        if (c(n = t.whitelistUrls) && 0 < n.length) {
          var e = S(t.whitelistUrls || []);
          return e && e.test(r.event.ax_url) ? false : true;
        }

        if ((e = S(t.ignore || [])) && e.test(r.event.ax_url)) return true;
        if ((e = t.statusCodeSample) && u(e, r.event.ax_status)) return R(e[r.event.ax_status]);

        if (t = t.requestUrlSample) {
          var o = true,
              i = true;
          if (t.forEach(function (n) {
            var t;

            if (!o) {
              if (null != (t = S([n.url])) && t.test(r.event.ax_url)) {
                o = false;
                i = R(n.sampleRate);
              }
            }
          }), o) return i;
        }

        return false;
      }({
        sendParams: n,
        ajaxMonitor: t.AjaxMonitor
      }) : n.name === ut || n.name !== lt || (n = {
        sendParams: n,
        staticErrorMonitor: t.StaticErrorMonitor
      }, t = n.sendParams, !(n = S(n.staticErrorMonitor.ignore || [])) || !n.test(t.event.st_src));
    }, $t.prototype._modifyEvent = function (n) {
      if (!n || !y(n)) return {};
      var t,
          r,
          e,
          o = this.options.monitors;
      if (n.name !== ut) return n;
      var i = (i = {
        sendParams: n,
        performanceMonitor: o.PerformanceMonitor
      }, n = i.sendParams, (o = i.performanceMonitor) ? h() ? (i = n.event.isAsync ? n.event.load > o.spaSlowSessionTime : (t = window.performance.timing).loadEventEnd - t.navigationStart > o.slowSessionTime, c((t = n.event)?.resources) && (r = n.event.resources, e = S(o.geckoUrls || []), r.forEach(function (n, t) {
        if (r[t] && y(r[t]) && w(r[t].toJSON)) {
          r[t] = r[t].toJSON();
          r[t].is_gecko = e && e.test(n.name || "") ? "1" : "0";
        }
      })), o.webIDHitStaticResource || o.sampleHitStaticResource ? n.event.upload_reason = "sample" : i ? n.event.upload_reason = "slow_session" : (null === (i = n.event) || undefined === i || delete i.resources, n.event.has_resource = 0), n) : {} : n);

      if (!(null === (n = i.event) || undefined === n)) {
        delete n.resources;
      }

      return i;
    }, $t.prototype._send = function (n) {
      if (n && n.event && n.name && this.transport) {
        if (!this.deDup(n)) {
          this.previousOptions = {
            count: 0,
            name: n.name,
            options: JSON.parse(JSON.stringify(n))
          };
          this.sendByTypes(n);
        }
      }
    }, $t.prototype.normalizeOptions = function (n) {
      return t({}, this.options, n);
    }, $t.prototype.sendByTypes = function (n) {
      var t;

      if (this.transport) {
        t = this.a(n);

        if (n.name === ut) {
          this.o("cover", t, n.event.ev_type);
        }

        if (-1 < [lt, rt, jn, Bn, Et, yt].indexOf(n.name)) {
          this.o("reportDirectly", t, n.event.ev_type);
        }

        if ("CustomMonitor" === n.name) {
          this.o("customReport", (!(n = n.event.data).hasOwnProperty("canSample") && n.hasOwnProperty("level") && (n.canSample = 0 == +n.level ? 0 : 1), n));
        }
      }
    }, $t);

    function $t(n) {
      var i = Ut.call(this, n) || this;
      i.previousOptions = {
        count: 0
      };

      i.setTransport = function (n) {
        i.transport = new Jt({
          transport: n.transport
        });
        i.preQueue.forEach(function (n) {
          Ut.prototype.sendEvent.call(i, n);
        });
      };

      i.updateConfig = function (n) {
        i.options = i.normalizeOptions(n);
      };

      i.sendEvent = function (n) {
        if (i.transport) Ut.prototype.sendEvent.call(i, n);else i.preQueue.push(n);
      };

      i.getEventToBeSent = function (n) {
        return Ut.prototype.getEventToBeSent.call(i, n);
      };

      i.flushCacheData = function () {
        var n = i.v(),
            t = {};

        if (n) {
          (t = i.a(n)).serviceType = t.jsInfo.ev_type;
        }

        i.previousOptions = {
          count: 0
        };
        return t;
      };

      i.v = function () {
        var n = i.previousOptions,
            t = n.count,
            n = n.options;

        if (t && n && n.event) {
          n.event.js_repeat_count = t;
          return n;
        }
      };

      i.s = function () {
        var n = i.v();

        if (n) {
          i.sendByTypes(n);
          i.previousOptions = {
            count: 0
          };
        }
      };

      i.deDup = function (n) {
        var t,
            r,
            e = -1 < Object.keys(Xt).indexOf(n.name),
            o = i.previousOptions.name === n.name;

        if (e && o && (t = i.previousOptions.options, (null == (n = Xt[(r = n).name]) ? undefined : n.length) && n.every(function (n) {
          return JSON.stringify(zt(null == t ? undefined : t.event, n)) === JSON.stringify(zt(null == r ? undefined : r.event, n));
        }))) {
          i.previousOptions.count++;
          return false;
        }

        i.s();
      };

      i.terminated = function () {
        setTimeout(function () {
          var n, t;
          (t = (n = i.transport)?.terminatedPreCollect)?.call?.({});
        }, 1e3);
      };

      i.terminatedPreCollect = function () {
        if (N()) return i.terminated();
        window.addEventListener("load", i.terminated);
      };

      i.a = function (n) {
        var t = n.overrides || {},
            r = t.context,
            e = function (n, t) {
          var r = {};

          for (o in n) if (Object.prototype.hasOwnProperty.call(n, o) && t.indexOf(o) < 0) {
            r[o] = n[o];
          }

          if (null != n && "function" == typeof Object.getOwnPropertySymbols) for (var e = 0, o = Object.getOwnPropertySymbols(n); e < o.length; e++) if (t.indexOf(o[e]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[e])) {
            r[o[e]] = n[o[e]];
          }
          return r;
        }(t, ["context"]),
            t = i.options.commonParams,
            r = H(H({}, y(t.context) ? t.context : {}), y(r) ? r : {}),
            r = H(H({}, t), {
          context: r
        });

        return H({
          jsBase: r,
          jsInfo: n.event
        }, e);
      };

      i.l = function () {
        window.addEventListener("unload", i.s.bind(i));
      };

      i.options = n;
      i.preQueue = [];
      i.terminatedPreCollect();
      i.l();
      return i;
    }

    var Wt = function () {
      var n = "";

      try {
        n = function (n, t) {
          var r, e;
          if (!n || !t) return "";
          var n = n.split(";"),
              o = {};

          try {
            for (var i = T(n), u = i.next(); !u.done; u = i.next()) {
              var c = u.value.split("="),
                  f = b(c[0]) && c[0].trim();

              if (f && b(c[1])) {
                o[f] = c[1].trim();
              }
            }
          } catch (n) {
            r = {
              error: n
            };
          } finally {
            try {
              if (u && !u.done && (e = i.return)) {
                e.call(i);
              }
            } finally {
              if (r) throw r.error;
            }
          }

          return o[t] || "";
        }(document.cookie, "MONITOR_WEB_ID");
      } catch (n) {}

      return n;
    };

    function Vt(n) {
      return _({}, {
        commonParams: {
          release: "",
          version: "",
          hostname: window.location.hostname,
          protocol: window.location.protocol.slice(0, -1),
          url: window.location.href,
          pid: location.pathname,
          screen_resolution: P(),
          network_type: k(),
          bid: "",
          context: {},
          slardar_web_id: Wt() || V,
          performanceAuto: false,
          region: "cn",
          env: "production",
          maxBatchReportLength: 10,
          batchReportWait: 1e3
        },
        flags: {
          hookXHR: false,
          hookFetch: false,
          enableFMP: false,
          enablePerformance: false,
          enableResourcePerformance: false,
          enableStaticError: false,
          enableCatchJSError: false
        },
        monitors: {
          BaseMonitor: {
            appTypeSetting: {
              type: 0,
              SPA: "",
              renderType: 0
            }
          },
          AjaxMonitor: {
            webIDHit: true,
            sampleHitTrace: true,
            ignore: z,
            abort: true,
            whitelistUrls: [],
            statusCodeSample: {},
            requestUrlSample: [],
            errorRequestCollect: true
          },
          PerformanceMonitor: {
            webIDHitStaticResource: true,
            sampleHitStaticResource: R(X),
            slowSessionTime: G,
            spaSlowSessionTime: $,
            geckoUrls: [],
            interval: 0,
            checkPoint: []
          },
          StaticErrorMonitor: {
            ignore: z
          },
          FMPMonitor: {}
        },
        heatmap: {
          openList: []
        }
      }, n);
    }

    function Yt() {
      return Date.now() - performance.timing.navigationStart;
    }

    var Kt = (Qt.prototype.run = function (e) {
      var n = this;
      this.enable = false;

      function o() {
        var r;

        if (n.enable) {
          r = Yt();

          if (!t) {
            e({
              start: t = r,
              end: r
            });
          }

          setTimeout(function () {
            var n = Yt(),
                t = n - r;

            if (t - i < 10) {
              if (i < 16) i *= 2;else if (i < 25) i += 1;else i = 25;
            } else if (50 < t) {
              i = Math.max(1, i / 2);
            }

            if (50 < t) {
              e({
                start: r,
                end: n
              });
            }

            o();
          }, i);
        }
      }

      var t,
          i = 1;
      o();
    }, Qt.prototype.stop = function () {
      this.enable = true;
    }, Qt);

    function Qt() {
      this.enable = true;
    }

    function Zt() {
      for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

      var r = n[2],
          i = Gn.apply(undefined, a([], L(n), true));
      if (r) return i;

      if (i) {
        var r = L(ir(), 2),
            u = r[0],
            c = r[1];
        return function (n, t) {
          var t = L(i(n, t, c), 4),
              r = t[0],
              e = t[1],
              o = t[2],
              t = t[3];
          u(function (n) {
            e.push(n);
            o(n.end + 5e3);
          });
          return [function (n) {
            e.notSupport = true;
            r(n);
          }, e, o, t];
        };
      }
    }

    function nr(n) {
      var t,
          r = _({}, null !== (t = (n = undefined === n ? {} : n).commonParams) && undefined !== t ? t : {});

      if (!y(n)) return r;
      var e = ["bid", "context", "pid", "slardar_web_id", "performanceAuto", "region", "env", "release"];
      f(n, function (n, t) {
        if (l(e, n)) {
          r[n] = t;
        }
      });

      if (r.slardar_web_id) {
        r.slardar_web_id = r.slardar_web_id.toString();
      }

      return r;
    }

    function tr(n) {
      var t,
          r = _({}, null !== (t = (n = undefined === n ? {} : n).flags) && undefined !== t ? t : {});

      if (!y(n)) return r;
      var e = ["hookXHR", "hookFetch", "enableFMP", "enablePerformance", "enableStaticError", "enableCatchJSError"];
      f(n, function (n, t) {
        if (l(e, n)) {
          r[n] = t;
        }
      });
      return r;
    }

    var rr,
        er,
        or,
        ir = function () {
      var t = new Kt();
      return [function (n) {
        return t.run(n);
      }, function () {
        return t.stop;
      }];
    },
        Rt = function () {
      function v() {
        (l = new Gt(h)).updateConfig(h);

        var n = function () {
          var n,
              t,
              r,
              e,
              o = h.flags,
              i = h.commonParams,
              u = h.monitors,
              c = l && l.sendEvent;

          if (c) {
            if (o.enableCatchJSError) {
              r = L(hn(bt, {}, c), 1)[0];
              e = L(hn(_t, {
                getBreadcrumbs: r
              }, c), 1)[0];
            }

            var f,
                i = {
              commonParams: {
                web_id: i.slardar_web_id,
                bid: i.bid
              },
              ajaxMonitorOptions: u.AjaxMonitor
            };

            if (o.hookXHR) {
              hn(_n, i, c);
            }

            if (o.hookFetch) {
              hn(Pn, i, c);
            }

            if (o.enableStaticError) {
              hn(pt, null, c);
            }

            if (o.enablePerformance) {
              i = {
                renderType: 1,
                TTIMonitor: Zt,
                prePerformanceObserver: {
                  precollect: [],
                  observer: undefined
                }
              };

              if (o.enableFMP) {
                f = hn(zn, u.FMPMonitor);
                f = L(hn(Nn, H(H({}, i), {
                  fmpMonitor: f
                }), c), 3)[2];
              } else {
                n = (a = L(hn(Nn, i, c), 4))[1];
                f = a[2];
                t = a[3];
              }
            }

            hn(wt, {
              onError: function (n) {
                if (e) {
                  n = Ht(e(n), undefined);
                  c(n);
                }
              }
            }, c);
            var a = L(hn(ot, {}, c), 1)[0];
            return [e, a, f, n, t];
          }
        }();

        if (l) {
          l.setTransport({
            transport: p.transport || window.jsIESLiveTimingMonitor
          });
        }

        return n;
      }

      function s() {
        var n = {
          commonParams: nr(p),
          flags: tr(p),
          monitors: function (n) {
            var t = n.setting,
                n = _({
              AjaxMonitor: {},
              PerformanceMonitor: {},
              StaticErrorMonitor: {},
              BaseMonitor: {
                appTypeSetting: {}
              },
              FMPMonitor: {}
            }, t.monitors);

            if (t.ajaxWhitelistUrls && c(t.ajaxWhitelistUrls)) {
              n.AjaxMonitor.whitelistUrls = (n.AjaxMonitor.whitelistUrls || []).concat(t.ajaxWhitelistUrls);
            }

            if (t.ignoreAjax && c(t.ignoreAjax)) {
              n.AjaxMonitor.ignore = (n.AjaxMonitor.ignore || []).concat(t.ignoreAjax);
            }

            if (t.fmpIgnoreTags && c(t.fmpIgnoreTags)) {
              n.FMPMonitor.ignoreTags = t.fmpIgnoreTags;
            }

            if (u(t, "geckoUrls")) {
              n.PerformanceMonitor.geckoUrls = t.geckoUrls;
            }

            if (t.ignoreStatic && c(t.ignoreStatic)) {
              n.StaticErrorMonitor.ignore = (n.StaticErrorMonitor.ignore || []).concat(t.ignoreStatic);
            }

            return n;
          }({
            setting: p
          })
        },
            n = _(r, n);

        h = n;
      }

      var l,
          d,
          t,
          r = Vt({
        commonParams: {
          version: "1.1.61"
        }
      }),
          h = r,
          p = {},
          m = (t = true, function (n) {
        if (l && l.transport) {
          if (n.bid) {
            if (t) delete n.bid;else t = false;
          }

          if (Object.keys(n).filter(function (n) {
            return -1 < ["bid", "pid", "context", "env", "release"].indexOf(n);
          }).length) {
            l.transport.config(n);
          }
        }
      });
      return function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

        var r,
            e = L(d || [], 5),
            o = e[0],
            i = e[1],
            u = e[2],
            c = e[3],
            f = e[4];

        if ("config" === n[0]) {
          if (!y(n[1])) return;
          e = n[1];
          p = H(H({}, p || {}), e || {});
          m(p);
          s();
          return void (l ? l.updateConfig(h) : d = v());
        }

        if ("flushCacheData" === n[0]) return l && l.flushCacheData();
        if ("send" === n[0]) return l && l.send();
        if ("getCommonParams" === n[0]) return h.commonParams;

        if ("getLatestPerformance" === n[0]) {
          var a = u && u(),
              a = a && (null == l ? undefined : l.getEventToBeSent(a));
          return Nt({
            base: h.commonParams,
            info: H({
              ev_type: "perf"
            }, a && a.event || {})
          });
        }

        if ("getLatestResource" !== n[0]) return "performanceInit" === n[0] ? f && f() : "performanceSend" === n[0] ? c && c() : void (l && l.sendEvent && ("captureException" !== n[0] ? "emit" === n[0] && "custom" === n[1] && (r = Ft(n[2])) && l.sendEvent(r) : o && (r = Ht(o(n[1]), n[2]), l.sendEvent(r))));
        i = i && i();
        a = i && (null == l ? undefined : l.getEventToBeSent(i));
        return Nt({
          base: h.commonParams,
          info: H({
            ev_type: "resource_performance"
          }, a && a.event || {})
        });
      };
    };

    rr = window;
    It = "SlardarHybrid";

    if (!(!rr || null !== (or = rr[It]) && undefined !== or && or.r)) {
      er = Rt();
      (or = function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

        try {
          return er.apply(undefined, a([], L(n), true));
        } catch (n) {}
      }).version = "1.1.61";
      or.r = 1;
      rr[It] = or;
    }

    var r = t[c];

    t[c] = function (n, t) {
      if (n == a) {
        d(i, t);
      }

      if (n == v) {
        d(u, t);
      }

      return r.apply(null, arguments);
    };

    d(o, function (n) {
      t[e].apply(null, n);
    });
    t[c] = r;
    n = 1;
  }, 1);
}

function s(n) {
  i.push(n);
}

function l(n) {
  u.push(n);
}

function d(n, t) {
  for (var r = 0; r < n.length; r++) t(n[r]);
}
