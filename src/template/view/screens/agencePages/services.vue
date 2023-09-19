<template>
    <!-- filemgr-content-header -->
    <div class="filemgr-content-header">
        <h6 class="mg-b-0 tx-primary"><i class="mg-r-3" data-feather="briefcase" width="15"></i>Services</h6>
    </div>
    <!-- filemgr-content-header -->

    <!-- filemgr-content-body -->
    <div class="filemgr-content-body scrollbar-primary scrollbar-lg">
        <div class="pd-20 pd-lg-25 pd-xl-30">
            <label class="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Liste des
                services de l'agence</label>
            <div class="row row-xs">
                <div class="col-md-3 mg-md-b-15" v-for="(service, index) in services" :key="index">
                    <div class="card card-event animate__pulse">
                        <div class="card-img-top bg-primary w-100 d-flex align-content-center align-items-center"
                            style="height: 55px;">
                            <h4 class="m-2 tx-white tx-bold">{{ service.label }}</h4>
                        </div>
                        <div class="card-footer tx-13">
                            <span class="tx-color-03">Agents</span>
                            <span class="tx-color-01">02</span>
                        </div><!-- card-footer -->
                    </div><!-- card -->
                </div>
            </div>
            <!-- row -->
        </div>
    </div>
    <!-- filemgr-content-body -->
</template>

<script>
export default {
    name: 'AgencePresences',
    data() {
        return {
            services: [
                {
                    label: "Informatique",
                },
                {
                    label: "Commercial",
                },
                {
                    label: "Ressources humaines",
                },
                {
                    label: "Sécretariat",
                },
                {
                    label: "Comptabilité",
                },
                {
                    label: "Monitoring",
                },

            ],
        }
    },
}
</script>
<style scoped src="@/assets/css/dashforge.filemgr.css"></style>