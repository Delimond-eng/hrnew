<template>
    <teleport to='body'>
        <div class="modal fade scrollbar-lg" id="modalUser" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document" id="modalUserBody">
                <div class="modal-content">
                    <div class="modal-header pd-y-20 pd-x-20 pd-sm-x-30">
                        <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                        <div class="media align-items-center">
                            <span class="tx-color-03 d-none d-sm-block"><i data-feather="user"
                                    class="wd-60 ht-60"></i></span>
                            <div class="media-body mg-sm-l-20">
                                <h4 class="tx-18 tx-sm-20 mg-b-2">Création Compte utilisateur</h4>
                                <p class="tx-13 tx-color-03 mg-b-0">Veuillez renseigner tous les champs obligatoires ! </p>
                            </div>
                        </div>
                        <!-- media -->
                    </div>
                    <!-- modal-header -->
                    <div class="modal-body pd-sm-t-30 pd-sm-b-40 pd-sm-x-30">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="tx-12 tx-medium tx-spacing-1 mg-b-5 form-label">Nom d'utilisateur: <span
                                            class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="entrez le nom d'utilisateur...">
                                </div>

                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="tx-12 tx-medium tx-spacing-1 mg-b-5 form-label">Adresse email: <span
                                            class="tx-danger">*</span></label>
                                    <input type="email" class="form-control" placeholder="entrez l'adresse email...">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="tx-12 tx-medium tx-spacing-1 mg-b-5 form-label">Téléphone: <span
                                            class="tx-danger">*</span></label>
                                    <input type="email" class="form-control" placeholder="entrez le n° de tél ...">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="tx-12 tx-medium tx-spacing-1 mg-b-5 form-label">Agent concerné: <span
                                            class="tx-danger">*</span>
                                    </label>
                                    <select class="form-select">
                                        <option label="--Sélectionnez un agent--"></option>
                                        <option v-for="i in 10" :key="i" :value="'agent__' + i">{{ 'agent__' + i }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="tx-12 tx-medium tx-spacing-1 mg-b-5 form-label">Mot de passe: <span
                                            class="tx-danger">*</span></label>
                                    <input type="email" class="form-control" placeholder="entrez le mot de passe...">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="tx-12 tx-medium tx-spacing-1 mg-b-5 form-label">Confirmation Mot de
                                        passe: <span class="tx-danger">*</span></label>
                                    <input type="email" class="form-control" placeholder="retapez le mot de passe...">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="tx-12 tx-medium tx-spacing-1 mg-b-5 form-label">Accès utilisateur:
                                        <span class="tx-danger">*</span></label>
                                    <select class="form-select">
                                        <option label="--Sélectionnez un accès utilisateur--" selected></option>
                                        <option value="administrateur">Administrateur</option>
                                        <option value="administrateur">Utilisateur</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="tx-12 tx-medium tx-spacing-1 mg-b-5 form-label">Agence:
                                        <span class="tx-danger">*</span></label>
                                    <select class="form-select">
                                        <option label="--Sélectionnez agence--" selected></option>
                                        <option value="administrateur">agence_1</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div><!-- modal-body -->
                    <div class="modal-footer pd-x-20 pd-y-15">
                        <button type="button" class="btn btn-white" data-bs-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-primary">Créer utilisateur</button>
                    </div>
                </div><!-- modal-content -->
            </div><!-- modal-dialog -->
        </div><!-- modal -->
    </teleport>
</template>

<script>
export default {
    name: 'AccessModal',

    data() {
        return {
            forms: [
                {
                    data: ""
                }
            ]
        }
    },

    mounted() {
        $("#modalUserBoy").draggable();
    },
}
</script>