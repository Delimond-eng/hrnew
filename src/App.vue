<template>
  <!-- L'entrée principale de tous les view de l'application -->
  <router-view />
  <!-- End entrée -->
</template>

<script>

export default {
  name: 'App',
  mounted() {
    setInterval(() => { feather.replace(); }, 50)
  }
}
</script>