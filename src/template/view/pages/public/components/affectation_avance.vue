<template>
    <div data-label="" class="df-example mt-3">
        <p class="tx-danger tx-12">Veuillez remplir tous les champs pour affecter une avance sur salaire !</p>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">Agent <span class="tx-danger">*</span></label>
                    <select class="select2 form-select agent3Select">
                        <option label="--Sélectionnez un agent--"></option>
                        <option v-for="i in 10" :key="i" :value="'agent__' + i">agent__{{ i }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">Libellé<span class="tx-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="saisir le libellé...">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">Montant<span class="tx-danger">*</span></label>
                    <div class="input-group">
                        <input type="number" class="form-control" placeholder="saisir le montant...">
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
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1">
            <label class="custom-control-label" for="customCheck1"><span class="mg-r-4"></span>Envoyez une notification à
                l'agent</label>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-white btn-lg mg-r-10">Annuler</button>
            <bs-button btn-type="submit" class-name="btn-primary btn-lg"> <i data-feather="link"></i>
                Soumettre affectation
            </bs-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AffectationPrimeComponent",

    mounted() {
        $('.agent3Select').select2({
            placeholder: '--Sélectionnez un agent--',
            searchInputPlaceholder: 'Recherche agent...'
        });

    },
}
</script>