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
                                <li class="breadcrumb-item"><a href="#">Decompte</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{
                                    $route.params.tab.includes('bulletin') ? 'Bulletin decompte' : 'Calcul decompte' }}</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Decompte</h4>
                    </div>
                </div>

                <ul class="nav nav-line" id="myTab5" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link"
                            @click.prevent="$router.replace({ name: 'tab.decomptes', params: { tab: 'calcul' } })"
                            :class="$route.params.tab.includes('calcul') ? 'active' : ''" id="home-tab5"
                            data-bs-toggle="tab" href="#home5" role="tab" aria-controls="home" aria-selected="true"> Calcul
                            decompte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            @click.prevent="$router.replace({ name: 'tab.decomptes', params: { tab: 'bulletin' } })"
                            id="profile-tab5" data-bs-toggle="tab" href="#profile5"
                            :class="$route.params.tab.includes('bulletin') ? 'active' : ''" role="tab"
                            aria-controls="profile" aria-selected="false"> Bulletin decompte</a>
                    </li>
                </ul>

                <div class="tab-content mg-t-20" id="myTabContent5">
                    <div class="tab-pane fade " :class="$route.params.tab.includes('calcul') ? 'show active' : ''"
                        id="home5" role="tabpanel" aria-labelledby="home-tab5">
                        <div>

                            <div data-label="Calcul decompte" class="df-example mt-3">
                                <div class="row mt-2">
                                    <div class="col-md-2">
                                        <label class="form-label">Matricule<span class="tx-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="">
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label"> Motif cessation <span class="tx-danger">*</span></label>
                                        <select class="form-control">
                                            <option value="Licenciement" selected>Licenciement</option>
                                            <option value="Démission">Démission</option>
                                            <option value="Retraite">Retraite</option>
                                            <option value="Décès">Décès</option>
                                            <option value="Cas de force majeure">Cas de force majeure</option>
                                            <option value="Départ négocié">Départ négocié</option>
                                        </select>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label">Date du départ <span class="tx-danger">*</span></label>
                                        <input type="date" class="form-control" placeholder="Enter your firstname">
                                    </div>
                                    <div class="col-md-2">
                                        <label class="form-label">Vehiculé ? <span class="tx-danger">*</span></label>
                                        <select class="form-control">
                                            <option value="Non" selected>Non</option>
                                            <option value="Oui">Oui</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label class="form-label">Logé ? <span class="tx-danger">*</span></label>
                                        <select class="form-control">
                                            <option value="Non" selected>Non</option>
                                            <option value="Oui">Oui</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div data-label="Temps de travail" class="df-example mt-3">
                                <div class="row mt-2">
                                    <div class="col-md-3">
                                        <label class="form-label">Préavis<span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3">
                                        <label class="form-label">Congé préavis<span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3">
                                        <label class="form-label">Jours à prester<span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3">
                                        <label class="form-label">Jours prestés<span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3 mt-2">
                                        <label class="form-label">Jours fériés<span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>
                                    <div class="col-md-3 mt-2">
                                        <label class="form-label">Jours fériés prestés<span
                                                class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>
                                    <div class="col-md-3 mt-2">
                                        <label class="form-label">Jours de suspension<span
                                                class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3 mt-2">
                                        <label class="form-label">Absences justifiées<span
                                                class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3 mt-2">
                                        <label class="form-label">Jours de maladie<span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3 mt-2">
                                        <label class="form-label">Jours de congé<span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3 mt-2">
                                        <label class="form-label">Jours de congé payés<span
                                                class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3 mt-2">
                                        <label class="form-label">Congés de circonstance<span
                                                class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3 mt-2">
                                        <label class="form-label">Jours de congé médical<span
                                                class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3 mt-2">
                                        <label class="form-label">Jours de congé maternité<span
                                                class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>
                                </div>
                            </div>

                            <div data-label="Heures supplementaires" class="df-example mt-3">
                                <div class="row mt-2">
                                    <div class="col-md-4">
                                        <label class="form-label">Heure sup130 <small>(laissez vide si non
                                                applicable)</small>
                                            <span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-4">
                                        <label class="form-label">Heure sup160 <small>(laissez vide si non
                                                applicable)</small><span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-4">
                                        <label class="form-label">Heure sup200 <small>(laissez vide si non
                                                applicable)</small><span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>
                                </div>
                            </div>

                            <div data-label="Salaire" class="df-example mt-3">
                                <div class="row mt-2">
                                    <div class="col-md-2">
                                        <label class="form-label"> Devise <span class="tx-danger">*</span></label>
                                        <select class="form-control">
                                            <option value="CDF" selected>CDF</option>
                                            <option value="USD">USD</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label class="form-label">Taux <span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3">
                                        <label class="form-label">Avance sur salaire <span
                                                class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-3">
                                        <label class="form-label">Quinzaine <span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>

                                    <div class="col-md-2">
                                        <label class="form-label">Prét <span class="tx-danger">*</span></label>
                                        <input type="number" class="form-control" placeholder="">
                                    </div>
                                </div>
                            </div>

                            <hr>
                            <div class="mt-3 d-flex justify-content-end">
                                <button class="btn btn-success btn-lg"> <i data-feather="check"></i> Soumettre &
                                    valider</button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" :class="$route.params.tab.includes('bulletin') ? 'show active' : ''"
                        id="profile5" role="tabpanel" aria-labelledby="profile-tab5">
                        <div data-label="Bulletin decompte" class="df-example mt-3">
                            <h6>Matricule</h6>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="input-group">
                                        <input class="form-control form-control-lg" type="text"
                                            placeholder="Entrez le numéro matricule de l'employé...">
                                        <button class="btn btn-brand-02 btn-lg"> <i data-feather="clipboard"></i>
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
    name: 'DecomptesPage',

    mounted() {

        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },
}
</script>