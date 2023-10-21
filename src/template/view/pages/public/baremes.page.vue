<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Filtrer barème...">
            </div>
            <nav class="nav">
                <a href="javascript:void(0)" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div>
        <!-- content-header -->
        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item">Administration</li>
                                <li class="breadcrumb-item active" aria-current="page">Configuration barèmes</li>
                            </ol>
                        </nav>

                    </div>
                    <div class="d-none d-md-block">
                        <a href="javascript:void(0)" class="btn btn-lg btn-primary"
                            @click.prevent="$showBsModal('modalBareme', 'effect-scale')"><i data-feather="plus"
                                class="wd-10 mg-r-5"></i>Ajout
                            barème</a>
                    </div>
                </div>

                <div class="df-example">
                    <data-loading :processing="dataLoading">
                        <empty-state :is-empty="baremes.length === 0">
                            <table id="baremesTable" class="table w-100">

                            </table>
                        </empty-state>
                    </data-loading>


                </div>
                <!-- container -->
            </div>
        </div>
    </div>

    <bareme-create-modal @refreshData="refreshBaremes" />
</template>

<script>
import baremeCreateModal from './modals/baremes.modal'
import datatableFr from '@/assets/js/datatable.fr';
export default {
    name: "BaremesPage",

    components: {
        baremeCreateModal,
    },

    data() {
        return {
            table: null,
            dataLoading: false,
            baremes: [],
        }
    },


    unmounted() {
        if (this.table !== null) this.table.destroy();
        this.table = null;
    },

    mounted() {
        this.refreshBaremes();
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },

    methods: {
        async refreshBaremes() {
            let self = this;
            this.dataLoading = true;
            let baremes = await this.$store.dispatch('erp/allBaremes');
            this.baremes = baremes
            this.dataLoading = false;
            if (this.table !== null) this.table.destroy();
            this.table = $('#baremesTable').DataTable({
                language: datatableFr,
                columns: [
                    { title: "Libellé", data: 'libelle' },
                    { title: "Catégorie salarial", data: 'categorie_salariale' },
                    { title: "Salaire mensuel", data: 'salaire_mensuel' },
                    { title: "Allocation familiale", data: 'allocation_familliale' },
                    { title: "Transport Journalier", data: 'transport_journalier' },
                    { title: "Devise", data: 'devise' },
                    {
                        title: '',
                        defaultContent: `<td class="dropdown-file">
                                    <a href="#" class="btn btn-white btn-sm btn-icon" data-bs-toggle="dropdown"><i
                                            data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"
                                                class="mg-r-10 tx-12"></i>Editer</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"
                                                class="mg-r-10 tx-12"></i>Supprimer</a>
                                    </div>
                                </td>` },
                ],
                data: self.baremes
            });
        }
    },
}
</script>