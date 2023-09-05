<template>
    <teleport to='body'>
        <form @submit.prevent="submitVisite" class="modal fade scrollbar-lg" id="modalVisiteurs" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content tx-14">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel6">Création nouveau visiteur</h4>
                        <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                    </div>
                    <div class="modal-body">
                        <p class="mg-b-10 tx-danger">Veuillez renseigner tous les champs obligatoires !</p>
                        <div data-label="Barème" class="df-example demo-forms">
                            <div class="row">

                                <div class="col-md-6">
                                    <label class="form-label">Nom complet<span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control"
                                        placeholder="entrez le nom complet du visiteur...">
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Téléphone <small>(optionnel)</small></label>
                                    <input type="text" class="form-control" placeholder="Saisir le tél du visiteur..."
                                        required>
                                </div>

                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Code de la carte de visite<span
                                            class="tx-danger">*</span></label>
                                    <input type="text" class="form-control"
                                        placeholder="Entrez le code de la carte de visite...">
                                </div>

                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Heure de visite <span class="tx-danger">*</span></label>
                                    <input type="time" class="form-control" placeholder="heure de visite...">
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Heure de sortie <small>(optionnel)</small></label>
                                    <input type="time" class="form-control" placeholder="heure de sortie...">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-white btn-lg" data-bs-dismiss="modal">Fermer</button>
                        <bs-button btn-type="submit" :loading="isSubmitLoading" class-name="btn-primary btn-lg"> <i
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
            isSubmitLoading: false
        }
    },


    methods: {
        submitVisite(e) {
            this.isSubmitLoading = true;
            setTimeout(() => {
                this.isSubmitLoading = false;
                $('#modalVisiteurs').modal('hide');
            }, 3000)
        }
    },
}
</script>
