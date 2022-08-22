function i() {}

function t(i, n) {
  i.nativeBase = i.nativeBase || {};
  i.nativeBase.url = location.href;
  i.nativeBase.navigation_id = u;

  if (n) {
    i.serviceType = n;
  }

  return i;
}

function n(i) {
  a("iesLiveTimingMonitorReportCustom", i);
}

var o,
    e = window,
    r = function (i, n, t) {
  if ("function" == typeof (t = undefined === t ? e : t)[i]) {
    t[i].apply(t, n);
  }
},
    u = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (i) {
  var n = 16 * Math.random() | 0;
  return ("x" === i ? n : 3 & n | 8).toString(16);
}),
    c = function (i, n) {
  if (!i) return i;
  i = "[object Array]" === Object.prototype.toString.call(i) ? i.map(function (i) {
    return t(i, n);
  }) : t(i, n);

  try {
    return JSON.parse(JSON.stringify(i));
  } catch (i) {}
},
    a = function (i, n, t) {
  var o;

  if (!!x()) {
    if (o = c(n, t)) {
      if (e.webkit) (t = (n = (t = (n = e.webkit)?.messageHandlers)?.[i])?.postMessage)?.call?.(o);else r(i, [o]);
    }
  }
},
    x = function () {
  return "about:blank" !== e.location.href;
},
    l = "iesLiveTimingMonitor",
    v = l + "Batch",
    f = l + "ReportStage",
    m = l + "InitTimeName",
    s = {
  terminatedPreCollect: function (i) {
    a("iesLiveTimingMonitorTerminatedPreCollect", i);
  },
  config: function (i) {
    a("iesLiveTimingMonitorConfig", i);
  },
  cover: function (i, n) {
    a("iesLiveTimingMonitorCover", i, n);
  },
  accumulate: function (i, n) {
    a("iesLiveTimingMonitorAccumulate", i, n);
  },
  reportDirectly: function (i, n) {
    a("iesLiveTimingMonitorReportDirectly", i, n);
  },
  batch: null !== (l = (l = e.webkit)?.messageHandlers) && undefined !== l && l[v] || e[v] ? function (i) {
    a(v, i);
  } : null,
  average: function (i, n) {
    a("iesLiveTimingMonitorAverage", i, n);
  },
  customReport: n
};

e.jsIESLiveTimingMonitor = s;
e.jsIESWebviewMonitor = {
  customReport: n
};
e.bdPerformance = {
  paintEntries: [],
  setFirstPaintTiming: i,
  setFirstMeaningfulPaintTiming: i
};
o = "DOMContentLoaded";

if (e) {
  e.addEventListener(o, function () {
    a(f, {
      stage: o
    }, "pv");
    setTimeout(function () {
      var i;

      if (e.history.length <= 1) {
        i = {
          url: location.href,
          duration: performance.now()
        };
        a(m, i);
      }
    });
  });
}

r("SlardarHybrid", ["config", {
  transport: s
}]);
