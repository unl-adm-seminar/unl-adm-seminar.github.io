# Seminar website

A two-page seminar site that runs on GitHub Pages with no build step, no
Jekyll, and no dependencies. You keep the schedule in one file, `talks.js`,
and both pages rebuild themselves in the browser.

```
index.html          Schedule tab — current academic year
archive.html        Prior talks tab — everything older, with a search box
talks.js            ← the only file you edit week to week
assets/style.css    colors, type, spacing
assets/seminar.js   rendering logic (you shouldn't need to touch this)
build-preview.py    optional, makes single-file copies for local viewing
```

## Putting it online

1. Make a repository on GitHub. If you name it `username.github.io` the site
   lives at that address; any other name puts it at
   `username.github.io/repo-name/`.
2. Upload these files to the root of the repository (keep `assets/` as a
   folder).
3. Settings → Pages → Source: **Deploy from a branch**, branch `main`,
   folder `/ (root)`. Save.
4. Wait a minute, then load the address GitHub shows you.

After that, editing `talks.js` on github.com and clicking **Commit changes**
publishes the update in about thirty seconds.

## Adding a talk

Open `talks.js` and add an entry anywhere in the `TALKS` list. Order doesn't
matter — the site sorts by date.

```js
{
  date: "2026-10-13",
  speaker: "Jane Doe",
  url: "https://janedoe.github.io",
  affiliation: "Purdue",
  title: "The title once you have it",
  abstract: String.raw`The abstract once you have it.`
}
```

Only `date` and `speaker` are required. A talk with no title shows the
speaker and the words "Title to be announced", so you can post the semester's
lineup early and fill in details as they arrive.

Optional fields:

| Field | Use |
|---|---|
| `time` | overrides the default time, e.g. a 3:00 pm first talk |
| `room` | overrides the default room for one week |
| `note` | a short line in red, e.g. "Note the unusual room." |

Two talks in one day: just write two entries with the same `date` and
different `time` values.

## Math in titles and abstracts

MathJax is loaded on both pages. Write LaTeX between `\( \)` for inline math
and `\[ \]` for displayed math.

One rule: any text containing a backslash must use `` String.raw`...` ``
instead of quotes, or JavaScript will strip the backslashes before MathJax
sees them.

```js
title: String.raw`Rigidity of the round sphere \(S^n\)`,
abstract: String.raw`Let \(R\) be a Noetherian ring...`
```

Blank lines inside an abstract become separate paragraphs. Plain HTML like
`<em>` also works if you want it.

## How the archive works

The academic year is treated as starting **August 1**. Talks in the current
academic year appear on the Schedule tab; everything before it appears on the
Prior talks tab, newest first, grouped by year. Nothing needs to be moved by
hand — on August 1 the previous year slides across on its own.

Past talks from the current year stay on the Schedule tab in slightly dimmed
text, the way most seminar pages do, so the semester reads as one list.

## Changing the look

Everything visual is in the `:root` block at the top of `assets/style.css`:

```css
--paper:  #fcfbf8;   /* page background */
--ink:    #1a1714;   /* body text */
--accent: #8a2b33;   /* links, next-talk rule, notes */
--rule:   #e4dfd5;   /* hairlines between talks */
```

Change `--accent` to recolor the whole site. `--measure` controls the width of
the text column.

## Viewing it before you publish

Browsers block `talks.js` from loading when you open `index.html` straight off
your disk. Either run a local server from this folder:

```
python3 -m http.server 8000
```

and visit `http://localhost:8000`, or run `python3 build-preview.py` to
generate `preview-schedule.html` and `preview-archive.html`, which are
self-contained and open fine by double-clicking. Those two preview files are
disposable — don't upload them, and don't edit them, since they're overwritten
each time you run the script.
