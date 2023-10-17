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
                                <li class="breadcrumb-item active" aria-current="page">Configuration services</li>
                            </ol>
                        </nav>

                    </div>
                    <div class="d-none d-md-block">
                    </div>
                </div>
                <!-- loading proccess -->

                <div class="row">
                    <!-- col -->
                    <div class="col-lg-8 col-xl-8">
                        <!-- row -->
                        <data-loading :processing="dataProcessing">
                            <div class="row row-sm ">
                                <div class="col-md-4 mg-md-b-15" v-for="(service, index) in services" :key="index">
                                    <div class="card card-event animate__pulse">
                                        <div class="card-img-top bg-primary w-100 d-flex align-content-center align-items-center"
                                            style="height: 55px;">
                                            <h4 class="m-2 tx-white tx-bold">{{ service.dept_name }}</h4>
                                        </div>
                                        <div class="card-footer tx-13">
                                            <span class="tx-color-03">Agents</span>
                                            <span class="tx-color-01">02</span>
                                        </div><!-- card-footer -->
                                    </div><!-- card -->
                                </div><!-- col -->
                            </div>
                        </data-loading>

                        <!-- row -->

                        <!-- Empty state message -->
                        <!-- <div class="row d-flex justify-content-center align-items-center h-100 w-100">
                            <div class="col-md-5">
                                <div class="wd-150 wd-sm-250 mg-b-30"><img src="assets/img/img17.png" class="img-fluid"
                                        alt=""></div>
                                <h5 class="tx-center">Veuillez créer des services !</h5>
                            </div>
                        </div> -->
                        <!-- services loop -->

                    </div><!-- col -->
                    <div class="col-sm-7 col-md-5 col-lg-4 col-xl-4">
                        <div class="df-example wd-100p">
                            <section>
                                <p class="mg-b-20 tx-12 tx-danger">Veuillez renseigner tous les champs pour créer un
                                    nouveau
                                    service
                                    !
                                </p>
                                <form @submit.prevent="submitService">
                                    <div class="form-group">
                                        <label class="form-label">Nom du service: <span class="tx-danger">*</span></label>
                                        <input id="service-name" class="form-control" name="firstname"
                                            placeholder="Entrer le nom du service..." v-model="form.nom" type="text"
                                            required>
                                    </div><!-- col -->
                                    <div class="form-group">
                                        <label class="form-label">Code du service: <span class="tx-danger">*</span></label>
                                        <input id="service-label" class="form-control" name="lastname"
                                            v-model="form.dept_code" placeholder="Entrer le libellé du service..."
                                            type="text" required>
                                    </div><!-- col -->
                                    <div class="d-grid gap-2">
                                        <bs-button btn-type="submit" :loading="submitLoading"
                                            class-name="btn-success btn-block btn-lg"> <i data-feather="plus"></i>
                                            Ajouter</bs-button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                    <!-- col -->
                </div>
                <!-- loading process -->
            </div>
            <!-- container -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesPage',
    data() {
        return {
            submitLoading: false,
            dataProcessing: false,
            form: {
                dept_code: '',
                nom: '',
                user_id: 1,
            }
        }
    },

    async mounted() {
        /*Test loading data*/
        await this.refreshData();
        /*End loading test data*/
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },

    methods: {
        submitService(e) {
            this.submitLoading = true;
            this.$store.dispatch('biotime/createDepartment', this.form).then((res) => {
                this.submitLoading = false;
                if (res.response !== undefined) {
                    this.refreshData();
                    this.form.nom = '';
                    this.form.dept_code = '';
                }
            }).catch((e) => this.submitLoading = false);
        },

        async refreshData() {
            this.dataProcessing = true;
            this.$store.dispatch('biotime/allDepartments')
                .then((l) => this.dataProcessing = false)
                .catch((r) => this.dataProcessing = false);
        }
    },

    computed: {
        services() {
            return this.$store.getters['biotime/GET_DEPARTMENTS']
        }
    },
}
</script>