<template>
    <v-container class="d-flex flex-wrap align-center justify-center bg-indigo-darken-4 w-100 h-vh-100 py-100" fluid>
        <v-row class="d-flex justify-center my-16" no-gutters>
            <div class=" d-flex flex-wrap my-16">
                <v-spacer></v-spacer>
                <v-col cols="12" md="4" lg="3" class="d-flex flex-column align-center">
                    <div class="w-100 my-16">
                        <v-icon size="50" class="mb-2">mdi-office-building-outline</v-icon>
                        <p class="text-title my-4">Top Rated Brokerage</p>
                        <p class="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum.</p>
                    </div>
                    <div class="w-100 my-16">
                        <v-icon size="50" class="mb-2">mdi-earth</v-icon>
                        <p class="text-title my-4">International Reach</p>
                        <p class="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum.</p>
                    </div>
                </v-col>
        
                <v-spacer></v-spacer>
    
                <v-col cols="12" md="4" lg="3" class="d-flex flex-column align-center">
                    <div class="w-100 my-16 ">
                        <v-icon size="50" class="mb-2">mdi-account-group-outline</v-icon>
                        <p class="text-title my-4">Committed Team</p>
                        <p class="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum.</p>
                    </div>
                    <div class="w-100 my-16">
                        <v-icon size="50" class="mb-2">mdi-heart-outline</v-icon>
                        <p class="text-title my-4">Trust Us - You're In Good Hands</p>
                        <p class="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum.</p>
                    </div>
                </v-col>
                <v-spacer></v-spacer>
            </div>
        </v-row>
    </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

.text-title{
    font-family: 'Montserrat', sans-serif;
}
.text-body {
    font-family: 'Montserrat', sans-serif;
}
    
.bg-indigo-darken-4 {
    background-color: #1a237e; /* Adjust this color as needed */
}

.mb-4 {
    margin-bottom: 16px;
}
</style>

<script>
export default {
    name: "Features",
    data: () => ({}),
}
</script>
