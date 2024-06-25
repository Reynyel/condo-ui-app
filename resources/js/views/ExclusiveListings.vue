<script>
import Header from '../components/TestHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import FirstSection from '../components/exclusive_listings/FirstSection.vue';
import SecondSection from '../components/exclusive_listings/SecondSection.vue';
export default{
    name:"About",
    setup() {
        
    },
    components:{
        Header,
        AppFooter,
        FirstSection,
        SecondSection,
    },
    data: () => ({}),
    mounted() {
    document.title = "Exclusive Listings";
  }
};

</script>
<template>
    <Header></Header>
    <v-content>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
    </v-content>
    <AppFooter></AppFooter>
</template>
<style scoped>

</style>
