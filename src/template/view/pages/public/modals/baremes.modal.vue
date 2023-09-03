<template>
    <teleport to='body'>
        <form class="modal fade scrollbar-lg" id="modalBareme" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content tx-14">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel6">Nouveau barème</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="mg-b-10 tx-danger">Veuillez renseigner tous les champs obligatoires !</p>
                        <div data-label="Barème" class="df-example demo-forms">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label"> Catégorie <span class="tx-danger">*</span></label>
                                    <select class="form-select" required>
                                        <option label="--Sélectionnez une catégorie--"></option>
                                        <option value="Cat">Catégorie_1</option>
                                        <option value="Cat">Catégorie_2</option>
                                        <option value="Cat">Catégorie_3</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
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
                                </div>
                                <div class="col-md-4 md-2">
                                    <label class="form-label">Libellé <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Saisir le libellé..." required>
                                </div>
                                <div class="col-md-3 mt-md-2">
                                    <label class="form-label">Salaire mensuel <span class="tx-danger">*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Saisir le salaire mensuel..."
                                            required>
                                        <div class="input-group-text m-0 p-0 bg-transparent">
                                            <select class="form-select border-0">
                                                <option value="CDF" selected>CDF</option>
                                                <option value="USD">USD</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 mt-md-2">
                                    <label class="form-label">13<sup>ième</sup> mois <span
                                            class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" required>
                                </div>

                                <div class="col-md-3 mt-md-2">
                                    <label class="form-label">Allocation familiale <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Saisir l'allocation familiale..."
                                        required>
                                </div>
                                <div class="col-md-3 mt-md-2">
                                    <label class="form-label">Transport journalier <span class="tx-danger">*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Saisir le transport journ..."
                                            required>
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
                        <button type="button" class="btn btn-secondary btn-lg" data-bs-dismiss="modal">Fermer</button>
                        <bs-button btn-type="submit" :loading="isSubmitLoading" class-name="btn-success"> <i
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
}
</script>
