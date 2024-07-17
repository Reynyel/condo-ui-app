<script>
import Header from '../components/TestHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import FirstSection from '../components/exclusive_listings/details/FirstSection.vue';
import MapsDetailsVue from '../components/exclusive_listings/details/MapsDetails.vue';
export default{
    name:"About",
    setup() {
        
    },
    components:{
        Header,
        AppFooter,
        FirstSection,
        MapsDetailsVue,
    },
    data: () => ({}),
    mounted() {
    document.title = "Details";
  }
};

</script>
<template>
    <Header></Header>
    <v-content>
        <FirstSection></FirstSection>
        <MapsDetailsVue></MapsDetailsVue>
    </v-content>
    <AppFooter></AppFooter>
</template>
<style scoped>

</style>
