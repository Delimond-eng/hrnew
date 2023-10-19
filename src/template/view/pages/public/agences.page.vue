<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Recherche agence...">
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
                                <li class="breadcrumb-item active" aria-current="page">Gestion agences</li>
                            </ol>
                        </nav>

                    </div>
                    <div class="d-none d-md-block">
                        <select id="agenceFilterSelect" v-show="dataProcessing === false">
                            <option label="Filtez agence par province"></option>
                        </select>

                        <button class="btn btn-primary m-lg-2" @click="$showBsModal('modalAgence', 'effect-scale')"> <i
                                data-feather="plus"></i> Nouvelle agence</button>
                    </div>
                </div>



                <data-loading :processing="dataProcessing">
                    <empty-state :isEmpty="agences.length === 0">
                        <div class="row row-sm">
                            <div class="col-md-3" v-for="(agence, index) in agences" :key="index">
                                <a class="card card-event agenceCard shadow-none" href="javascript:void(0)"
                                    @click.prevent="$router.push({ name: 'admin.agence', params: { libelle: agence.libelle, id: agence.agence_id } });">
                                    <div class="card-img-top bg-primary-light w-100 d-flex align-content-center align-items-center"
                                        style="height: 55px;">
                                        <h5 class="m-2 tx-primary tx-bold">{{ agence.libelle }}</h5>
                                    </div>
                                    <div class="card-body">
                                        <h6 class="tx-12"> <i data-feather="map-pin" width="12" height="12"></i> {{
                                            agence.province
                                        }}</h6>
                                    </div>

                                    <div class="card-footer tx-13">
                                        <span class="tx-color-03">Agents</span>
                                        <span class="tx-color-01">0</span>
                                    </div>

                                </a>

                            </div>
                        </div>
                    </empty-state>
                </data-loading>

            </div>
            <!-- container -->
        </div>
    </div>
    <agence-modal @refreshData="refreshData" />
</template>

<script>
import AgenceModal from './modals/agences.modal'
export default {
    name: 'ServicesPage',
    data() {
        return {
            submitLoading: false,
            dataProcessing: false,
        }
    },

    components: {
        AgenceModal,
    },

    async mounted() {
        await this.refreshData();
        let self = this;
        const areas = await this.$store.dispatch('biotime/allAreas');
        $('#agenceFilterSelect').select2({
            placeholder: 'Filtre agence par province',
            searchInputPlaceholder: 'Recherche province...',
            allowClear: true,
            data: $.map(areas, function (item) {
                return {
                    text: item.area_name,
                    id: item.id
                }
            })
        }).on('change', async function (e) {
            /**
             * Load agencies of select area
            */
            let payload = $(this).select2('data')[0].text;
            self.refreshData(payload);

        });

        /*End loading test data*/
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });


    },

    methods: {
        async refreshData(payload) {
            this.dataProcessing = true
            this.$store.dispatch('erp/getAgences', payload)
                .then((res) => this.dataProcessing = false)
                .catch((e) => this.dataProcessing = false)
        }
    },

    computed: {
        agences() {
            return this.$store.getters['erp/GET_AGENCES']
        }
    },
}
</script>

<style>
.agenceCard:hover {
    border: .5px solid #3c68eb85;
}
</style>