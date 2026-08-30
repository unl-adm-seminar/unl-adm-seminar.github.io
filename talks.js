/* ============================================================
   talks.js — THE ONLY FILE YOU NEED TO EDIT WEEK TO WEEK
   ============================================================

   1. SEMINAR   — the name, time, room, organizers. Set once.
   2. TALKS     — one entry per talk. Add new ones anywhere in
                  the list; the site sorts them by date for you.

   Talks in the CURRENT academic year show up on the schedule
   page. Everything older moves to the Prior talks page by
   itself on August 1. You never move anything by hand.

   WRITING A TALK ENTRY
   --------------------
   {
     date: "2026-09-17",          // required, always YYYY-MM-DD
     time: "2:30 pm",             // optional, defaults to SEMINAR.time
     room: "Avery 351",           // optional, defaults to SEMINAR.room
     speaker: "Jane Doe",         // required
     url: "https://...",          // optional, links the speaker's name
     affiliation: "Nebraska",     // optional
     title: "...",                // leave out until you have it
     abstract: String.raw`...`,   // leave out until you have it
     note: "Note the unusual room."  // optional, shown in red
   }

   MATH IN TITLES AND ABSTRACTS
   ----------------------------
   Write LaTeX between \( \) or \[ \] and MathJax renders it.
   Always use String.raw` ` (not plain quotes) around any text
   with a backslash in it, or JavaScript will eat the backslash:

     abstract: String.raw`Let \(R\) be a Noetherian ring...`

   Leave a blank line between paragraphs and they become
   separate paragraphs on the page.
   ============================================================ */

const SEMINAR = {
  name: "Applied Analysis and Data-Driven Mathematical Modeling (ADM)",
  institution: "Department of Mathematics, University of Nebraska–Lincoln",
  when: "Thursdays at 2:30 pm CT · Avery 351 and Zoom",
  room: "Avery 351 and Zoom",
  time: "2:30 pm CT",
  blurb:
    "The seminar focuses on the broad world of modeling and data-driven science, investigated with mathematical analysis tools. It has a diverse audience and speakers, with faculty and students from mathematics, engineering, and computer science, as well as experts at national labs, in industry, and in government. Talks run from 2:30 to 3:20 pm.",
  organizers: [
    { name: "Huijing Du" },
    { name: "Shiying Li" },
    { name: "Petronela Radu" }
  ],
  // Optional extra line under the organizers. Delete the whole `links` block
  // if you don't want it. Add the Zoom link here once you have a stable one.
  links: [
    { text: "Department of Mathematics", url: "https://www.math.unl.edu" }
  ]
};

const TALKS = [
  /* ============================================================
     FALL 2026 — one talk every Thursday.
     Slots with no speaker yet are just { date, speaker: "TBA" }.
     Fill each one in as you confirm it.

     `mode` is how the speaker delivers the talk: "In Person" or
     "Zoom". It shows in the parentheses after the affiliation.
     ============================================================ */

  { date: "2026-09-03", speaker: "TBA" },

  {
    date: "2026-09-10",
    speaker: "Ivan Medri",
    affiliation: "University of Virginia",
    mode: "Zoom"
    // title and abstract to come
  },

  { date: "2026-09-17", speaker: "TBA" },
  { date: "2026-09-24", speaker: "TBA" },

  {
    date: "2026-10-01",
    speaker: "Jiachao Liu",
    affiliation: "UNL Civil & Env. Eng.",
    mode: "In Person"
    // title and abstract to come
  },

  { date: "2026-10-08", speaker: "TBA" },
  { date: "2026-10-15", speaker: "TBA" },
  { date: "2026-10-22", speaker: "TBA" },
  { date: "2026-10-29", speaker: "TBA" },
  { date: "2026-11-05", speaker: "TBA" },
  { date: "2026-11-12", speaker: "TBA" },
  { date: "2026-11-19", speaker: "TBA" },
  // No seminar November 26 — Thanksgiving.
  { date: "2026-12-03", speaker: "TBA" },
  { date: "2026-12-10", speaker: "TBA" },

  /* ============================================================
     A FILLED-IN TALK LOOKS LIKE THIS. Copy it when you have the
     details, and delete this example whenever you like.
     ============================================================ */
  // {
  //   date: "2026-10-08",
  //   speaker: "Jane Doe",
  //   url: "https://janedoe.example.edu",
  //   affiliation: "Purdue",
  //   mode: "In Person",
  //   title: String.raw`A title, with math if you want: \(L^2\) estimates`,
  //   abstract: String.raw`First paragraph of the abstract.
  //
  // Second paragraph. Use String.raw whenever there is a backslash.`,
  //   note: "Note the unusual room."
  // },

  /* ============================================================
     PRIOR YEARS — these move to the Prior talks tab on their own.
     Two samples so you can see how the archive looks; delete them
     once you have real ones.
     ============================================================ */
  {
    date: "2026-04-16",
    speaker: "David Ngo",
    affiliation: "Purdue",
    mode: "In Person",
    title: "Sample archived talk: uncertainty quantification for inverse problems",
    abstract: String.raw`This is placeholder text showing how an archived talk appears,
with its abstract preserved and searchable from the Prior talks tab.`
  },
  {
    date: "2025-11-13",
    speaker: "Grace Oduya",
    affiliation: "UNL",
    mode: "Zoom",
    title: "Sample archived talk: data assimilation for reaction-diffusion models",
    abstract: String.raw`A second placeholder, here to show the year grouping.`
  }
];
