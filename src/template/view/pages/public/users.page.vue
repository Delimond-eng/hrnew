<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Filtrer utilisateurs...">
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
                                <li class="breadcrumb-item active" aria-current="page">Compte utilisateurs</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Compte utilisateurs</h4>
                    </div>
                    <div class="d-none d-md-block">
                        <a href="#modalUser" class="btn btn-lg btn-primary" data-animation="effect-scale"
                            data-bs-toggle="modal"><i data-feather="plus" class="wd-10 mg-r-5"></i>Ajout compte
                            utilisateur</a>
                    </div>
                </div>

                <div class="df-example">
                    <div class="table-responsive">
                        <table class="table" id="usersTable">

                        </table>
                    </div>
                </div>
                <!-- container -->
            </div>
        </div>
    </div>
    <user-modal></user-modal>
</template>

<script>
import userModal from './modals/user.modal';
import datatableFr from '@/assets/js/datatable.fr';
export default {
    name: 'UserPage',

    data() {
        return {
            users: [
                ['Gaston delimond', 'Super administrateur', 'gastondelimond@gmail.com', '5421', 'actif'],
                ['Lionnel Nawej', 'Super administrateur', 'lionnelnawaej@gmail.com', '12345', 'actif'],
                ['Isaac Mabuki', 'Super administrateur', 'isaac@gmail.com', '123453', 'actif'],
                ['Chris Tenday', 'Administrateur', 'chris@gmail.com', '12345', 'actif'],
            ]
        }
    },

    components: {
        userModal,
    },

    mounted() {
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        $('#usersTable').DataTable({
            language: datatableFr,
            columns: [
                { title: "Nom utilisateur" },
                { title: "Niveau d'accès" },
                { title: "Adresse email" },
                { title: "Mot de passe" },
                { title: "Status" },
            ],
            data: this.users
        });
        $('#modalUser').on('show.bs.modal', function (event) {
            var animation = $(event.relatedTarget).data('animation');
            $(this).addClass(animation);
            $('.select2').select2({
                placeholder: '--Sélectionnez un agent--',
                searchInputPlaceholder: 'Recherche agent...'
            });
            new PerfectScrollbar(".modal", {
                suppressScrollX: true,
            });


        })

        // hide modal with effect
        $('#modalUser').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });
    },
}
</script>@/js/datatable.fr