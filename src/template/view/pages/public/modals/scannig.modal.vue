<template>
    <teleport to="body">
        <div class="modal fade" id="modalScannig" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered wd-sm-200 ht-sm-100" role="document">
                <div class="modal-content">
                    <div class="modal-body">

                        <div class="d-flex justify-content-center align-content-center align-items-center">
                            <div
                                class="df-example wd-sm-200 ht-sm-200 border-0 d-flex align-items-center justify-content-center">
                                <lottie-animation :animation-data="json" :auto-play="true" :loop="true" :speed="1"
                                    ref="anim" />
                            </div>
                        </div>
                    </div><!-- modal-body -->
                </div><!-- modal-content -->
            </div><!-- modal-dialog -->
        </div><!-- modal -->
    </teleport>
</template>

<script>
import json from "@/assets/json/animation_fp.json";
import { LottieAnimation } from "lottie-web-vue";
export default {
    name: 'EnrollLoading',
    data() {
        return {
            json: json
        }
    },
    components: {
        LottieAnimation
    },
}
</script>