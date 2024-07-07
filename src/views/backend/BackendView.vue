<template>
  <section class="backend-view">
    <TheBackendNavbar></TheBackendNavbar>
    <div class="table-content">
      <router-view></router-view>
    </div>
  </section>
</template>
<script>
import TheBackendNavbar from '../../components/nav/TheBackendNavbar.vue'

export default {
  components: {
    TheBackendNavbar
  }
}
</script>
<style scoped>
  .backend-view {
    display: flex;
  }

  .table-content {
    padding: 0px 15px;
    flex: 1;
  }
</style>
