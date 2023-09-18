<template>
    <!-- filemgr-content-header -->
    <div class="filemgr-content-header">
        <h6 class="mg-b-0 tx-primary"><i class="mr-2" data-feather="grid" width="15"></i> Tableau de bord</h6>
    </div>
    <!-- filemgr-content-header -->

    <!-- filemgr-content-body -->
    <div class="filemgr-content-body scrollbar-primary scrollbar-lg">
        <div class="pd-20 pd-lg-25 pd-xl-30">
            <label class="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Agence
                Tableau de bord</label>
            <div class="row row-xs">
                <!-- col -->
                <div class="col-sm-6 col-lg-4 col-xl-3 mg-t-10">
                    <div class="media media-folder">
                        <i data-feather="users"></i>
                        <div class="media-body">
                            <h6><a href="#" class="link-02">Utilisateurs</a></h6>
                            <span>08</span>
                        </div><!-- media-body -->
                        <div class="dropdown-file">
                            <a href="#" class="dropdown-link" data-bs-toggle="dropdown"><i
                                    data-feather="more-vertical"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="#modalViewDetails" data-bs-toggle="modal" class="dropdown-item details"><i
                                        data-feather="user-plus"></i>Nouveau utilisateur</a>
                                <a href="#" class="dropdown-item important"><i data-feather="eye"></i>Voir utilisateurs</a>
                            </div>
                        </div><!-- dropdown -->
                    </div><!-- media -->
                </div>
                <!-- col -->

                <!-- col -->
                <div class="col-sm-6 col-lg-4 col-xl-3 mg-t-10">
                    <div class="media media-folder">
                        <i data-feather="users"></i>
                        <div class="media-body">
                            <h6><a href="#" class="link-02">Employés</a></h6>
                            <span>12</span>
                        </div><!-- media-body -->
                        <div class="dropdown-file">
                            <a href="#" class="dropdown-link" data-bs-toggle="dropdown"><i
                                    data-feather="more-vertical"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="#modalViewDetails" data-bs-toggle="modal" class="dropdown-item details"><i
                                        data-feather="user-plus"></i>Nouveau employé</a>
                                <a href="#" class="dropdown-item important"><i data-feather="eye"></i>Voir employés</a>
                            </div>
                        </div><!-- dropdown -->
                    </div><!-- media -->
                </div>
                <!-- col -->

                <!-- col -->
                <div class="col-sm-6 col-lg-4 col-xl-3 mg-t-10">
                    <div class="media media-folder">
                        <i data-feather="clock"></i>
                        <div class="media-body">
                            <h6><a href="#" class="link-02">Presences</a></h6>
                            <span>12 | 03</span>
                        </div><!-- media-body -->
                        <div class="dropdown-file">
                            <a href="#" class="dropdown-link" data-bs-toggle="dropdown"><i
                                    data-feather="more-vertical"></i></a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="#modalViewDetails" data-bs-toggle="modal" class="dropdown-item details"><i
                                        data-feather="clipboard"></i>Rapport journalier</a>
                            </div>
                        </div><!-- dropdown -->
                    </div><!-- media -->
                </div>
                <!-- col -->

                <!-- col -->
                <div class="col-sm-6 col-lg-4 col-xl-3 mg-t-10">
                    <div class="media media-folder">
                        <i data-feather="user-check"></i>
                        <div class="media-body">
                            <h6><a href="#" class="link-02">Visiteurs</a></h6>
                            <span>12</span>
                        </div>
                        <!-- media-body -->
                    </div>
                    <!-- media -->
                </div>
                <!-- col -->
            </div>
            <!-- row -->
        </div>
    </div>
    <!-- filemgr-content-body -->
</template>

<script>
export default {
    name: 'Dashboard'
}
</script>
<style scoped src="@/assets/css/dashforge.filemgr.css"></style>