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
                    <div class="media media-folder bg-primary-light">
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
                    <div class="media media-folder bg-primary-light">
                        <i data-feather="briefcase"></i>
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
                    <div class="media media-folder bg-primary-light">
                        <i data-feather="clock"></i>
                        <div class="media-body">
                            <h6><a href="#" class="link-02">Présences</a></h6>
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
                    <div class="media media-folder bg-primary-light">
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

        <div class="pd-20 pd-lg-25 pd-xl-30">
            <label class="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Agence
                Statistiques de presence de l'Agence</label>

            <div class="df-example">
                <div class="row row-sm d-flex align-items-center">
                    <div class="col-md-6">
                        <div class="chart-seven"><canvas id="chartDonut"></canvas></div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-6">
                                <p class="tx-10 tx-uppercase tx-medium tx-color-03 tx-spacing-1 tx-nowrap mg-b-5">Présences
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="wd-10 ht-10 rounded-circle bg-success mg-r-5"></div>
                                    <h6 class="tx-normal tx-rubik mg-b-0">25 <small class="tx-color-04">| 60%</small></h6>
                                </div>
                            </div>
                            <!-- col -->
                            <div class="col-6">
                                <p class="tx-10 tx-uppercase tx-medium tx-color-03 tx-spacing-1 mg-b-5">Absences</p>
                                <div class="d-flex align-items-center">
                                    <div class="wd-10 ht-10 rounded-circle bg-danger mg-r-5"></div>
                                    <h6 class="tx-normal tx-rubik mg-b-0">08 <small class="tx-color-04">| 20%</small></h6>
                                </div>
                            </div>
                            <!-- col -->
                            <div class="col-6 mg-t-20">
                                <p class="tx-10 tx-uppercase tx-medium tx-color-03 tx-spacing-1 mg-b-5">Retards</p>
                                <div class="d-flex align-items-center">
                                    <div class="wd-10 ht-10 rounded-circle bg-orange mg-r-5"></div>
                                    <h6 class="tx-normal tx-rubik mg-b-0">08 <small class="tx-color-04">| 20%</small></h6>
                                </div>
                            </div><!-- col -->
                            <div class="col-6 mg-t-20">
                                <p class="tx-10 tx-uppercase tx-medium tx-color-03 tx-spacing-1 mg-b-5">Departs anticipés
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="wd-10 ht-10 rounded-circle bg-info mg-r-5"></div>
                                    <h6 class="tx-normal tx-rubik mg-b-0">04 <small class="tx-color-04">| 10%</small></h6>
                                </div>
                            </div>
                            <!-- col -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- filemgr-content-body -->
    <agence-presences-details-modal :title="title" />
</template>

<script>
import AgencePresencesDetailsModal from '../../pages/public/modals/agence_stats_presences.modal'
export default {
    name: 'Dashboard',
    data() {
        return {
            title: ''
        }
    },

    components: {
        AgencePresencesDetailsModal,
    },
    mounted() {
        $('#modalPresencesDetails').on('show.bs.modal', function (event) {
            $(this).addClass("effect-scale");
        });

        // hide modal with effect
        $('#modalPresencesDetails').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });
        this.init();
    },


    methods: {
        init() {
            /** PIE CHART **/
            var datapie = {
                labels: ['Présences', 'Absences', 'Retards', 'Departs anticipés'],
                datasets: [{
                    data: [60, 20, 20, 10],
                    backgroundColor: ['#0c8842', '#dc3545', '#fd7e14', '#00b8d4']
                }]
            };

            var optionpie = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },

                onClick: (evt, item) => {
                    myDonutChart.update();
                    if (item[0] !== undefined) {
                        let index = item[0]._index;
                        switch (index) {
                            case 0:
                                this.title = "Présences"
                                break;
                            case 1:
                                this.title = "Absences"

                                break;
                            case 2:
                                this.title = "Retards"

                                break;
                            case 3:
                                this.title = "Departs anticipés"
                                break;
                        }
                        this.$showBsModal('modalPresencesDetails');
                    }

                }
            };
            // For a pie chart
            var ctx2 = document.getElementById('chartDonut');
            var myDonutChart = new Chart(ctx2, {
                type: 'doughnut',
                data: datapie,
                options: optionpie
            });
        }
    },
}
</script>
<style scoped src="@/assets/css/dashforge.filemgr.css"></style>