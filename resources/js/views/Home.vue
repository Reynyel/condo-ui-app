<script>
import Header from '../components/Header.vue';
import AppFooterVue from '../components/AppFooter.vue';
import imagenav from '../components/imagenav.vue';
import Services from '../components/Services.vue';
import TestHeaderVue from '../components/TestHeader.vue';
import Features from '../components/Features.vue';
import Testimonals from '../components/Testimonals.vue';
import MoreInformationVue from '../components/MoreInformation.vue';

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
    MoreInformationVue,
  },
  data: () => ({}),
  mounted() {
    document.title = "Condo-ui";
  }
};

</script>

<template>
  <!-- <Header></Header> -->
  <TestHeaderVue></TestHeaderVue>
  <v-content>
   <imagenav></imagenav>
   <Services></Services>
   <Features></Features>
   <Testimonals></Testimonals>
   <v-divider></v-divider>
   <MoreInformationVue></MoreInformationVue>
  </v-content>
  <AppFooterVue></AppFooterVue>
</template>

<style scoped>
  
</style>
