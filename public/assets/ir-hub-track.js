/**
 * Lekka analityka hubowa dla domen satelitarnych Instytutu Regresji.
 * Nie zapisuje pełnego IP po stronie tej strony; geolokalizacja i wykluczenia
 * są obsługiwane na centralnym endpointcie.
 */
(function () {
  var config = window.IRHubConfig || {};
  if (/^(localhost|127\.0\.0\.1|::1)$/.test(location.hostname)) return;
  var ENDPOINT = config.endpoint || "/backend/analytics.php";
  var SITE = (config.site || location.hostname || "regresjapoprzednichwcielen.pl").replace(/^www\./, "");
  var HEARTBEAT_MS = Math.max(8000, Number(config.heartbeatMs || 15000));

  function analyticsOptedOut() {
    try {
      if (window.IRAnalyticsOptOut && window.IRAnalyticsOptOut.isOptedOut()) return true;
      if (localStorage.getItem("ir_analytics_optout") === "1") return true;
      return document.cookie.split(";").some(function (part) {
        return part.trim() === "ir_analytics_optout=1";
      });
    } catch (err) {
      return false;
    }
  }

  if (analyticsOptedOut()) return;
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.msDoNotTrack === "1") return;

  function makeId(prefix) {
    return prefix + "_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 10);
  }

  function readOrCreate(storage, key, prefix) {
    try {
      var id = storage.getItem(key);
      if (!id) {
        id = makeId(prefix);
        storage.setItem(key, id);
      }
      return id;
    } catch (err) {
      return makeId(prefix);
    }
  }

  var sid = readOrCreate(sessionStorage, "ir_sid", "s");
  var vid = readOrCreate(localStorage, "ir_vid", "v");
  var lastTick = Date.now();
  var sentEnd = false;

  function viewport() {
    return [window.innerWidth || 0, window.innerHeight || 0].join("x");
  }

  function screenSize() {
    return [screen.width || 0, screen.height || 0].join("x");
  }

  function base(data) {
    data.site = SITE;
    data.sid = sid;
    data.vid = vid;
    data.page = location.pathname;
    data.url = location.href;
    data.title = document.title || "";
    data.ref = document.referrer || "";
    data.tz = "";
    data.lang = navigator.language || "";
    data.viewport = viewport();
    data.screen = screenSize();
    try {
      data.tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch (err) {}
    return data;
  }

  function send(data) {
    try {
      var body = JSON.stringify(base(data));
      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT, new Blob([body], { type: "application/json" }));
      } else {
        fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: body,
          keepalive: true,
          mode: ENDPOINT.indexOf("http") === 0 ? "cors" : "same-origin"
        }).catch(function () {});
      }
    } catch (err) {}
  }

  function durationDelta() {
    var now = Date.now();
    var delta = Math.max(0, Math.min(HEARTBEAT_MS * 2, now - lastTick));
    lastTick = now;
    return delta;
  }

  send({ type: "pageview" });

  window.addEventListener(
    "pagehide",
    function () {
      if (sentEnd) return;
      sentEnd = true;
      send({ type: "session_end", durationMs: durationDelta() });
    },
    { once: true }
  );

  setInterval(function () {
    if (document.hidden) return;
    send({ type: "heartbeat", durationMs: durationDelta() });
  }, HEARTBEAT_MS);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      send({ type: "heartbeat", durationMs: durationDelta() });
    } else {
      lastTick = Date.now();
    }
  });

  document.addEventListener(
    "click",
    function (event) {
      var el = event.target.closest && event.target.closest("[data-track]");
      if (!el) return;
      send({ type: "click", element: el.getAttribute("data-track") || el.id || el.href || "click" });
    },
    { capture: true, passive: true }
  );

  document.addEventListener(
    "submit",
    function (event) {
      var form = event.target;
      if (!form || form.nodeName !== "FORM" || form.hasAttribute("data-no-track")) return;
      var fields = [];
      try {
        fields = Array.from(form.elements || [])
          .map(function (field) {
            return field.name || field.id || field.type || "";
          })
          .filter(Boolean)
          .slice(0, 40);
      } catch (err) {}
      send({
        type: "form",
        element: form.getAttribute("data-track") || form.id || form.getAttribute("name") || "form",
        form_id: form.id || form.getAttribute("name") || "form",
        fields: { field_names: fields }
      });
    },
    { capture: true }
  );

  var hovered = {};
  document.addEventListener(
    "mouseover",
    function (event) {
      var el = event.target.closest && event.target.closest("[data-track]");
      if (!el) return;
      var key = el.getAttribute("data-track");
      if (!key || hovered[key]) return;
      var timer = setTimeout(function () {
        if (hovered[key]) return;
        hovered[key] = true;
        send({ type: "hover", element: key });
      }, 600);
      el.addEventListener(
        "mouseleave",
        function () {
          clearTimeout(timer);
        },
        { once: true }
      );
    },
    { capture: true, passive: true }
  );
})();
