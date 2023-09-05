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
    path: "/secure/home",
    component: () => require("@/template/view/main"),
    name: "secure",
    redirect: { name: "admin.services" },

    /*Les pages(routes) securisés*/

    children: [
      /*Admin routes*/

      {
        path: "",
        component: () => require("@/template/view/pages/public/services.page"),
        name: "admin.services",
      },
      {
        path: "/employes",
        component: () => require("@/template/view/pages/public/employes.page"),
        name: "admin.employes",
      },
      {
        path: "/baremes",
        component: () => require("@/template/view/pages/public/baremes.page"),
        name: "admin.baremes",
      },
      {
        path: "/access",
        component: () =>
          require("@/template/view/pages/public/access.page.vue"),
        name: "admin.access",
      },

      {
        path: "/users",
        component: () => require("@/template/view/pages/public/users.page"),
        name: "admin.users",
      },
      {
        path: "/visiteurs",
        component: () => require("@/template/view/pages/public/visiteurs.page"),
        name: "admin.visiteurs",
      },
      {
        path: "/primes",
        component: () => require("@/template/view/pages/public/primes.page"),
        name: "admin.primes",
      },
      /*End admin routes*/

      /*MAJ Routes*/
      {
        path: "/pointages",
        component: () => require("@/template/view/pages/public/pointages.page"),
        name: "maj.pointages",
      },
      /*End maj routes*/

      /*Decomptes routes*/
      {
        path: "/decomptes/:tab",
        component: () => require("@/template/view/pages/public/decomptes.page"),
        name: "tab.decomptes",
      },
      /*Edition page*/
      {
        path: "/editions",
        component: () => require("@/template/view/pages/public/editions.page"),
        name: "editions",
      },
    ],
  },
];

export default routes;
