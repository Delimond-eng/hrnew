<template>
    <div class="df-example mt-3">
        <h6>Période</h6>
        <div class="row">
            <div class="col-md-8">
                <form @submit.prevent="submitPointage">
                    <div class="input-group">
                        <select class="form-select form-control-lg" required>
                            <option label="--Sélectionnez une période--"></option>
                            <option value="Periode_1">Periode_1</option>
                            <option value="Periode_2">Periode_2</option>
                        </select>

                        <bs-button btn-type="submit" :loading="isSubmitLoading" class-name="btn-success btn-lg"> <i
                                data-feather="clipboard"></i>
                            Afficher
                        </bs-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PointageAnterieur',

    data() {
        return {
            isSubmitLoading: false
        }
    },

    methods: {


        /** 
         *  Methode permettant de soumettre la requête concernant le pointage anterieur
         *  */
        submitPointage(e) {
            this.isSubmitLoading = true;
            setTimeout(() => {
                this.isSubmitLoading = false
            }, 3000);
        }
    },
}
</script>