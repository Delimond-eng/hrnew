<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Filtrer accès...">
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
                                <li class="breadcrumb-item active" aria-current="page">Accès utilisateurs</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Accès utilisateurs</h4>
                    </div>
                    <div class="d-none d-md-block">
                        <a href="#modalAccess" class="btn btn-lg btn-primary" data-animation="effect-scale"
                            data-bs-toggle="modal"><i data-feather="plus" class="wd-10 mg-r-5"></i>Ajout
                            accès</a>
                    </div>
                </div>

                <div class="row">
                    <div class="df-example">
                        <!-- card-body -->
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead class="bg-light">
                                    <tr>
                                        <th>Libellé</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="i in 10" :key="i">
                                        <td class="d-flex justify-content-between">
                                            <a href="javascript:void(0)">Administrateur</a>
                                            <button class="btn btn-icon btn-secondary">
                                                <i data-feather="trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- table-responsive -->
                    </div>
                </div>
                <!-- container -->
            </div>
        </div>
    </div>
    <access-modal></access-modal>
</template>

<script>
import accessModal from './modals/access.modal.vue';
export default {
    name: 'AccessPage',

    components: {
        accessModal,
    },

    mounted() {
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });

        $('#modalAccess').on('show.bs.modal', function (event) {
            var animation = $(event.relatedTarget).data('animation');
            $(this).addClass(animation);
            new PerfectScrollbar(".modal", {
                suppressScrollX: true,
            });
        })

        // hide modal with effect
        $('#modalAccess').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });
    },
}
</script>