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

  /*Route securisé d'accueil après connexion ou crétion */

  {
    path: "/secure/home",
    component: () => require("@/template/view/main"),
    name: "secure-home",
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
