<template>
    <div style="height: 100%; width: 100%;" v-if="isEmpty"
        class="d-flex justify-content-center align-content-center align-items-center flex-column">
        <lottie-animation style="height:200px" v-show="onLine === false" :animation-data="json2" :auto-play="true"
            :loop="true" :speed="1" ref="anim" />
        <lottie-animation style="height:200px" v-show="onLine === true" :animation-data="json1" :auto-play="true"
            :loop="true" :speed="1" ref="anim" />
        <div class="tx-center" v-if="onLine === false">
            <h2>Pas de connexion !</h2>
            <p class="tx-center">S'il vous plait, vérifiez votre connexion internet !</p>
        </div>
        <div class="tx-center" v-else>
            <h2>Aucune donnée répertoriée !</h2>
            <p class="tx-center">Veuillez ajouter les données dans la base de données !</p>
        </div>
    </div>

    <div v-show="isEmpty === false">
        <slot />
    </div>
</template>

<script>
import jsonEmpty from "@/assets/json/animation_lnx3qnoa.json";
import jsonNoConnection from "@/assets/json/animation_wifi.json";
import { LottieAnimation } from "lottie-web-vue";
export default {
    data() {
        return {
            onLine: navigator.onLine,
            json1: jsonEmpty,
            json2: jsonNoConnection,
        }
    },
    components: {
        LottieAnimation,
    },
    props: {
        isEmpty: {
            type: Boolean,
            default: false,
        }
    }
}
</script>