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

                <div data-label="Liste des employés" class="df-example">
                    <table id="visiteursTable" class="table">
                        <thead>
                            <tr>
                                <th class="wd-20p">Date visite</th>
                                <th class="wd-20p">Nom Complet</th>
                                <th class="wd-25p">Téléphone</th>
                                <th class="wd-25p">Code carte</th>
                                <th class="wd-20p">Heure d'entrée</th>
                                <th class="wd-15p">Heure de sortie</th>
                                <th class="wd-15p">Status</th>
                                <th class="wd-20p"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 20" :key="i">
                                <td>11/02/2023</td>
                                <td>Delimond Gaston</td>
                                <td>+243849384900</td>
                                <td>1832JSQ</td>
                                <td>12:30</td>
                                <td><input type="time" class="form-control" value="00:00"></td>
                                <td><span class="badge" :class="i % 2 ? 'bg-warning' : 'bg-primary'"> {{ i % 2 ? 'entrée' :
                                    'sortie' }}</span></td>
                                <td class="d-flex">
                                    <button class="btn btn-white btn-sm mg-r-4"> <i data-feather="trash"></i></button>
                                    <button class="btn btn-white btn-sm"> <i data-feather="check"></i></button>
                                </td>
                            </tr>
                        </tbody>
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