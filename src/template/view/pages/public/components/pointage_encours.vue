<template>
    <div class="df-example mt-3">
        <form @submit.prevent="submitRequest">
            <div class="row mt-2">
                <div class="col-md-2">
                    <label class="form-label">Mois<span class="tx-danger">*</span></label>
                    <select class="form-select" required>
                        <option label="Mois"></option>
                        <option value="Janvier">Janvier</option>
                        <option value="Février">Février</option>
                        <option value="Mars">Mars</option>
                        <option value="Avril">Avril</option>
                        <option value="Mai">Mai</option>
                        <option value="Juin">Juin</option>
                        <option value="Juillet">Juillet</option>
                        <option value="Août">Août</option>
                        <option value="Septembre">Septembre</option>
                        <option value="Octobre">Octobre</option>
                        <option value="Décembre">Décembre</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label class="form-label">Année <span class="tx-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="Année" required>
                </div>
                <div class="col-md-3">
                    <label class="form-label"> Date clôture <span class="tx-danger">*</span></label>
                    <input type="date" class="form-control" placeholder="date clôture" required>
                </div>
                <div class="col-md-2">
                    <label class="form-label">Devise <span class="tx-danger">*</span></label>
                    <select class="form-select" required>
                        <option value="Janvier" selected>CDF</option>
                        <option value="Février">USD</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Taux <span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" value="1" placeholder="taux" required>
                </div>
                <div class="col-md-6 mt-2">
                    <label class="form-label">Province <span class="tx-danger">*</span></label>
                    <select class="select2 form-select provinceSelect">
                        <option label="--Sélectionnez une province--"></option>
                    </select>
                </div>
                <div class="col-md-6 mt-2">
                    <label class="form-label">Agence <span class="tx-danger">*</span></label>
                    <select class="select2 form-select agenceSelect">
                        <option label="--Sélectionnez une agence--"></option>
                    </select>
                </div>

            </div>
            <hr>
            <div class="mt-3 d-flex justify-content-end">
                <bs-button btn-type="submit" :loading="isSubmitLoading" class-name="btn-success btn-lg"> <i
                        data-feather="check"></i>
                    Confirmer pointage
                </bs-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'PointageEnCours',

    data() {
        return {
            isSubmitLoading: false
        }
    },

    mounted() {
        $(document).ready(() => {
            $('.agenceSelect').select2({
                placeholder: '--Sélectionnez une agence--',
                searchInputPlaceholder: 'Recherche agence...',
                language: {
                    noResults: (params) => {
                        return 'Aucun résultat trouvé !'
                    }
                },
                allowClear: true,
                data: [
                    { id: 1, text: 'Kitambo' },
                    { id: 2, text: 'Kimbaseke' },
                    { id: 3, text: 'Masina' },
                ]
            });
            $('.provinceSelect').select2({
                placeholder: '--Sélectionnez une fonction--',
                searchInputPlaceholder: 'Recherche province...',
                language: {
                    noResults: (params) => {
                        return 'Aucun résultat trouvé !'
                    }
                },
                allowClear: true,
                data: [
                    { id: 2, text: 'Kongo Central' },
                    { id: 3, text: 'Kasaï Central' },
                    { id: 3, text: 'Haut Katanga' },
                    { id: 1, text: 'Kasaï Oriental' },
                    { id: 1, text: 'Bas Uele' },
                ]
            });
        });
    },

    methods: {
        submitRequest(e) {
            this.isSubmitLoading = true;
            setTimeout(() => {
                this.isSubmitLoading = false;
            }, 3000)
        }
    },
}
</script>
