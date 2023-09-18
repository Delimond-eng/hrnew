<template>
    <div class="content ht-100v pd-0">
        <!-- content-header -->
        <div class="content-header">
            <button class="btn btn-icon btn-sm tx-primary" @click.prevent="$router.replace({ name: 'admin.agences' })"> <i
                    data-feather="arrow-left"></i> </button>
            <nav class="nav">
                <a href="#" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div>
        <!-- content-header -->

        <!-- content-body -->
        <div class="content-body pd-0">
            <div class="filemgr-wrapper filemgr-wrapper-two">
                <div class="filemgr-sidebar">
                    <!-- filemgr-sidebar-header -->
                    <div class="filemgr-sidebar-header">
                        <i data-feather="home"></i>
                        <h5 class="m-lg-2">Agence de kinshasa</h5>
                    </div>
                    <!-- filemgr-sidebar-header -->

                    <!-- filemgr-sidebar-body -->
                    <div class="filemgr-sidebar-body">
                        <div class="pd-t-20 pd-b-10 pd-x-10">
                            <label
                                class="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10 mb-2">Menu</label>
                            <nav class="nav nav-sidebar tx-13">
                                <router-link :to="{ name: 'agence.dashboard' }" exact-active-class="active"
                                    class="nav-link">
                                    <i data-feather="grid"></i> <span>Tableau de bord</span>
                                </router-link>
                                <router-link :to="{ name: 'agence.services' }" exact-active-class="active" class="nav-link">
                                    <i data-feather="briefcase"></i> <span>Services</span>
                                </router-link>
                                <router-link :to="{ name: 'agence.employes' }" exact-active-class="active"
                                    class="nav-link"><i data-feather="users"></i> <span>Employés</span>
                                </router-link>
                                <router-link :to="{ name: 'agence.presences' }" exact-active-class="active"
                                    class="nav-link"><i data-feather="clock"></i> <span>Presences</span></router-link>
                                <router-link :to="{ name: 'agence.enroll' }" exact-active-class="active" class="nav-link"><i
                                        data-feather="stop-circle"></i> <span>Enrollement
                                        agents</span></router-link>
                                <router-link :to="{ name: 'agence.users' }" exact-active-class="active" class="nav-link"><i
                                        data-feather="user"></i> <span>Comptes
                                        utilisateurs</span></router-link>
                                <router-link :to="{ name: 'agence.visitors' }" exact-active-class="active"
                                    class="nav-link"><i data-feather="user-check"></i> <span>Visiteurs</span></router-link>
                            </nav>
                        </div>

                    </div>
                    <!-- filemgr-sidebar-body -->
                </div>
                <!-- filemgr-sidebar -->

                <!-- filemgr-content -->
                <div class="filemgr-content">
                    <router-view />
                </div>
                <!-- filemgr-content -->

            </div>
            <!-- filemgr-wrapper -->
        </div>
        <!-- content-body -->
    </div>
</template>


<script>
export default {
    name: "AgenceScreen",


    unmounted() {
        $('.aside').removeClass('minimize');
    },

    mounted() {
        this.init();
    },


    methods: {
        init() {
            $(document).ready(() => {
                if (window.matchMedia('(min-width: 1200px)').matches) {
                    $('.aside').removeClass('maximize');
                    $('.aside').addClass('minimize');
                }

                new PerfectScrollbar('.filemgr-sidebar-body', {
                    suppressScrollX: true
                });

                new PerfectScrollbar('.filemgr-content-body', {
                    suppressScrollX: true
                });
            })
        }
    },
}
</script>
<style scoped src="@/assets/css/dashforge.filemgr.css"></style>