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
                                <li class="breadcrumb-item active" aria-current="page">Gestion agences</li>
                            </ol>
                        </nav>

                    </div>
                    <div class="d-none d-md-block">
                        <select class="select2i form-control-lg select2">
                            <option label="Filtez agence par province"></option>
                        </select>

                        <button class="btn btn-primary m-lg-2" @click="$showBsModal('modalAgence', 'effect-scale')"> <i
                                data-feather="plus"></i> Nouvelle agence</button>
                    </div>
                </div>

                <div class="row row-sm">
                    <div class="col-md-3 mg-md-b-15" v-for="(agence, index) in agences" :key="index">
                        <a class="card card-event agenceCard shadow-none" href="javascript:void(0)"
                            @click.prevent="$router.push({ name: 'admin.agence' })">
                            <div class="card-img-top bg-primary-light w-100 d-flex align-content-center align-items-center"
                                style="height: 55px;">
                                <h6 class="m-2 tx-primary tx-bold">{{ agence.label }}</h6>
                            </div>
                            <div class="card-body">
                                <h6 class="tx-12"> <i data-feather="map-pin" width="12" height="12"></i> {{ agence.province
                                }}</h6>
                            </div>
                            <!-- card-body -->
                            <div class="card-footer tx-13">
                                <span class="tx-color-03">Agents</span>
                                <span class="tx-color-01">{{ agence.nb_agent }}</span>
                            </div>
                            <!-- card-footer -->
                        </a>
                        <!-- card -->
                    </div>
                    <!-- col -->
                </div>
            </div>
            <!-- container -->
        </div>
    </div>
    <agence-modal></agence-modal>
</template>

<script>
import AgenceModal from './modals/agences.modal'
export default {
    name: 'ServicesPage',

    data() {
        return {
            submitLoading: false,
            dataProcessing: false,
            agences: [
                {
                    label: "Kitambo",
                    nb_agent: "20",
                    province: "Kinshasa"
                },
                {
                    label: "Gombe",
                    nb_agent: "43",
                    province: "Kinshasa"
                },

                {
                    label: "Masina",
                    nb_agent: "10",
                    province: "Kinshasa"
                },
                {
                    label: "Bandal",
                    nb_agent: "10",
                    province: "Kinshasa"
                }
            ],
            iselect: null
        }
    },

    components: {
        AgenceModal,
    },

    mounted() {

        $('.select2i').select2({
            placeholder: '--Filtre agence par province--',
            searchInputPlaceholder: 'Recherche province...',
            allowClear: true,
            data: [
                {
                    id: 1, text: 'Kasaï Central'
                },
                {
                    id: 2, text: 'Kasaï oriental'
                },
                {
                    id: 3, text: 'Bas Kongo'
                },
                {
                    id: 4, text: 'Bas Uele'
                },
            ]
        });

        /*End loading test data*/
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });

        /* $('.select2i').change((event) => {
            console.log(event.target.value);
        }) */
    },

    methods: {

        submitService(e) {

        },
    },

    computed: {
        agencies() {
            return this.$store.getters['agence/GET_AGENCES']
        }
    },
}
</script>

<style>
.agenceCard:hover {
    border: .5px solid #3c68eb85;
}
</style>