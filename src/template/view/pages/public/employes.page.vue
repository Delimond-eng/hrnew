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
                        <a href="#modalEmployes" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                            data-animation="effect-slide-in-right"><i data-feather="plus" class="wd-10 mg-r-5"></i> Nouveau
                            employé</a>
                    </div>
                </div>

                <div data-label="Liste des employés" class="df-example">
                    <table id="employesTable" class="table">
                        <thead>
                            <tr>
                                <th class="wd-20p">Nom</th>
                                <th class="wd-25p">Post nom</th>
                                <th class="wd-20p">Prénom</th>
                                <th class="wd-15p">Matricule</th>
                                <th class="wd-20p">Fonction</th>
                                <th class="wd-20p">Genre</th>
                                <th class="wd-20p">Etat civile</th>
                                <th class="wd-20p">Date engagement</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 30" :key="i">
                                <td>Donna Snider</td>
                                <td>Delimond</td>
                                <td>Gaston</td>
                                <td>1I2I000</td>
                                <td>Directeur technique</td>
                                <td>M</td>
                                <td>Marié</td>
                                <td>05/08/2023</td>
                            </tr>
                        </tbody>
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