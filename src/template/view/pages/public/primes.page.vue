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
                                <li class="breadcrumb-item active" aria-current="page">Configuration primes</li>
                            </ol>
                        </nav>

                    </div>
                    <div class="d-none d-md-block">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 col-xl-8">
                        <div class="df-example">
                            <table id="primesTable" class="table">

                            </table>
                        </div>
                    </div><!-- col -->
                    <div class="col-sm-7 col-md-5 col-lg-4 col-xl-4">
                        <div class="df-example wd-100p">
                            <section>
                                <p class="mg-b-20 tx-12">Veuillez configurer les diffirentes primes !
                                </p>
                                <form @submit.prevent="submitPrime">
                                    <div class="mb-2">
                                        <label class="form-label">Libellé prime: <span class="tx-danger">*</span></label>
                                        <input id="service-name" class="form-control" name="firstname"
                                            placeholder="Entrer le nom du service..." type="text" required>
                                    </div><!-- col -->

                                    <div class="mb-4">
                                        <label class="form-label">Validité : <span class="tx-danger">*</span></label>
                                        <select class="form-select" required>
                                            <option value="CDF" selected>Mensuelle</option>
                                            <option value="USD">Trimestrielle</option>
                                            <option value="USD">Annuelle</option>
                                        </select>
                                    </div><!-- col -->
                                    <div class="d-grid gap-2">
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
            table: null,
            primes: [
                ['Prime de merite', '30000', 'CDF', 'Mensuelle'],
                ['Prime de motivation', '25000', 'CDF', 'Mensuelle'],
                ['Prime de caisse', '85000', 'CDF', 'Mensuelle'],
            ],
        }
    },


    unmounted() {
        this.table.destroy();
        this.table = null;
    },

    mounted() {
        /*Test loading data*/
        this.table = $('#primesTable').DataTable({
            language: datatableFr,
            columns: [
                { title: 'Libellé' },
                { title: 'Montant' },
                { title: 'Devise' },
                { title: 'Validité' },
                {
                    title: '',
                    defaultContent: `<div class="d-flex">
                                            <button class="btn btn-white btn-icon rounded-circle tx-primary btn-sm mg-r-2"> <i
                                                    data-feather="edit"></i></button>
                                            <button class="btn btn-white btn-icon rounded-circle tx-danger btn-sm mg-r-2"> <i
                                                    data-feather="trash"></i></button>
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
</script>