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
                                <select class="form-select areasSelect2" red style="width: 100%;">
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

                                <!-- <div class="d-grid gap-2 mt-3">
                                    <button type="button" class="btn btn-lg btn-outline-danger"
                                        @click="$showBsModal('modalDevicesChoice', 'effect-scale')">
                                        Cliquez pour sélectionner les dispositifs pour l'agence ! <small>(action
                                            optionnelle)</small> <span class="badge text-bg-light mx-1">0</span>
                                    </button>
                                </div> -->
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
                numero: '',
                code_zone: 0,
            }
        }
    },
    beforeUnmount() {
        this.select2.select2('destroy');
    },
    async mounted() {
        $("#modalAgenceBody").draggable();

        /**
         * Empty Areas select
        */
        $('#modalAgence').on("hidden.bs.modal", function (e) {
            $(".areasSelect2").val('').trigger('change');
        });
        await this.initSelect2();
    },
    methods: {
        submitData(e) {
            this.isSubmitLoading = true;
            this.formData.libelle = this.formData.libelle.toUpperCase();
            this.$store.dispatch('biotime/createAgence', this.formData).then((res) => {
                this.isSubmitLoading = false;
                if (typeof res !== 'boolean') {
                    if (res.response.status === 'success') {
                        Swal({
                            icon: 'success',
                            title: 'Succès !',
                            text: 'Agence créée avec succès dans le système !',
                            showConfirmButton: false,
                            showCancelButton: false,
                            timer: 4000
                        });
                        this.cleanField();
                    }
                }
            });
        },

        cleanField() {
            this.formData.province = '';
            this.formData.commune = '';
            this.formData.quartier = '';
            this.formData.libelle = '';
            this.formData.avenue = '';
            this.formData.numero = '';
            this.formData.code_zone = 0;
            $(".areasSelect2").val('').trigger('change');
            this.$emit('refreshData');
        },

        async initSelect2() {
            let self = this;
            const areas = await this.$store.dispatch('biotime/allAreas');
            this.select2 = $('.areasSelect2').select2({
                dropdownParent: $('#modalAgence'),
                placeholder: '--Sélectionnez province--',
                data: $.map(areas, function (item) {
                    return {
                        text: item.area_name,
                        id: item.id
                    }
                })
            }).on('change', function (e) {
                self.formData.code_zone = parseInt($(this).val());
                self.formData.province = $(this).select2('data')[0].text;
                console.log(self.formData.code_zone);
            });
        }
    },
}
</script>


