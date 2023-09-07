const routes = [
  /* Route pour la boite de connexion ou login */
  {
    path: "/",
    component: () => require("@/template/view/pages/auth/login.page"),
    name: "login",
  },

  /*Route pour la création de la société ou register*/
  {
    path: "/register",
    component: () => require("@/template/view/pages/auth/register.page"),
    name: "register",
  },

  /*Reset password route*/

  {
    path: "/reset",
    component: () => require("@/template/view/pages/auth/reset.page"),
    name: "reset",
  },

  /*Route securisé d'accueil après connexion ou crétion */

  {
    path: "/secure",
    component: () => require("@/template/view/main"),
    name: "secure",
    redirect: { name: "admin.agences" },

    /*Les pages(routes) securisés*/

    children: [
      /*Admin routes*/

      {
        path: "/secure/agences",
        component: () => require("@/template/view/pages/public/agences.page"),
        name: "admin.agences",
      },

      {
        path: "/secure/services",
        component: () => require("@/template/view/pages/public/services.page"),
        name: "admin.services",
      },
      {
        path: "/secure/employes",
        component: () => require("@/template/view/pages/public/employes.page"),
        name: "admin.employes",
      },
      {
        path: "/secure/baremes",
        component: () => require("@/template/view/pages/public/baremes.page"),
        name: "admin.baremes",
      },
      {
        path: "/secure/access",
        component: () =>
          require("@/template/view/pages/public/access.page.vue"),
        name: "admin.access",
      },

      {
        path: "/secure/users",
        component: () => require("@/template/view/pages/public/users.page"),
        name: "admin.users",
      },
      {
        path: "/secure/visiteurs",
        component: () => require("@/template/view/pages/public/visiteurs.page"),
        name: "admin.visiteurs",
      },
      {
        path: "/secure/primes",
        component: () => require("@/template/view/pages/public/primes.page"),
        name: "admin.primes",
      },
      {
        path: "/secure/postes",
        component: () => require("@/template/view/pages/public/postes.page"),
        name: "admin.postes",
      },
      {
        path: "/secure/enroll",
        component: () => require("@/template/view/pages/public/enroll.page"),
        name: "admin.enroll",
      },
      {
        path: "/secure/presences",
        component: () => require("@/template/view/pages/public/presences.page"),
        name: "admin.presences",
      },
      {
        path: "/secure/heuresups",
        component: () => require("@/template/view/pages/public/heuresups.page"),
        name: "admin.heuresups",
      },
      {
        path: "/secure/heurespoints",
        component: () =>
          require("@/template/view/pages/public/heurepoints.page"),
        name: "admin.heurepoints",
      },
      /*End admin routes*/

      /*MAJ Routes*/
      {
        path: "/secure/pointages",
        component: () => require("@/template/view/pages/public/pointages.page"),
        name: "maj.pointages",
      },
      /*End maj routes*/

      /*Decomptes routes*/
      {
        path: "/secure/decomptes/:tab",
        component: () => require("@/template/view/pages/public/decomptes.page"),
        name: "tab.decomptes",
      },
      /*Edition page*/
      {
        path: "/secure/editions",
        component: () => require("@/template/view/pages/public/editions.page"),
        name: "editions",
      },
      {
        path: "/secure/affectations/:affect",
        component: () =>
          require("@/template/view/pages/public/affectations.page"),
        name: "affectations",
      },
    ],
  },
];

export default routes;
