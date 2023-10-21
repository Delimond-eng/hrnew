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
                                <li class="breadcrumb-item active" aria-current="page">Configuration heures pointage</li>
                            </ol>
                        </nav>

                    </div>
                    <div class="d-none d-md-block">

                    </div>
                </div>

                <div class="df-example wd-100p">
                    <p class="mg-b-20 tx-12 tx-danger">Veuillez configurer les heures de pointage !
                    </p>
                    <form @submit.prevent="submitConfig">
                        <div class="row">
                            <div class="mb-2 col-md-3">
                                <label class="form-label">Heures de travail valides <span class="tx-danger">*</span></label>
                                <div class="input-group">
                                    <input id="service-name" v-model="form.heure_debut" class="form-control"
                                        placeholder="de" type="time" required>
                                    <span class="input-group-text"> à </span>
                                    <input id="service-name" v-model="form.heure_fin" class="form-control" placeholder="à"
                                        type="time" required>
                                </div>
                            </div>
                            <!-- col -->
                            <div class="mb-2 col-md-3">
                                <label class="form-label">Heure début retard <span class="tx-danger">*</span></label>
                                <input class="form-control" v-model="form.heure_debut_retard" type="time" required>
                            </div>
                            <!-- col -->
                            <div class="mb-2 col-md-3">
                                <label class="form-label">Heures de repos <small>(pause)</small> <span
                                        class="tx-danger">*</span></label>
                                <div class="input-group">
                                    <input id="service-name" class="form-control" v-model="form.heure_pause_debut"
                                        placeholder="de" type="time" required>
                                    <span class="input-group-text"> à </span>
                                    <input id="service-name" class="form-control" v-model="form.heure_pause_fin"
                                        placeholder="à" type="time" required>
                                </div>
                            </div><!-- col -->
                            <div class="mb-2 col-md-3">
                                <label class="form-label">Nbre retard <small>(pour notifier agent)</small> <span
                                        class="tx-danger">*</span></label>
                                <input id="service-name" v-model="form.min_retard" class="form-control"
                                    placeholder="entrez un nombre..." type="number" required>
                            </div>
                            <!-- col -->
                        </div>

                        <div class="mt-2">
                            <label class="form-label">Sélectionnez les services(depts.) concerné <span
                                    class="tx-danger">*</span></label>
                            <ul class="list-inline list-inline-skills">
                                <li class="list-inline-item">
                                    <a href="javascript:void(0)">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" @change="selectAll($event)" class="custom-control-input"
                                                id="customCheckAll">
                                            <label class="custom-control-label fw-bold p-lg-1" for="customCheckAll">
                                                Cochez tout
                                            </label>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-inline-item" v-for="(dept, index ) in services" :key="index">
                                    <a href="javascript:void(0)">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input"
                                                @change="singleSelect($event, dept)" :checked="dept.checked"
                                                :id="`customCheck0${index}`">
                                            <label class="custom-control-label p-lg-1" :for="`customCheck0${index}`">
                                                {{ dept.dept_name }}
                                            </label>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-end">
                            <button type="button" @click.prevent="cleanField"
                                class="btn btn-white btn-lg mg-r-10">Annuler</button>
                            <bs-button btn-type="submit" :loading="submitLoading" class-name="btn-success btn-block btn-lg">
                                <i data-feather="check"></i>
                                Valider configuration</bs-button>
                        </div>
                    </form>
                </div>

            </div>
            <!-- container -->
        </div>
    </div>
</template>
<style scoped src="@/assets/css/dashforge.profile.css"></style>
<script>
export default {
    name: 'HeurePointagePage',
    data() {
        return {
            submitLoading: false,
            dataProcessing: false,
            service_ids: [],
            form: {
                heure_debut: '',
                heure_fin: '',
                heure_debut_retard: '',
                heure_pause_debut: '',
                heure_pause_fin: '',
                min_retard: ''
            }
        }
    },



    async mounted() {
        /*End loading test data*/
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        await this.$store.dispatch('biotime/allDepartments')
    },

    /**
     * Dispose | uncheck all checkbox
    */
    unmounted() {
        for (let s of this.services) {
            s.checked = false;
        }
    },

    methods: {
        submitConfig(e) {
            this.submitLoading = true;
            this.$store.dispatch('erp/configHeures', this.form).then((res) => {
                this.submitLoading = false;
                if (res.reponse !== undefined) {
                    if (res.reponse.status === 'success') {
                        this.cleanField();
                        this.$showSuccessMessage('Nouveau Barème créé avec succès !');
                    } else {
                        this.$showFailMessage();
                    }
                }
            }).catch((_) => {
                this.submitLoading = false;
                this.$showFailMessage();
            })
        },
        selectAll(event) {
            let isChecked = event.target.checked
            if (isChecked) {
                this.service_ids = [];
                for (let s of this.services) {
                    s.checked = true;
                    this.service_ids.push(s.id);
                }
            }
            else {
                for (let s of this.services) {
                    s.checked = false;
                    this.service_ids = [];
                }
            }

        },

        singleSelect(event, data) {
            let checked = event.target.checked;
            if (checked) {
                this.service_ids.push(data.id);
            }
            else {
                let i = this.service_ids.indexOf(data.id);
                this.service_ids.splice(i, 1);
            }
            console.log(JSON.stringify(this.service_ids));
        },

        cleanField() {
            this.form.heure_debut = '';
            this.form.heure_fin = '';
            this.form.heure_debut_retard = '';
            this.form.heure_pause_debut = '';
            this.form.heure_pause_fin = '';
            this.form.min_retard = '';
            for (let s of this.services) {
                s.checked = false;
                this.service_ids = [];
            }
        },
    },

    computed: {
        services() {
            return this.$store.getters['biotime/GET_DEPARTMENTS']
        }
    },
}
</script>