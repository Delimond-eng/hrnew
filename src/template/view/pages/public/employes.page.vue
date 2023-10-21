<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Tapez le numéro de matricule...">
            </div>
            <nav class="nav">
                <async-button></async-button>
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
                                <li class="breadcrumb-item active" aria-current="page">Gestion employés</li>
                            </ol>
                        </nav>

                    </div>
                    <div class="d-none d-md-block">
                        <div class="d-flex">
                            <button @click.prevent="$showBsModal('modalEmployes', 'effect-slide-in-right')"
                                class="btn btn-lg btn-primary mg-r-3"><i data-feather="plus" class="wd-10 mg-r-5"></i>
                                Nouveau
                                employé</button>
                            <a href="javascript:void(0)" class="btn btn-lg btn-outline-primary"><i data-feather="download"
                                    class="wd-10 mg-r-5"></i>
                                Importer liste agents</a>
                        </div>
                    </div>
                </div>

                <div class="df-example h-100">
                    <data-loading :processing="dataLoading">
                        <empty-state :isEmpty="employees.length === 0">
                            <table id="employesTable" class="table w-100">

                            </table>
                        </empty-state>
                    </data-loading>
                </div>
                <!-- container -->
            </div>
        </div>
    </div>
    <employes-create-modal @onCreate="loadData" />
</template>


<script>
import datatableFr from '@/assets/js/datatable.fr';

export default {
    name: "EmployesPage",
    data() {
        return {
            table: null,
            modalShown: false,
            dataLoading: false,
            employees: []
        }
    },

    methods: {
        showCreateModal() {
            $('#modalEmployes').modal('show');
        },

        async loadData() {
            this.dataLoading = true;
            if (this.table !== null) this.table.destroy();
            const employees = await this.$store.dispatch('biotime/allEmployees');

            /**
             * assign data employees 
            */
            this.employees = employees;
            this.dataLoading = false;
            this.table = $('#employesTable').DataTable({
                language: datatableFr,
                columns: [
                    { title: 'Nom', data: 'first_name' },
                    { title: 'Postnom', data: 'last_name' },
                    { title: 'Prénom', data: 'nickname' },
                    { title: 'Matricule', data: 'emp_code' },
                    { title: 'Genre', data: 'gender' },
                    { title: 'Email', data: 'email' },
                    {
                        title: 'Fonction',
                        data: (row, type, val, meta) => {
                            if (row.position === null) {
                                return '-';
                            }
                            else {
                                return row.position.position_name
                            }
                        }
                    },

                    {
                        title: 'Service',
                        data: (row, type, val, meta) => {
                            if (row.department === null) {
                                return '-';
                            }
                            else {
                                return row.department.dept_name
                            }
                        }
                    },
                    { title: 'Date engagement', data: 'hire_date' },
                ],
                data: this.employees,
            });
        }
    },

    unmounted() {
        this.table.destroy();
        this.table = null;
    },
    async mounted() {
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        await this.loadData();
    }
}
</script>