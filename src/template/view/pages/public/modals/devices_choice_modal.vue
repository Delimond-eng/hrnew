<template>
    <teleport to="body">
        <div class="modal fade" id="modalDeviceLink" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered wd-sm-700" role="document">
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
                                <h4 class="tx-18 tx-sm-20 mg-b-2">Liaison des dispositifs à l'Agence !</h4>
                                <p class="tx-13 tx-color-03 mg-b-0">Veuillez sélectionner un ou plusieurs dispositifs pour cette agence !</p>
                            </div>
                        </div><!-- media -->
                    </div><!-- modal-header -->
                    <div class="modal-body pd-sm-t-30 pd-sm-b-40 pd-sm-x-30">
                      <div class="row row-xs">
                        <div class="col-sm-6 col-lg-4 col-xl-4 mb-2" v-for="i in 20" :key="i">
                          <div class="media media-folder">
                            <img src="assets/img/device_image.png" style="height: 50px; object-fit: cover"
                                 alt="device">
                            <div class="media-body">
                              <h6><a href="#" class="link-02">ICLOCK 680</a></h6>
                              <div class="d-flex justify-content-between align-items-center">
                                <span>192.168.4.{{ i }}</span>
                                <div style="height: 8px; width: 8px;"
                                     class="bg-success rounded-circle pos-relative"></div>
                              </div>

                            </div>

                            <!-- media-body -->
                            <div class="dropdown-file">
                              <a href="#" class="dropdown-link" data-bs-toggle="dropdown"><i
                                  data-feather="more-vertical"></i></a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a href="javascript:void(0)"
                                   @click.prevent="$showBsModal('modalDeviceLink', 'effect-scale')"
                                   class="dropdown-item details"><i data-feather="link"></i>Lier à une
                                  agence</a>
                                <a href="#" class="dropdown-item important"><i
                                    data-feather="info"></i>Voir infos</a>
                              </div>
                            </div>
                            <!-- dropdown -->
                          </div>
                          <!-- media -->
                        </div>
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

<style scoped src="@/assets/css/dashforge.filemgr.css"></style>