<script>
import AppFooterVue from '../components/AppFooter.vue';
import Header from '../components/Header.vue';



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

