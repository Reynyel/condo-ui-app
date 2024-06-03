<template>

    <v-app-bar app class="app-bar">
        <router-link to="/" class="nav">
        <v-toolbar-title class="toolbar-title text-black"
        style="font-size: 24px;
        font-weight: 900;
        text-transform: uppercase">
            Ros Properties
        </v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <v-row align="center" justify="end" class="flex-container">
        <v-col cols="auto">
            <v-menu transition="slide-y-transition" offset-y>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="list-title">Our Properties</v-btn>
            </template>
            <v-list>
                <v-list-item>
                <router-link to="/exclusivelistings" class="nav">
                    <v-list-item-title>Our Exclusive Listings</v-list-item-title>
                </router-link>
                </v-list-item>
                <v-list-item>
                <router-link to="/openhouses" class="nav">
                    <v-list-item-title>Open Houses</v-list-item-title>
                </router-link>
                </v-list-item>
                <v-list-item>
                <router-link to="/soldlistings" class="nav">
                    <v-list-item-title>Our Sold Listings</v-list-item-title>
                </router-link>
                </v-list-item>
            </v-list>
            </v-menu>
        </v-col>

        <v-col cols="auto">
            <v-menu transition="slide-y-transition" offset-y>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="list-title">Services</v-btn>
            </template>
            <v-list>
                <v-list-item>
                <router-link to="/homevaluation" class="nav">
                    <v-list-item-title>Home Valuation</v-list-item-title>
                </router-link>
                </v-list-item>
                <v-list-item>
                <router-link to="/howitworks" class="nav">
                    <v-list-item-title>How it Works</v-list-item-title>
                </router-link>
                </v-list-item>
                <v-list-item>
                <router-link to="/faq" class="nav">
                    <v-list-item-title>FAQ</v-list-item-title>
                </router-link>
                </v-list-item>
            </v-list>
            </v-menu>
        </v-col>

        <v-col cols="auto">
            <router-link to="/about" class="nav">
            <v-btn class="text-black list-title">About Ros</v-btn>
            </router-link>

        </v-col>

        <v-col cols="auto">
            <router-link to="/contact" class="nav">
            <v-btn class="text-black list-title">Contact</v-btn>
            </router-link>
        </v-col>
        </v-row>
    </v-app-bar>
</template>

<style scoped>
.app-bar {
height: 10vh;
padding: 0 20px; /* Adjust padding to ensure consistent centering */
display: flex;
justify-content: center;
align-items: center;
}

.toolbar-title {
padding-left: 20px;
font-size: 24px;
text-transform: uppercase;
display: flex;
align-items: center; /* Center icon and text vertically */
}

.flex-container {
display: flex;
justify-content: flex-end;
align-items: center; /* Center flex items vertically */
}

.nav {
text-decoration: none;
color: rgb(255, 255, 255);
display: flex;
align-items: center; /* Center nav items vertically */
}

.list-title {
font-size: 1rem;
text-transform: uppercase;
}

.ho:hover {
background-color: black;
font-weight: bold;
color: white;
}

@media (max-width: 600px) {
.toolbar-title {
font-size: 18px;
}
.list-title {
font-size: 0.8rem;
}
}
</style>

<script setup>
//
</script>
