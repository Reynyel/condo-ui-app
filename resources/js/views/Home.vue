<script>
import Header from '../components/Header.vue';
import AppFooterVue from '../components/AppFooter.vue';
import imagenav from '../components/imagenav.vue';

export default {
  name:"Home",
  components: {
    Header,
    imagenav,
    AppFooterVue,
  },
  data: () => ({}),
  mounted() {
    document.title = "Condo-ui";
  }
};

</script>

<template>
  
  <Header></Header>
<v-content>
   <imagenav></imagenav>
  </v-content>
  <AppFooterVue></AppFooterVue>
</template>

<style scoped>

</style>
