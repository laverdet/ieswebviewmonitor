function i() {}

function t(i, n) {
	i.nativeBase = i.nativeBase || {};
	i.nativeBase.url = location.href;
	i.nativeBase.navigation_id = navigation_id;

	if (n) {
		i.serviceType = n;
	}

	return i;
}

function n(i) {
	a('iesLiveTimingMonitorReportCustom', i);
}

let o;
const r = function(i, n, t) {
	if (typeof (t = undefined === t ? window : t)[i] === 'function') {
		t[i].apply(t, n);
	}
};
const navigation_id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, i => {
	const n = 16 * Math.random() | 0;
	return (i === 'x' ? n : 3 & n | 8).toString(16);
});
function c(i, n) {
	if (!i) return i;
	i = Object.prototype.toString.call(i) === '[object Array]' ? i.map(i => t(i, n)) : t(i, n);

	try {
		return JSON.parse(JSON.stringify(i));
	} catch (i) {}
}
function a(i, n, t) {
	let o;

	if (x()) {
		if (o = c(n, t)) {
			if (window.webkit) (t = (n = (t = (n = window.webkit)?.messageHandlers)?.[i])?.postMessage)?.call?.(o); else r(i, [ o ]);
		}
	}
}
function x() {
	return window.location.href !== 'about:blank';
}
let l = 'iesLiveTimingMonitor';
const v = l + 'Batch';
const f = l + 'ReportStage';
const m = l + 'InitTimeName';
const s = {
	terminatedPreCollect(i) {
		a('iesLiveTimingMonitorTerminatedPreCollect', i);
	},
	config(i) {
		a('iesLiveTimingMonitorConfig', i);
	},
	cover(i, n) {
		a('iesLiveTimingMonitorCover', i, n);
	},
	accumulate(i, n) {
		a('iesLiveTimingMonitorAccumulate', i, n);
	},
	reportDirectly(i, n) {
		a('iesLiveTimingMonitorReportDirectly', i, n);
	},
	batch: (l = (l = window.webkit)?.messageHandlers) !== null && undefined !== l && l[v] || window[v] ? function(i) {
		a(v, i);
	} : null,
	average(i, n) {
		a('iesLiveTimingMonitorAverage', i, n);
	},
	customReport: n,
};

window.jsIESLiveTimingMonitor = s;
window.jsIESWebviewMonitor = {
	customReport: n,
};
window.bdPerformance = {
	paintEntries: [],
	setFirstPaintTiming: i,
	setFirstMeaningfulPaintTiming: i,
};
o = 'DOMContentLoaded';

if (window) {
	window.addEventListener(o, () => {
		a(f, {
			stage: o,
		}, 'pv');
		setTimeout(() => {
			let i;

			if (window.history.length <= 1) {
				i = {
					url: location.href,
					duration: performance.now(),
				};
				a(m, i);
			}
		});
	});
}

r('SlardarHybrid', [ 'config', {
	transport: s,
} ]);
