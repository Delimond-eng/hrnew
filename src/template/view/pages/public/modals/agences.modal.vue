<template>
    <teleport to='body'>
        <form @submit.prevent="submitAgence" class="modal fade scrollbar-lg" id="modalAgence" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel6" aria-hidden="true">
            <div class="modal-dialog" role="document">
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
                                <label class="form-label">Province <span class="tx-danger">*</span></label>
                                <select class="form-select">
                                    <option label="--Sélectionnez province--"></option>
                                    <option value="">Povince01</option>
                                    <option value="">Povince012</option>
                                </select>
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
