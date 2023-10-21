<template>
    <teleport to='body'>
        <form @submit.prevent="submitBareme" class="modal fade scrollbar-lg" id="modalBareme" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document" id="modalBaremeBody">
                <div class="modal-content tx-14">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel6">Nouveau barème</h4>
                        <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                    </div>
                    <div class="modal-body">
                        <p class="mg-b-10 tx-danger">Veuillez renseigner tous les champs obligatoires !</p>
                        <div data-label="Barème" class="df-example demo-forms">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label"> Catégorie salariale <span class="tx-danger">*</span></label>
                                    <br>
                                    <select class="form-select" style="width: 100%;" id="categorieSelect2" required>
                                        <option label="--Sélectionnez une catégorie--"></option>
                                    </select>
                                </div>
                                <!-- <div class="col-md-2">
                                    <label class="form-label"> Echelon <span class="tx-danger">*</span></label>
                                    <select class="form-select" required>
                                        <option value="ORD" selected>ORD</option>
                                        <option value="LOURD">LOURD</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label class="form-label"> Classe <span class="tx-danger">*</span></label>
                                    <select class="form-select" required>
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div> -->
                                <div class="col-md-8 md-2">
                                    <label class="form-label">Libellé <span class="tx-danger">*</span></label>
                                    <input type="text" v-model="form.libelle" class="form-control"
                                        placeholder="Saisir le libellé..." required>
                                </div>
                                <div class="col-md-3 mt-md-2">
                                    <label class="form-label">Salaire mensuel <span class="tx-danger">*</span></label>
                                    <div class="input-group">
                                        <input type="text" v-model="form.salaire_mensuel" class="form-control"
                                            placeholder="Saisir le salaire mensuel..." required>
                                        <div class="input-group-text m-0 p-0 bg-transparent">
                                            <select class="form-select border-0" v-model="form.devise">
                                                <option value="CDF" selected>CDF</option>
                                                <option value="USD">USD</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 mt-md-2">
                                    <label class="form-label">13<sup>ième</sup> mois <span
                                            class="tx-danger">*</span></label>
                                    <input type="number" v-model="form.treizieme_mois" class="form-control"
                                        placeholder="treizieme mois..." required>
                                </div>

                                <div class="col-md-3 mt-md-2">
                                    <label class="form-label">Allocation familiale <span class="tx-danger">*</span></label>
                                    <input type="number" v-model="form.allocation_familliale" class="form-control"
                                        placeholder="Saisir l'allocation familiale..." required>
                                </div>
                                <div class="col-md-3 mt-md-2">
                                    <label class="form-label">Transport journalier <span class="tx-danger">*</span></label>
                                    <div class="input-group">
                                        <input type="number" v-model="form.transport_journalier" class="form-control"
                                            placeholder="Saisir le transport journ..." required>
                                        <div class="input-group-text m-0 p-0 bg-transparent">
                                            <select class="form-select border-0">
                                                <option value="CDF" selected>CDF</option>
                                                <option value="USD">USD</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-white btn-lg" data-bs-dismiss="modal">Fermer</button>
                        <bs-button btn-type="submit" :loading="isSubmitLoading" class-name="btn-success btn-lg"> <i
                                data-feather="plus"></i>
                            Enregister</bs-button>
                    </div>
                </div>
            </div>
        </form>
    </teleport>
</template>

<script>
export default {
    name: 'BaremeCreateModal',

    data() {
        return {
            isSubmitLoading: false,
            form: {
                categorie_salariale_id: '',
                libelle: '',
                salaire_mensuel: '',
                treizieme_mois: '',
                transport_journalier: '',
                allocation_familliale: '',
                devise: 'CDF'
            },
            categories: []
        }
    },
    mounted() {
        this.initSelects2();
        $('#modalBareme').on("hidden.bs.modal", function (e) {
            $("#categorieSelect2").val('').trigger('change');
        });
        $("#modalBaremeBody").draggable();
    },


    methods: {
        submitBareme(e) {
            this.isSubmitLoading = true;
            this.$store.dispatch('erp/createBareme', this.form).then((res) => {
                this.isSubmitLoading = false;
                if (res.reponse !== undefined) {
                    if (res.reponse.status === 'success') {
                        this.cleanField();
                        this.$showSuccessMessage('Nouveau Barème créé avec succès !');
                    }
                    else {
                        this.$showFailMessage();
                    }
                }
                else {
                    this.$showFailMessage();
                }
            }).catch((_) => {
                this.isSubmitLoading = false
                this.showFailedMessage();
            })
        },
        async initSelects2() {
            let self = this;
            const categories = await this.$store.dispatch('erp/allCategories');
            self.categories = categories;
            $('#categorieSelect2').select2({
                dropdownParent: $('#modalBareme'),
                placeholder: '--Sélectionnez une catégorie--',
                data: $.map(self.categories, function (item) {
                    return {
                        text: item.categorie_salariale,
                        id: item.categorie_salariale_id
                    }
                })
            }).on('change', async function (e) {
                self.form.categorie_salariale_id = $(this).val();
            });




        },
        cleanField() {
            this.form.categorie_salariale_id = ''
            this.form.libelle = ''
            this.form.salaire_mensuel = ''
            this.form.treizieme_mois = ''
            this.form.transport_journalier = ''
            this.form.allocation_familliale = ''
            this.form.devise = 'CDF'
            $("#categorieSelect2").val('').trigger('change');
            this.$emit('refreshData')
        },

    },
}
</script>
