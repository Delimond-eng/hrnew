<template>
    <div data-label="" class="df-example mt-3">
        <p class="tx-danger tx-12">Veuillez remplir tous les champs pour affecter un congé !</p>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">Agent <span class="tx-danger">*</span></label>
                    <select class="select2 form-select agent2Select">
                        <option label="--Sélectionnez un agent--"></option>
                        <option v-for="i in 10" :key="i" :value="'agent__' + i">agent__{{ i }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">Congé<span class="tx-danger">*</span></label>
                    <select class="select2 form-select congeSelect">
                        <option label="--Sélectionnez un congé--"></option>
                        <option v-for="i in 10" :key="i" :value="'congé__' + i">congé__{{ i }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">Date début<span class="tx-danger">*</span></label>
                    <input type="date" class="form-control">
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
    name: "AffectationCongeComponent",

    mounted() {
        console.log("affectation congé...");
        $('.agent2Select').select2({
            placeholder: '--Sélectionnez un agent--',
            searchInputPlaceholder: 'Recherche agent...'
        });
        $('.congeSelect').select2({
            placeholder: '--Sélectionnez un congé--',
            searchInputPlaceholder: 'Recherche congé...'
        });

    },
}
</script>