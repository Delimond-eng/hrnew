<template>
    <div data-label="Bulletin decompte" class="df-example mt-3">
        <h6>Matricule</h6>
        <div class="row">
            <div class="col-md-8">
                <form @submit.prevent="submitRequest">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Entrez le numéro matricule de l'employé..."
                            required>
                        <bs-button class-name="btn-success btn-lg" :loading="isSubmitLoading" btn-type="submit"> <i
                                data-feather="clipboard"></i>
                            Afficher</bs-button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'DecompteBulletin',

    data() {
        return {
            isSubmitLoading: false
        }
    },

    methods: {
        submitRequest(e) {
            this.isSubmitLoading = true;

            setTimeout(() => {
                this.isSubmitLoading = false
            }, 3000)
        }
    },
}
</script>