<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Tapez le numéro de matricule...">
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
                                <li class="breadcrumb-item active" aria-current="page">Employés</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Employés</h4>
                    </div>
                    <div class="d-none d-md-block">
                        <a href="#modalVisiteurs" class="btn btn-lg btn-primary" data-bs-toggle="modal"
                            data-animation="effect-scale"><i data-feather="plus" class="wd-10 mg-r-5"></i> Nouveau
                            visiteur</a>
                    </div>
                </div>

                <div class="df-example">
                    <table id="visiteursTable" class="table">

                    </table>
                </div>
                <!-- container -->
            </div>
        </div>
    </div>
    <visiteurs-create-modal></visiteurs-create-modal>
</template>


<script>
import datatableFr from '@/assets/js/datatable.fr';
import visiteursCreateModal from './modals/visiteurs.modal'
export default {
    name: "VisiteursPage",

    components: {
        visiteursCreateModal,
    },
    mounted() {
        $('#visiteursTable').DataTable({
            language: datatableFr,
            columns: [
                { title: 'Date Visite' },
                { title: 'Nom complet' },
                { title: 'Téléphone' },
                { title: 'Code carte' },
                { title: 'Heure d\entrée' },
                { title: 'Heure de sortie' },
                { title: 'Status' },
                {
                    title: '',
                    defaultContent: `<div class="d-flex">
                                    <button class="btn btn-white btn-sm mg-r-4"> <i data-feather="trash"></i></button>
                                    <button class="btn btn-white btn-sm"> <i data-feather="check"></i></button>
                                </div>`
                }
            ],

            data: [
                ["07/08/2023", "Mukantu Perkins", "099763747388", "0039382883", "12:35", '<input type="time" class="form-control" value="14:00">', `<span class="badge bg-primary"> sortie </span>`],
                ["07/08/2023", "Mabuki Isaac", "099763747388", "0039332923", "08:25", '<input type="time" class="form-control" value="10:00">', `<span class="badge bg-primary"> sortie </span>`],
                ["07/08/2023", "Lionnel Nawej", "099763747388", "0030099883", "11:35", '<input type="time" class="form-control" value="12:00">', `<span class="badge bg-primary"> sortie </span>`],
            ]
        });
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        $('#modalVisiteurs').on('show.bs.modal', function (event) {
            var animation = $(event.relatedTarget).data('animation');
            $(this).addClass(animation);
            new PerfectScrollbar(".modal", {
                suppressScrollX: true,
            });
        })

        // hide modal with effect
        $('#modalVisiteurs').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });
    }
}
</script>