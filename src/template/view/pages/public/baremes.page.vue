<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <!-- <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Tapez le numéro de matricule..."> -->
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
                                <li class="breadcrumb-item active" aria-current="page">Barèmes</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Barèmes</h4>
                    </div>
                    <div class="d-none d-md-block">
                        <a href="#modalBareme" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                            data-animation="effect-slide-in-right"><i data-feather="plus" class="wd-10 mg-r-5"></i>Ajout
                            barème</a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <table id="employesTable" class="table">
                            <thead>
                                <tr>
                                    <th class="wd-25p">Catégorie salariale</th>
                                    <th class="wd-20p">Libellé</th>
                                    <th class="wd-20p">Salaire journalier</th>
                                    <th class="wd-20p">Allocation familiale</th>
                                    <th class="wd-25p">Transport journalier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="i in 30" :key="i">
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>12000 CDF</td>
                                    <td>CNSS</td>
                                    <td>2500 CDF</td>
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
        <div class="modal fade scrollbar-lg" id="modalBareme" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content tx-14">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel6">Nouveau barème</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="mg-b-10 tx-danger">Veuillez renseigner tous les champs obligatoires !</p>
                        <div data-label="Barème" class="df-example demo-forms">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label"> Catégorie <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label"> Echelon <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label"> Classe <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Libellé <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Salaire mensuel <span class="tx-danger">*</span></label>
                                    <input type="date" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">1<sup>ième</sup> mois <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>

                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Allocation familiale <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname">
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Transport journalier <span class="tx-danger">*</span></label>
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
export default {
    name: "BaremesPage",

    mounted() {

        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        $('#modalBareme').on('show.bs.modal', function (event) {
            var animation = $(event.relatedTarget).data('animation');
            $(this).addClass(animation);
            new PerfectScrollbar(".modal", {
                suppressScrollX: true,
            });
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