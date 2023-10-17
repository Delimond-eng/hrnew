<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Filtrer poste...">
            </div>
            <nav class="nav">
                <async-button></async-button>
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
                                <li class="breadcrumb-item active" aria-current="page">Configuration Fonctions|Positions
                                </li>
                            </ol>
                        </nav>

                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="df-example">
                            <data-loading :processing="dataProcessing">
                                <div class="list-group">
                                    <li class="list-group-item d-flex align-items-center border-botton-only"
                                        v-for="(position, index) in positions" :key="index">
                                        <div class="d-flex justify-content-between w-100 align-items-center">
                                            <h6 class="tx-13 tx-inverse tx-semibold mg-b-0">{{ position.position_name }}
                                            </h6>
                                            <button class="btn btn-sm btn-icon btn-danger">
                                                <i data-feather="trash"></i>
                                            </button>
                                        </div>
                                    </li>
                                </div>
                            </data-loading>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div class="df-example">
                            <p class="mg-b-20 tx-12 tx-danger">Veuillez renseigner les champs pour créer les diffirentes
                                accès utilisateur !
                            </p>
                            <form @submit.prevent="submitData">
                                <div class="form-group m-0">
                                    <label class="mg-b-10 form-label">Libellé fonction : <span
                                            class="tx-danger">*</span></label>
                                    <div class="input-group mb-2" v-for="(form, index) in forms" :key="index">
                                        <input type="text" class="form-control" v-model="form.libelle"
                                            placeholder="entrez le libellé fonction..." required>
                                        <button v-if="index === forms.length - 1" class="btn btn-white tx-primary btn-lg"
                                            @click.prevent="forms.push({ libelle: '' })"><i
                                                data-feather="plus"></i></button>
                                        <button v-else class="btn btn-white  tx-danger"
                                            @click.prevent="forms.splice(index, 1)">
                                            <i data-feather="trash"></i></button>
                                    </div>
                                </div>
                                <div class="d-flex ">
                                    <button @click.prevent="resetAll" type="button"
                                        class="btn btn-white  btn-block btn-lg mg-r-10">
                                        Annuler</button>
                                    <bs-button btn-type="submit" :loading="submitLoading"
                                        class-name="btn-success btn-block btn-lg flex-fill"> <i data-feather="check"></i>
                                        Ajouter</bs-button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- container -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PostePage',

    data() {
        return {
            submitLoading: false,
            dataProcessing: false,
            forms: [
                {
                    libelle: ""
                }
            ],
        }
    },

    mounted() {
        this.refreshData();
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },



    methods: {
        async submitData(e) {
            this.submitLoading = true;
            for (let form of this.forms) {
                await this.$store.dispatch('biotime/createPosition', form)
            }
            this.submitLoading = false;
            this.refreshData();
            this.resetAll();
        },
        refreshData() {
            this.dataProcessing = true;
            this.$store.dispatch('biotime/allPositions')
                .then((_) => this.dataProcessing = false)
                .catch((_) => this.dataProcessing = false)
        },

        resetAll() {
            this.forms = [{
                libelle: ''
            }];
        }
    },

    computed: {
        positions() {
            return this.$store.getters['biotime/GET_POSITIONS']
        }
    },
}
</script>