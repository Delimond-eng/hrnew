<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Recherche service...">
            </div>
            <nav class="nav">
                <async-button></async-button>
            </nav>
        </div><!-- content-header -->

        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item">Administration</li>
                                <li class="breadcrumb-item active" aria-current="page">Tableau de bord</li>
                            </ol>
                        </nav>

                    </div>
                    <div class="d-none d-md-block">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-lg-4 col-xl-4 mg-t-10">
                        <div class="card h-100">
                            <div class="card-header d-flex justify-content-between">
                                <h6 class="lh-5 mg-b-0">Statistiques des appareils</h6>
                                <a href="#" class="tx-13 link-03"><i data-feather="more-horizontal"
                                        class="wd-20 ht-20"></i></a>
                            </div><!-- card-header -->
                            <div class="card-body">
                                <data-loading :processing="dataProcessing">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="chart-thirteen"><canvas id="chartDonutDevices"></canvas></div>
                                        </div>
                                        <div class="col-12 tx-12 mg-t-40">
                                            <div class="d-flex align-items-center">
                                                <div class="wd-10 ht-10 bg-success rounded-circle pos-relative t--1"></div>
                                                <span class="tx-medium mg-l-10">Connecté</span>
                                                <span class="tx-rubik mg-l-auto">04</span>
                                            </div>

                                            <div class="d-flex align-items-center">
                                                <div class="wd-10 ht-10 bg-danger rounded-circle pos-relative t--1"></div>
                                                <span class="tx-medium mg-l-10">Hors ligne</span>
                                                <span class="tx-rubik mg-l-auto">02</span>
                                            </div>

                                            <div class="d-flex align-items-center">
                                                <div class="wd-10 ht-10 bg-warning rounded-circle pos-relative t--1"></div>
                                                <span class="tx-medium mg-l-10">Non connecté</span>
                                                <span class="tx-rubik mg-l-auto">05</span>
                                            </div>
                                        </div>
                                    </div>
                                </data-loading>

                            </div><!-- card-body -->
                        </div><!-- card -->
                    </div>
                    <!-- col -->

                    <div class="col-lg-8 mg-t-10">
                        <div class="card h-100">
                            <div class="card-header d-sm-flex align-items-start justify-content-between">
                                <h6 class="lh-5 mg-b-0">Tous les appareils</h6>
                                <a href="#" class="tx-13 link-03 d-flex align-items-center">
                                    <button type="button" class="btn btn-sm btn-outline-dark"
                                        @click.prevent="refreshDevices">
                                        <i data-feather="refresh-ccw" style="with:10px"></i> Actualiser
                                    </button>
                                </a>
                            </div><!-- card-header -->
                            <div class="card-body pd-y-15 pd-x-10">
                                <!-- <div class="table-responsive" style="overflow-x: hidden;">
                                    <table class="table table-borderless table-sm tx-13 tx-nowrap mg-b-0 overflow-hidden">
                                        <thead>
                                            <tr class="tx-10 tx-spacing-1 tx-color-03 tx-uppercase">
                                                <th>Nom de serie</th>
                                                <th>Nom de l'appareil</th>
                                                <th class="text-right">IP du peripherique</th>
                                                <th class="text-right">Agence</th>
                                                <th class="text-right">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody class="overflow-y-auto overflow-hidden">
                                            <tr>
                                                <td class="tx-medium">AC83839200</td>
                                                <td class="tx-medium">U300-C</td>
                                                <td class="text-right">192.168.5.101</td>
                                                <td class="text-right">Kin Gombe</td>
                                                <td class="text-right d-flex align-items-center justify-content-center">
                                                    <div
                                                        class="wd-10 mg-r-2 ht-10 bg-success rounded-circle pos-relative t--1">
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="tx-medium">AC83839230</td>
                                                <td class="tx-medium">U300-C</td>
                                                <td class="text-right">192.168.5.102</td>
                                                <td class="text-right">Kin Gombe</td>
                                                <td class="text-right d-flex align-items-center justify-content-center">
                                                    <div
                                                        class="wd-10 mg-r-2 ht-10 bg-success rounded-circle pos-relative t--1">
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="tx-medium">AC83839230</td>
                                                <td class="tx-medium">ICLOCK 680</td>
                                                <td class="text-right">192.168.5.103</td>
                                                <td class="text-right">Kin Gombe</td>
                                                <td class="text-right d-flex align-items-center justify-content-center">
                                                    <div
                                                        class="wd-10 mg-r-2 ht-10 bg-danger rounded-circle pos-relative t--1">
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr v-for="i in 10" :key="i">
                                                <td class="tx-medium">AC8383111{{ i }}</td>
                                                <td class="tx-medium">ICLOCK 680</td>
                                                <td class="text-right">192.168.5.10{{ i }}</td>
                                                <td class="text-right">Kin Gombe</td>
                                                <td class="text-right d-flex align-items-center justify-content-center">
                                                    <div :class="i % 2 ? 'bg-warning' : 'bg-success'"
                                                        class="wd-10 mg-r-2 ht-10 rounded-circle pos-relative t--1">
                                                    </div>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div> -->
                                <data-loading :processing="dataProcessing">
                                    <div class="row row-xs">
                                        <div class="col-sm-6 col-lg-4 col-xl-4 mb-2" v-for="( device, i) in devices"
                                            :key="i">
                                            <div class="media media-folder">
                                                <img src="assets/img/device_image.png"
                                                    style="height: 50px; object-fit: cover" alt="device">
                                                <div class="media-body">
                                                    <h6><a href="#" class="link-02">{{ device.alias }}</a></h6>
                                                    <div class="d-flex">
                                                        <i data-feather="map-pin"
                                                            style="width:10px; margin-top: -4px; margin-right: 2px;"></i>
                                                        <span>{{ device.area_name
                                                        }}</span>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <span>{{ device.ip_address }}</span>
                                                        <div style="height: 8px; width: 8px;"
                                                            :class="(device.state === '3') ? 'bg-danger' : (device.state !== 2) ? 'bg-warning' : 'bg-success'"
                                                            class="rounded-circle pos-relative"></div>
                                                    </div>

                                                </div>

                                                <!-- media-body -->
                                                <div class="dropdown-file">
                                                    <a href="#" class="dropdown-link" data-bs-toggle="dropdown"><i
                                                            data-feather="more-vertical"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-end">
                                                        <a href="javascript:void(0)"
                                                            @click.prevent="$showBsModal('modalDeviceLink', 'effect-scale')"
                                                            class="dropdown-item details"><i data-feather="link"></i>Lier à
                                                            une
                                                            agence</a>
                                                        <a href="#" class="dropdown-item important"><i
                                                                data-feather="info"></i>Voir infos</a>
                                                    </div>
                                                </div>
                                                <!-- dropdown -->
                                            </div>
                                            <!-- media -->
                                        </div>
                                    </div>
                                </data-loading>

                                <!-- table-responsive -->
                            </div><!-- card-body -->
                        </div><!-- card -->

                    </div>
                </div>
            </div>
            <!-- container -->
        </div>
    </div>
    <devices-details-modal :title="selectedTitle" :datas="selectedDatas" />
    <device-link-modal />
