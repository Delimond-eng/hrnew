<template>
    <teleport to='body'>
        <form class="modal fade scrollbar-lg" id="modalDevicesDetails" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered" role="document" id="modalDevicesDetailsBody">
                <div class="modal-content tx-14">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel6">{{ title }}</h4>
                        <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                    </div>
                    <div class="modal-body">

                        <table id="devicesDetailTable" class="table w-100">

                        </table>
                    </div>
                </div>
            </div>
        </form>
    </teleport>
</template>

<script>
import datatableFr from '@/assets/js/datatable.fr';
export default {
    name: 'EmployesCreateModal',

    data() {
        return {
            table: null,
        }
    },

    unmounted() {
        this.table.destroy();
        this.table = null;
    },

    props: {
        title: {
            type: String,
            default: ''
        },
        datas: {
            type: Array,
            default: () => [

            ]
        }
    },

    mounted() {
        $("#modalDevicesDetailsBody").draggable();
        this.$emit('update:datas', this.datas);
        this.table = $("#devicesDetailTable").DataTable({
            language: datatableFr,
            columns: [
                { title: "Nom de serie" },
                { title: "Nom de l'appareil" },
                { title: "Province" },
                { title: "Agence" },
                { title: "IP du periphérique" },
                { title: "Dernière activité" },
            ],
            data: [

            ]
        });
    },
}
</script>