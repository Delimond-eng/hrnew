<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <!--  <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Recherche service..."> -->
            </div>
            <nav class="nav">
                <a href="#" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div><!-- content-header -->

        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item"><a href="#">Mises à jour</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Pointages</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Pointages</h4>
                    </div>
                </div>

                <ul class="nav nav-line" id="myTab5" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab5" data-bs-toggle="tab" href="#home5" role="tab"
                            aria-controls="home" aria-selected="true"> Pointage en
                            cours</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab5" data-bs-toggle="tab" href="#profile5" role="tab"
                            aria-controls="profile" aria-selected="false">Pointage
                            antérieur</a>
                    </li>
                </ul>

                <div class="tab-content mg-t-20" id="myTabContent5">
                    <div class="tab-pane fade show active" id="home5" role="tabpanel" aria-labelledby="home-tab5">
                        <div data-label="Pointage en cours" class="df-example mt-3">
                            <h6>Pointage en cours</h6>
                            <div class="row mt-2">
                                <div class="col-md-2">
                                    <label class="form-label">Mois<span class="tx-danger">*</span></label>
                                    <select class="form-control">
                                        <option label="Mois"></option>
                                        <option value="Janvier">Janvier</option>
                                        <option value="Février">Février</option>
                                        <option value="Mars">Mars</option>
                                        <option value="Avril">Avril</option>
                                        <option value="Mai">Mai</option>
                                        <option value="Juin">Juin</option>
                                        <option value="Juillet">Juillet</option>
                                        <option value="Août">Août</option>
                                        <option value="Septembre">Septembre</option>
                                        <option value="Octobre">Octobre</option>
                                        <option value="Décembre">Décembre</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label class="form-label">Année <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Année">
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label"> Date clôture <span class="tx-danger">*</span></label>
                                    <input type="date" class="form-control" placeholder="date clôture">
                                </div>
                                <div class="col-md-2">
                                    <label class="form-label">Devise <span class="tx-danger">*</span></label>
                                    <select class="form-control">
                                        <option value="Janvier" selected>CDF</option>
                                        <option value="Février">USD</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label">Taux <span class="tx-danger">*</span></label>
                                    <input type="number" class="form-control" value="1" placeholder="Enter your firstname">
                                </div>

                            </div>
                            <hr>
                            <div class="mt-3 d-flex justify-content-end">
                                <button class="btn btn-success btn-lg"> <i data-feather="check"></i> Confirmer
                                    pointage</button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile5" role="tabpanel" aria-labelledby="profile-tab5">
                        <div data-label="Pointage antérieur" class="df-example mt-3">
                            <h6>Période</h6>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="input-group">
                                        <select class="form-control form-control-lg">
                                            <option label="Sélectionnez une période"></option>
                                            <option value="Firefox">Firefox</option>
                                            <option value="Chrome">Chrome</option>
                                            <option value="Safari">Safari</option>
                                            <option value="Opera">Opera</option>
                                            <option value="Internet Explorer">Internet Explorer</option>
                                        </select>
                                        <button class="btn btn-success btn-lg"> <i data-feather="clipboard"></i>
                                            Afficher</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- container -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'PointagesPage',

    mounted() {

        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },
}
</script>