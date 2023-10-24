<template>
    <div data-label="" class="df-example mt-3">
        <p class="tx-danger tx-12">Veuillez remplir tous les champs pour affecter un agent !</p>
        <form @submit.prevent="submitData">
            <div class="row">
                <!-- province select -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Province <span class="tx-danger">*</span></label><br>
                        <select class="select2 form-select w-100" id="provinceSelect2" required>
                            <option label="--Sélectionnez une province--"></option>
                        </select>
                    </div>
                </div>
                <!-- End province select -->

                <!-- agence select -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Agence <span class="tx-danger">*</span></label><br>
                        <select class="select2 form-select w-100" id="agenceSelect2" required>
                            <option label="--Sélectionnez une agence--"></option>
                        </select>
                    </div>
                </div>
                <!-- End province select -->

                <!-- Agent select -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Agent<span class="tx-danger">*</span></label> <br>
                        <select class="select2 form-select w-100" id="agentSelect2" required>
                            <option label="--Sélectionnez un agent--"></option>
                        </select>
                    </div>
                </div>
                <!-- End Agent select -->


                <!--  position select -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Fonction<span class="tx-danger">*</span></label> <br>
                        <select class="select2 form-select w-100" id="fonctionSelect2" required>
                            <option label="--Sélectionnez une fonction--"></option>
                        </select>
                    </div>
                </div>

                <!-- service select -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Service<span class="tx-danger">*</span></label>
                        <select class="select2 form-select" id="serviceSelect2" required>
                            <option label="--Sélectionnez un service--"></option>
                        </select>
                    </div>
                </div>
                <!-- End select -->


                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Date affectation<span class="tx-danger">*</span></label>
                        <input type="date" v-model="form.date_affectation" class="form-control" required>
                    </div>
                </div>
            </div>

            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1"><span class="mg-r-4"></span>Envoyez une notification
                    à
                    l'agent</label>
            </div>

            <hr>

            <div class="d-flex justify-content-end">
                <button class="btn btn-white btn-lg mg-r-10">Annuler</button>
                <bs-button :loading="submitLoading" btn-type="submit" class-name="btn-primary btn-lg"> <i
                        data-feather="link"></i>
                    Soumettre affectation
                </bs-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "AffectationAgentComponent",

    data() {
        return {
            form: {
                agence_id: '',
                fonction_id: '',
                service_id: '',
                agent_id: '',
                date_affectation: '',
            },
            submitLoading: false,
        }
    },
    mounted() {
        this.initSelect2();
        console.log("affectation agent...");
    },

    methods: {
        async initSelect2() {
            let self = this;
            $('#agenceSelect2').select2({
                placeholder: '--Sélectionnez une agence--',
            });
            /**
             * Agents list select2 init
            */
            const agents = await this.$store.dispatch('biotime/allEmployees');
            $('#agentSelect2').select2({
                placeholder: '--Sélectionnez une agent--',
                data: $.map(agents, function (item) {
                    return {
                        text: `${item.emp_code} | ${item.first_name}-${item.nickname}`,
                        id: item.id
                    }
                })
            }).on('change', function (e) {
                self.form.agent_id = $(this).val();
            });

            /**
             * Positions select2 init
            */
            const positions = await this.$store.dispatch('biotime/allPositions');
            $('#fonctionSelect2').select2({
                placeholder: '--Sélectionnez une fonction--',
                data: $.map(positions, function (item) {
                    return {
                        text: item.position_name,
                        id: item.id
                    }
                })
            }).on('change', function (e) {
                self.form.fonction_id = $(this).val();
            });


            /**
             * Departments List Select2 init
            */
            const departments = await this.$store.dispatch('biotime/allDepartments');
            $('#serviceSelect2').select2({
                placeholder: '--Sélectionnez un service--',
                data: $.map(departments, function (item) {
                    return {
                        text: item.dept_name,
                        id: item.id
                    }
                })
            }).on('change', function (e) {
                self.form.service_id = $(this).val();
            });

            /**
             * Provinces select2 init
            */
            const areas = await this.$store.dispatch('biotime/allAreas');
            $('#provinceSelect2').select2({
                placeholder: '--Sélectionnez une province--',
                data: $.map(areas, function (item) {
                    return {
                        text: item.area_name,
                        id: item.id
                    }
                })
            }).on('change', async function (e) {
                /**
                 * Load agencies of select area
                */
                let payload = $(this).select2('data')[0].text;
                const agences = await self.$store.dispatch('erp/allAgences', payload);
                $('#agenceSelect2').empty();
                $('#agenceSelect2').select2({
                    placeholder: '--Sélectionnez une agence--',
                    data: $.map(agences, function (item) {
                        return {
                            text: item.libelle,
                            id: item.agence_id
                        }
                    })
                }).on('change', function (pe) {
                    self.form.agence_id = $(this).val();
                });
                $("#agenceSelect2").val('').trigger('change');
            });

            /**
             * Load all organizations agencies
             * and build select2
             * */

        },

        cleanField() {
            this.form.date_affectation = '';
            $("#agenceSelect2").val('').trigger('change');
            $("#provinceSelect2").val('').trigger('change');
            $("#serviceSelect2").val('').trigger('change');
            $("#fonctionSelect2").val('').trigger('change');
        },

        submitData(e) {
            this.submitLoading = true;
            this.$store.dispatch('erp/affecterAgent', this.form).then((res) => {
                this.submitLoading = false;
                if (res.reponse !== undefined) {
                    if (res.reponse.status === 'success') {
                        this.showSuccessMessage('Agent affecté avec succès !');
                        this.cleanField();
                    }
                    else this.$showFailMessage();
                }
                else {
                    this.$showFailMessage();
                }
            }).catch((e) => {
                this.$showFailMessage();
                this.submitLoading = false;
            })
        }
    },
}
</script>