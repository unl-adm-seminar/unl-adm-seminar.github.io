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
  institution: "<a href=\"https://www.math.unl.edu\">Department of Mathematics</a>, University of Nebraska–Lincoln",
  when: "Thursdays at 2:30 pm CT · Avery 351 and Zoom",
  room: "Avery 351 and Zoom",
  time: "2:30 pm CT",
  blurb:
    "The seminar focuses on the broad world of modeling and data-driven science, investigated with mathematical analysis tools. It has a diverse audience and speakers, with faculty and students from mathematics, engineering, and computer science, as well as experts at national labs, in industry, and in government. Talks run from 2:30 to 3:20 pm.",
  organizers: [
    { name: "Huijing Du" },
    { name: "Shiying Li" },
    { name: "Petronela Radu" }
  ]
};

const TALKS = [
  /* ============================================================
     FALL 2026 — one talk every Thursday.
     Slots with no speaker yet are just { date, speaker: "TBA" }.
     Fill each one in as you confirm it.

     `mode` is how the speaker delivers the talk: "In person" or
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
    mode: "In person"
    // title and abstract to come
  },

  { date: "2026-10-08", speaker: "TBA" },
  { date: "2026-10-15", speaker: "TBA" },
  { date: "2026-10-22", speaker: "TBA" },
  { date: "2026-10-29", speaker: "TBA" },
  { date: "2026-11-05", speaker: "TBA" },
  { date: "2026-11-12", speaker: "TBA" },
   
  {
    date: "2026-11-19",
    speaker: "Yumeng Zhao",
    affiliation: "UNL Civil & Env. Eng.",
    mode: "In person"
  },
   
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
  //   mode: "In person",
  //   title: String.raw`A title, with math if you want: \(L^2\) estimates`,
  //   abstract: String.raw`First paragraph of the abstract.
  //
  // Second paragraph. Use String.raw whenever there is a backslash.`,
  //   note: "Note the unusual room."
  // },

  /* ============================================================
     SPRING 2026 — on the Prior talks tab.
     Abstracts say "To be added" for now; replace the text when
     you have them.
     ============================================================ */

  {
    date: "2026-04-23",
    speaker: "Michael Parks",
    affiliation: "Oak Ridge National Laboratory",
    mode: "In person",
    abstract: "To be added."
  },
  {
    date: "2026-04-16",
    speaker: "Shubhendu Bhardwaj",
    affiliation: "Electr. & Comp. Eng., UNL",
    mode: "In person",
    title: "B-PENNs for the Forced Helmholtz Equation: Global-Local Modeling of Oscillatory Responses",
    abstract: "To be added."
  },
  {
    date: "2026-04-09",
    speaker: "Jae Sung Park",
    affiliation: "University of Nebraska-Lincoln",
    mode: "In person",
    title: "Fluid Dynamics from a Dynamical Systems Perspective",
    abstract: "To be added."
  },
  {
    date: "2026-04-02",
    speaker: "Fernando Charro",
    affiliation: "Wayne State University",
    mode: "Zoom",
    title: "Mean-value characterizations of polyharmonic functions",
    abstract: "To be added."
  },
  {
    date: "2026-03-26",
    speaker: "Matt Jacobs",
    affiliation: "University of California, Santa Barbara",
    mode: "Zoom",
    title: "Adversarial training and the generalized Wasserstein barycenter problem",
    abstract: "To be added."
  },
  {
    date: "2026-03-12",
    speaker: "Sui Tang",
    affiliation: "University of California, Santa Barbara",
    mode: "Zoom",
    title: "Sparse identification of nonlocal interaction kernels in nonlinear gradient flow equations",
    abstract: "To be added."
  },
  {
    date: "2026-03-05",
    time: "3:30 pm CT",
    speaker: "Subrahmanyam Pattamatta",
    affiliation: "University of Hong Kong",
    mode: "Zoom",
    title: "Equilibrium Maps: Characterizing the complex and stochastic behavior of nanosystems subjected to proportional loading",
    abstract: "To be added."
  },
  {
    date: "2026-02-26",
    speaker: "Yuhao Mu",
    affiliation: "UNL",
    mode: "In person",
    title: "Consequences of Pressure Elimination for Nonlinear Fluid-Structure Interaction and PDE Data Assimilation",
    abstract: "To be added."
  },
  {
    date: "2026-02-19",
    speaker: "Yuliya Gorb",
    affiliation: "NSF",
    mode: "In person",
    title: "Explicit Corrector Results for Nonlinear Electrostatic-Elastic Systems",
    abstract: "To be added."
  },
  {
    date: "2026-02-05",
    speaker: "Dejan Slepčev",
    affiliation: "Carnegie Mellon University",
    mode: "Zoom",
    title: "Radon–Wasserstein gradient flows for sampling in high dimensions",
    abstract: "To be added."
  },
  {
    date: "2026-01-29",
    time: "3:30 pm CT",
    speaker: "Xingjie Li",
    affiliation: "University of North Carolina, Charlotte",
    mode: "Zoom",
    title: "Robust Numerical Differentiation for Entropy-regularized Optimal Transport (EOT) with application to Shuffled Regression",
    abstract: "To be added."
  },
  {
    date: "2026-01-22",
    time: "3:30 pm CT",
    speaker: "Sasitharan Balasubramaniam",
    affiliation: "School of Computing, UNL",
    mode: "In person",
    title: "Wet Neuromorphic Computing: A New Age for AI",
    abstract: "To be added."
  }
];
