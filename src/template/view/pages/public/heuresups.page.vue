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
                                <li class="breadcrumb-item active" aria-current="page">Configuration heures sup</li>
                            </ol>
                        </nav>

                    </div>
                    <div class="d-none d-md-block">

                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 col-xl-8">
                        <div class="df-example h-100">
                            <data-loading :processing="dataProcessing">
                                <empty-state :is-empty="heuresup.length === 0">
                                    <table id="heuresSupTable" class="table w-100">

                                    </table>
                                </empty-state>
                            </data-loading>
                        </div>
                    </div><!-- col -->
                    <div class="col-sm-7 col-md-5 col-lg-4 col-xl-4">
                        <div class="df-example wd-100p">
                            <section>
                                <p class="mg-b-20 tx-12 tx-danger">Veuillez configurer les heures supplémentaires !
                                </p>
                                <form @submit.prevent="submitData">
                                    <div class="mb-2">
                                        <label class="form-label">Nom Formule: <span class="tx-danger">*</span></label>
                                        <input class="form-control" placeholder="Entrer le nom de la formule..." type="text"
                                            v-model="form.nom_formule" required>
                                    </div><!-- col -->
                                    <div class="mb-2">
                                        <label class="form-label">% sur le salaire journalier: <span
                                                class="tx-danger">*</span></label>
                                        <input class="form-control" v-model="form.pourcentage"
                                            placeholder="entrer le pourcentage...ex: 10" type="number" required>
                                    </div><!-- col -->
                                    <div class="mb-2">
                                        <label class="form-label">Nb d'heures après travail <span
                                                class="tx-danger">*</span></label>
                                        <input class="form-control" v-model="form.total_heures"
                                            placeholder="Entrer le nbre d'heure après travail...ex: 2" type="number"
                                            required>
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
            table: null,
            heuresup: [],
            form: {
                nom_formule: '',
                pourcentage: '',
                total_heures: ''
            }
        }
    },

    async mounted() {
        this.refreshData();
        /*End loading test data*/
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },

    unmounted() {
        if (this.table !== null) this.table.destroy();
        this.table = null;
    },


    methods: {
        submitData(e) {
            this.submitLoading = true;
            this.$store.dispatch('erp/configHeureSup', this.form)
                .then((res) => {
                    this.submitLoading = false;
                    if (res.reponse !== undefined) {
                        if (res.reponse.status === 'success') {
                            this.$showSuccessMessage('Configuration heure supplémentaire effectuée !');
                            this.cleanFields();
                        }
                        else {
                            this.$showFailMessage();
                        }
                    }
                    else {
                        this.$showFailMessage();
                    }
                })
                .catch((_) => {
                    this.submitLoading = false;
                    this.$showFailMessage();
                })
        },

        test() {
            console.log("test trigger....");
        },

        cleanFields() {
            this.form.nom_formule = ''
            this.form.pourcentage = ''
            this.form.total_heures = ''
            this.refreshData();
        },

        async refreshData() {
            /*Test loading data*/
            let self = this;
            this.dataProcessing = true;
            if (this.table !== null) this.table.destroy()
            const configs = await this.$store.dispatch('erp/allConfigs');
            this.heuresup = configs.heure_supplementaires;
            this.dataProcessing = false;
            this.table = $('#heuresSupTable').DataTable({
                language: datatableFr,
                columns: [
                    { title: 'Nom formule', data: 'nom_formule' },
                    { title: '% sur salaire journ.', data: 'pourcentage' },
                    { title: 'Nb heures après travail', data: 'total_heures' },
                    {
                        title: '',
                        defaultContent: `<button class="btn btn-danger btn-sm mg-r-2" @click="self.test"> <i
                                                    data-feather="trash"></i></button>`
                    },
                ],
                data: this.heuresup
            });
        }
    },
}
</script>