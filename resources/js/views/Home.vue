<script>
import Header from '../components/Header.vue';
import AppFooterVue from '../components/AppFooter.vue';
import imagenav from '../components/imagenav.vue';
import Services from '../components/Services.vue';

export default {
  name:"Home",
  components: {
    Header,
    imagenav,
    Services,
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
   <Services></Services>
  </v-content>
  <AppFooterVue></AppFooterVue>
</template>

<style scoped>

</style>
