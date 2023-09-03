<template>
    <!-- sidebar -->
    <aside class="aside aside-fixed">
        <div class="aside-header">
            <a href="index-2.html" class="aside-logo">Millenium<span>payroll</span></a>
            <a href="#" class="aside-menu-link">
                <i data-feather="menu"></i>
                <i data-feather="x"></i>
            </a>
        </div>
        <div class="aside-body">
            <div class="aside-loggedin">
                <div class="d-flex align-items-center justify-content-start">
                    <a href="#" class="avatar"><img src="assets/img/placehold.jpg" class="rounded-circle" alt=""></a>
                    <div class="aside-alert-link">
                        <a href="#" data-bs-toggle="tooltip" title="Sign out"><i data-feather="log-out"></i></a>
                    </div>
                </div>
                <div class="aside-loggedin-user">
                    <a href="#loggedinMenu" class="d-flex align-items-center justify-content-between mg-b-2"
                        data-bs-toggle="collapse">
                        <h6 class="tx-semibold mg-b-0">Gaston delimond</h6>
                        <i data-feather="chevron-down"></i>
                    </a>
                    <p class="tx-color-03 tx-12 mg-b-0">Administrateur</p>
                </div>
                <div class="collapse" id="loggedinMenu">
                    <ul class="nav nav-aside mg-b-0">
                        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="edit"></i> <span>Modifier
                                    Profil</span></a>
                        </li>
                        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="user"></i> <span>Voir
                                    Profil</span></a>
                        </li>
                        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="settings"></i> <span>Paramètres
                                    du compte</span></a></li>
                        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="help-circle"></i>
                                <span>Assistance technique</span></a></li>
                        <li class="nav-item"><a href="#" class="nav-link"><i data-feather="log-out"></i>
                                <span>Déconnexion</span></a>
                        </li>
                    </ul>
                </div>
            </div><!-- aside-loggedin -->
            <ul class="nav nav-aside">
                <li class="nav-label">Menu</li>
                <li class="nav-item with-sub" :class="currentRoute.includes('admin.') ? 'active' : ''">
                    <a href="#" class="nav-link"><i data-feather="briefcase"></i>
                        <span>Administration</span>
                    </a>
                    <ul>
                        <li><router-link :to="{ name: 'admin.services' }">Services</router-link></li>
                        <li><router-link :to="{ name: 'admin.employes' }">Employés</router-link></li>
                        <li><router-link :to="{ name: 'admin.baremes' }">Barèmes</router-link></li>
                    </ul>
                </li>

                <li class="nav-item with-sub" :class="currentRoute.includes('maj.') ? 'active' : ''">
                    <a href="#" class="nav-link"><i data-feather="clipboard"></i>
                        <span>Mises à jour</span>
                    </a>
                    <ul>
                        <li><router-link :to="{ name: 'maj.pointages' }">Pointage</router-link></li>
                    </ul>
                </li>

                <li class="nav-item with-sub" :class="currentRoute.includes('editions') ? 'active' : ''">
                    <a href="#" class="nav-link"><i data-feather="printer"></i>
                        <span>Editions</span>
                    </a>
                    <ul>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Feuille de paie' } }">Feuille de
                                paie</router-link></li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Bulletin de paie' } }">Bulletin de
                                paie</router-link></li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'CNSS' } }">CNSS</router-link></li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'IPR' } }">IPR</router-link></li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'INPP & ONEM' } }">INPP & ONEM</router-link>
                        </li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Intercalaire' } }">Intercalaire</router-link>
                        </li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Net à payer' } }">Net à payer</router-link>
                        </li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Quinzaine' } }">Quinzaine</router-link></li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Avance sur salaire' } }">Avance sur
                                salaire</router-link></li>
                    </ul>
                </li>

                <li class="nav-item with-sub" :class="currentRoute.includes('tab.') ? 'active' : ''">
                    <a href="#" class="nav-link"><i data-feather="layout"></i>
                        <span>Décompte</span>
                    </a>
                    <ul>
                        <li><router-link :to="{ name: 'tab.decomptes', params: { tab: 'calcul' } }">Calcul
                                décompte</router-link>
                        </li>
                        <li><router-link :to="{ name: 'tab.decomptes', params: { tab: 'bulletin' } }">Bulletin
                                décompte</router-link></li>
                    </ul>
                </li>


            </ul>
        </div>
    </aside>
    <!-- sidebar -->
</template>

<script>
export default {
    name: "SidebarLayout",

    data() {
        return {
            currentRoute: '',
        }
    },

    mounted() {
        setInterval(() => {
            this.currentRoute = this.$route.name;
        }, 50);
    }
}
</script>