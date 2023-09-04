<template>
    <teleport to='body'>
        <div class="modal fade scrollbar-lg" id="modalAccess" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
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
                                <h4 class="tx-18 tx-sm-20 mg-b-2">Création accès utilisateur</h4>
                                <p class="tx-13 tx-color-03 mg-b-0">Vous pouvez insérer plusieurs accès à la fois ! </p>
                            </div>
                        </div><!-- media -->
                    </div><!-- modal-header -->
                    <div class="modal-body pd-sm-t-30 pd-sm-b-40 pd-sm-x-30">
                        <div class="form-group">
                            <label class="tx-12 tx-medium tx-spacing-1 mg-b-5 form-label">Libelle accès : <span
                                    class="tx-danger">*</span></label>
                            <div class="input-group mb-2" v-for="(form, index) in forms" :key="index">
                                <input type="text" class="form-control" v-model="form.data"
                                    placeholder="entrez le libellé accès...">
                                <button v-if="index === forms.length - 1" class="btn btn-light btn-lg"
                                    @click.prevent="forms.push({ data: '' })"><i data-feather="plus"></i></button>
                                <button v-else class="btn btn-danger btn-lg"> <i data-feather="trash"></i></button>
                            </div>
                        </div>
                    </div><!-- modal-body -->
                    <div class="modal-footer pd-x-20 pd-y-15">
                        <button type="button" class="btn btn-white" data-bs-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-primary">Créer accès</button>
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
}
</script>