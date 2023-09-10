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
                                <li class="breadcrumb-item active" aria-current="page">Présences</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Liste des présences</h4>
                    </div>


                    <div class="d-none d-md-block">
                        <div class="d-flex">
                            <input type="date" class="form-control mg-r-3">
                            <select class="select2 form-control-lg">
                                <option label="--Filtre agence par province--"></option>
                                <option value="Kinshasa">Kinshasa</option>
                                <option value="Bandundu">Bandundu</option>
                                <option value="Kasaï Central">Kasaï Central</option>
                                <option value="Kasaï Oriental">Kasaï Oriental</option>
                                <option value="Kasaï Central">Kasaï</option>
                                <option value="Haut Uele">Haut Uele</option>
                                <option value="Bas Uele">Bas Uele</option>
                            </select>
                        </div>

                    </div>

                </div>

                <div class="df-example">
                    <table id="presencesTable" class="table">

                    </table>
                </div>
                <!-- container -->
            </div>
        </div>
    </div>
</template>


<script>
import datatableFr from '@/assets/js/datatable.fr';
export default {
    name: "PresencesPage",
    data() {
        return {
            table: null
        }
    },
    mounted() {
        $('.select2').select2({
            placeholder: '--Sélectionnez une agence--',
            searchInputPlaceholder: 'Recherche agence...'
        });
        this.table = $('#presencesTable').DataTable({
            language: datatableFr,
            columns: [
                { title: 'Nom' },
                { title: 'Postnom' },
                { title: 'Prénom' },
                { title: 'Matricule' },
                { title: 'Jours à prester' },
                { title: 'Jours prestés' },
                { title: 'Absences' },
                { title: 'Congés pris' },
                { title: 'Retards' },
                { title: 'Cumul heures sup/hebdo' },
                { title: '', defaultContent: '<button class="btn btn-primary btn-sm"><i data-feather="eye"></i> </button>' },
            ],
            data: [
                ['Kayembe', 'Rukundo', 'Jean marc', '773AUE', '26', '20', '05', '10', '02', '0'],
                ['Gaston ', 'Delimond', 'Bobby', '77337E', '26', '15', '11', '10', '02', '0'],
                ['Mabuki', 'Mabuki', 'Isaac', '77387E', '26', '18', '07', '10', '02', '0'],
            ]
        });
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },
    unmounted() {
        this.table.distroy();
        this.table = null;
    }
}
</script>