</template>

<script>
import DevicesDetailsModal from './modals/devices_stats_detail.modal';
import DeviceLinkModal from './modals/device_link_modal.vue';
export default {
    name: 'ServicesPage',

    components: {
        DevicesDetailsModal,
        DeviceLinkModal
    },
    data() {
        return {
            dataProcessing: false,
            selectedTitle: '',
            selectedDatas: []
        }
    },

    mounted() {
        $('#modalDevicesDetails').on('show.bs.modal', function (event) {
            $(this).addClass("effect-scale");
        });
        // hide modal with effect
        $('#modalDevicesDetails').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });
        this.init();
        this.refreshDevices();
    },

    methods: {
        init() {
            /*End loading test data*/
            new PerfectScrollbar(".content-body", {
                suppressScrollX: true,
            });


            /** PIE CHART **/
            var datapie = {
                labels: ['Connecté', 'Hors ligne', 'Non autorisé'],
                datasets: [{
                    data: [25, 15, 10],
                    backgroundColor: ['#0c8842', '#dc3545', '#ffc107']
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
                                this.selectedTitle = "Appareils connectés"
                                this.selectedDatas = [["Y37EJJJD00393", "Iclock 680", "Kinshasa", "Gombe Direction Gén", "192.168.4.201", ""]]
                                break;
                            case 1:
                                this.selectedTitle = "Appareils Hors ligne"

                                break;
                            case 2:
                                this.selectedTitle = "Appareils non autorisés"

                                break;

                        }
                        this.$showBsModal('modalDevicesDetails');
                    }

                }
            };

            // For a pie chart
            var ctx2 = document.getElementById('chartDonutDevices');
            var myDonutChart = new Chart(ctx2, {
                type: 'doughnut',
                data: datapie,
                options: optionpie
            });
        },

        refreshDevices() {
            this.dataProcessing = true;
            this.$store.dispatch('biotime/allDevices').then((_) => this.dataProcessing = false).catch((_) => this.dataProcessing = false);
        }
    },

    computed: {
        devices() {
            return this.$store.getters['biotime/GET_DEVICES'];
        }
    },
}
</script>
<style scoped src="@/assets/css/dashforge.filemgr.css"></style>