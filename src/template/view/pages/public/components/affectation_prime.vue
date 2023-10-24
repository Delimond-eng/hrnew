<template>
    <div data-label="" class="df-example mt-3">
        <p class="tx-danger tx-12">Veuillez remplir tous les champs pour affecter une prime !</p>
        <form @submit.prevent="submitData">
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Prime<span class="tx-danger">*</span></label> <br>
                        <select class="select2 form-select w-100" id="primeSelect">
                            <option label="--Sélectionnez une prime--"></option>
                        </select>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Agent<span class="tx-danger">*</span></label> <br>
                        <select class="select2 form-select w-100" id="agentSelect2">
                            <option label="--Sélectionnez un agent--"></option>
                        </select>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">Montant<span class="tx-danger">*</span></label>
                        <div class="input-group">
                            <input type="number" class="form-control" v-model="form.montant"
                                placeholder="entrez le montant">
                            <div class="input-group-text m-0 p-0 bg-transparent">
                                <select class="form-select border-0" v-model="form.devise">
                                    <option value="CDF" selected>CDF</option>
                                    <option value="USD">USD</option>
                                </select>
                            </div>
                        </div>
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
    name: "AffectationPrimeComponent",

    data() {
        return {
            form: {
                agent_id: '',
                prime_id: '',
                montant: '',
                devise: 'CDF'
            },
            submitLoading: false,
        }
    },

    mounted() {
        console.log("affectation prime...");
        this.initSelects2();
    },


    methods: {
        async initSelects2() {
            $('#agentSelect2').select2({
                placeholder: '--Sélectionnez un agent--'
            });
            $('#primeSelect').select2({
                placeholder: '--Sélectionnez une prime--',
            });
            let self = this;
            const agents = await this.$store.dispatch('biotime/allEmployees');
            $('#agentSelect2').select2({
                placeholder: '--Sélectionnez un agent--',
                allowClear: true,
                data: $.map(agents, function (item) {
                    return {
                        text: `${item.emp_code} | ${item.first_name}-${item.nickname}`,
                        id: item.id
                    }
                })
            }).on('change', function (e) {
                self.form.agent_id = $(this).val();
                console.log(self.form.agent_id);
            });
            const configs = await this.$store.dispatch('erp/allConfigs');
            $('#primeSelect').select2({
                placeholder: '--Sélectionnez une prime--',
                allowClear: true,
                data: $.map(configs.primes, function (item) {
                    return {
                        text: item.libelle,
                        id: item.prime_id
                    }
                })
            }).on('change', function (e) {
                self.form.prime_id = $(this).val();
                console.log(self.form.prime_id);
            });

        },

        submitData(e) {
            this.submitLoading = true;
            this.$store.dispatch('erp/affecterPrime', this.form).then((e) => {
                this.submitLoading = false;
                if (e.reponse !== undefined) {
                    if (res.reponse.status === 'success') {
                        this.showSuccessMessage('Prime affecté avec succès !');
                        this.cleanField();
                    }
                    else this.$showFailMessage();
                }
                else {
                    this.$showFailMessage();
                }
            }).catch((err) => {
                this.$showFailMessage();
                this.submitLoading = false;
            })
        },


        cleanField() {
            $("#agentSelect2").val('').trigger('change');
            $("#primeSelect").val('').trigger('change');
            this.form.montant = '';
            this.form.devise = 'CDF';
        }
    },
}
</script>