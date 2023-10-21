<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Recherche service...">
            </div>
            <nav class="nav">
                <async-button></async-button>
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
                            <data-loading :processing="dataProcessing">
                                <empty-state :is-empty="primes.length === 0">
                                    <table id="primesTable" class="table w-100">

                                    </table>
                                </empty-state>
                            </data-loading>

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
                                        <input id="service-name" v-model="form.libelle" class="form-control"
                                            placeholder="Entrer le libellé..." type="text" required>
                                    </div><!-- col -->

                                    <div class="mb-4">
                                        <label class="form-label">Validité : <span class="tx-danger">*</span></label>
                                        <select class="form-select" v-model="form.validite" required>
                                            <option value="Mensuelle" selected>Mensuelle</option>
                                            <option value="Trimestrielle">Trimestrielle</option>
                                            <option value="Annuelle">Annuelle</option>
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
            form: {
                libelle: '',
                validite: 'Mensuelle'
            },
            primes: [

            ],
        }
    },


    unmounted() {
        if (this.table !== null) this.table.destroy();
        this.table = null;
    },

    mounted() {
        this.refreshData();
        /*End loading test data*/
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },

    methods: {
        submitPrime(e) {
            this.submitLoading = true;
            this.$store.dispatch('erp/configPrime', this.form).then((res) => {
                this.submitLoading = false;
                if (res.reponse !== undefined) {
                    if (res.reponse.status === 'success') {
                        this.$showSuccessMessage('Nouvelle prime configurer avec succès !');
                        this.cleanField();
                    }
                }
                else {
                    this.$showFailMessage();
                }
            }).catch((_) => {
                this.submitLoading = false;
                this.$showFailMessage();
            })
        },

        cleanField() {
            this.form.libelle = '';
            this.form.validite = 'Mensuelle';
            this.refreshData();
        },

        async refreshData() {
            this.dataProcessing = true;
            if (this.table !== null) this.table.destroy();
            const configs = await this.$store.dispatch('erp/allConfigs');
            this.primes = configs.primes;
            this.dataProcessing = false;
            this.table = $('#primesTable').DataTable({
                language: datatableFr,
                columns: [
                    { title: 'Libellé', data: 'libelle' },
                    { title: 'Validité', data: 'validite' },
                    {
                        title: '',
                        defaultContent: `<button class="btn btn-danger btn-icon"> <i
                                                    data-feather="trash"></i></button>`
                    },
                ],

                data: this.primes

            });
        }
    },
}
</script>