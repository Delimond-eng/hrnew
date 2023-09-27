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
                        <a href="#modalBareme" class="btn btn-lg btn-primary" data-bs-toggle="modal"
                            data-animation="effect-slide-in-right"><i data-feather="plus" class="wd-10 mg-r-5"></i>Ajout
                            barème</a>
                    </div>
                </div>

                <div class="df-example">
                    <table id="baremesTable" class="table">

                    </table>
                </div>
                <!-- container -->
            </div>
        </div>
    </div>

    <bareme-create-modal />
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
            table: null
        }
    },


    unmounted() {
        this.table.destroy();
        this.table = null;
    },

    mounted() {
        this.table = $('#baremesTable').DataTable({
            language: datatableFr,
            columns: [
                { title: "Catégorie salarial" },
                { title: "Libellé" },
                { title: "Salaire mensuel" },
                { title: "Allocation familiale" },
                { title: "Transport Journalier" },
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

            data: [
                ["Qualifié", "Qualifié / Ressources humaines", "600 000 CDF", "250 CDF", "4000 CDF"],
                ["Semi-qualifié", "Qualifié / Informatique", "450 000 CDF", "250 CDF", "3500 CDF"],
                ["Manoeuvre Cadre...", "MC / Informatique", "450 000 CDF", "250 CDF", "3500 CDF"],
            ]
            /* columns: [
                {
                    title: '',
                    data: null,
                    defaultContent: ``
                }
            ] */
        })
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        $('#modalBareme').on('show.bs.modal', function (event) {
            var animation = $(event.relatedTarget).data('animation');
            $(this).addClass(animation);

        })

        // hide modal with effect
        $('#modalBareme').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });
    }
}
</script>