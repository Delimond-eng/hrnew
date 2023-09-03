<template>
    <button v-if="btnType == 'button'" @click.prevent="$emit('click', $event)" :type="btnType" :disabled="loading"
        class="btn" :class="className">
        <span class="mx-4" v-show="loading">
            <svg fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle class="spinner_S1WN" cx="4" cy="12" r="3" />
                <circle class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3" />
                <circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3" />
            </svg>
        </span>
        <span v-show="!loading">
            <slot></slot>
        </span>
    </button>
    <button v-else :type="btnType" :disabled="loading" class="btn" :class="className">
        <span class="mx-4" v-show="loading">
            <svg width="30" fill="#FFFFFF" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect class="spinner_jCIR" x="1" y="6" width="2.8" height="12" />
                <rect class="spinner_jCIR spinner_upm8" x="5.8" y="6" width="2.8" height="12" />
                <rect class="spinner_jCIR spinner_2eL5" x="10.6" y="6" width="2.8" height="12" />
                <rect class="spinner_jCIR spinner_Rp9l" x="15.4" y="6" width="2.8" height="12" />
                <rect class="spinner_jCIR spinner_dy3W" x="20.2" y="6" width="2.8" height="12" />
            </svg>
        </span>
        <span v-show="!loading">
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name: 'BBtn',
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        className: {
            type: String,
            default: ''
        },

        btnType: {
            type: String,
            default: 'button',
            validator: (val) => ['button', 'submit', 'reset'].includes(val.toLocaleLowerCase()),
        }
    }
}
</script>


<style>
.spinner_jCIR {
    animation: spinner_B8Vq 1.5s linear infinite;
    animation-delay: -.9s
}

.spinner_upm8 {
    animation-delay: -.8s
}

.spinner_2eL5 {
    animation-delay: -.7s
}

.spinner_Rp9l {
    animation-delay: -.6s
}

.spinner_dy3W {
    animation-delay: -.5s
}

@keyframes spinner_B8Vq {

    0%,
    66.66% {
        animation-timing-function: cubic-bezier(0.36, .61, .3, .98);
        y: 6px;
        height: 12px
    }

    33.33% {
        animation-timing-function: cubic-bezier(0.36, .61, .3, .98);
        y: 1px;
        height: 22px
    }
}
</style>