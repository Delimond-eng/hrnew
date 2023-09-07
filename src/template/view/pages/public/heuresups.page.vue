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
                                <li class="breadcrumb-item active" aria-current="page">Configuration heures sup</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Configuration heures suplémentaires</h4>
                    </div>
                    <div class="d-none d-md-block">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 col-xl-8">
                        <div class="df-example">
                            <table id="heuresSupTable" class="table">

                            </table>
                        </div>
                    </div><!-- col -->
                    <div class="col-sm-7 col-md-5 col-lg-4 col-xl-4">
                        <div class="df-example wd-100p">
                            <section>
                                <p class="mg-b-20 tx-12 tx-danger">Veuillez configurer les heures supplémentaires !
                                </p>
                                <form @submit.prevent="submitPrime">
                                    <div class="mb-2">
                                        <label class="form-label">Nom Formule: <span class="tx-danger">*</span></label>
                                        <input id="service-name" class="form-control" name="firstname"
                                            placeholder="Entrer le nom du service..." type="text" required>
                                    </div><!-- col -->
                                    <div class="mb-2">
                                        <label class="form-label">% sur le salaire journalier: <span
                                                class="tx-danger">*</span></label>
                                        <input class="form-control" name="firstname" placeholder="Entrer la valeur..."
                                            type="number" required>
                                    </div><!-- col -->
                                    <div class="mb-2">
                                        <label class="form-label">Nb d'heures après travail <span
                                                class="tx-danger">*</span></label>
                                        <input class="form-control" name="firstname" placeholder="Entrer la valeur..."
                                            type="number" required>
                                    </div><!-- col -->
                                    <div class="d-grid gap-2 mt-4">
                                        <bs-button btn-type="submit" :loading="submitLoading"
                                            class-name="btn-success btn-block btn-lg"> <i data-feather="plus"></i>
                                            Ajouter</bs-button>
                                    </div>
                                </form>
                            </section>
                        </div>

                    </div><!-- col -->
                </div><!-- row -->

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
                ['Heure supp100', '100', '2'],
                ['Heure supp160', '160', '4'],
                ['Heure supp160', '300', '6'],
            ],
        }
    },

    mounted() {
        /*Test loading data*/
        $('#heuresSupTable').DataTable({
            language: datatableFr,
            columns: [
                { title: 'Nom formule' },
                { title: '% sur salaire journ.' },
                { title: 'Nb heures après travail' },
                {
                    title: '',
                    defaultContent: `<div class="d-flex">
                                            <button class="btn btn-white btn-sm mg-r-2"> <i
                                                    data-feather="trash"></i></button>
                                            <button class="btn btn-white tx-primary btn-sm mg-r-2"> <i
                                                    data-feather="edit"></i></button>
                                        </div>`
                },
            ],

            data: this.primes

        })
        /*End loading test data*/
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },

    methods: {
        submitPrime(e) {
            this.submitLoading = true;
        }
    },

    /* computed: {
        services() {
            return this.$store.getters.GET_SERVICES
        }
    }, */
}
</script>@/js/datatable.fr