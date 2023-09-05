<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Recherche agence...">
            </div>
            <nav class="nav">
                <a href="javascript:void(0)" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div><!-- content-header -->

        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item">Administration</li>
                                <li class="breadcrumb-item active" aria-current="page">Agences</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Agences</h4>
                    </div>
                    <div class="d-none d-md-block">
                        <a href="#modalAgence" class="btn btn-lg btn-primary" data-bs-toggle="modal"
                            data-animation="effect-slide-in-right"><i data-feather="plus" class="wd-10 mg-r-5"></i>Ajout
                            agence</a>
                    </div>
                </div>

                <div class="df-example">
                    <table id="agencesTable" class="table">
                        <thead>
                            <tr>
                                <th class="wd-25p">Libellé agence</th>
                                <th class="wd-25p">Province</th>
                                <th class="wd-25p">Adresse</th>
                                <th class="wd-20p">Nombre agents</th>
                                <th class="wd-10p"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 30" :key="i">
                                <td>Lorem ipsum</td>
                                <td>Kinshasa</td>
                                <td>03 Bismark Gombe kinshasa</td>
                                <td>400</td>
                                <td class="d-flex">
                                    <button class="btn btn-white btn-sm mg-r-3"><i data-feather="trash"></i></button>
                                    <button class="btn btn-primary btn-sm"><i data-feather="chevron-right"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div><!-- container -->
        </div>
    </div>
    <agence-modal></agence-modal>
</template>

<script>
import datatableFr from '@/assets/js/datatable.fr';
import AgenceModal from './modals/agences.modal'
export default {
    name: 'ServicesPage',
    data() {
        return {
            submitLoading: false,
            dataProcessing: false,
            services: [],
        }
    },

    components: {
        AgenceModal,
    },

    mounted() {
        $('#agencesTable').DataTable({
            language: datatableFr,
        })
        /*End loading test data*/
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },

    methods: {
        submitService(e) {
            this.submitLoading = true;

            setTimeout(() => {
                this.services.push('');
                this.submitLoading = false;
            }, 3000);
        }
    },

    /* computed: {
        services() {
            return this.$store.getters.GET_SERVICES
        }
    }, */
}
</script>