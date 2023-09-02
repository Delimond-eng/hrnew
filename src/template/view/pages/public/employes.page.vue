<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Tapez le numéro de matricule...">
            </div>
            <nav class="nav">
                <a href="#" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div>
        <!-- content-header -->
        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item"><a href="#">Administration</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Employés</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Employés</h4>
                    </div>
                    <div class="d-none d-md-block">
                        <a href="#modal6" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                            data-animation="effect-slide-in-right"><i data-feather="plus" class="wd-10 mg-r-5"></i> Nouveau
                            employé</a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
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
                </div>
                <!-- container -->
            </div>
        </div>
    </div>

    <teleport to='body'>
        <div class="modal fade scrollbar-lg" id="modal6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel6"
            aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content tx-14">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel6">Nouveau employé</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="mg-b-10 tx-danger">Veuillez renseigner tous les champs obligatoires !</p>
                        <div data-label="Informations personnelles" class="df-example demo-forms">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label"> Nom <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label"> Post nom <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label"> Prénom <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Nationalité <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Date de naissance <span class="tx-danger">*</span></label>
                                    <input type="date" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Adresse <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>

                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Sexe <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Etat civil <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>

                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Date engagement<span class="tx-danger">*</span></label>
                                    <input type="date" class="form-control" placeholder="Enter your firstname">
                                </div>
                            </div>
                        </div>

                        <div data-label="Responsabilités" class="df-example mt-md-3 demo-forms">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label">Type <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label"> Durée<span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Barème <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary tx-13" data-bs-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-success tx-13"> <i data-feather="plus"></i>
                            Enregistrer</button>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>


<script>
import datatableFr from '@/assets/js/datatable.fr'
export default {
    name: "EmployesPage",
    mounted() {
        /* this.$nextTick(() => {
            $('#employesTable').DataTable({
                language: {
                    ...datatableFr,
                    searchPlaceholder: 'Recherche employé...',
                },
            });
        }); */
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        $('#modal6').on('show.bs.modal', function (event) {
            var animation = $(event.relatedTarget).data('animation');
            $(this).addClass(animation);
            new PerfectScrollbar(".modal", {
                suppressScrollX: true,
            });
        })

        // hide modal with effect
        $('#modal6').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });
    }
}
</script>