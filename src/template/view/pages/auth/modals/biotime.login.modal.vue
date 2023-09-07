<template>
    <teleport to="body">
        <div class="modal fade" id="modalSignIn" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered wd-sm-400" role="document">
                <div class="modal-content">
                    <div class="modal-body pd-20 pd-sm-40">
                        <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>

                        <div>
                            <h4>Authentification</h4>
                            <p class="tx-color-03">Veuillez vous authentifier au dispositif d'enrollement pour etablir une
                                liaison !</p>
                            <div class="form-group">
                                <div class="mg-b-5">
                                    <label class="mg-b-0-f">Nom d'utilisateur</label>
                                </div>
                                <input type="text" class="form-control" placeholder="nom d'utilisateur">
                            </div>
                            <div class="form-group">
                                <div class="mg-b-5">
                                    <label class="mg-b-0-f">Mot de passe</label>
                                </div>
                                <input type="password" class="form-control" placeholder="Enter your password">
                            </div>
                            <button class="btn btn-primary btn-lg btn-block" data-bs-dismiss="modal"><i
                                    data-feather="unlock"></i> Connecter</button>
                        </div>
                    </div><!-- modal-body -->
                </div><!-- modal-content -->
            </div><!-- modal-dialog -->
        </div>
    </teleport>
</template>