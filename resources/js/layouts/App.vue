<script>
import AppFooterVue from '../components/AppFooter.vue';
import Header from '../components/TestHeader.vue';



export default {
  name: 'App',
  components: {
    Header,
    AppFooterVue,
  },

  data: () => ({}),
  
};
</script>

<template>
<v-app>
<router-view></router-view>
</v-app>

</template>

<style scoped>

</style>

