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
    { name: "Huijing Du", url: "https://math.unl.edu/person/huijing-du/" },
    { name: "Shiying Li", url: "https://math.unl.edu/person/shiying-li/" },
    { name: "Petronela Radu", url: "https://math.unl.edu/person/petronela-radu/" }
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

  { date: "2026-09-03", noSeminar: true, reason: "No seminar" },

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
  { date: "2026-11-19", speaker: "TBA" },
  { date: "2026-11-26", noSeminar: true, reason: "No seminar — Thanksgiving" },
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
    title: "Fast Solvers for Sequences of Hermitian Positive Definite Linear Systems: Recycling Conjugate Gradients",
    abstract: `We review a class of Krylov subspace methods for the fast solution of sequences of linear systems, which reduce the cost of solving the next system in the sequence by "recycling" information from previous systems. This talk focuses on solvers specialized for Hermitian positive definite (symmetric positive definite) linear systems. These methods are quite general and have been successfully applied to sequences of linear systems arising from many different application areas, including fracture modeling and topology optimization. Today, they are deployed in widely used software packages such as Trilinos, PETSc, and COMSOL Multiphysics.

This presentation assumes no background on the audience with regard to linear solvers. The presentation will start with a review of basic iterative solvers for linear systems, followed by insights on convergence analysis that motivate "recycling" of Krylov subspaces. A brief discussion of the theory of the Krylov subspace recycling methods will be presented along with convergence analysis, followed by several examples and numerical experiments illustrating the effects of the approach.`
  },
  {
    date: "2026-04-16",
    speaker: "Shubhendu Bhardwaj",
    affiliation: "Electr. & Comp. Eng., UNL",
    mode: "In person",
    title: "B-PENNs for the Forced Helmholtz Equation: Global-Local Modeling of Oscillatory Responses",
    abstract: `This paper presents a B-Spline based Physics-Embedded Neural Networks (B-PENNs) for numerical solution of forced Helmholtz equation. The focus on this work is to enhance the robustness of neural network based differential equation solvers for oscillatory responses. The proposed framework does so by a two-pronged approach of increasing the global visibility of the domain to the neural network, while also maintaining a local support structure for modeling highly oscillatory responses. A "physics-embedding" architecture has been proposed that incorporates these strategies for a more generalized and robust physics numerical solver. Here, a distinctive feature is a multipoint optimization paradigm which is absent in PINNs which are dominantly based on a single point optimization strategy for the function's accuracy of physics criterion. To increase the robustness of neural network architecture for oscillatory responses, multipoint optimization is combined with cubic B-spline basis function for building smooth and yet oscillatory functions. The B-PENN's mathematical formulation towards an efficient execution and benchmarking of its performances for a wave resonance in a 1D cavity will be shown. Study will also investigate hyperparameter variations, convergence and time performances while providing a comparison with classical solver, Finite Element Method. Numerical experiments demonstrate superior performance in capturing fine-scale oscillations while maintaining computational efficiency.`
  },
  {
    date: "2026-04-09",
    speaker: "Jae Sung Park",
    affiliation: "University of Nebraska-Lincoln",
    mode: "In person",
    title: "Fluid Dynamics from a Dynamical Systems Perspective",
    abstract: `This seminar will discuss the application of dynamical systems theory to fluid dynamics. In particular, I will talk about the discovery of the so-called exact coherent states, specifically nonlinear traveling-wave solutions to the Navier-Stokes equations. These solutions are unstable saddle points in state space, where the time evolution of a fluid flow is a dynamical trajectory wandering around them. Several new classes of exact coherent states with different flow characteristics are computed, and their connections to laminar-to-turbulent transition and turbulent dynamics will be discussed. Lastly, I will discuss the roles of exact coherent states in flow control for transitional and turbulent flows.`
  },
  {
    date: "2026-04-02",
    speaker: "Fernando Charro",
    affiliation: "Wayne State University",
    mode: "Zoom",
    title: "Mean-value characterizations of polyharmonic functions",
    abstract: `Polyharmonic problems arise in linear elasticity, hydrodynamics, structural engineering, and digital image compression and reconstruction. We introduce a family of mean-value formulas (including exact and asymptotic formulas) that characterize polyharmonic functions of finite order. Our results provide a nice geometric interpretation of polyharmonic functions consistent with the classical harmonic case, while partitioning the set of mean-value properties into classes of equivalence according to the order of the polyharmonic functions they characterize. Our key results include strong converses to the mean-value properties — locally integrable functions satisfying a mean-value property in the family are polyharmonic — and a regularity result — locally integrable functions satisfying a mean-value property in the family, whether exact or asymptotic, are smooth.`
  },
  {
    date: "2026-03-26",
    speaker: "Matt Jacobs",
    affiliation: "University of California, Santa Barbara",
    mode: "Zoom",
    title: "Adversarial training and the generalized Wasserstein barycenter problem",
    abstract: `Adversarial training is a framework widely used by practitioners to enforce robustness of machine learning models. During the training process, the learner is pitted against an adversary who has the power to alter the input data. As a result, the learner is forced to build a model that is robust to data perturbations. Despite the importance and relative conceptual simplicity of adversarial training, there are many aspects that are still not well-understood, e.g. regularization effects, geometric/analytic interpretations, tradeoff between accuracy and robustness, etc.

In this talk, I will show that in the non-parametric classification setting, the adversarial training problem is equivalent to a multimarginal optimal transport (MMOT) problem that can be viewed as a generalized version of the Wasserstein barycenter problem. The connection between these problems gives a complete description of the optimal adversarial strategy and allows us to bring in tools from optimal transport (OT) to analyze and compute optimal classifiers. In particular, we can use OT to characterize the regularizing effect of adversarial training on the learned class boundaries.`
  },
  {
    date: "2026-03-12",
    speaker: "Sui Tang",
    affiliation: "University of California, Santa Barbara",
    mode: "Zoom",
    title: "Sparse identification of nonlocal interaction kernels in nonlinear gradient flow equations",
    abstract: `We address the inverse problem of identifying nonlocal interaction potentials in nonlinear aggregation-diffusion equations from noisy discrete trajectory data. Our approach involves formulating and solving a regularized variational problem, which requires minimizing a quadratic error functional across a set of hypothesis functions, further augmented by a sparsity-enhancing regularizer. We employ a partial inversion algorithm, akin to the CoSaMP and subspace pursuit algorithms, to solve the Basis Pursuit problem. A key theoretical contribution is our novel stability estimate for the PDEs, validating the error functional ability in controlling the 2-Wasserstein distance between solutions generated using the true and estimated interaction potentials. Our work also includes an error analysis of estimators caused by discretization and observational errors in practical implementations. We demonstrate the effectiveness of the methods through various 1D and 2D examples showcasing collective behaviors. This is based on joint work with Jose A. Carrillo, Gissell Estrada-Rodriguez, and Laszlo Mikolas.`
  },
  {
    date: "2026-03-05",
    time: "3:30 pm CT",
    speaker: "Subrahmanyam Pattamatta",
    affiliation: "University of Hong Kong",
    mode: "Zoom",
    title: "Modeling Nanostructures under Proportional Loading: Nonconvex Energy Landscapes, Stochasticity, and Rate Dependence",
    abstract: `Modeling nanoscale solids under proportional loading (e.g., pulling nanowires or pillars) is complicated by the coexistence of strong thermal fluctuations and highly nonconvex potential energy surfaces with many competing metastable states and transition pathways. In this talk, I will present a simulation framework that combines large-scale branch-following and bifurcation analysis with state-to-state dynamics to construct stochastic, rate-dependent response under experimentally relevant loading rates, not achievable through conventional atomistic simulations such as molecular dynamics.

The key object is an Equilibrium Map: a compressed representation of the evolving energy landscape that tracks families of minima and saddle points as functions of load, together with transition rates obtained from transition-state theory. Efficient parallel algorithms are used to build this map, detect superbasins (clusters of rapidly interconverting states), and accelerate dynamics within them via absorbing Markov-chain reductions, thereby extending accessible timescales by many orders of magnitude.

Application to a displacement-controlled nanoslab shows that the method reproduces observed size effects and rate dependence in stress-strain response. I will also briefly indicate how this evolving-energy-landscape viewpoint naturally extends, as a direction for my ongoing work, to an adaptive "explore-and-lift" construction of parameter-dependent kinetic transition networks for more general driven activated processes.`
  },
  {
    date: "2026-02-26",
    speaker: "Yuhao Mu",
    affiliation: "UNL",
    mode: "In person",
    title: "Consequences of Pressure Elimination for Nonlinear Fluid-Structure Interaction and PDE Data Assimilation",
    abstract: `The following is joint work with Professor George Avalos. In this talk we present applications of our new technique for eliminating and recovering the pressure for a fluid-structure interaction model that is valid in general bounded Lipschitz domains, without additional geometric conditions such as convexity of wedge angles. The specific fluid-structure interaction (FSI) that we consider is a well-known model of coupled Navier-Stokes flow with linear elasticity. The coupling between these two distinct PDE dynamics occurs across a boundary interface, with each of the components evolving on its own distinct geometry, and with the boundary interface being Lipschitz.

The new pressure elimination technique leads to a proof of the well-posedness of the continuous PDE globally in time in 2D (and 3D with small data assumptions), that now holds for general Lipschitz geometries. To deal with the associated nonlinearities, we adopt an approximating nonlinear semigroup formulation of a certain truncated problem, leading to the well-posedness of each truncated problem in the explicit semigroup sense.

We illustrate some other consequences of our pressure-elimination technique, such as numerical approximations, where it provides FEM convergence estimates over polygonal domains, and where the approximating fluid subspace does not require the divergence-free condition. We also illustrate consequences for PDE data assimilation (specifically the Azouani-Olson-Titi algorithm) and control theory, given partial observation of the boundary.`
  },
  {
    date: "2026-02-19",
    speaker: "Yuliya Gorb",
    affiliation: "NSF",
    mode: "In person",
    title: "Explicit Corrector Results for Nonlinear Electrostatic-Elastic Systems",
    abstract: `Dielectric elastomers possess the unique ability to transform electrical energy into mechanical deformation through electrostriction. However, predicting their macroscopic behavior is challenging due to the complex, heterogeneous microstructure often found in composite designs. In this talk, a rigorous periodic homogenization of a weakly coupled electrostatic system, accounting for both nonlinear electrostatic equations and elastic structures enriched with electrostrictions, will be presented. Unlike previous models that rely on linear constitutive laws or high regularity assumptions, our approach addresses nonlinear, monotone operators, where the standard gradient estimate fails. The "effective" macroscopic response of these composites is derived by employing two-scale convergence as an intermediate topology, allowing one to capture the interaction between electrical fields and mechanical strain without requiring strict integrability. These results can provide a mathematical foundation for designing the next generation of smart materials with optimized electromechanical couplings.`
  },
  {
    date: "2026-02-05",
    speaker: "Dejan Slepčev",
    affiliation: "Carnegie Mellon University",
    mode: "Zoom",
    title: "Radon–Wasserstein gradient flows for sampling in high dimensions",
    abstract: `Providing samples of a measure given by its density is a challenging problem, especially in high dimensions. We will discuss interacting-particle approaches to sampling based on discretization of gradient flows. Gradient flows of the Kullback–Leibler (KL) divergence, such as the Fokker–Planck equation and Stein Variational Gradient Descent (SVGD), evolve a distribution towards a desired target measure whose density is known only up to the normalization constant.

We will discuss a new geometry on the space of measures, named Radon–Wasserstein geometry. The resulting gradient flows of the KL divergence have the following remarkable properties: they can be accurately approximated in high dimensions based on interacting particles, and the computational complexity of each step is linear in the number of particles and the dimension (up to logarithmic factors). We will discuss theoretical results such as well-posedness of the gradient flow, its convergence towards the target measure, and convergence of algorithms. Numerical experiments illustrating the dynamics and the performance of the algorithms will also be provided.`
  },
  {
    date: "2026-01-29",
    time: "3:30 pm CT",
    speaker: "Xingjie Li",
    affiliation: "University of North Carolina, Charlotte",
    mode: "Zoom",
    title: "Robust Numerical Differentiation for Entropy-regularized Optimal Transport (EOT) with application to Shuffled Regression",
    abstract: `In this presentation, I will begin by introducing shuffled regression and the entropic optimal transport (EOT) as one possible tool for solving shuffled regression. A common approach for this optimization is to use a first-order optimizer, which requires the gradient of the OT distance. For faster convergence, one might also resort to a second-order optimizer, which additionally requires the Hessian.

I will present the analytical derivatives of EOT, provide a brief overview of numerical condition numbers, and explain how to compute them robustly. Through analytical derivation and spectral analysis, we identify and resolve the numerical instability caused by the singularity and ill-posedness of a key linear system, and improve the efficiency and robustness of computation. Finally, I would like to discuss future work, extensions, and possible collaborations among the audience.`
  },
  {
    date: "2026-01-22",
    time: "3:30 pm CT",
    speaker: "Sasitharan Balasubramaniam",
    affiliation: "School of Computing, UNL",
    mode: "In person",
    title: "Wet Neuromorphic Computing: A New Age for AI",
    abstract: `Society is entering into a new era of technology that is dominated by Artificial Intelligence (AI) with a new vision of "AI Everywhere", where AI is incorporated into different forms of computing devices. While conventional AI has been inspired from the workings of the brain, recent studies suggest that biological cells (e.g., living neurons) can be directly connected to computers as AI machines with the aim of directly harnessing the intelligence of the cells. A question we wish to pose is "Can we go beyond silicon-based devices and create Living AI from structures internal within biological cells?"

In this seminar, we present the concept of bacterial Gene Regulatory-Artificial Neural Network (GR-ANN) by utilizing intelligence established from the natural gene regulation process. The concept is based on mapping a computing application to a subnetwork of the GR-ANN using a search algorithm, inspired from the Neural Architecture Search (NAS) used in AI and machine learning. We discuss the formation of the GR-ANN using temporal transcriptomic data as well as the search algorithm.

The seminar will then discuss example computing applications of mathematical regression and classification. We also discuss examples in biotechnology where the GR-ANN is used to reconfigure and prevent biofilm formation that can lead to infections. The talk will also touch on the concept of microfluidic reservoir computing, where color encoded liquid signals are used as inputs to a readout layer for computing.`
  }
];
