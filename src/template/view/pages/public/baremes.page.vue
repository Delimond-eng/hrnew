<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <!-- <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Tapez le numéro de matricule..."> -->
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
                                <li class="breadcrumb-item active" aria-current="page">Barèmes</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Barèmes</h4>
                    </div>
                    <div class="d-none d-md-block">
                        <a href="#modalBareme" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                            data-animation="effect-slide-in-right"><i data-feather="plus" class="wd-10 mg-r-5"></i>Ajout
                            barème</a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <table id="employesTable" class="table">
                            <thead>
                                <tr>
                                    <th class="wd-25p">Catégorie salariale</th>
                                    <th class="wd-20p">Libellé</th>
                                    <th class="wd-20p">Salaire journalier</th>
                                    <th class="wd-20p">Allocation familiale</th>
                                    <th class="wd-25p">Transport journalier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="i in 30" :key="i">
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>12000 CDF</td>
                                    <td>CNSS</td>
                                    <td>2500 CDF</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- container -->
            </div>
        </div>
    </div>

    <bareme-create-modal />
</template>

<script>
import baremeCreateModal from './modals/baremes.modal'
export default {
    name: "BaremesPage",


    components: {
        baremeCreateModal,
    },

    mounted() {

        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        $('#modalBareme').on('show.bs.modal', function (event) {
            var animation = $(event.relatedTarget).data('animation');
            $(this).addClass(animation);
            new PerfectScrollbar(".modal", {
                suppressScrollX: true,
            });
        })

        // hide modal with effect
        $('#modalBareme').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });
    }
}
</script>
