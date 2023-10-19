<template>
    <teleport to="body">
        <div class="modal fade" id="modalDeviceInfo" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="border-bottom: 0px !important;">
                        <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                        <div></div>
                    </div>
                    <!-- modal-header -->
                    <div class="row d-flex justify-content-between align-items-center pd-y-20 pd-x-20 pd-sm-x-30">
                        <div class="col-md-6">
                            <img src="assets/img/device_image.png" class="img-fluid"
                                style="height: 200px; object-fit: cover" alt="device">
                            <h4 class="text-center fw-bold text-capitalize">{{ device.alias }}</h4>
                        </div>
                        <div class="col-md-6">
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between border-botton-only">
                                    <span class="align-items-end">Serie </span>
                                    <span class="fw-bold align-items-start">{{ device.sn }}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between border-botton-only">
                                    <span class="align-items-end">Adresse IP </span>
                                    <span class="fw-bold align-items-start">{{ device.ip_address }}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between border-botton-only">
                                    <span class="align-items-end">Province </span>
                                    <span class="fw-bold align-items-start">{{ device.area_name }}</span>
                                </li>


                                <li class="list-group-item d-flex justify-content-between border-botton-only">
                                    <span class="align-items-end">Status </span>

                                    <span
                                        :class="(device.state === '3') ? 'tx-danger' : (device.state !== 2) ? 'tx-warning' : 'tx-success'">
                                        {{ (device.state === '3') ? 'Hors ligne' : (device.state !== 2) ? 'Non connecté' :
                                            'Connecté'
                                        }}
                                    </span>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div><!-- modal-content -->
            </div><!-- modal-dialog -->
        </div>
    </teleport>
</template>

<script>
export default {

    props: {
        device: {
            type: Object,
            default: () => { }
        }
    },
    async mounted() {
        await this.initSelect2();
        /**
         * Empty selects when modal hidden
        */
        $('#modalDeviceLink').on("hidden.bs.modal", function (e) {
            $("#provinceLinkSelect2").val('').trigger('change');
            $("#agenceLinkSelect2").val('').trigger('change');
        });
    },

    methods: {
        async initSelect2() {
            let self = this;
            const areas = await this.$store.dispatch('biotime/allAreas');
            $('#provinceLinkSelect2').select2({
                dropdownParent: $('#modalDeviceLink'),
                placeholder: '--Sélectionnez une province--',
                data: $.map(areas, function (item) {
                    return {
                        text: item.area_name,
                        id: item.id
                    }
                })
            }).on('change', async function (e) {
                /**
                 * Load agencies of select area
                */
                let payload = $(this).select2('data')[0].text;
                const agences = await self.$store.dispatch('erp/getAgences', payload);
                $('#agenceLinkSelect2').empty();
                $('#agenceLinkSelect2').select2({
                    dropdownParent: $('#modalDeviceLink'),
                    placeholder: '--Sélectionnez une agence--',
                    data: $.map(agences, function (item) {
                        return {
                            text: item.libelle,
                            id: item.agence_id
                        }
                    })
                });
                $("#agenceLinkSelect2").val('').trigger('change');
            });

            /**
             * Load all organizations agencies
             * and build select2
             * */

            $('#agenceLinkSelect2').select2({
                dropdownParent: $('#modalEmployes'),
                placeholder: '--Sélectionnez une agence--',
            });
        }
    },
}
</script>