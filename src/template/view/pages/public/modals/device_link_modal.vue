<template>
    <teleport to="body">
        <div class="modal fade" id="modalDeviceLink" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered wd-sm-650" role="document">
                <div class="modal-content">
                    <div class="modal-header pd-y-20 pd-x-20 pd-sm-x-30">
                        <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                        <div class="media align-items-center">
                            <span class="tx-color-03 d-none d-sm-block"><i data-feather="link"
                                    class="wd-60 ht-60"></i></span>
                            <div class="media-body mg-sm-l-20">
                                <h4 class="tx-18 tx-sm-20 mg-b-2">Liaison du dispositif à l'agence</h4>
                                <p class="tx-13 tx-color-03 mg-b-0">Veuillez sélectionner une agence pour la liaison du
                                    dispositif !</p>
                            </div>
                        </div><!-- media -->
                    </div><!-- modal-header -->
                    <div class="modal-body pd-sm-t-30 pd-sm-b-40 pd-sm-x-30">
                        <div class="form-group">
                            <label class="tx-10 tx-uppercase tx-medium tx-spacing-1 mg-b-5 tx-color-03">Province</label>
                            <select class="form-select">
                                <option label="--Veuillez sélectionner une province--"></option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="tx-10 tx-uppercase tx-medium tx-spacing-1 mg-b-5 tx-color-03">Agence</label>
                            <select class="form-select">
                                <option label="--Veuillez sélectionner agence--"></option>
                            </select>
                        </div>
                    </div><!-- modal-body -->
                    <div class="modal-footer pd-x-20 pd-y-15">
                        <button type="button" class="btn btn-white" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary"> <i data-feather="link"></i> Save Info</button>
                    </div>
                </div><!-- modal-content -->
            </div><!-- modal-dialog -->
        </div>
    </teleport>
</template>

<script>
export default {

}
</script>