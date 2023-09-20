<template>
    <teleport to='body'>
        <form @submit.prevent="submitAgence" class="modal fade scrollbar-lg" id="modalAgence" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel6" aria-hidden="true">
            <div class="modal-dialog" role="document" id="modalAgenceBody">
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
                            <div class="col-md-12 mb-2">
                                <label class="form-label">Adresse <span class="tx-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Saisir l'adresse de l'agence..."
                                    required>
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Province <span class="tx-danger">*</span></label><br>
                                <select class="form-select agenceSelect2" style="width: 100%;">
                                    <option label="--Sélectionnez province--"></option>
                                </select>
                            </div>

                            <div class="col-md-12">
                                <div class="mt-2">
                                    <label>Sélectionnez les dispositifs pour cette agence : <span
                                            class="tx-danger">*</span></label> <br>
                                    <div class="row overflow-auto flex-nowrap mt-lg-2 mb-lg-2">
                                        <div class="col-5" v-for="i in 86" :key="i">
                                            <div
                                                class="custom-control custom-checkbox df-example py-1 px-2 mb-2 d-flex align-items-center justify-content-center">
                                                <input type="checkbox" class="custom-control-input" :id="`customCheck${i}`">
                                                <label class="custom-control-label p-lg-1" :for="`customCheck${i}`">
                                                    Dispositif{{ i + 1 }} </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-lg" data-bs-dismiss="modal">Fermer</button>
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
    name: 'AgenceCreateModal',

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


