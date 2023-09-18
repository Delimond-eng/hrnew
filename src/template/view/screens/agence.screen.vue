<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="d-flex align-items-center">
                <i data-feather="home"></i>
                <h4 class="m-lg-2">Agence de kinshasa</h4>
            </div>
            <nav class="nav">
                <a href="#" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div><!-- content-header -->

        <div class="content-body pd-0">
            <div class="filemgr-wrapper filemgr-wrapper-two">
                <div class="filemgr-sidebar">
                    <!-- filemgr-sidebar-header -->
                    <div class="filemgr-sidebar-header">
                    </div>
                    <!-- filemgr-sidebar-header -->

                    <!-- filemgr-sidebar-body -->
                    <div class="filemgr-sidebar-body">
                        <div class="pd-t-20 pd-b-10 pd-x-10">
                            <label
                                class="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10 mb-2">Menu</label>
                            <nav class="nav nav-sidebar tx-13">
                                <a href="#" class="nav-link active"><i data-feather="grid"></i> <span>Tableau de
                                        bord</span></a>
                                <a href="#" class="nav-link"><i data-feather="users"></i> <span>Employés</span></a>
                                <a href="#" class="nav-link"><i data-feather="clock"></i> <span>Presences</span></a>
                                <a href="#" class="nav-link"><i data-feather="stop-circle"></i> <span>Enrollement
                                        agents</span></a>
                                <a href="#" class="nav-link"><i data-feather="user"></i> <span>Comptes
                                        utilisateurs</span></a>
                                <a href="#" class="nav-link"><i data-feather="user-check"></i> <span>Visiteurs</span></a>
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
    </div>
</template>


<script>
export default {
    name: "AgenceScreen",

    mounted() {
        this.init();
    },


    methods: {
        init() {
            $(document).ready(() => {
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