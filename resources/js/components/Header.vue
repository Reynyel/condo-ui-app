<script> 

import { ref } from 'vue';
import { useDisplay } from 'vuetify';

export default{
    name: 'nav',
    data(){
        return{
            scrollPosition: null,
            mobile: true,
            mobileNav: null,
            windowWidth: null,
        };
    },
    setup() {
    const { smAndDown } = useDisplay();
    return {
      smAndDown,
    };
  },
    methods: {
    scrollToFooter() {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToContainer() {
      const container = document.getElementById('container');
      if (container) {
        container.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },

}


</script>

<template>
  <v-app-bar app class="app-bar" v-show="!smAndDown">
    <router-link to="/home" class="nav">
      <v-toolbar-title class="toolbar-title text-black"
        style="font-size: 24px; font-weight: 900; text-transform: uppercase"
        @click="scrollToContainer">
        Ros Properties
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-row align="center" justify="end" class="flex-container">
      <!-- Repeat your v-col and v-menu structure here -->
      <v-col cols="auto">
        <v-menu transition="slide-y-transition" offset-y>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="list-title text">Our Properties</v-btn>
          </template>
          <v-list class="text">
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
      <!-- Repeat for other menu items -->
       
      <v-col cols="auto">
        <router-link to="/about" class="nav">
          <v-btn class="text-black list-title text">About Ros</v-btn>
        </router-link>
      </v-col>
      <v-col cols="auto">
        <router-link class="nav">
          <v-btn class="text-black list-title text" @click="scrollToFooter">Contact</v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-app-bar>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

.text {
  font-family: 'Montserrat', sans-serif;
}

.app-bar {
  height: 10vh;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toolbar-title {
  padding-left: 20px;
  font-size: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.flex-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.list-title {
  font-size: 1rem;
  text-transform: uppercase;
}

.ho:hover {
  background-color: black;
  font-weight: bold;
}

@media (max-width: 600px) {
  .toolbar-title {
    font-size: 18px;
  }

  .list-title {
    font-size: 0.8rem;
  }
}

.nav-container{
    position: relative;
    top: 0;
    width: 100%;
}
</style>
