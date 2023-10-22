<template>
    <div data-label="" class="df-example mt-3">
        <p class="tx-danger tx-12">Veuillez remplir tous les champs pour affecter un agent !</p>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">Agent <span class="tx-danger">*</span></label>
                    <select class="select2 form-select agent1Select">
                        <option label="--Sélectionnez un agent--"></option>
                        <option v-for="i in 10" :key="i" :value="'agent__' + i">agent__{{ i }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">Poste / Fonction<span class="tx-danger">*</span></label>
                    <select class="select2 form-select posteSelect">
                        <option label="--Sélectionnez une fonction--"></option>
                        <option v-for="i in 10" :key="i" :value="'poste__' + i">poste__{{ i }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">Agence<span class="tx-danger">*</span></label>
                    <select class="select2 form-select agenceSelect">
                        <option label="--Sélectionnez une agence--"></option>
                        <option v-for="i in 10" :key="i" :value="'agence__' + i">agence__{{ i }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1">
            <label class="custom-control-label" for="customCheck1"><span class="mg-r-4"></span>Envoyez une notification à
                l'agent</label>
        </div>

        <hr>

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
    name: "AffectationAgentComponent",
    mounted() {
        console.log("affectation agent...");
        $('.agent1Select').select2({
            placeholder: '--Sélectionnez un agent--',
            searchInputPlaceholder: 'Recherche agent...'
        });
        $('.agenceSelect').select2({
            placeholder: '--Sélectionnez une agence--',
            searchInputPlaceholder: 'Recherche agence...'
        });
        $('.posteSelect').select2({
            placeholder: '--Sélectionnez une fonction--',
            searchInputPlaceholder: 'Recherche fonction...'
        });
    },
}
</script>