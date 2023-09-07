<template>
    <!-- layout sidebar or aside menu -->
    <sidebar-layout />
    <!-- End aside -->

    <!-- L'entrée des contenus des pages -->
    <router-view />
    <!-- End -->
</template>

<script>

/*app main scripts*/
import '@/assets/js/dashforge.aside';
/* import '@/assets/js/dashboard-one'; */
import '@/assets/js/dashforge';
/*end scripts*/

/*Layouts*/
import sidebarLayout from '../layouts/sidebar.layout';
export default {
    name: "HomeSecure",

    unmounted() {
        this.$router.go();
    },
    components: {
        sidebarLayout
    }
}
</script>@/js/dashforge.aside@/js/dashforge@/assets/js/dashforge.aside@/assets/js/dashforge