<script>
import Header from '../components/Header.vue';
import AppFooterVue from '../components/AppFooter.vue';
import imagenav from '../components/imagenav.vue';
import Services from '../components/Services.vue';
import TestHeaderVue from '../components/TestHeader.vue';
import Features from '../components/Features.vue';
import Testimonals
 from '../components/Testimonals.vue';
export default {
  name:"Home",
  components: {
    Header,
    TestHeaderVue,
    imagenav,
    Services,
    Features,
    Testimonals,
    AppFooterVue,
  },
  data: () => ({}),
  mounted() {
    document.title = "Condo-ui";
  }
};

</script>

<template>
  <TestHeaderVue></TestHeaderVue>
  <!-- <Header></Header> -->
  <v-content>
   <imagenav></imagenav>
   <Services></Services>
   <Features></Features>
   <Testimonals></Testimonals>
  </v-content>
  <AppFooterVue></AppFooterVue>
</template>

<style scoped>
  
</style>
