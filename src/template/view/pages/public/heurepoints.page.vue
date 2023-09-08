<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Recherche service...">
            </div>
            <nav class="nav">
                <a href="javascript:void(0)" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div><!-- content-header -->

        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item">Administration</li>
                                <li class="breadcrumb-item active" aria-current="page">Configuration heures pointage</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Configuration heures de pointage</h4>
                    </div>
                    <div class="d-none d-md-block">
                    </div>
                </div>

                <div class="df-example wd-100p">
                    <p class="mg-b-20 tx-12 tx-danger">Veuillez configurer les heures de pointage !
                    </p>
                    <div class="row">
                        <div class="mb-2 col-md-3">
                            <label class="form-label">Heures de travail valides <span class="tx-danger">*</span></label>
                            <div class="input-group">
                                <input id="service-name" class="form-control" name="firstname" placeholder="de" type="time"
                                    required>
                                <span class="input-group-text"> à </span>
                                <input id="service-name" class="form-control" name="firstname" placeholder="à" type="time"
                                    required>
                            </div>
                        </div><!-- col -->
                        <div class="mb-2 col-md-3">
                            <label class="form-label">Heure début retard <span class="tx-danger">*</span></label>
                            <input class="form-control" name="firstname" type="time" required>
                        </div><!-- col -->
                        <div class="mb-2 col-md-3">
                            <label class="form-label">Heures de repos <small>(pause)</small> <span
                                    class="tx-danger">*</span></label>
                            <div class="input-group">
                                <input id="service-name" class="form-control" name="firstname" placeholder="de" type="time"
                                    required>
                                <span class="input-group-text"> à </span>
                                <input id="service-name" class="form-control" name="firstname" placeholder="à" type="time"
                                    required>
                            </div>
                        </div><!-- col -->
                        <div class="mb-2 col-md-3">
                            <label class="form-label">Nbre retard <small>(pour notifier agent)</small> <span
                                    class="tx-danger">*</span></label>
                            <input id="service-name" class="form-control" placeholder="entrez un nombre..." type="number"
                                required>
                        </div><!-- col -->
                    </div>

                    <div class="row">
                        <div class="custom-control custom-checkbox col-md-3">
                            <input type="checkbox" @change.prevent="selectAll" class="custom-control-input"
                                id="customCheck1">
                            <label class="custom-control-label p-lg-1" for="customCheck1">Sélectionnez tous</label>
                        </div>
                        <div class="custom-control custom-checkbox col-md-3">
                            <input type="checkbox" class="custom-control-input" id="customCheck2">
                            <label class="custom-control-label p-lg-1" for="customCheck2">Service Informatique</label>
                        </div>
                        <div class="custom-control custom-checkbox col-md-3">
                            <input type="checkbox" class="custom-control-input" id="customCheck3">
                            <label class="custom-control-label p-lg-1" for="customCheck3">Service Technique</label>
                        </div>
                        <div class="custom-control custom-checkbox col-md-3">
                            <input type="checkbox" class="custom-control-input" id="customCheck4">
                            <label class="custom-control-label p-lg-1" for="customCheck4">Service Caisse</label>
                        </div>

                        <div class="custom-control custom-checkbox col-md-5">
                            <input type="checkbox" class="custom-control-input" id="customCheck5">
                            <label class="custom-control-label p-lg-1" for="customCheck5">Service Comptabilité</label>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end">
                        <bs-button btn-type="submit" :loading="submitLoading" class-name="btn-success btn-block btn-lg"> <i
                                data-feather="check"></i>
                            Valider configuration</bs-button>
                    </div>
                </div>

            </div><!-- container -->
        </div>
    </div>
</template>

<script>
import datatableFr from '@/assets/js/datatable.fr';
export default {
    name: 'PrimesPage',
    data() {
        return {
            submitLoading: false,
            dataProcessing: false,
            primes: [
                ['Heure supp100', '100'],
                ['Heure supp160', '160'],
                ['Heure supp160', '300'],
            ],
        }
    },



    mounted() {
        /*Test loading data*/

        /*End loading test data*/
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },

    methods: {
        submitPrime(e) {
            this.submitLoading = true;
        },
        selectAll(e) {
            for (let i = 1; i < 6; i++) {
                $(`#customCheck${i}`).prop('checked', true);
            }
        }
    },

    /* computed: {
        services() {
            return this.$store.getters.GET_SERVICES
        }
    }, */
}
</script>@/js/datatable.fr