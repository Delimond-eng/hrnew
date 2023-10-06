<template>
    <teleport to='body'>
        <form @submit.prevent="submitAgence" class="modal fade scrollbar-lg" id="modalAgence" tabindex="-1" role="dialog"
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
                                <input type="text" class="form-control" placeholder="Saisir le libellé de l'agence..."
                                    required>
                            </div>

                            <div class="col-md-6">
                              <label class="form-label">Province <span class="tx-danger">*</span></label><br>
                              <select class="form-select agenceSelect2" style="width: 100%;">
                                <option label="--Sélectionnez province--"></option>
                              </select>
                            </div>

                            <div class="col-md-6 mb-2">
                                <label class="form-label">Commune ou Territoire <span class="tx-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Saisir l'adresse de l'agence..."
                                    required>
                            </div>

                            <div class="col-md-4 mb-2">
                              <label class="form-label">Avenue <span class="tx-danger">*</span></label>
                              <input type="text" class="form-control" placeholder="Saisir l'adresse de l'agence..."
                                     required>
                            </div>

                            <div class="col-md-4 mb-2">
                              <label class="form-label">Quartier <span class="tx-danger">*</span></label>
                              <input type="text" class="form-control" placeholder="Saisir l'adresse de l'agence..."
                                     required>
                            </div>

                            <div class="col-md-4 mb-2">
                              <label class="form-label">Numéro <span class="tx-danger">*</span></label>
                              <input type="text" class="form-control" placeholder="Saisir l'adresse de l'agence..."
                                     required>
                            </div>


                            <div class="col-md-12">
                                <!--<div class="mt-2">
                                    <label
                                        class="tx-sans tx-10 tx-semibold tx-uppercase tx-color-01 tx-spacing-1 mg-b-15">Sélectionnez
                                        les dispositifs pour cette agence !</label>
                                    <ul class="list-inline list-inline-skills" style="max-height: 100px; overflow-y: auto;">
                                        <li class="list-inline-item" v-for="i in 76" :key="i">
                                            <a href="javascript:void(0)">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input"
                                                        :id="`customCheck0${i}`">
                                                    <label class="custom-control-label p-lg-1" :for="`customCheck0${i}`">
                                                        Device 0{{ i }}
                                                    </label>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              -->
                              <div class="d-grid gap-2 mt-3">
                                <button type="button" class="btn btn-lg btn-outline-danger" @click="$showBsModal('modalDevicesChoice', 'effect-scale')">
                                  Cliquez pour sélectionner les dispositifs pour l'agence ! <small>(action optionnelle)</small> <span class="badge text-bg-light mx-1">0</span>
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
    <devices-modal/>
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
            isSubmitLoading: false
        }
    },
    mounted() {
        $("#modalAgenceBody").draggable();
        $(document).ready(() => {
            $('.agenceSelect2').select2({
                dropdownParent: $('#modalAgence'),
                placeholder: '--Sélectionnez province--',
                data: [
                    {
                        id: 1, text: 'Kasaï Central'
                    },
                    {
                        id: 2, text: 'Kasaï oriental'
                    },
                    {
                        id: 3, text: 'Bas Kongo'
                    },
                    {
                        id: 4, text: 'Bas Uele'
                    },
                    {
                        id: 5, text: 'Ituri'
                    },
                    {
                        id: 6, text: 'Sud Ubangi'
                    },
                ]
            });
        });
    },


    methods: {
        submitAgence(e) {
            this.isSubmitLoading = true;
            setTimeout(() => {
                this.isSubmitLoading = false;
                $('#modalAgence').modal('hide');
            }, 3000)
        }
    },
}
</script>


