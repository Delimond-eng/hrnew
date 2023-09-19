<template>
    <teleport to='body'>
        <form class="modal fade scrollbar-lg" id="modalEmployes" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content tx-14">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel6">Nouveau employé</h4>
                        <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                    </div>
                    <div class="modal-body">
                        <p class="mg-b-10 tx-danger">Veuillez renseigner tous les champs obligatoires !</p>
                        <div data-label="Informations personnelles" class="df-example demo-forms">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label"> Nom <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Saisir le nom de l'employé..."
                                        required>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label"> Postnom <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Saisir le postnom de l'employé..."
                                        required>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label"> Prénom <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Saisir le prénom de l'employé..."
                                        required>
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Nationalité <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control"
                                        placeholder="Saisir la nationalité de l'employé..." required>
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Date de naissance <span class="tx-danger">*</span></label>
                                    <input type="date" class="form-control" placeholder="datenais" required>
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Adresse <span class="tx-danger">*</span></label>
                                    <input type="text" class="form-control"
                                        placeholder="Saisir l'adresse de l'employé...ex:av/n°/commune..." required>
                                </div>

                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Sexe <span class="tx-danger">*</span></label>
                                    <select class="form-select" required>
                                        <option label="--Sélectionnez sexe--"></option>
                                        <option value="M">Masculin</option>
                                        <option value="F">Féminin</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Etat civil <span class="tx-danger">*</span></label>
                                    <select class="form-select" required>
                                        <option label="--Sélectionnez état civil--"></option>
                                        <option value="Marié(e)">Marié(e)</option>
                                        <option value="Celibataire">Celibataire</option>
                                        <option value="Veuf(ve)">Veuf(ve)</option>
                                        <option value="Divorcé(e)">Divorcé(e)</option>
                                    </select>
                                </div>

                                <div class="col-md-4 mt-md-2">
                                    <label class="form-label">Date engagement<span class="tx-danger">*</span></label>
                                    <input type="date" class="form-control" placeholder="dateeng" required>
                                </div>

                                <div class="col-md-4 mt-md-2" v-if="!forAgency">
                                    <label class="form-label">Agence <small>(Optionnel)</small></label>
                                    <select class="form-select" required>
                                        <option label="--Sélectionnez une agence--"></option>
                                        <option value="Marié(e)">Kitambo</option>
                                        <option value="Celibataire">Masina</option>
                                        <option value="Veuf(ve)">Bandal</option>
                                        <option value="Divorcé(e)">Maluku</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div data-label="Contrat" class="df-example mt-md-3 demo-forms">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label">Type <span class="tx-danger">*</span></label>
                                    <select class="form-select">
                                        <option value="CDD" selected>CDD</option>
                                        <option value="CDI">CDI</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label"> Durée<span class="tx-danger">*</span></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Entrez la durée..." required>
                                        <div class="input-group-text m-0 p-0 bg-transparent">
                                            <select class="form-select border-0" required>
                                                <option value="Mois" selected>Mois</option>
                                                <option value="Années">Années</option>
                                                <option value="Jours">Jours</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Barème <span class="tx-danger">*</span></label><br>
                                    <div class="w-100">
                                        <select class="baremeSelect" style="width:100%" required>
                                            <option label="--Sélectionnez barème--"></option>
                                        </select>
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
    name: 'EmployesCreateModal',

    props: {
        forAgency: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isSubmitLoading: false
        }
    },

    mounted() {
        $(document).ready(() => {
            $('.baremeSelect').select2({
                dropdownParent: $('#modalEmployes'),
                placeholder: '--Sélectionnez barème--',
                data: [
                    { id: 1, text: "Bareme O1" },
                    { id: 2, text: "Bareme O2" },
                    { id: 3, text: "Bareme O3" },
                    { id: 4, text: "Bareme O4" },
                ]
            });
        });
    },
}
</script>