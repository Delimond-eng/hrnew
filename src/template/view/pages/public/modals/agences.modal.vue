<template>
    <teleport to='body'>
        <form @submit.prevent="submitData" class="modal fade scrollbar-lg" id="modalAgence" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-lg shadow-lg" role="document" id="modalAgenceBody">
                <div class="modal-content tx-14">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel6">Nouvelle agence</h4>
                        <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                    </div>
                    <div class="modal-body">
                        <p class="mg-b-10 tx-danger">Veuillez renseigner tous les champs obligatoires !</p>
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <label class="form-label">Libellé agence <span class="tx-danger">*</span></label>
                                <input type="text" v-model="formData.libelle" class="form-control"
                                    placeholder="Saisir le libellé de l'agence..." required>
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Province <span class="tx-danger">*</span></label><br>
                                <select class="form-select agenceSelect2" red style="width: 100%;">
                                    <option label="--Sélectionnez province--"></option>
                                </select>
                            </div>

                            <div class="col-md-6 mb-2">
                                <label class="form-label">Commune ou Territoire <span class="tx-danger">*</span></label>
                                <input type="text" v-model="formData.commune" class="form-control"
                                    placeholder="Saisir l'adresse de l'agence..." required>
                            </div>

                            <div class="col-md-4 mb-2">
                                <label class="form-label">Avenue <span class="tx-danger">*</span></label>
                                <input type="text" v-model="formData.avenue" class="form-control"
                                    placeholder="Saisir l'adresse de l'agence..." required>
                            </div>

                            <div class="col-md-4 mb-2">
                                <label class="form-label">Quartier <span class="tx-danger">*</span></label>
                                <input type="text" v-model="formData.quartier" class="form-control"
                                    placeholder="Saisir l'adresse de l'agence..." required>
                            </div>

                            <div class="col-md-4 mb-2">
                                <label class="form-label">Numéro <span class="tx-danger">*</span></label>
                                <input type="text" v-model="formData.numero" class="form-control"
                                    placeholder="Saisir l'adresse de l'agence..." required>
                            </div>


                            <div class="col-md-12">

                                <div class="d-grid gap-2 mt-3">
                                    <button type="button" class="btn btn-lg btn-outline-danger"
                                        @click="$showBsModal('modalDevicesChoice', 'effect-scale')">
                                        Cliquez pour sélectionner les dispositifs pour l'agence ! <small>(action
                                            optionnelle)</small> <span class="badge text-bg-light mx-1">0</span>
                                    </button>
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
    <devices-modal />
</template>

<style scoped src="@/assets/css/dashforge.profile.css"></style>
<script>

import DevicesModal from './devices_choice_modal'
export default {
    name: 'AgenceCreateModal',

    components: {
        DevicesModal,
    },

    data() {
        return {
            isSubmitLoading: false,
            select2: null,

            formData: {
                libelle: '',
                province: '',
                commune: '',
                quartier: '',
                avenue: '',
                numero: ''
            }
        }
    },
    beforeUnmount() {
        this.select2.select2('destroy');
    },
    mounted() {
        $("#modalAgenceBody").draggable();
        this.select2 = $('.agenceSelect2').select2({
            dropdownParent: $('#modalAgence'),
            placeholder: '--Sélectionnez province--',
            data: [
                {
                    id: 'Kasaï Central', text: 'Kasaï Central'
                },
                {
                    id: 'Kasaï oriental', text: 'Kasaï oriental'
                },
                {
                    id: 'Bas Kongo', text: 'Bas Kongo'
                },
                {
                    id: 'Bas Uele', text: 'Bas Uele'
                },
                {
                    id: 'Ituri', text: 'Ituri'
                },
                {
                    id: 'Sud Ubangi', text: 'Sud Ubangi'
                },
            ]
        });
    },
    methods: {
        submitData(e) {
            this.formData.province = this.select2.val();
            this.isSubmitLoading = true;
            this.$store.dispatch('biotime/createAgence', this.formData).then((res) => {
                console.log(JSON.stringify(res));
                this.isSubmitLoading = false;
                this.cleanField();
            });
        },

        cleanField() {
            this.formData.province = '';
            this.formData.commune = '';
            this.formData.quartier = '';
            this.formData.libelle = '';
            this.formData.avenue = '';
            this.formData.numero = '';
            $(".agenceSelect2").val('').trigger('change')
        }
    },
}
</script>


