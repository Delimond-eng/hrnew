<template>
    <!-- filemgr-content-header -->
    <div class="filemgr-content-header d-flex justify-content-between">
        <h6 class="mg-b-0 tx-primary"><i class="mr-2" data-feather="users" width="15"></i> Employés </h6>
        <button class="btn btn-primary btn-sm" @click.prevent="$showBsModal('modalEmployes')"> <i data-feather="plus"></i>
            Nouveau
            employé pour cette agence </button>
    </div>
    <!-- filemgr-content-header -->

    <!-- filemgr-content-body -->
    <div class="filemgr-content-body scrollbar-primary scrollbar-lg">
        <div class="pd-20 pd-lg-25 pd-xl-30">
            <label class="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Liste des employés
                de l'agence</label>
            <div class="df-example">
                <table id="employesAgenceTable" class="table w-100">

                </table>
            </div>
            <!-- row -->
        </div>
    </div>
    <!-- filemgr-content-body -->
    <employes-create-modal :for-agency="true" />
</template>

<script>
import datatableFr from '@/assets/js/datatable.fr';
export default {
    name: 'AgenceEmployes',

    data() {
        return {
            table: null
        }
    },

    unmounted() {
        this.table.destroy();
        this.table = null;
    },
    mounted() {
        this.table = $('#employesAgenceTable').DataTable({
            language: datatableFr,
            columns: [
                { title: 'Nom' },
                { title: 'Postnom' },
                { title: 'Prénom' },
                { title: 'Matricule' },
                { title: 'Fonction' },
                { title: 'Genre' },
                { title: 'Etat civil' },
                { title: 'Date engagement' },
            ],
            data: [
                ['Kayembe', 'Rukundo', 'Jean marc', '773AUE', 'Chef d`\agence', 'Marié', 'M', '03/12/2006'],
                ['Paty', 'Mutete', 'Viny', '77363E', 'Directeur Technique', 'Marié', 'M', '03/12/2008'],
                ['Ngongo', 'Kasongo', 'Giresse', '77362E', 'Directeur des opération', 'Marié', 'M', '03/12/2005'],
            ]
        });
    },
}
</script>
<style scoped src="@/assets/css/dashforge.filemgr.css"></style>