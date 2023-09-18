<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Tapez le numéro de matricule...">
            </div>
            <nav class="nav">
                <a href="javascript:void(0)" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div>
        <!-- content-header -->
        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item">Administration</li>
                                <li class="breadcrumb-item active" aria-current="page">Enrollement agents</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Enrollement agent</h4>
                    </div>
                </div>

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
                                    <label class="form-label">Dispositif <span class="tx-danger">*</span></label>
                                    <select class="select2 form-select deviceSelect">
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
                <!-- container -->
            </div>
        </div>
    </div>
    <enroll-auth-modal></enroll-auth-modal>
    <scan-modal></scan-modal>
</template>


<script>
import EnrollAuthModal from '@/template/view/pages/auth/modals/biotime.login.modal'
export default {
    name: "VisiteursPage",

    data() {
        return {
            deviceSelect: null
        }
    },


    components: {
        EnrollAuthModal,
    },
    mounted() {
        this.init();
    },

    methods: {
        showScan() {
            $('#modalScannig').modal('show');
            setTimeout(() => {
                $('#modalScannig').modal('hide');
            }, 10000);
        },

        init() {
            new PerfectScrollbar(".content-body", {
                suppressScrollX: true,
            });
            let select = $('.deviceSelect').select2({
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
            $('#modalSignIn').on('show.bs.modal', function (event) {
                $(this).addClass("effect-scale");
                new PerfectScrollbar(".modal", {
                    suppressScrollX: true,
                });
            })
            // hide modal with effect
            $('#modalSignIn').on('hidden.bs.modal', function (e) {
                $(this).removeClass(function (index, className) {
                    return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
                });
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
        }
    },
}
</script>