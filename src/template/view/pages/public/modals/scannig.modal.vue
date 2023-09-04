<template>
    <teleport to="body">
        <div class="modal fade" id="modalScannig" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered wd-sm-200 ht-sm-100" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <!-- <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a> -->
                        <div class="d-flex justify-content-center align-content-center align-items-center">
                            <div
                                class="df-example wd-sm-200 ht-sm-200 border-0 d-flex align-items-center justify-content-center">
                                <a href="#" class="btn tx-80 tx-primary">
                                    <i class="fa fa-fingerprint"></i>
                                </a>
                            </div>
                        </div>
                    </div><!-- modal-body -->
                </div><!-- modal-content -->
            </div><!-- modal-dialog -->
        </div><!-- modal -->
    </teleport>
</template>