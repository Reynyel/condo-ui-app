<script>
import Header from '../components/TestHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import FirstSection from '../components/exclusive_listings/details/FirstSection.vue';
export default{
    name:"About",
    setup() {
        
    },
    components:{
        Header,
        AppFooter,
        FirstSection,
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
    </v-content>
    <AppFooter></AppFooter>
</template>
<style scoped>

</style>
