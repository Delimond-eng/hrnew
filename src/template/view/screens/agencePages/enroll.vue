<template>
    <!-- filemgr-content-header -->
    <div class="filemgr-content-header">
        <h6 class="mg-b-0 tx-primary"><i class="mg-r-3" data-feather="stop-circle" width="15"></i>Enrollement agents </h6>
    </div>
    <!-- filemgr-content-header -->

    <!-- filemgr-content-body -->
    <div class="filemgr-content-body scrollbar-primary scrollbar-lg">
        <div class="pd-20 pd-lg-25 pd-xl-30">
            <label class="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Enrollement
                agents</label>
            <div class="df-example">
                <form @submit.prevent="submitRequest">
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label">Matricule Agent <span class="tx-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Entrez le matricule agent...">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label">Dispositif <span class="tx-danger">*</span></label><br>
                                <select class="select2 form-select deviceSelect3">
                                    <option label="--Sélectionnez un dispositif--">
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="form-label">Doight Pouce <span class="tx-danger">*</span></label>
                                <div class="input-group">
                                    <input type="text" @focus.prevent="showScan" readonly placeholder="la pouce"
                                        class="form-control">
                                    <span class="input-group-text">
                                        <fp-icon></fp-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="form-label">Doight Index <span class="tx-danger">*</span></label>
                                <div class="input-group">
                                    <input type="text" @focus.prevent="showScan" readonly placeholder="l'index"
                                        class="form-control">
                                    <span class="input-group-text">
                                        <fp-icon></fp-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="form-label">Doight majeur <span class="tx-danger">*</span></label>
                                <div class="input-group">
                                    <input type="text" @focus.prevent="showScan" readonly placeholder="le majeur"
                                        class="form-control">
                                    <span class="input-group-text">
                                        <fp-icon></fp-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="form-label">Doight Annulaire <span class="tx-danger">*</span></label>
                                <div class="input-group">
                                    <input type="text" @focus.prevent="showScan" readonly placeholder="l'annulaire"
                                        class="form-control">
                                    <span class="input-group-text">
                                        <fp-icon></fp-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="form-label">Doight auriculaire <span class="tx-danger">*</span></label>
                                <div class="input-group">
                                    <input type="text" @focus.prevent="showScan" readonly placeholder="l'auriculaire"
                                        class="form-control">
                                    <span class="input-group-text">
                                        <fp-icon></fp-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group mt-4 d-grid">
                                <bs-button btn-type="submit" :loading="isSubmitLoading" class-name="btn-success btn-lg">
                                    <i data-feather="check"></i>
                                    Enroller maintenant
                                </bs-button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <!-- row -->
        </div>
    </div>
    <!-- filemgr-content-body -->
    <scan-modal></scan-modal>
</template>

<script>
export default {
    name: 'AgencePresences',

    mounted() {
        $('.deviceSelect3').select2({
            placeholder: '--Sélectionnez un dispositif--',
            allowClear: true,
            data: [
                {
                    id: 1,
                    text: 'Device 18SH'
                },
                {
                    id: 2,
                    text: 'Device 300SH'
                },
                {
                    id: 3,
                    text: 'Device 240SH'
                },
                {
                    id: 4,
                    text: 'Device ZT0SH'
                }
            ]
        });

        $('#modalScannig').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });

        $('#modalScannig').on('show.bs.modal', function (event) {
            $(this).addClass("effect-scale");
            new PerfectScrollbar(".modal", {
                suppressScrollX: true,
            });
        })
    },

    methods: {
        showScan() {
            $('#modalScannig').modal('show');
            setTimeout(() => {
                $('#modalScannig').modal('hide');
            }, 10000);
        }
    },
}
</script>
<style scoped src="@/assets/css/dashforge.filemgr.css"></style>