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
                        <div class="d-flex">
                            <a href="#modalEmployes" class="btn btn-lg btn-primary mg-r-3" data-bs-toggle="modal"
                                data-animation="effect-slide-in-right"><i data-feather="plus" class="wd-10 mg-r-5"></i>
                                Nouveau
                                employé</a>
                            <a href="#modalEmployes" class="btn btn-lg btn-outline-primary" data-bs-toggle="modal"
                                data-animation="effect-slide-in-right"><i data-feather="download" class="wd-10 mg-r-5"></i>
                                Importer liste agents</a>
                        </div>
                    </div>
                </div>

                <div class="df-example">
                    <table id="employesTable" class="table">

                    </table>
                </div>
                <!-- container -->
            </div>
        </div>
    </div>
    <employes-create-modal />
</template>


<script>
import datatableFr from '@/assets/js/datatable.fr';
import employesCreateModal from './modals/employes.modal'
export default {
    name: "EmployesPage",

    components: {
        employesCreateModal,
    },
    mounted() {
        $('#employesTable').DataTable({
            language: datatableFr,
            columns: [
                { title: 'Nom' },
                { title: 'Postnom' },
                { title: 'Prénom' },
                { title: 'Matricule' },
                { title: 'Fonction' },
                { title: 'Genre' },
                { title: 'Etat civil' },
                { title: 'Date engagement' },
            ],
            data: [
                ['Kayembe', 'Rukundo', 'Jean marc', '773AUE', 'Chef d`\agence', 'Marié', 'M', '03/12/2006'],
                ['Paty', 'Mutete', 'Viny', '77363E', 'Directeur Technique', 'Marié', 'M', '03/12/2008'],
                ['Ngongo', 'Kasongo', 'Giresse', '77362E', 'Directeur des opération', 'Marié', 'M', '03/12/2005'],
            ]
        });
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        $('#modalEmployes').on('show.bs.modal', function (event) {
            var animation = $(event.relatedTarget).data('animation');
            $(this).addClass(animation);
            new PerfectScrollbar(".modal", {
                suppressScrollX: true,
            });
        })

        // hide modal with effect
        $('#modalEmployes').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });
    }
}
</script>