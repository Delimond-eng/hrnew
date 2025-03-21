import LoginPage from "@/template/view/pages/auth/login.page";
import RegisterPage from "@/template/view/pages/auth/register.page";
import ResetPage from "@/template/view/pages/auth/reset.page";

/*main routes*/
import Main from "@/template/view/main";

/*public pages*/
import AgencesPage from "@/template/view/pages/public/agences.page";
import DashboardPage from "@/template/view/pages/public/dashboard2.page";
import ServicesPage from "@/template/view/pages/public/services.page";
import EmployeesPage from "@/template/view/pages/public/employes.page";
import BaremesPage from "@/template/view/pages/public/baremes.page";
import AccessPage from "@/template/view/pages/public/access.page.vue";
import UsersPage from "@/template/view/pages/public/users.page";
import VisitersPage from "@/template/view/pages/public/visiteurs.page";
import PrimesPage from "@/template/view/pages/public/primes.page";
import EnrollPage from "@/template/view/pages/public/enroll.page";
import PresencesPage from "@/template/view/pages/public/presences.page";
import PostesPage from "@/template/view/pages/public/postes.page";
import HeuresSupPage from "@/template/view/pages/public/heuresups.page";
import PointagesPage from "@/template/view/pages/public/pointages.page";
import DecomptesPage from "@/template/view/pages/public/decomptes.page";
import EditionsPage from "@/template/view/pages/public/editions.page";
import AffectationsPage from "@/template/view/pages/public/affectations.page";
import heurepointsPageVue from "@/template/view/pages/public/heurepoints.page";
import AgencyHomeScreen from "@/template/view/screens/agence.screen";

/*agence screen*/
import AgenceDashboard from "@/template/view/screens/agencePages/dashboard";
import AgenceServices from "@/template/view/screens/agencePages/services";
import AgenceEmployes from "@/template/view/screens/agencePages/employes";
import AgencePresences from "@/template/view/screens/agencePages/presences";
import AgenceEnroll from "@/template/view/screens/agencePages/enroll";
import AgenceUsersAccounts from "@/template/view/screens/agencePages/usersAccounts";
import AgenceVisitors from "@/template/view/screens/agencePages/visitors";
/*agence*/

const routes = [
  /* Route pour la boite de connexion ou login */
  {
    path: "/",
    component: LoginPage,
    name: "login",
  },

  /*Route pour la création de la société ou register*/
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
  },

  /*Reset password route*/

  {
    path: "/reset",
    component: ResetPage,
    name: "reset",
  },

  /*Route securisé d'accueil après connexion ou crétion */

  {
    path: "/secure",
    component: Main,
    name: "secure",
    redirect: { name: "admin.dashboard" },

    /*Les pages(routes) securisés*/

    children: [
      /*Admin routes*/
      {
        path: "/secure/dashboard",
        component: DashboardPage,
        name: "admin.dashboard",
      },

      {
        path: "/secure/agences",
        component: AgencesPage,
        name: "admin.agences",
      },

      {
        path: "/secure/services",
        component: ServicesPage,
        name: "admin.services",
      },
      {
        path: "/secure/employes",
        component: EmployeesPage,
        name: "admin.employes",
      },
      {
        path: "/secure/baremes",
        component: BaremesPage,
        name: "admin.baremes",
      },
      {
        path: "/secure/access",
        component: AccessPage,
        name: "admin.access",
      },

      {
        path: "/secure/users",
        component: UsersPage,
        name: "admin.users",
      },
      {
        path: "/secure/visiteurs",
        component: VisitersPage,
        name: "admin.visiteurs",
      },
      {
        path: "/secure/primes",
        component: PrimesPage,
        name: "admin.primes",
      },
      {
        path: "/secure/postes",
        component: PostesPage,
        name: "admin.postes",
      },
      {
        path: "/secure/enroll",
        component: EnrollPage,
        name: "admin.enroll",
      },
      {
        path: "/secure/presences",
        component: PresencesPage,
        name: "admin.presences",
      },
      {
        path: "/secure/heuresups",
        component: HeuresSupPage,
        name: "admin.heuresups",
      },
      {
        path: "/secure/heurespoints",
        component: heurepointsPageVue,
        name: "admin.heurepoints",
      },
      /*End admin routes*/

      /*MAJ Routes*/
      {
        path: "/secure/pointages",
        component: PointagesPage,
        name: "maj.pointages",
      },
      /*End maj routes*/

      /*Decomptes routes*/
      {
        path: "/secure/decomptes/:tab",
        component: DecomptesPage,
        name: "tab.decomptes",
      },
      /*Edition page*/
      {
        path: "/secure/editions",
        component: EditionsPage,
        name: "editions",
      },
      {
        path: "/secure/affectations/:affect",
        component: AffectationsPage,
        name: "affectations",
      },
      {
        path: "/secure/agence/home/:libelle/:id",
        component: AgencyHomeScreen,
        name: "admin.agence",
        redirect: (to) => {
          return `/secure/agence/${to.params.libelle}/${to.params.id}/dashboard`;
        },
        children: [
          {
            path: "/secure/agence/:libelle/:id/dashboard",
            component: AgenceDashboard,
            name: "admin.agence.dashboard",
          },
          {
            path: "/secure/agence/:libelle/:id/services",
            component: AgenceServices,
            name: "admin.agence.services",
          },
          {
            path: "/secure/agence/:libelle/:id/employes",
            component: AgenceEmployes,
            name: "admin.agence.employes",
          },
          {
            path: "/secure/agence/:libelle/:id/presences",
            component: AgencePresences,
            name: "admin.agence.presences",
          },
          {
            path: "/secure/agence/:libelle/:id/enroll",
            component: AgenceEnroll,
            name: "admin.agence.enroll",
          },
          {
            path: "/secure/agence/:libelle/:id/users",
            component: AgenceUsersAccounts,
            name: "admin.agence.users",
          },
          {
            path: "/secure/agence/:libelle/:id/visitors",
            component: AgenceVisitors,
            name: "admin.agence.visitors",
          },
        ],
      },
    ],
  },
];

export default routes;
