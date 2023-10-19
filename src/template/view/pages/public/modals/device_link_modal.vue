<template>
    <teleport to="body">
        <form @submit.prevent="submitData" class="modal fade" id="modalDeviceLink" tabindex="-1" role="dialog"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered wd-sm-650" role="document">
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
                                <h4 class="tx-18 tx-sm-20 mg-b-2">Liaison du dispositif à l'agence</h4>
                                <p class="tx-13 tx-color-03 mg-b-0">Veuillez sélectionner une agence pour la liaison du
                                    dispositif !</p>
                            </div>
                        </div><!-- media -->
                    </div>
                    <!-- modal-header -->
                    <div class="modal-body pd-sm-t-30 pd-sm-b-40 pd-sm-x-30">
                        <div class="form-group">
                            <label class="tx-10 tx-uppercase tx-medium tx-spacing-1 mg-b-5 tx-color-03">Province</label><br>
                            <select class="form-select" id="provinceLinkSelect2" style="width: 100%;" required>
                                <option label="--Veuillez sélectionner une province--"></option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="tx-10 tx-uppercase tx-medium tx-spacing-1 mg-b-5 tx-color-03">Agence</label> <br>
                            <select class="form-select" id="agenceLinkSelect2" style="width: 100%;"
                                :required="form.agence_id === ''">
                                <option label="--Veuillez sélectionner agence--"></option>
                            </select>
                        </div>
                    </div><!-- modal-body -->
                    <div class="modal-footer pd-x-20 pd-y-15">
                        <button type="button" class="btn btn-white" data-bs-dismiss="modal">Fermer</button>
                        <bs-button btn-type="submit" :loading="submitLoading" class-name="btn-success"> <i
                                data-feather="link"></i>
                            Soumettre la liaison</bs-button>
                    </div>
                </div><!-- modal-content -->
            </div><!-- modal-dialog -->
        </form>
    </teleport>
</template>

<script>
export default {

    data() {
        return {
            form: {
                serie: '',
                libelle: '',
                adresse_ip: '',
                user_id: '1',
                agence_id: '',
            },
            submitLoading: false,
        }
    },

    async mounted() {
        await this.initSelect2();
        /**
         * Empty selects when modal hidden
        */
        let self = this;
        $('#modalDeviceLink').on("hidden.bs.modal", function (e) {
            self.resetSelect();
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
                }).on('change', function () {
                    self.form.agence_id = $(this).val();
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
        },

        submitData(e) {
            this.submitLoading = true;
            this.form.serie = this.device.sn;
            this.form.libelle = this.device.alias;
            this.form.adresse_ip = this.device.ip_address,
                this.$store.dispatch('biotime/addDevice', this.form).then((res) => {
                    this.submitLoading = false;
                    if (res.reponse !== undefined) {
                        if (res.reponse.status === 'success') {
                            this.$closeBsModal('modalDeviceLink');
                            this.resetSelect();
                            Swal({
                                icon: 'success',
                                title: 'Succès'.toUpperCase(),
                                text: `Dispositif lié à l\'agence : ${this.device.area_name} !`,
                                timer: 4000,
                                showCancelButton: false,
                                showConfirmButton: false,
                            });
                        }
                    }
                }).catch((_) => this.submitLoading = false)
        },

        resetSelect() {
            $("#provinceLinkSelect2").val('').trigger('change');
            $("#agenceLinkSelect2").val('').trigger('change');
        }
    },

    props: {
        device: {
            type: Object,
            default: () => { }
        }
    }
}
</script>