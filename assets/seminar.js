/* ===========================================================
   seminar.js — turns TALKS (from talks.js) into the page.
   You should not need to edit this file.
   =========================================================== */

(function () {
  "use strict";

  var MONTHS = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];
  var DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  /* Parse "2026-09-15" in local time so the date never shifts a day. */
  function parseDate(s) {
    var p = String(s).split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function formatDate(d) {
    return DAYS[d.getDay()] + ", " + MONTHS[d.getMonth()] + " " +
           d.getDate() + ", " + d.getFullYear();
  }

  /* Academic year starts August 1. Returns the first year, e.g. 2026. */
  function academicYear(d) {
    return d.getMonth() >= 7 ? d.getFullYear() : d.getFullYear() - 1;
  }

  function yearLabel(y) { return y + "/" + (y + 1); }

  function today() {
    var n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* Abstracts may contain LaTeX and simple HTML. Blank lines become
     paragraphs; everything else passes through untouched. */
  function paragraphs(text) {
    return String(text).trim().split(/\n\s*\n/)
      .map(function (p) { return "<p>" + p.trim() + "</p>"; })
      .join("");
  }

  /* A slot with no speaker yet, or with speaker: "TBA". */
  function isTBA(t) {
    return !t.speaker || /^tba$/i.test(String(t.speaker).trim());
  }

  function speakerHtml(t) {
    if (isTBA(t)) return "Speaker to be announced";
    var name = escapeHtml(t.speaker);
    var inner = t.url
      ? '<a href="' + escapeHtml(t.url) + '">' + name + "</a>"
      : name;
    /* "(University of Virginia · Zoom)" — mode is optional. */
    var paren = [t.affiliation, t.mode].filter(Boolean).map(escapeHtml).join(" · ");
    if (paren) {
      inner += ' <span class="affiliation">(' + paren + ")</span>";
    }
    return inner;
  }

  function whenLine(t, d) {
    var bits = [formatDate(d)];
    var time = t.time || SEMINAR.time;
    var room = t.room || SEMINAR.room;
    if (time) bits.push(time);
    if (room) bits.push(room);
    return bits.join(" · ");
  }

  function talkHtml(t, isPast) {
    var d = parseDate(t.date);
    var h = '<article class="talk' + (isPast ? " past" : "") + '">';
    h += '<p class="talk-when">' + escapeHtml(whenLine(t, d)) + "</p>";

    if (isTBA(t)) {
      /* Nothing known yet — one line, no "title to be announced" underneath. */
      h += '<p class="tba">Speaker to be announced</p>';
    } else {
      h += '<p class="talk-speaker">' + speakerHtml(t) + "</p>";
      if (t.title) {
        h += '<h3 class="talk-title">' + t.title + "</h3>";
      } else {
        h += '<p class="tba">Title to be announced</p>';
      }
    }

    if (t.note) {
      h += '<p class="talk-note">' + escapeHtml(t.note) + "</p>";
    }
    if (t.abstract) {
      h += '<div class="talk-abstract"><p class="abstract-label">Abstract</p>' +
           paragraphs(t.abstract) + "</div>";
    }
    return h + "</article>";
  }

  function byDateAsc(a, b) { return parseDate(a.date) - parseDate(b.date); }
  function byDateDesc(a, b) { return parseDate(b.date) - parseDate(a.date); }

  /* ---------- shared page furniture ---------- */

  function fillMasthead() {
    var set = function (id, html) {
      var el = document.getElementById(id);
      if (el) el.innerHTML = html;
    };
    set("s-when", escapeHtml(SEMINAR.when || ""));
    set("s-name", escapeHtml(SEMINAR.name || ""));
    set("s-institution", escapeHtml(SEMINAR.institution || ""));
    set("s-blurb", SEMINAR.blurb || "");

    var orgs = (SEMINAR.organizers || []).map(function (o) {
      return o.url
        ? '<a href="' + escapeHtml(o.url) + '">' + escapeHtml(o.name) + "</a>"
        : escapeHtml(o.name);
    });
    var line = "";
    if (orgs.length === 1) line = "Organized by " + orgs[0] + ".";
    else if (orgs.length === 2) line = "Organized by " + orgs[0] + " and " + orgs[1] + ".";
    else if (orgs.length > 2) {
      line = "Organized by " + orgs.slice(0, -1).join(", ") +
             ", and " + orgs[orgs.length - 1] + ".";
    }
    if (SEMINAR.links && SEMINAR.links.length) {
      line += " " + SEMINAR.links.map(function (l) {
        return '<a href="' + escapeHtml(l.url) + '">' + escapeHtml(l.text) + "</a>";
      }).join(" · ");
    }
    set("s-organizers", line);
    set("s-year", new Date().getFullYear());
  }

  function typeset() {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }

  /* ---------- schedule page ---------- */

  function renderSchedule() {
    var host = document.getElementById("schedule");
    if (!host) return;

    var now = today();
    var currentAY = academicYear(now);
    var current = TALKS.filter(function (t) {
      return academicYear(parseDate(t.date)) === currentAY;
    }).sort(byDateAsc);

    /* Next talk banner */
    var next = current.filter(function (t) { return parseDate(t.date) >= now; })[0];
    var banner = document.getElementById("next-talk");
    if (banner && next) {
      var d = parseDate(next.date);
      var days = Math.round((d - now) / 86400000);
      var away = days === 0 ? "today" : days === 1 ? "tomorrow" : "in " + days + " days";
      banner.innerHTML =
        '<p class="next-label">Next talk · ' + away + "</p>" +
        '<p class="next-speaker">' + speakerHtml(next) + "</p>" +
        (next.title ? '<p class="next-title">' + next.title + "</p>" : "") +
        '<p class="next-when">' + escapeHtml(whenLine(next, d)) + "</p>";
      banner.hidden = false;
    }

    if (!current.length) {
      host.innerHTML = '<p class="empty">No talks scheduled yet for ' +
                       yearLabel(currentAY) + ".</p>";
      return;
    }

    var html = '<h2 class="year-heading">' + yearLabel(currentAY) +
               " academic year</h2>";
    current.forEach(function (t) {
      html += talkHtml(t, parseDate(t.date) < now);
    });
    host.innerHTML = html;
    typeset();
  }

  /* ---------- prior talks page ---------- */

  function renderArchive() {
    var host = document.getElementById("archive");
    if (!host) return;

    var currentAY = academicYear(today());
    var past = TALKS.filter(function (t) {
      return academicYear(parseDate(t.date)) < currentAY;
    }).sort(byDateDesc);

    var input = document.getElementById("filter-input");
    var count = document.getElementById("filter-count");

    function draw(query) {
      var q = (query || "").trim().toLowerCase();
      var shown = past.filter(function (t) {
        if (!q) return true;
        return [t.speaker, t.affiliation, t.title, t.abstract]
          .filter(Boolean).join(" ").toLowerCase().indexOf(q) !== -1;
      });

      if (count) {
        count.textContent = shown.length + (shown.length === 1 ? " talk" : " talks");
      }

      if (!shown.length) {
        host.innerHTML = '<p class="empty">Nothing matches that search.</p>';
        return;
      }

      var html = "";
      var year = null;
      shown.forEach(function (t) {
        var y = academicYear(parseDate(t.date));
        if (y !== year) {
          year = y;
          html += '<h2 class="year-heading">' + yearLabel(y) + " academic year</h2>";
        }
        html += talkHtml(t, true);
      });
      host.innerHTML = html;
      typeset();
    }

    if (input) {
      input.addEventListener("input", function () { draw(input.value); });
    }
    draw("");
  }

  function start() {
    fillMasthead();
    renderSchedule();
    renderArchive();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
