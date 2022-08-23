const t = window;
const e = 'SlardarHybrid';
const n = undefined;

if (t && typeof t[e] !== 'function') {
	const o = [];
	var i = [];
	var u = [];
	const c = 'addEventListener';
	const f = 'removeEventListener';
	const a = 'error';
	const v = 'unhandledrejection';

	t[e] = function() {
		return n ? t[e].apply(null, arguments) : o.push(arguments);
	};

	try {
		t[c](a, s, false);
		t[c](v, l);
	} catch (n) {}

	setTimeout(() => {
		try {
			t[f](__spreadArray, s);
			t[f](v, l);
		} catch (n) {}

		var extendStatics = function(n, t) {
			return (extendStatics = Object.setPrototypeOf || {
				__proto__: [],
			} instanceof Array && function(n, t) {
				n.__proto__ = t;
			} || function(n, t) {
				for (const r in t) {
					if (Object.prototype.hasOwnProperty.call(t, r)) {
						n[r] = t[r];
					}
				}
			})(n, t);
		};

		function __extends(n, t) {
			if (typeof t !== 'function' && t !== null) throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');

			function r() {
				this.constructor = n;
			}

			extendStatics(n, t);
			n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
		}

		var __assign = function() {
			return (__assign = Object.assign || function(n) {
				for (var t, r = 1, e = arguments.length; r < e; r++) {
					for (const o in t = arguments[r]) {
						if (Object.prototype.hasOwnProperty.call(t, o)) {
							n[o] = t[o];
						}
					}
				}

				return n;
			}).apply(this, arguments);
		};

		function __values(n) {
			const t = typeof Symbol === 'function' && Symbol.iterator;
			const r = t && n[t];
			let e = 0;
			if (r) return r.call(n);
			if (n && typeof n.length === 'number') {
				return {
					next() {
						return {
							value: (n = n && e >= n.length ? undefined : n) && n[e++],
							done: !n,
						};
					},
				};
			}
			throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
		}

		// Reads values from an `Iterable` or `ArrayLike` object and returns the resulting array
		function __read(n, t) {
			let r = typeof Symbol === 'function' && n[Symbol.iterator];
			if (!r) return n;
			let e;
			let o;
			const i = r.call(n);
			const u = [];

			try {
				for (; (undefined === t || t-- > 0) && !(e = i.next()).done;) u.push(e.value);
			} catch (n) {
				o = {
					error: n,
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

		function __spreadArray(to, from, pack) {
			if (pack || arguments.length === 2) {
				for (var e, o = 0, i = from.length; o < i; o++) {
					if (!(!e && o in from)) {
						(e = e || Array.prototype.slice.call(from, 0, o))[o] = from[o];
					}
				}
			}
			return to.concat(e || Array.prototype.slice.call(from));
		}

		function isObject(n) {
			return typeof n === 'object' && n !== null && !isArray(n);
		}

		function isObject2(n) {
			return Object.prototype.toString.call(n) === '[object Object]';
		}

		function isFunction(n) {
			return typeof n === 'function';
		}

		function isString(n) {
			return Object.prototype.toString.call(n) === '[object String]';
		}

		function isArray(n) {
			return Object.prototype.toString.call(n) === '[object Array]';
		}

		function isEvent(n) {
			return typeof Event !== 'undefined' && function(n, Event) {
				try {
					return n instanceof Event;
				} catch (n) {

				}
			}(n, Event);
		}

		function hasOwnProperty(n, t) {
			return Object.prototype.hasOwnProperty.call(n, t);
		}

		function f(n, t) {
			if (isObject(n)) {
				for (const r in n) {
					if (hasOwnProperty(n, r)) {
						t.call(null, r, n[r]);
					}
				}
			}
		}

		function t() {
			for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

			for (var r = {}, e = 0; e < n.length;) {
				r = function(n, t) {
					let r;
					const e = { ...n };

					for (r in t) {
						if (Object.prototype.hasOwnProperty.call(t, r) && undefined !== t[r]) {
							if (isObject(t[r]) && v(t[r])) e[r] = s(isObject(n[r]) ? n[r] : {}, t[r]); else if (isArray(t[r])) e[r] = t[r].slice(); else e[r] = t[r];
						}
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
			let r;
			const e = { ...n };

			for (r in t) {
				if (Object.prototype.hasOwnProperty.call(t, r) && undefined !== t[r]) {
					if (isObject(t[r]) && v(t[r])) { e[r] = s(isObject(n[r]) ? n[r] : {}, t[r]) } else if (isArray(n[r]) || isArray(t[r])) {
						e[r] = function t(n, r) {
							n = isArray(n) ? n : [];
							r = isArray(r) ? r : [];
							return Array.prototype.concat.call(n, r).map(n => !(n instanceof RegExp) && (isArray(n) || isObject(n) && v(n)) ? isArray(n) ? t([], n) : s({}, n) : n);
						}(n[r], t[r]);
					} else { e[r] = t[r] }
				}
			}

			return e;
		}

		function l(n, t) {
			if (isArray(n) && n.length !== 0) {
				for (let r = 0; r < n.length;) {
					if (n[r] === t) return 1;
					r++;
				}
			}
		}

		function d() {
			return Boolean(isObject(window));
		}

		function h() {
			return d() && isObject(window.performance) && Boolean(isObject(window.performance.timing));
		}

		function p(n) {
			const t = document.createElement('a');
			t.href = n;
			n = t.pathname || '/';

			if (n[0] !== '/') {
				n = '/' + n;
			}

			return {
				href: t.href,
				protocol: t.protocol.slice(0, -1),
				hostname: t.hostname,
				host: t.host,
				search: t.search,
				pathname: n,
				hash: t.hash,
			};
		}

		function isSensitiveHeader(name, value) {
			return !(!name || !value) && (nameRegExp.test(name) || valueRegExp.test(value));
		}

		var nameRegExp = new RegExp('(' + [ 'cookie', 'auth', 'jwt', 'token', 'key', 'ticket', 'secret', 'credential', 'session', 'password' ].join('|') + ')', 'i');
		var valueRegExp = new RegExp('(' + [ 'bearer', 'session' ].join('|') + ')', 'i');

		function nothing() {}

		function documentReadyStateComplete() {
			return document.readyState === 'complete';
		}

		function onDocumentReady(fn) {
			if (document.readyState === 'complete') {
				fn();
			} else {
				window.addEventListener('load', () => {
					setTimeout(() => {
						fn();
					}, 0);
				}, true);
			}
		}

		function lengthOf(n) {
			const t = Object.prototype.toString.call(n) === '[object String]';
			return n ? t ? n.length : ArrayBuffer && n instanceof ArrayBuffer ? n.byteLength : window.Blob && n instanceof Blob ? n.size : n.length || 0 : 0;
		}

		function renderHeaders(n) {
			if (!n) return '';
			if (!isFunction(n.forEach)) return '';
			const r = [];
			n.forEach(n => {
				let t;

				if (isArray(n) && n[0] && !isSensitiveHeader(n[0], n[1])) {
					t = n[0];
					n = n[1] || '';
					r.push(t + ': ' + n);
				}
			});
			return r.join('\r\n');
		}

		function E(n) {
			const t = {};
			const r = p(n);
			t.ax_protocol = r.protocol;
			t.ax_domain = r.hostname;
			t.ax_path = r.pathname;
			t.ax_url = (r.href || n).split('?')[0];
			t.ax_search = r.search;
			t.ax_href = r.href;
			return t;
		}

		function S(n) {
			return isArray(n) && n.length ? function(n) {
				for (var t = [], r = n.length, e = 0; e < r; e++) {
					const o = n[e];
					if (isString(o)) { t.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1')) } else if (o && o.source) {
						t.push(o.source);
					}
				}

				return new RegExp(t.join('|'), 'i');
			}(n) : null;
		}

		const P = function(n) {
			let t; let r;

			if (undefined === n) {
				n = window;
			}

			return d() && (t = n.screen) !== null && undefined !== t && t.width && (r = n.screen) !== null && undefined !== r && r.height ? n.screen.width + 'x' + n.screen.height : '0x0';
		};
		const k = function() {
			const n = 'unknown';
			const t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
			return t && isString(t.effectiveType) ? t.effectiveType : n;
		};
		const onBeforeUnload = function(t, r) {
			if (isFunction(t)) {
				if (isFunction(window.addEventListener)) {
					window.addEventListener('unload', t);
					window.addEventListener('beforeunload', t);
					window.addEventListener('pagehide', t);
				}

				if (isFunction(document.addEventListener)) {
					document.addEventListener('visibilitychange', n => {
						if (isFunction(r)) { r(n) } else if (document.visibilityState === 'hidden') {
							t(n);
						}
					});
				}
			}
		};

		function R(n) {
			return Boolean(n) && Math.random() < Number(n);
		}

		function D(n, t, r) {
			if ((r = undefined === r ? '0' : r).length > 1) throw new TypeError('expect the length of pad to be 1, but got ' + n.length);
			return n.length >= t ? n : '' + Array.from({
				length: t - n.length,
			}).fill(r).join('') + n;
		}

		function A(n) {
			return n ? Math.floor(Math.random() * 10 ** 12).toString(16).substr(0, n) : '';
		}

		const I = 'x-tt-trace-id';
		const C = 'x-tt-trace-host';
		const q = 'x-tt-logid';

		function J(n, t, r) {
			if (undefined === r) {
				r = '01';
			}

			t = '' + D((Date.now() % 4294967295).toString(16), 8) + function(n) {
				if (typeof n === 'number') { r = n } else {
					var t = n.replace(/-/g, '');

					if (!/^[0-9]+$/.test(t)) {
						if (t.length > 18) return '18' + A(18);
						n = 22 - t.length - 4;
						return '' + D('' + t.length, 2) + t + A(n);
					}

					r = parseInt(t, 10);
				}
				var r = 22 - (t = r.toString(16)).length - 4;
				return '' + D('' + t.length, 2) + t + A(r);
			}(n) + (typeof t === 'string' ? A(4) : D(t.toString(16), 4));

			return '00-' + t + '-' + t.substr(0, 16) + '-' + r;
		}

		function U() {
			const n = function() {
				for (var n = new Array(16), t = 0, r = 0; r < 16; r++) {
					if ((3 & r) == 0) {
						t = 4294967296 * Math.random();
					}

					n[r] = t >>> ((3 & r) << 3) & 255;
				}

				return n;
			}();

			n[6] = 15 & n[6] | 64;
			n[8] = 63 & n[8] | 128;
			return function(n) {
				for (var t = [], r = 0; r < 256; ++r) t[r] = (r + 256).toString(16).substr(1);

				let e = 0;
				const o = t;
				return [ o[n[e++]], o[n[e++]], o[n[e++]], o[n[e++]], '-', o[n[e++]], o[n[e++]], '-', o[n[e++]], o[n[e++]], '-', o[n[e++]], o[n[e++]], '-', o[n[e++]], o[n[e++]], o[n[e++]], o[n[e++]], o[n[+e]], o[n[15]] ].join('');
			}(n);
		}

		const X = 0.1;
		const z = [ '/log/sentry/', '/monitor_browser/collect' ];
		const G = 8e3;
		const $ = 4e3;
		U();

		function W(t) {
			return function(n) {
				return t === n;
			};
		}

		const V = U();
		const Y = function(n) {
			return n;
		};
		const K = function(e) {
			function o() {
				for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

				const r = e.apply(undefined, __spreadArray([], __read(n), true));
				o.returns = r;
				o.resolved = false;

				if (o.subs) {
					o.subs.forEach(n => n());
				}

				return r;
			}

			o.then = Q(o).then;
			return o;
		};
		var Q = function() {
			for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];

			function u() {
				return t.every(n => n.resolved);
			}

			return Object.defineProperty({
				then(r) {
					function e() {
						return n.apply(undefined, __spreadArray([], __read(t.map(n => n.returns)), true));
					}

					let o;
					let i;
					var n = K(function() {
						for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

						return i ? o : (i = false, o = r.apply(undefined, __spreadArray([], __read(n), true)));
					});
					if (u()) { setTimeout(e) } else {
						t.forEach(n => {
							function t() {
								return u() && e();
							}

							if (n.subs) n.subs.push(t); else n.subs = [ t ];
						});
					}
					return Q(n);
				},
			}, 'resolved', {
				get: u,
			});
		};

		function extractDomPath(n) {
			try {
				const u = ' > '.length;
				const e = [];
				for (var t, r = n, o = 0, i = 0; r && o++ < 5 && !((t = function(n) {
					let t;
					let r;
					let e;
					let o;
					const i = n;
					const u = [];
					if (!i || !i.tagName) return '';
					u.push(i.tagName.toLowerCase());

					if (i.id) {
						u.push('#' + i.id);
					}

					n = i.className;
					if (n && isString(n)) for (t = n.split(/\s+/), o = 0; o < t.length; o++) u.push('.' + t[o]);
					const c = [ 'type', 'name', 'title', 'alt' ];

					for (o = 0; o < c.length; o++) {
						r = c[o];

						if (e = i.getAttribute(r)) {
							u.push('[' + r + '="' + e + '"]');
						}
					}

					return u.join('');
				}(r)) === 'html' || o > 1 && i + e.length * u + t.length >= 80);) {
					e.push(t);
					i += t.length;
					r = r.parentNode;
				}

				return e.reverse().join(' > ');
			} catch (n) {
				return '<unknown>';
			}
		}

		function getFetch() {
			try {
				new Headers();
				new Request('');
				new Response();
				return window.fetch;
			} catch (n) {}
		}

		function getWindow() {
			if (isObject(window)) return window;
		}

		function getDocument() {
			if (isObject(document)) return document;
		}

		function getPerformance() {
			if (getWindow() && isObject(window.performance)) return window.performance;
		}

		function getXMLHttpRequest() {
			if (isFunction(XMLHttpRequest)) return XMLHttpRequest;
		}

		function getMutationObserver() {
			if (getWindow() && isFunction(window.MutationObserver)) return window.MutationObserver;
		}

		function getPerformanceObserver() {
			if (getWindow() && isFunction(window.PerformanceObserver)) return window.PerformanceObserver;
		}

		function fn(n, t, r) {
			var e = n.commonParams;
			var o = n.ajaxMonitorOptions;
			var e = (n = e || {}).bid;
			var n = n.web_id;
			var o = (o || {}).sampleHitTrace;
			var t = (t = t, r = p(r = r), t = p(t), r.protocol === t.protocol && r.host === t.host);
			return e && n && o && t;
		}

		const makeHook = function(object, property, ctor) {
			return function(...n) {
				if (!object) return nothing;
				const original = object[property];
				const wrapper = ctor(original, ...n);
				let o = wrapper;

				if (isFunction(o)) {
					o = function(...args) {
						try {
							return wrapper.apply(this, args);
						} catch (n) {
							return isFunction(original) && original.apply(this, args);
						}
					};
				}

				object[property] = o;
				return function(n) {
					if (!(n && o !== object[property])) {
						object[property] = original;
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
			return (n = (n = n.ajaxMonitorOptions)?.errorRequestCollect) !== null && undefined !== n && n;
		}

		const dn = function(n) {
			function t() {
				return Object.keys(r).forEach(n => !(n in e) && Object.defineProperty(e, n, {
					get() {
						return r[n];
					},
				}));
			}

			var r = n;
			var e = {};
			t();
			return [ e, function(n) {
				r = _({}, r, n);
				t();
			} ];
		};
		const invoke2 = function(n, nextArg1, nextArg2, args) {
			if (undefined === nextArg1) {
				nextArg1 = {};
			}

			if (undefined === args) {
				args = [];
			}

			try {
				const o = n.apply(undefined, [ ...args ]);
				return o && o(nextArg1, nextArg2) || [];
			} catch (n) {
				return [];
			}
		};
		const pn = function(n, t) {
			const r = n && new n(t);
			return [ function(n, t) {
				if (r && n) {
					r.observe(n, t);
				}
			}, function() {
				return r && r.disconnect();
			} ];
		};
		const mn = function(r, o, t, i) {
			const e = r && new r((n, e) => {
				if (n.getEntries) {
					n.getEntries().forEach((n, t, r) => o(n, t, r, e));
				} else if (i) {
					i();
				}

				if (t) {
					e.disconnect();
				}
			});
			return [ function() {
				for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];

				if (!r || !e) return i && i();

				try {
					t.forEach(n => r.supportedEntryTypes.indexOf(n) > -1 ? e.observe({
						type: n,
						buffered: false,
					}) : void (i && i()));
				} catch (n) {
					try {
						e.observe({
							entryTypes: t,
						});
					} catch (n) {
						if (i) {
							i();
						}
					}
				}
			}, function() {
				return e && e.disconnect();
			} ];
		};
		const yn = function(r) {
			const n = r && r.timing || undefined;
			return [ n, function() {
				return r && r.now ? r.now() : (Date.now ? Date.now() : +new Date()) - (n && n.navigationStart || 0);
			}, function(n) {
				const t = (r || {}).getEntriesByType;
				return isFunction(t) && t.call(r, n) || [];
			}, function() {
				const n = (r || {}).clearResourceTimings;

				if (isFunction(n)) {
					n.call(r);
				}
			}, function(n) {
				const t = (r || {}).getEntriesByName;
				return isFunction(t) && t.call(r, n) || [];
			} ];
		};
		const wn = function(n) {
			let t;
			const r = window.requestAnimationFrame;
			const e = window.cancelAnimationFrame;
			const o = !isFunction(r) || n && document && document.hidden ? function(n) {
				n(0);
				return 0;
			} : r;
			const i = isFunction(e) ? e : nothing;
			return [ function(n) {
				if (t) {
					i(t);
				}

				t = o(n);
			}, o, i ];
		};

		function bn(n, t) {
			if (undefined === t) {
				t = getPerformance();
			}

			return (0, __read(yn(t), 5)[4])(n).pop();
		}

		function hookXHR(n, e) {
			if (undefined === n) {
				n = getXMLHttpRequest();
			}

			if (undefined === e) {
				e = location === null || undefined === location ? undefined : location.href;
			}

			const o = n && n.prototype;
			if (o) {
				return function(n, t) {
					var r = __read(dn(n), 2);
					var n = r[0];
					var r = r[1];
					makeHook(o, 'open', xn)();
					makeHook(o, 'send', Tn)(n, t, e || '');
					makeHook(o, 'setRequestHeader', On)();
					return [ r ];
				};
			}
		}

		function gn(n, t, r) {
			var e = '';
			var e = vn(n, r) ? n.url : n;
			return e = !(t = undefined === t ? true : t) ? isString(e) ? e.split('?')[0] : e : e;
		}

		const Mn = function(n, t, r, e) {
			var o = n._method;
			let i = n._requestHeaders;
			const u = n._url;
			const c = n._start;
			const f = n._data;
			var o = {
				ev_type: 'ajax',
				ax_status: (n.status || 0).toString(),
				ax_type: o,
				ax_request_header: renderHeaders(i || []),
				ax_domain: '',
				ax_duration: 0,
				ax_path: '',
				ax_protocol: '',
				ax_response_header: '',
				ax_size: 0,
				ax_url: '',
				ax_href: '',
			};

			if (typeof n.getAllResponseHeaders === 'function') {
				o.ax_response_header = function(t) {
					if (isString(t)) {
						const n = t.split('\r\n');
						const r = [];
						n.forEach((n, t) => {
							if (n && isFunction(n.split)) {
								n = n.split(': ');

								if (!isSensitiveHeader(n[0], n[1])) {
									r.push([ n[0], n[1] ]);
								}
							}
						});
						return renderHeaders(r);
					}

					return isObject(t) ? renderHeaders(Object.keys(t).filter(n => !isSensitiveHeader(n, t[n])).map(n => [ n, t[n] ])) : t;
				}(n.getAllResponseHeaders());
			}

			if (fn(t, u, e)) {
				if (r = r || n.getResponseHeader(I)) {
					o.trace_id = r;
					o.trace_host = n.getResponseHeader(C) || undefined;
					o.log_id = n.getResponseHeader(q) || undefined;
				}
			}

			o.ax_duration = Date.now() - c;

			if (n.status === 200) {
				o.ax_size = function(n) {
					if (n.responseType === '' || n.responseType === 'text') return lengthOf(n.responseText);
					if (n.response) return lengthOf(n.response);

					try {
						return lengthOf(n.responseText);
					} catch (n) {
						return 0;
					}
				}(n);
			}

			(o = { ...o, ...E(u) }).resource_timing = bn(o.ax_href);
			n = o.ax_status;

			if (ln(t) && n[0] !== '2' && n[0] !== '3') {
				o.ax_request = {
					body: f ? '' + f : undefined,
					search: p(u).search,
					content_type: i && ((i = i.find(n => n[0].toLowerCase() === 'content-type')) === null || undefined === i ? undefined : i[1]),
				};
			}

			return o;
		};
		const jn = 'AjaxMonitor';
		const xn = function(o) {
			return function() {
				for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

				var r = __read(n, 2);
				const e = r[0];
				var r = r[1];
				this._url = r || '';
				this._method = e && e.toLowerCase() || '';
				return o.apply(this, n);
			};
		};
		const On = function(r) {
			return function() {
				for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

				this._requestHeaders = this._requestHeaders || [];

				this._requestHeaders.push(n);

				return r && r.apply(this, n);
			};
		};
		const Tn = function(o, i, u, f) {
			let a = null;
			return function() {
				for (var n, t, c, r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];

				if (fn(i, this._url, f)) {
					n = (t = i.commonParams || {}).bid;
					t = t.web_id;

					if (n && t) {
						a = J(t, n);
						this.setRequestHeader(I, a);
					}
				}

				makeHook(c = this, 'onreadystatechange', (r, e, o, i, u) => function() {
					for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

					if (this.readyState === 4 && i) {
						i({
							name: jn,
							type: 'get',
							event: Mn(c, e, o, u),
						});
					}

					return r && r.apply(this, n);
				})(i, a, u, f);
				this._start = Date.now();
				this._data = r == null ? undefined : r[0];
				return o.apply(this, r);
			};
		};

		function En(n, t) {
			if (!n) return '';
			const r = [];
			if (sn(n, t)) {
				n.forEach((n, t) => {
					r.push([ t, n ]);
				});
			} else if (isArray(n)) { r.push.apply(r, __spreadArray([], __read(n), true)) } else { r.push.apply(r, __spreadArray([], __read(Object.entries(n)), true)) }
			return renderHeaders(r);
		}

		function Sn(n, t, r, e, o, i) {
			let u = t.ax_status;

			if (ln(n) && u[0] !== '2' && u[0] !== '3') {
				u = gn(r, false, o);
				t.ax_request = {
					body: (t = e, t = vn(r = r, o) ? r.body : t == null ? undefined : t.body) === null || undefined === t ? undefined : t.toString(),
					search: p(u).search,
					content_type: function(n, t, r) {
						if (n) {
							if (sn(n, r)) return n.get(t) || undefined;

							if (isArray(n)) {
								r = n.find(n => t === n[0]);
								return r == null ? undefined : r[1];
							}

							return n[t];
						}
					}(e.headers, 'Content-Type', i),
				};
			}
		}

		function hookFetch(e, o, i, u) {
			if (undefined === e && (e = getFetch() && getWindow()), undefined === o && (o = window.Headers), undefined === i && (i = window.Request), undefined === u && (u = location === null || undefined === location ? undefined : location.href), e && o && i) {
				return function(n, t) {
					const [ n2, r ] = dn(n);
					makeHook(e, 'fetch', Fn)(n2, t, o, i, u || '');
					return [ r ];
				};
			}
		}

		function kn(t) {
			function r(n) {
				if (!(n < o || !e)) {
					u();
					i = window.setTimeout(e, n - t());
					o = n;
				}
			}

			let e;
			var o = -1 / 0;
			var i = undefined;
			var u = function() {
				return window.clearTimeout(i);
			};

			return [ function(n, t) {
				e = n;
				r(t);
			}, function() {
				u();
				e = undefined;
			}, r ];
		}

		function Rn(n, u) {
			const c = [ 'img', 'script', 'iframe', 'link', 'audio', 'video', 'source' ];
			const t = (n = __read(pn(n, n => {
				let t; let r;

				try {
					for (var e = __values(n), o = e.next(); !o.done; o = e.next()) {
						const i = o.value;

						if (i.type === 'childList' && function n(t, r) {
							let e; let o;

							try {
								for (var i = __values(t), u = i.next(); !u.done; u = i.next()) {
									const c = u.value;
									if (l(r, c.nodeName.toLowerCase()) || c.children && n(c.children, r)) return 1;
								}
							} catch (n) {
								e = {
									error: n,
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
						}(i.addedNodes, c) || i.type === 'attributes' && l(c, i.target.nodeName.toLowerCase())) {
							u(i);
						}
					}
				} catch (n) {
					t = {
						error: n,
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
			return [ function() {
				return t(document, {
					attributes: false,
					childList: false,
					subtree: false,
					attributeFilter: [ 'href', 'src' ],
				});
			}, n[1] ];
		}

		function Dn(n) {
			var n = (t = n || {}).domContentLoadedEventEnd;
			var t = t.navigationStart;
			return n ? n - (undefined === t ? 0 : t) : null;
		}

		function An(r) {
			return function() {
				for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

				this._method = n[0];
				return r.apply(this, n);
			};
		}

		function In(e, o, i) {
			let u = 0;
			return function() {
				for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

				if (this._method !== 'GET') return e.apply(this, n);
				const r = u += 2;
				o(r, Date.now());
				makeHook(this, 'onreadystatechange', t => function(n) {
					if (t) {
						t.call(this, n);
					}

					if (this.readyState === 4) {
						i(r);
					}
				})();
				return e.apply(this, n);
			};
		}

		function Cn(i, u, c) {
			let f = 1;
			return function() {
				for (var n, o = [], t = 0; t < arguments.length; t++) o[t] = arguments[t];

				return ((n = o[0])?.method || (n = o[1])?.method || 'GET') !== 'GET' ? i.apply(undefined, __spreadArray([], __read(o), true)) : new Promise((t, r) => {
					const e = f += 2;
					u(e, Date.now());
					i.apply(undefined, __spreadArray([], __read(o), true)).then(n => {
						c(e);
						t(n);
					}, n => {
						c(e, n);
						r(n);
					});
				});
			};
		}

		function Hn(M, j, x, O) {
			return function(n, r, t) {
				let f;
				let a;
				let e;
				let o;
				let i;
				let u;
				let c;
				let v;
				let s = __read([ f = [], a = [], function(u, c) {
					return function(n) {
						const t = n.startTime;
						const r = n.duration;
						const e = n.fetchStart;
						const o = n.responseEnd;
						const i = n.entryType;

						if (i === 'longtask') {
							f.push({
								start: t,
								end: t + r,
							});

							if (u) {
								u(n);
							}
						} else if (i === 'resource') {
							a.push({
								start: e,
								end: o,
							});

							if (c) {
								c(n);
							}
						}
					};
				} ], 3);
				const l = s[0];
				const d = s[1];
				const h = s[2];
				var p = __read((e = M, o = j, p = __read([ i = {}, function(n, t) {
					return i[n] = t;
				}, function(n) {
					return delete i[n];
				} ], 3), w = p[0], s = p[1], p = p[2], u = o && makeHook(o.prototype, 'open', An)(), c = o && makeHook(o.prototype, 'send', In)(s, p), v = e && makeHook(e, 'fetch', Cn)(s, p), [ w, function() {
					if (u) {
						u(false);
					}

					if (c) {
						c(false);
					}

					if (v) {
						v(false);
					}
				} ]), 2);
				const m = p[0];
				const y = p[1];
				var w = __read(Rn(O, () => r(t() + 5e3)) || [], 2);
				var p = w[0];
				const b = w[1];

				if (p) {
					p();
				}

				function _() {
					return function(n, t, r) {
						let e; let o; let i; let u;
						if (n.length > 2) return r();
						const c = [];

						try {
							for (var f = __values(t), a = f.next(); !a.done; a = f.next()) {
								const v = a.value;
								c.push([ v.start, 0 ], [ v.end, 1 ]);
							}
						} catch (n) {
							e = {
								error: n,
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
							for (var s = __values(n), l = s.next(); !l.done; l = s.next()) {
								const d = l.value;
								c.push([ d, 0 ]);
							}
						} catch (n) {
							i = {
								error: n,
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

						c.sort((n, t) => n[0] - t[0]);

						for (let h = n.length, p = c.length - 1; p >= 0; p--) {
							const m = __read(c[p], 2);
							const y = m[0];

							switch (m[1]) {
								case 0:
									h--;
									break;

								case 1:
									if (++h > 2) return y;
							}
						}

						return 0;
					}(function(n) {
						for (var t = Object.keys(n), r = [], e = 0; e < t.length; e++) {
							const o = n[t[e]];

							if (typeof o === 'number') {
								r.push(o);
							}
						}

						return r;
					}(m), d, t);
				}

				var w = __read(mn(x, h(n => {
					const t = n.startTime;
					var n = n.duration;
					return r(t + n + 5e3);
				}, () => r(_() + 5e3)), true, () => l.notSupport = false), 2);
				var p = w[0];
				const g = w[1];
				p('longtask', 'resource');
				n.forEach(h());
				return [ l, function() {
					y();
					g();

					if (b) {
						b();
					}
				}, _ ];
			};
		}

		function Ln(t, n) {
			return (n = n.filter(n => n.name === t)[0]) ? Math.round(n.startTime) : 0;
		}

		function Nn(C) {
			if (undefined === C) {
				C = getPerformance();
			}

			return function(n, f) {
				const e = n.prePerformanceObserver;
				var t = n.TTIMonitor;
				const a = n.renderType;
				const r = n.report;
				let v = n.fmpMonitor;
				var n = n.performanceAuto;
				let o = undefined === n || n;
				const s = { ...it };
				const i = t || Gn;
				let l = 0;
				let u = '';
				let d = false;
				let h = 0;
				let p = null;
				var n = {
					isAsync: 0,
					prePerformanceObserver: e,
				};
				var t = __read(st(s), 3);
				let m = t[0];
				let y = t[1];
				let w = t[2];
				const c = __read(yn(C), 2)[1];
				var t = __read(at(f), 2);
				const b = t[0];
				const _ = t[1];
				const g = ft();
				let M = __read(invoke2(ot), 1)[0];
				let j = __read(invoke2(Qn, n), 1)[0];
				const x = __read(invoke2(Kn, {
					prePerformanceObserver: e,
				}, n => {
					n = n.lcp;
					return m({
						lcp: n,
					});
				}), 1)[0];
				const O = K(n => n.fid);
				const T = __read(invoke2(Wn, 0, O), 1)[0];
				let E = K(Y);
				let S = __read(invoke2(tt, 0, E), 1)[0];
				let P = K(n => {
					if (n && n > 0) return Math.max(Math.round(n - l), 0);
				});
				var n = __read(invoke2(i, n), 4);
				let k = n[0];
				let R = n[3];
				let D = Q(P);
				const A = function(n) {
					if (clearTimeout(h), h = 0, f) {
						d = true;
						const t = s.isAsync;
						w(s);
						const r = j().mpfid;
						var e = M();
						const o = e && e.event.resources;
						var i = __read(yn(C), 3);
						var u = i[0];
						var e = i[2];
						var i = ct(u, e);
						var u = vt(v, t, a, () => S().fcp);
						var e = x().lcp;
						m(S());
						m({ ...s, ...i, mpfid: r,
							resources: o,
							has_resource: o ? 1 : 0,
							fmp: u,
							lcp: e });

						if (s.load) {
							m({
								load: s.load,
							});
						}

						if (!(t || (e = i == null ? undefined : i.timing) !== null && undefined !== e && e.loadEventEnd || (i = i == null ? undefined : i.timing)?.loadEventEnd !== 0)) {
							m({
								bounced: false,
							});
						}

						const c = function() {
							p = null;

							_(t, y());
						};

						if (p = function() {
							m({
								fid: T(),
							});
							m(S());

							if (R) {
								m({
									tti: Math.round(R() - l),
								});
							}

							c();
						}, O.then(n => m({
							fid: n,
						})), E.then(m), P.then(n => m({
							tti: n,
						})), n) {
							m(S());

							if (x) {
								m(x());
							}

							return c();
						}

						if (k) {
							k(P);
						}

						D.then(() => setTimeout(c));
					}
				};

				onDocumentReady(() => o && (h = setTimeout(A, 200)));
				onBeforeUnload(() => {
					if (o && !b()) {
						A(false);

						if (r) {
							r();
						}
					}
				});

				const I = function() {
					o = true;
					clearTimeout(h);
					h = 0;
				};

				return [ function(n) {
					if (undefined === n) {
						n = '';
					}

					if (p) { p() } else if (!(!h && b())) {
						if (!g()) {
							I();
						}

						A();
						p();
					}
					s.isAsync = 1;
					t = __read(st(s), 3);
					m = t[0];
					y = t[1];
					w = t[2];
					d = false;
					l = Math.round(c());
					u = n;
					var t = {
						isAsync: 1,
						prePerformanceObserver: e,
					};
					var n = __read(invoke2(ot, t), 1);
					M = n[0];
					n = __read(invoke2(Qn, t), 1);
					j = n[0];
					t = __read(invoke2(i, { ...t, minValue: l }), 4);
					k = t[0];
					R = t[3];
					P = K(n => {
						if (n && n > 0) return Math.max(Math.round(n - l), 0);
					});
					const r = {
						fp: 0,
						fcp: 0,
					};

					S = function() {
						return r;
					};

					(E = K(Y))(r);
					D = Q(P);
					v = invoke2(zn);
				}, function() {
					if (d && g() && !h) {
						if (s.isAsync) {
							s.load = Math.round(c() - l);
							s.route_from = u;
						}

						h = setTimeout(A, 200);
					}
				}, function() {
					if (!D.resolved) {
						A(!documentReadyStateComplete());
					}

					return y();
				}, I ];
			};
		}

		const Bn = 'FetchMonitor';
		const Fn = function(i, h, u, p, m, y) {
			return function(f, a) {
				if (undefined === a) {
					a = {};
				}

				const v = gn(f, undefined, m);
				if (!function(n) {
					if (isString(n)) {
						const t = __read(n.split(':'), 2);
						var n = t[0];
						return !t[1] || n === 'http' || n === 'https';
					}
				}(v)) return i(f, a);
				let n;
				let t;
				let r;
				var e = h.commonParams || {};
				const o = e.bid;
				var e = e.web_id;
				const s = Date.now();
				var l = {
					ev_type: 'ajax',
					ax_size: 0,
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
							if (sn(n, p)) n.append(t, r); else if (isArray(n)) n.push([ t, r ]); else n[t] = r;
						}
					}
				} catch (n) {}

				l.ax_type = function(n, t, r) {
					t = t && t.method || 'get';
					return (t = vn(n, r) ? n.method || t : t).toLowerCase();
				}(f, a, m);

				var l = { ...l, ...E(gn(f, false, m)) };
				const d = function() {
					l.resource_timing = bn(l.ax_href);
					Sn(h, l, f, a, m, p);

					if (u != null) {
						u({
							name: Bn,
							type: 'get',
							event: l,
						});
					}
				};

				return i(f, a).then(r => {
					let n; let t; let e; let o; let i; let u;

					try {
						l.ax_status = (r.status || 0).toString();
						l.ax_duration = Date.now() - s;
						l.ax_response_header = En(r.headers, p);
						l.ax_request_header = En((t = f, e = a, i = m, u = new (o = p)(), vn(t, i) && t.headers && isFunction(t.headers.forEach) && t.headers.forEach((n, t) => {
							u.append(t, n);
						}), e.headers && new o(e.headers).forEach((n, t) => {
							u.append(t, n);
						}), u), p);

						const c = function(n, t) {
							if (r.headers.has(n)) {
								l[t] = r.headers.get(n) || undefined;
							}
						};

						if (isFunction((n = r.headers)?.has)) {
							if (r.headers.has('content-length')) {
								l.ax_size = Number(r.headers.get('content-length')) || 0;
							}

							if (fn(h, v, y)) {
								c(C, 'trace_host');
								c(I, 'trace_id');
								c(q, 'log_id');
							}
						}

						setTimeout(() => {
							d();
						}, 100);
					} catch (n) {}

					return r;
				}, n => {
					try {
						l.ax_status = '0';
						l.ax_duration = Date.now() - s;
						d();
					} catch (n) {}

					return Promise.reject(n);
				});
			};
		};
		const qn = [ 'SCRIPT', 'STYLE', 'META', 'HEAD' ];
		const Jn = function(n) {
			return {
				name: 'FMPMonitor',
				type: 'post',
				event: {
					ev_type: 'fmp',
					fmp: n,
				},
			};
		};
		var Un = function(n, r, t, e) {
			if (!n || e.indexOf(n.tagName) > -1) return 0;
			var o = n.children;
			var o = [].slice.call(undefined === o ? [] : o).reduceRight((n, t) => n + Un(t, r + 1, n > 0, e), 0);

			if (o <= 0 && !t) {
				if (!isFunction(n.getBoundingClientRect)) return 0;
				t = n.getBoundingClientRect() || {};
				n = t.top;
				t = t.height;
				if (n > window.innerHeight || t <= 0) return 0;
			}

			return o + 1 + 0.5 * r;
		};
		const Xn = function(n) {
			var t = __read(undefined === n ? [] : n);
			var n = t[0];
			var t = t.slice(1);
			return t && t.reduce((n, t) => {
				var r = __read(n, 2);
				const e = r[0];
				var n = r[1];
				var r = t.score - e.score;
				return [ t, t.time >= e.time && n.rate < r ? {
					time: t.time,
					rate: r,
				} : n ];
			}, [ n, {
				time: n == null ? undefined : n.time,
				rate: 0,
			} ])[1].time || 0;
		};
		var zn = function(v, s, l) {
			let n;

			if (undefined === v) {
				v = getDocument();
			}

			if (undefined === s) {
				s = getMutationObserver();
			}

			if (undefined === l) {
				l = (n = function() {
					const n = getPerformance();
					if (n && isObject(n.timing)) return n.timing;
				}()).navigationStart;
			}

			return function(n, r) {
				function t() {
					return o.push({
						time: Date.now() - e,
						score: Un(v && v.body, 1, true, i),
					});
				}

				var e = Date.now();
				var o = [];
				var i = qn.concat(n.ignoreTags || []);
				const u = __read(wn(false), 1)[0];
				var c = __read(pn(s, () => u(t)), 2);
				const f = c[0];
				const a = c[1];
				var n = function(n) {
					if (undefined === n) {
						n = 0;
					}

					a();
					const t = Xn(o);
					var n = Jn(t ? t + n : 0);

					if (r) {
						r(n);
					}

					return n;
				};
				var c = e - (l || 0);

				f(v, {
					subtree: false,
					childList: false,
				});
				return [ a, n, n.bind(null, c) ];
			};
		};
		var Gn = function(b, _, g, M, j) {
			if (undefined === b) {
				b = getXMLHttpRequest();
			}

			if (undefined === _) {
				_ = getFetch() && getWindow();
			}

			if (undefined === g) {
				g = getPerformanceObserver();
			}

			if (undefined === M) {
				M = getMutationObserver();
			}

			if (undefined === j) {
				j = getPerformance();
			}

			return function(n, t, r) {
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

				var o = n.prePerformanceObserver;
				var i = n.isAsync;
				var i = undefined === i ? 0 : i;
				var n = n.minValue;
				const u = undefined === n ? null : n;
				var n = o || {};
				var o = n.precollect;
				var c = undefined === o ? [] : o;
				var f = n.observer;
				var n = __read(yn(j), 5);
				const a = n[0];
				const v = n[1];
				const s = n[4];
				var n = __read(kn(v), 3);
				const l = n[0];
				var d = n[1];
				const h = n[2];
				var i = __read(Hn(_, b, g, M)(i ? [] : c, h, v), 3);
				const p = i[0];
				var m = i[1];
				const y = i[2];
				const w = function(n) {
					var t = s('first-contentful-paint')[0];
					var t = function(n, t, r, e, o) {
						if (e - r < 5e3) return null;
						o = o.length === 0 ? n : o[o.length - 1].end;
						return e - o < 5e3 ? null : Math.max(o, t);
					}((t ? t.startTime : Dn(a)) || 0, u || Dn(a) || 0, y(), v() + (n ? 0 : 5e3), p);

					return n ? t ? (e(), void n(Math.round(t))) : h(v() + 1e3) : (e(), t);
				};

				return [ function(n) {
					if (p.notSupport) return n();
					const t = p[p.length - 1];
					l(() => w(n), Math.max(y() + 5e3, t ? t.end : 0));
				}, p, h, function() {
					return !p.notSupport && w() || 0;
				} ];
			};
		};
		const $n = 'first-input';
		var Wn = function(t, o) {
			if (undefined === t) {
				t = getPerformanceObserver();
			}

			if (undefined === o) {
				o = getPerformance();
			}

			return function(n, r) {
				const e = __read(yn(o), 3)[2];
				(0, __read(mn(t, n => {
					const t = n.processingStart;
					var n = n.startTime;
					return r && r({
						name: 'FIDMonitor',
						fid: Math.round(t - n),
					});
				}, false), 1)[0])($n);
				return [ function() {
					var n = e($n)[0] || {};
					const t = n.processingStart;
					var n = n.startTime;
					return n ? Math.round(t - n) : 0;
				} ];
			};
		};
		const Vn = 'largest-contentful-paint';
		const Yn = [ 'keydown', 'click' ];
		var Kn = function(c) {
			if (undefined === c) {
				c = getPerformanceObserver();
			}

			return function(n, t) {
				var r = n.prePerformanceObserver;
				let e = 0;
				(r.precollect || []).forEach(n => {
					const t = n.entryType;
					var n = n.startTime;

					if (t === Vn) {
						e = n;
					}
				});
				var n = __read(mn(c, n => {
					n = n.startTime;
					e = n;
				}), 2);
				var r = n[0];
				const o = n[1];
				r(Vn);

				const i = function() {
					o();
					Yn.forEach(n => {
						window.removeEventListener(n, u, false);
					});
				};
				var u = function() {
					if (t) {
						t({
							name: 'LCPMonitor',
							lcp: e,
						});
					}

					i();
				};

				Yn.forEach(n => {
					window.addEventListener(n, u, false);
				});
				onBeforeUnload(i);
				return [ function() {
					return {
						lcp: e,
					};
				} ];
			};
		};
		var Qn = function(u) {
			if (undefined === u) {
				u = getPerformanceObserver();
			}

			return function(n) {
				const t = [];
				const r = n.isAsync;
				const e = n.prePerformanceObserver;
				const o = __read(mn(u, n => t.push(n)), 2);
				var n = o[0];
				const i = o[1];

				if (!r && e) {
					(e.precollect || []).forEach(n => {
						if (n.entryType === 'longtask') {
							t.push(n);
						}
					});
				}

				n('longtask');
				return [ function() {
					i();
					const n = t.reduce((n, t) => {
						t = t.duration;
						return n < t ? t : n;
					}, 0);
					return {
						name: 'MPFIDMonitor',
						mpfid: Math.round(n),
					};
				} ];
			};
		};
		const Zn = 'first-contentful-paint';
		const nt = 'first-paint';
		var tt = function(o, c) {
			if (undefined === o) {
				o = getPerformanceObserver();
			}

			if (undefined === c) {
				c = getPerformance();
			}

			return function(n, i) {
				function t() {
					const n = r('paint');
					return {
						fp: Ln(nt, n),
						fcp: Ln(Zn, n),
					};
				}

				const u = {};
				var r = __read(yn(c), 3)[2];
				const e = t();

				if (e.fcp && e.fp) {
					if (i) {
						i(e);
					}
				} else {
					(0, __read(mn(o, (n, t, r, e) => {
						const o = n.name;
						var n = n.startTime;
						u[o] = Math.round(n);

						if (u[nt] && u[Zn]) {
							if (i) {
								i({
									fp: u[nt],
									fcp: u[Zn],
								});
							}

							e.disconnect();
						}
					}, true, () => i && i(t())), 1)[0])('paint');
				}

				return [ t ];
			};
		};
		const rt = 'ResourcePerformanceMonitor';
		const et = function(n, t) {
			const r = [];
			if (n.forEach(n => {
				if (!(isFunction(t) && t(n))) {
					r.push(n);
				}
			}), r.length) {
				return {
					name: rt,
					type: 'post',
					event: {
						ev_type: 'resource_performance',
						resources: r,
					},
				};
			}
		};
		var ot = function(f, a) {
			if (undefined === f) {
				f = getPerformance();
			}

			if (undefined === a) {
				a = getPerformanceObserver();
			}

			return function(n, t) {
				function e(n) {
					if ((n = et(n, i)) && t) {
						t(n);
					}
				}

				var r = (n = undefined === n ? {} : n).isAsync;
				const o = undefined === r ? 0 : r;
				var r = n.observe;
				var r = undefined !== r && r;
				var i = n.checkIgnore;
				var n = __read(yn(f), 4);
				const u = n[2];
				var n = n[3];
				const c = function() {
					return u('resource');
				};

				if (o) {
					n();
				}

				if (r) {
					e(c());
					(0, __read(mn(a, (n, t, r) => t === 0 && e(r)), 1)[0])('resource');
				}

				return [ function() {
					return et(c());
				} ];
			};
		};
		var it = {
			ev_type: 'perf',
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
			upload_reason: 'sample',
			network_type: '',
			timing: {},
			navigation_timing: {},
			navigation: {},
			resources: [],
		};
		const ut = 'PerformanceMonitor';
		var ct = function(n, t) {
			if (n && t) {
				const r = n.domainLookupEnd;
				const e = n.domainLookupStart;
				const o = n.connectEnd;
				const i = n.connectStart;
				const u = n.responseEnd;
				const c = n.responseStart;
				var f = n.requestStart;
				const a = n.domComplete;
				const v = n.domLoading;
				const s = n.domInteractive;
				const l = n.navigationStart;
				const d = n.loadEventEnd;
				const h = n.loadEventStart;
				const p = n.secureConnectionStart;
				var f = {
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
					redirect: n.redirectEnd - n.redirectStart,
				};

				if (p) {
					f.ssl = o - p;
				}

				t = t('navigation')[0];

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
		};
		var ft = function() {
			let n = true;
			onDocumentReady(() => n = false);
			return function() {
				return n;
			};
		};
		var at = function(r) {
			let e = true;
			return [ function() {
				return e;
			}, function(n, t) {
				if (!n) {
					if (e) return;
					e = false;
				}

				if (r) {
					r(t);
				}
			} ];
		};
		var vt = function(n, t, r, e) {
			if (!n) return 0;
			let o;
			const i = __read(n, 3);
			const u = i[0];
			var n = i[1];
			const c = i[2];
			if (u(), t) return n().event.fmp || 0;

			try {
				o = [ [ W(1), function() {
					return c().event.fmp;
				} ], [ W(2), function() {
					return e();
				} ] ];
				return function(n) {
					for (let t = 0; t < o.length;) {
						if (o[t][0](n)) return o[t][1](n);
						t += 1;
					}
				}(r) || 0;
			} catch (n) {
				return 0;
			}
		};
		var st = function(n) {
			let t = { ...n };
			return [ function(n) {
				n = (t = n ? { ...t, ...n } : t).fmp;
				t.fmp = n ? Math.max(Math.round(n), t.fcp || 0) : undefined;
			}, function() {
				return {
					name: ut,
					type: 'post',
					event: t,
				};
			}, function(n) {
				return t = { ...n };
			} ];
		};
		const lt = 'StaticErrorMonitor';

		function dt(n, t) {
			const r = t.length;
			if (r) {
				for (let e = r - 1; e > -1; e--) {
					const o = t[e];
					if (o.name === n) return o;
				}
			}
		}

		function ht(n) {
			n = (t = n).tagName.toLowerCase() === 'link' ? 'href' : 'src';
			return isFunction(t.getAttribute) ? t.getAttribute(n) || '' : t[n] || '';
			let t;
		}

		function hookStaticError(o, i, u) {
			if (undefined === o) {
				o = getWindow();
			}

			if (undefined === i) {
				i = getPerformance();
			}

			if (undefined === u) {
				u = location === null || undefined === location ? undefined : location.href;
			}

			return function(n, t) {
				const r = __read(yn(i), 3)[2];
				const e = function() {
					return r('resource');
				};

				if (o) {
					o.addEventListener('error', n => {
						n = mt(e(), n, u || '');

						if (n && t) {
							t(n);
						}
					}, false);
				}

				return [ function(n) {
					return mt(e(), n, u || '');
				} ];
			};
		}

		var mt = function(n, t, r) {
			t = t || window.event || {};

			try {
				e = t.target || t.srcElement || {};
			} catch (n) {
				return;
			}

			t = e.tagName;

			if (isString(t)) {
				var e = ht(e);
				if (e && e !== r) {
					return {
						name: lt,
						type: 'get',
						event: function(n, t, r) {
							const e = p(n);
							const o = {
								ev_type: 'static',
								st_type: t,
								st_src: n,
								st_protocol: e.protocol,
								st_domain: e.hostname,
								st_path: e.pathname,
							};
							const i = r && dt(e.href, r);
							if (i) o.timing = i;
							return o;
						}(e, t.toLowerCase(), n),
					};
				}
			}
		};
		const yt = 'StaticSRIErrorMonitor';

		function wt(r, e, o) {
			if (undefined === r && (r = getWindow()), undefined === e && (e = function() {
				if ('Promise' in window) return Promise;
			}()), undefined === o && (o = getFetch()), r && o && e) {
				return function(n, t) {
					n = Mt(gt(t, n.onError, e, o), r);
					r.addEventListener('error', n, false);
					return [ n ];
				};
			}
		}

		function makeTrackerOnElement(el) {
			if (undefined === el) {
				el = getDocument();
			}

			return function(config) {
				const [ r, e ] = __read(jt(100), 2);
				const [ getEvents, saveEvent ] = __read(makeEventMemo(config.maxBreadcrumbs), 2);
				const t2 = annotateEventWithPath(saveEvent);

				if (el) {
					el.addEventListener('click', r('click', withCaught(t2, 'dom')));
					el.addEventListener('keypress', e(withCaught(t2, 'dom')));
				}

				return [ getEvents ];
			};
		}

		function _t(u) {
			if (undefined === u) {
				u = getWindow();
			}

			return function(n, r) {
				const t = n.getBreadcrumbs;
				var e = n.enableCatchGlobalJSError;
				const o = undefined === e || e;
				var e = n.catchUnhandledRejection;
				var e = undefined === e || e;
				var n = n.release;
				const i = kt(undefined === n ? '' : n, () => t && t() || []);
				var n = function(t) {
					return function(n) {
						n = t(n);
						n = n && i(n);

						if (n && r) {
							r(n);
						}
					};
				};

				if (u) {
					if (o) {
						u.addEventListener('error', n(St));
					}

					if (e) {
						u.addEventListener('unhandledrejection', n(Pt));
					}
				}

				return [ function(n) {
					let t = null;
					return (t = Object.prototype.toString.call(n) === '[object ErrorEvent]' ? St(n) : Object.prototype.toString.call(n) === '[object PromiseRejectionEvent]' ? Pt(n) : n) && i(t);
				} ];
			};
		}

		var gt = function(i, t, u, r) {
			return function(o) {
				let n;

				if (isFunction(u.all)) {
					u.all([ r(o, {
						cache: 'force-cache',
					}).then(n => n.ok ? n : new Response()), (n = o + '?vt=' + Date.now(), r(n, {
						cache: 'no-store',
					}).then(n => n.ok ? n : new Response())) ]).then(n => {
						var n = __read(n, 2);
						const r = n[0];
						const e = n[1];
						if (r.status === 200 && e.status === 200) {
							return u.all([ r.text(), e.text() ]).then(n => {
								const t = n[0] || r.status + ',' + e.status;
								return [ t.length, n[1].length, t, o ];
							});
						}
					}).then(n => {
						let t; let r; let e;

						if (n && i) {
							r = (t = __read(n, 3))[0];
							e = t[1];

							if (t[2] && r !== e) {
								i({
									name: yt,
									type: 'get',
									event: function(n, t, r, e) {
										return {
											ev_type: 'static_sri',
											sri: {
												error_file_size: n,
												real_file_size: t,
												error_file_context: r,
												static_file_src: e,
												static_file_url: p(e).href || '',
											},
										};
									}.apply(undefined, __spreadArray([], __read(n), true)),
								});
							}
						}
					}).catch(n => {
						if (t) {
							t(n);
						}
					});
				}
			};
		};
		var Mt = function(e, o) {
			return function(n) {
				let t;
				const r = n || o.event || {};

				try {
					t = r.target || r.srcElement || {};
				} catch (r) {
					return;
				}

				if (isFunction((n = t).getAttribute) ? n.getAttribute('integrity') : n.integrity) {
					n = isFunction((n = t).getAttribute) ? n.getAttribute('src') : n.src || n.href || '';
					t = ((t = t.tagName) === null || undefined === t ? undefined : t.toLowerCase()) || '';

					if (n && t && n !== location.href) {
						e(n);
					}
				}
			};
		};
		var jt = function(o) {
			function i(t, r) {
				let e;
				return function(n) {
					timeout = undefined;

					if (n && e !== n) {
						r({
							event: e = n,
							name: t,
						});
					}
				};
			}

			let timeout;
			return [ i, function(e) {
				return function(event) {
					let t;

					try {
						t = event.target;
					} catch (n) {
						return;
					}

					const r = t && t.tagName;

					if (r && (r === 'INPUT' || r === 'TEXTAREA' || t.isContentEditable)) {
						if (!timeout) {
							i('input', e)(event);
						}

						clearTimeout(timeout);
						timeout = window.setTimeout(() => {
							timeout = undefined;
						}, o);
					}
				};
			} ];
		};
		var withCaught = function(fn, r) {
			return function(arg) {
				if (r) {
					try {
						fn(arg);
					} catch (n) {}
				}
			};
		};
		var annotateEventWithPath = function(fn) {
			return function(n) {
				let t;

				try {
					t = n.event.target ? extractDomPath(n.event.target) : extractDomPath(n.event);
				} catch (n) {
					t = '<unknown>';
				}

				if (t.length !== 0) {
					fn({
						category: 'ui.' + n.name,
						message: t,
					});
				}
			};
		};
		var makeEventMemo = function(t = 20) {
			let r = [];
			return [ function() {
				return r;
			}, function(n) {
				n = { ...n, timestamp: new Date().getTime() };
				r = t >= 0 ? [ ...r, n ].slice(-t) : [ ...r, n ];
			} ];
		};
		const Et = 'JSExceptionMonitor';
		var St = function(n) {
			n = n.error;
			if (n) return n;
		};
		var Pt = function(n) {
			let t;

			try {
				if ('reason' in n) { t = n.reason } else if ('detail' in n && 'reason' in n.detail) {
					t = n.detail.reason;
				}
			} catch (n) {}

			if (t) return t;
		};
		var kt = function(r, e) {
			return function(n) {
				let t;
				if (function(n) {
					switch (Object.prototype.toString.call(n)) {
						case '[object Error]':
						case '[object Exception]':
						case '[object DOMError]':
						case '[object DOMException]':
							return 1;

						default:
							return n instanceof Error;
					}
				}(n)) { t = n } else {
					if (isObject2(n) || isEvent(n)) {
						try {
							t = {
								message: JSON.stringify(n),
							};
						} catch (n) {}
					}

					if (isString(n)) {
						t = {
							message: n,
						};
					}
				}

				if (t) {
					n = {
						ev_type: 'js_exception',
						exception: {
							message: (n = t).message,
							name: n.name,
							fileName: n.fileName,
							lineNumber: n.lineNumber,
							columnNumber: n.columnNumber,
							stack: n.stack,
							stacktrace: n.stacktrace,
							framesToPop: n.framesToPop,
						},
						release: r,
						breadcrumbs: e(),
					};
					return {
						name: Et,
						type: 'post',
						event: n,
					};
				}
			};
		};
		var Rt = (Dt.prototype.sendEvent = function(n) {
			n = this.getEventToBeSent(n);

			if (n) {
				this.idleSendEvent(n);
			}
		}, Dt.prototype.getEventToBeSent = function(n) {
			n = this._modifyEvent(n);
			if (this._shouldSend(n)) return n;
		}, Dt.prototype._modifyEvent = function(n) {
			return n;
		}, Dt.prototype._shouldSend = function(n) {
			return false;
		}, Dt.prototype._send = function(n) {}, Dt.prototype.idleSendEvent = function(n) {
			this._send(n);
		}, Dt);

		function Dt() {}

		let At;
		let It = (__extends(Ct, At = Rt), Ct.prototype.send = function() {
			clearTimeout(this.n);
			this.t();
		}, Ct.prototype.t = function() {
			let n; let t;

			if ((n = this.e) !== null && undefined !== n && n.length && (t = this.transport) !== null && undefined !== t && t.batch) {
				this.transport.batch(this.e);
				this.e.length = 0;
			}
		}, Ct.prototype.o = function(n, t, r) {
			if (this.transport) {
				if (this.transport.supportBatch) {
					if (r) {
						t.serviceType = r;
					}

					return this.i(t);
				}

				this.transport[n](t, r);
			}
		}, Ct.prototype.i = function(n) {
			const t = this;
			if (clearTimeout(this.n), this.e.push(n), this.e.length >= this.u) return this.t();
			this.n = setTimeout(() => {
				t.t();
			}, this.c);
		}, Ct.prototype.f = function() {
			window.addEventListener('unload', this.t.bind(this));
		}, Ct);

		function Ct(n) {
			const t = At.call(this) || this;
			t.e = [];
			t.f();
			t.c = n.commonParams.batchReportWait || 1e3;
			t.u = n.commonParams.maxBatchReportLength || 10;
			return t;
		}

		function Ht(n, t) {
			return isObject(n) ? isObject(t) ? { ...n, overrides: t } : n : {};
		}

		function Lt(n, t) {
			let r; let e;

			if (isObject(n)) {
				try {
					for (var o = __values(Object.keys(n)), i = o.next(); !i.done; i = o.next()) if (typeof n[i.value] !== t) return;
				} catch (n) {
					r = {
						error: n,
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
			const t = n.base;
			var n = n.info;
			return {
				jsBase: t,
				jsInfo: n != null ? n : {},
				serviceType: n.ev_type,
			};
		}

		const Bt = 'CustomMonitor';

		function Ft(n) {
			if (function(n) {
				if (n != null && typeof n === 'object' && typeof n.eventName === 'string' && n.eventName !== '') {
					const t = n.metrics;
					const r = n.category;
					var n = n.timing;
					return !t || Lt(t, 'number') ? (!r || Lt(r, 'string')) && !(n && !Lt(n, 'number')) : undefined;
				}
			}(n)) {
				return {
					name: Bt,
					event: {
						ev_type: 'custom',
						data: n,
					},
					type: 'post',
				};
			}
		}

		const qt = {
			supportBatch: true,
			terminatedPreCollect: nothing,
			config: nothing,
			cover: nothing,
			accumulate: nothing,
			reportDirectly: nothing,
			batch: nothing,
			average: nothing,
			customReport: nothing,
		};
		const Jt = function(n) {
			const e = this;

			this.terminatedPreCollect = function(n) {
				let t; let r;

				if ((r = (t = e.log).terminatedPreCollect) !== null && undefined !== r) {
					r.call(t, n);
				}
			};

			this.config = function(n) {
				let t; let r;

				if ((r = (t = e.log).config) !== null && undefined !== r) {
					r.call(t, n);
				}
			};

			this.cover = function(n, t) {
				e.log.cover(n, t);
			};

			this.accumulate = function(n, t) {
				e.log.accumulate(n, t);
			};

			this.reportDirectly = function(n, t) {
				e.log.reportDirectly(n, t);
			};

			this.batch = function(n) {
				let t; let r;

				if ((r = (t = e.log).batch) !== null && undefined !== r) {
					r.call(t, n);
				}
			};

			this.average = function(n, t) {
				e.log.average(n, t);
			};

			this.customReport = function(n) {
				let t; let r;

				if ((r = (t = e.log).customReport) !== null && undefined !== r) {
					r.call(t, n);
				}
			};

			this.log = (n = n.transport) !== null && undefined !== n ? n : qt;
			this.supportBatch = isFunction(this.log.batch);
		};

		let Ut;
		const Xt = ((rr = {})[Et] = [ 'exception.name', 'exception.message', 'exception.stack' ], rr[lt] = [ 'st_src', 'st_type', 'st_domain', 'st_path' ], rr[Bn] = [ 'ax_url', 'ax_status', 'ax_type' ], rr[jn] = [ 'ax_url', 'ax_status', 'ax_type' ], rr);
		const zt = function(n, t) {
			let r;
			let e;
			var t = t.split('.');
			let o = n;

			try {
				for (var i = __values(t), u = i.next(); !u.done; u = i.next()) {
					const c = u.value;
					if (o == null) return;
					o = o[c];
				}
			} catch (n) {
				r = {
					error: n,
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
		};
		const Gt = (__extends($t, Ut = It), $t.prototype._shouldSend = function(n) {
			if (!isObject(n) || !n.event) return true;
			let t = this.options.monitors;

			if (n.name === jn || n.name === Bn) {
				const r = S(z || []);
				if (r && r.test(n.event.ax_url)) return true;
			}

			return n.name === jn || n.name === Bn ? function(n) {
				const r = n.sendParams;
				let t = n.ajaxMonitor;

				if (isArray(n = t.whitelistUrls) && n.length > 0) {
					var e = S(t.whitelistUrls || []);
					return !(e && e.test(r.event.ax_url));
				}

				if ((e = S(t.ignore || [])) && e.test(r.event.ax_url)) return true;
				if ((e = t.statusCodeSample) && hasOwnProperty(e, r.event.ax_status)) return R(e[r.event.ax_status]);

				if (t = t.requestUrlSample) {
					let o = true;
					let i = true;
					if (t.forEach(n => {
						let t;

						if (!o) {
							if ((t = S([ n.url ])) != null && t.test(r.event.ax_url)) {
								o = false;
								i = R(n.sampleRate);
							}
						}
					}), o) return i;
				}

				return false;
			}({
				sendParams: n,
				ajaxMonitor: t.AjaxMonitor,
			}) : n.name === ut || n.name !== lt || (n = {
				sendParams: n,
				staticErrorMonitor: t.StaticErrorMonitor,
			}, t = n.sendParams, !(n = S(n.staticErrorMonitor.ignore || [])) || !n.test(t.event.st_src));
		}, $t.prototype._modifyEvent = function(n) {
			if (!n || !isObject(n)) return {};
			let t;
			let r;
			let e;
			let o = this.options.monitors;
			if (n.name !== ut) return n;
			var i = (i = {
				sendParams: n,
				performanceMonitor: o.PerformanceMonitor,
			}, n = i.sendParams, (o = i.performanceMonitor) ? h() ? (i = n.event.isAsync ? n.event.load > o.spaSlowSessionTime : (t = window.performance.timing).loadEventEnd - t.navigationStart > o.slowSessionTime, isArray((t = n.event)?.resources) && (r = n.event.resources, e = S(o.geckoUrls || []), r.forEach((n, t) => {
				if (r[t] && isObject(r[t]) && isFunction(r[t].toJSON)) {
					r[t] = r[t].toJSON();
					r[t].is_gecko = e && e.test(n.name || '') ? '1' : '0';
				}
			})), o.webIDHitStaticResource || o.sampleHitStaticResource ? n.event.upload_reason = 'sample' : i ? n.event.upload_reason = 'slow_session' : ((i = n.event) === null || undefined === i || delete i.resources, n.event.has_resource = 0), n) : {} : n);

			if (!((n = i.event) === null || undefined === n)) {
				delete n.resources;
			}

			return i;
		}, $t.prototype._send = function(n) {
			if (n && n.event && n.name && this.transport) {
				if (!this.deDup(n)) {
					this.previousOptions = {
						count: 0,
						name: n.name,
						options: JSON.parse(JSON.stringify(n)),
					};
					this.sendByTypes(n);
				}
			}
		}, $t.prototype.normalizeOptions = function(n) {
			return t({}, this.options, n);
		}, $t.prototype.sendByTypes = function(n) {
			let t;

			if (this.transport) {
				t = this.a(n);

				if (n.name === ut) {
					this.o('cover', t, n.event.ev_type);
				}

				if ([ lt, rt, jn, Bn, Et, yt ].indexOf(n.name) > -1) {
					this.o('reportDirectly', t, n.event.ev_type);
				}

				if (n.name === 'CustomMonitor') {
					this.o('customReport', (!(n = n.event.data).hasOwnProperty('canSample') && n.hasOwnProperty('level') && (n.canSample = +n.level == 0 ? 0 : 1), n));
				}
			}
		}, $t);

		function $t(n) {
			const i = Ut.call(this, n) || this;
			i.previousOptions = {
				count: 0,
			};

			i.setTransport = function(n) {
				i.transport = new Jt({
					transport: n.transport,
				});
				i.preQueue.forEach(n => {
					Ut.prototype.sendEvent.call(i, n);
				});
			};

			i.updateConfig = function(n) {
				i.options = i.normalizeOptions(n);
			};

			i.sendEvent = function(n) {
				if (i.transport) Ut.prototype.sendEvent.call(i, n); else i.preQueue.push(n);
			};

			i.getEventToBeSent = function(n) {
				return Ut.prototype.getEventToBeSent.call(i, n);
			};

			i.flushCacheData = function() {
				const n = i.v();
				let t = {};

				if (n) {
					(t = i.a(n)).serviceType = t.jsInfo.ev_type;
				}

				i.previousOptions = {
					count: 0,
				};
				return t;
			};

			i.v = function() {
				var n = i.previousOptions;
				const t = n.count;
				var n = n.options;

				if (t && n && n.event) {
					n.event.js_repeat_count = t;
					return n;
				}
			};

			i.s = function() {
				const n = i.v();

				if (n) {
					i.sendByTypes(n);
					i.previousOptions = {
						count: 0,
					};
				}
			};

			i.deDup = function(n) {
				let t;
				let r;
				const e = Object.keys(Xt).indexOf(n.name) > -1;
				const o = i.previousOptions.name === n.name;

				if (e && o && (t = i.previousOptions.options, ((n = Xt[(r = n).name]) == null ? undefined : n.length) && n.every(n => JSON.stringify(zt(t == null ? undefined : t.event, n)) === JSON.stringify(zt(r == null ? undefined : r.event, n))))) {
					i.previousOptions.count++;
					return false;
				}

				i.s();
			};

			i.terminated = function() {
				setTimeout(() => {
					let n; let t;
					(t = (n = i.transport)?.terminatedPreCollect)?.call?.({});
				}, 1e3);
			};

			i.terminatedPreCollect = function() {
				if (documentReadyStateComplete()) return i.terminated();
				window.addEventListener('load', i.terminated);
			};

			i.a = function(n) {
				var t = n.overrides || {};
				var r = t.context;
				const e = function(n, t) {
					const r = {};

					for (o in n) {
						if (Object.prototype.hasOwnProperty.call(n, o) && t.indexOf(o) < 0) {
							r[o] = n[o];
						}
					}

					if (n != null && typeof Object.getOwnPropertySymbols === 'function') {
						for (var e = 0, o = Object.getOwnPropertySymbols(n); e < o.length; e++) {
							if (t.indexOf(o[e]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[e])) {
								r[o[e]] = n[o[e]];
							}
						}
					}
					return r;
				}(t, [ 'context' ]);
				var t = i.options.commonParams;
				var r = { ...isObject(t.context) ? t.context : {}, ...isObject(r) ? r : {} };
				var r = { ...t, context: r };

				return { jsBase: r,
					jsInfo: n.event, ...e };
			};

			i.l = function() {
				window.addEventListener('unload', i.s.bind(i));
			};

			i.options = n;
			i.preQueue = [];
			i.terminatedPreCollect();
			i.l();
			return i;
		}

		const Wt = function() {
			let n = '';

			try {
				n = function(n, t) {
					let r; let e;
					if (!n || !t) return '';
					var n = n.split(';');
					const o = {};

					try {
						for (var i = __values(n), u = i.next(); !u.done; u = i.next()) {
							const c = u.value.split('=');
							const f = isString(c[0]) && c[0].trim();

							if (f && isString(c[1])) {
								o[f] = c[1].trim();
							}
						}
					} catch (n) {
						r = {
							error: n,
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

					return o[t] || '';
				}(document.cookie, 'MONITOR_WEB_ID');
			} catch (n) {}

			return n;
		};

		function Vt(n) {
			return _({}, {
				commonParams: {
					release: '',
					version: '',
					hostname: window.location.hostname,
					protocol: window.location.protocol.slice(0, -1),
					url: window.location.href,
					pid: location.pathname,
					screen_resolution: P(),
					network_type: k(),
					bid: '',
					context: {},
					slardar_web_id: Wt() || V,
					performanceAuto: false,
					region: 'cn',
					env: 'production',
					maxBatchReportLength: 10,
					batchReportWait: 1e3,
				},
				flags: {
					hookXHR: false,
					hookFetch: false,
					enableFMP: false,
					enablePerformance: false,
					enableResourcePerformance: false,
					enableStaticError: false,
					enableCatchJSError: false,
				},
				monitors: {
					BaseMonitor: {
						appTypeSetting: {
							type: 0,
							SPA: '',
							renderType: 0,
						},
					},
					AjaxMonitor: {
						webIDHit: true,
						sampleHitTrace: true,
						ignore: z,
						abort: true,
						whitelistUrls: [],
						statusCodeSample: {},
						requestUrlSample: [],
						errorRequestCollect: true,
					},
					PerformanceMonitor: {
						webIDHitStaticResource: true,
						sampleHitStaticResource: R(X),
						slowSessionTime: G,
						spaSlowSessionTime: $,
						geckoUrls: [],
						interval: 0,
						checkPoint: [],
					},
					StaticErrorMonitor: {
						ignore: z,
					},
					FMPMonitor: {},
				},
				heatmap: {
					openList: [],
				},
			}, n);
		}

		function Yt() {
			return Date.now() - performance.timing.navigationStart;
		}

		const Kt = (Qt.prototype.run = function(e) {
			const n = this;
			this.enable = false;

			function o() {
				let r;

				if (n.enable) {
					r = Yt();

					if (!t) {
						e({
							start: t = r,
							end: r,
						});
					}

					setTimeout(() => {
						const n = Yt();
						const t = n - r;

						if (t - i < 10) {
							if (i < 16) i *= 2; else if (i < 25) i += 1; else i = 25;
						} else if (t > 50) {
							i = Math.max(1, i / 2);
						}

						if (t > 50) {
							e({
								start: r,
								end: n,
							});
						}

						o();
					}, i);
				}
			}

			let t;
			var i = 1;
			o();
		}, Qt.prototype.stop = function() {
			this.enable = true;
		}, Qt);

		function Qt() {
			this.enable = true;
		}

		function Zt() {
			for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

			var r = n[2];
			const i = Gn.apply(undefined, __spreadArray([], __read(n), true));
			if (r) return i;

			if (i) {
				var r = __read(ir(), 2);
				const u = r[0];
				const c = r[1];
				return function(n, t) {
					var t = __read(i(n, t, c), 4);
					const r = t[0];
					const e = t[1];
					const o = t[2];
					var t = t[3];
					u(n => {
						e.push(n);
						o(n.end + 5e3);
					});
					return [ function(n) {
						e.notSupport = true;
						r(n);
					}, e, o, t ];
				};
			}
		}

		function nr(n) {
			let t;
			const r = _({}, (t = (n = undefined === n ? {} : n).commonParams) !== null && undefined !== t ? t : {});

			if (!isObject(n)) return r;
			const e = [ 'bid', 'context', 'pid', 'slardar_web_id', 'performanceAuto', 'region', 'env', 'release' ];
			f(n, (n, t) => {
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
			let t;
			const r = _({}, (t = (n = undefined === n ? {} : n).flags) !== null && undefined !== t ? t : {});

			if (!isObject(n)) return r;
			const e = [ 'hookXHR', 'hookFetch', 'enableFMP', 'enablePerformance', 'enableStaticError', 'enableCatchJSError' ];
			f(n, (n, t) => {
				if (l(e, n)) {
					r[n] = t;
				}
			});
			return r;
		}

		let rr;
		let er;
		let or;
		var ir = function() {
			const t = new Kt();
			return [ function(n) {
				return t.run(n);
			}, function() {
				return t.stop;
			} ];
		};
		var Rt = function() {
			function v() {
				(l = new Gt(h)).updateConfig(h);

				const n = function() {
					let n;
					let t;
					let r;
					let e;
					const o = h.flags;
					var i = h.commonParams;
					const u = h.monitors;
					const c = l && l.sendEvent;

					if (c) {
						if (o.enableCatchJSError) {
							r = __read(invoke2(makeTrackerOnElement, {}, c), 1)[0];
							e = __read(invoke2(_t, {
								getBreadcrumbs: r,
							}, c), 1)[0];
						}

						let f;
						var i = {
							commonParams: {
								web_id: i.slardar_web_id,
								bid: i.bid,
							},
							ajaxMonitorOptions: u.AjaxMonitor,
						};

						if (o.hookXHR) {
							invoke2(hookXHR, i, c);
						}

						if (o.hookFetch) {
							invoke2(hookFetch, i, c);
						}

						if (o.enableStaticError) {
							invoke2(hookStaticError, null, c);
						}

						if (o.enablePerformance) {
							i = {
								renderType: 1,
								TTIMonitor: Zt,
								prePerformanceObserver: {
									precollect: [],
									observer: undefined,
								},
							};

							if (o.enableFMP) {
								f = invoke2(zn, u.FMPMonitor);
								f = __read(invoke2(Nn, { ...i, fmpMonitor: f }, c), 3)[2];
							} else {
								n = (a = __read(invoke2(Nn, i, c), 4))[1];
								f = a[2];
								t = a[3];
							}
						}

						invoke2(wt, {
							onError(n) {
								if (e) {
									n = Ht(e(n), undefined);
									c(n);
								}
							},
						}, c);
						var a = __read(invoke2(ot, {}, c), 1)[0];
						return [ e, a, f, n, t ];
					}
				}();

				if (l) {
					l.setTransport({
						transport: p.transport || window.jsIESLiveTimingMonitor,
					});
				}

				return n;
			}

			function s() {
				var n = {
					commonParams: nr(p),
					flags: tr(p),
					monitors: function(n) {
						const t = n.setting;
						var n = _({
							AjaxMonitor: {},
							PerformanceMonitor: {},
							StaticErrorMonitor: {},
							BaseMonitor: {
								appTypeSetting: {},
							},
							FMPMonitor: {},
						}, t.monitors);

						if (t.ajaxWhitelistUrls && isArray(t.ajaxWhitelistUrls)) {
							n.AjaxMonitor.whitelistUrls = (n.AjaxMonitor.whitelistUrls || []).concat(t.ajaxWhitelistUrls);
						}

						if (t.ignoreAjax && isArray(t.ignoreAjax)) {
							n.AjaxMonitor.ignore = (n.AjaxMonitor.ignore || []).concat(t.ignoreAjax);
						}

						if (t.fmpIgnoreTags && isArray(t.fmpIgnoreTags)) {
							n.FMPMonitor.ignoreTags = t.fmpIgnoreTags;
						}

						if (hasOwnProperty(t, 'geckoUrls')) {
							n.PerformanceMonitor.geckoUrls = t.geckoUrls;
						}

						if (t.ignoreStatic && isArray(t.ignoreStatic)) {
							n.StaticErrorMonitor.ignore = (n.StaticErrorMonitor.ignore || []).concat(t.ignoreStatic);
						}

						return n;
					}({
						setting: p,
					}),
				};
				var n = _(r, n);

				h = n;
			}

			let l;
			let d;
			let t;
			var r = Vt({
				commonParams: {
					version: '1.1.61',
				},
			});
			var h = r;
			var p = {};
			const m = (t = true, function(n) {
				if (l && l.transport) {
					if (n.bid) {
						if (t) delete n.bid; else t = false;
					}

					if (Object.keys(n).filter(n => [ 'bid', 'pid', 'context', 'env', 'release' ].indexOf(n) > -1).length) {
						l.transport.config(n);
					}
				}
			});
			return function() {
				for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

				let r;
				let e = __read(d || [], 5);
				const o = e[0];
				let i = e[1];
				const u = e[2];
				const c = e[3];
				const f = e[4];

				if (n[0] === 'config') {
					if (!isObject(n[1])) return;
					e = n[1];
					p = { ...p || {}, ...e || {} };
					m(p);
					s();
					return void (l ? l.updateConfig(h) : d = v());
				}

				if (n[0] === 'flushCacheData') return l && l.flushCacheData();
				if (n[0] === 'send') return l && l.send();
				if (n[0] === 'getCommonParams') return h.commonParams;

				if (n[0] === 'getLatestPerformance') {
					var a = u && u();
					var a = a && (l == null ? undefined : l.getEventToBeSent(a));
					return Nt({
						base: h.commonParams,
						info: { ev_type: 'perf', ...a && a.event || {} },
					});
				}

				if (n[0] !== 'getLatestResource') return n[0] === 'performanceInit' ? f && f() : n[0] === 'performanceSend' ? c && c() : void (l && l.sendEvent && (n[0] !== 'captureException' ? n[0] === 'emit' && n[1] === 'custom' && (r = Ft(n[2])) && l.sendEvent(r) : o && (r = Ht(o(n[1]), n[2]), l.sendEvent(r))));
				i = i && i();
				a = i && (l == null ? undefined : l.getEventToBeSent(i));
				return Nt({
					base: h.commonParams,
					info: { ev_type: 'resource_performance', ...a && a.event || {} },
				});
			};
		};

		rr = window;
		It = 'SlardarHybrid';

		if (!(!rr || (or = rr[It]) !== null && undefined !== or && or.r)) {
			er = Rt();
			(or = function() {
				for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];

				try {
					return er.apply(undefined, __spreadArray([], __read(n), true));
				} catch (n) {}
			}).version = '1.1.61';
			or.r = 1;
			rr[It] = or;
		}

		var r = t[isArray];

		t[isArray] = function(n, t) {
			if (n == __spreadArray) {
				d(isEvent, t);
			}

			if (n == v) {
				d(hasOwnProperty, t);
			}

			return r.apply(null, arguments);
		};

		d(isObject2, n => {
			t[extendStatics].apply(null, n);
		});
		t[isArray] = r;
		__extends = 1;
	}, 1);
}

function s(n) {
	i.push(n);
}

function l(n) {
	u.push(n);
}

function d(n, t) {
	for (let r = 0; r < n.length; r++) t(n[r]);
}
