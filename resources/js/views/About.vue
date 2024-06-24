<script>
import Header from '../components/TestHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import FirstSection from '../components/about/FirstSection.vue';
import SecondSection from '../components/about/SecondSection.vue';
import ThirdSection from '../components/about/ThirdSection.vue';

export default{
    name:"About",
    setup() {
        
    },
    components:{
        Header,
        AppFooter,
        FirstSection,
        SecondSection,
        ThirdSection,
    },
    data: () => ({}),
    mounted() {
    document.title = "About";
  }
};

</script>
<template>
    <Header></Header>
    <v-content>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
    </v-content>
    <AppFooter></AppFooter>
</template>
<style scoped>

</style>
