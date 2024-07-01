<template>
  <div>
    <!-- App bar for larger screens -->
    <v-app-bar app fixed class="app-bar" v-if="!smAndDown">
      <router-link to="/home" class="nav">
        <v-toolbar-title class="toolbar-title text-black"
          style="font-size: 24px; font-weight: 900; text-transform: uppercase"
          @click="scrollToContainer">
          Ros Properties
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-row align="center" justify="end" class="flex-container">
        <v-col cols="auto">
          <router-link to="/home" class="nav">
            <v-btn class="text-black list-title text">Home</v-btn>
          </router-link>
        </v-col>
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

    <!-- Navigation drawer for smaller screens -->
    <v-navigation-drawer app v-if="smAndDown" v-model="drawer" temporary>
      <v-list dense>
        <v-list-item class="text">
          <router-link to="/home" class="nav">
            <v-list-item-title>Home</v-list-item-title>
          </router-link>
        </v-list-item>
        <v-divider></v-divider>

        
        <v-expansion-panels flat>
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-expansion-panel >
                <v-expansion-panel-title class="pl-2 ml-2">
                  <template v-slot>
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start text" cols="12">
                        Our Properties
                      </v-col>                                  
                    </v-row>
                  </template>
                </v-expansion-panel-title>

                <v-expansion-panel-text >
                  <router-link to="/exclusivelistings" class="nav text">
                    <v-list-item-title v-bind="props"
                    :color="isHovering ? 'primary' : undefined">Our Exclusive Listings</v-list-item-title>
                  </router-link>
                </v-expansion-panel-text>
                <v-expansion-panel-text>
                  <router-link to="/openhouses" class="nav text">
                    <v-list-item-title>Open Houses</v-list-item-title>
                  </router-link>
                </v-expansion-panel-text>
                <v-expansion-panel-text>
                  <router-link to="/soldlistings" class="nav text">
                    <v-list-item-title>Our Sold Listings</v-list-item-title>
                  </router-link>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </template>
          </v-hover>
          

        </v-expansion-panels>
        <v-divider></v-divider>
        <v-list-item class="text">
          <router-link to="/about" class="nav">
            <v-list-item-title>About Ros</v-list-item-title>
          </router-link>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="scrollToFooter" class="text">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <!-- Mobile app bar -->
    <v-app-bar app fixed v-if="smAndDown">
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-toolbar-title>Ros Properties</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

export default {
  name: 'nav',
  data: () => ({
    }),
  setup() {
    const { smAndDown } = useDisplay();
    const drawer = ref(false);

    const toggleDrawer = () => {
      drawer.value = !drawer.value;
    };

    return {
      smAndDown,
      drawer,
      toggleDrawer,
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
};
</script>

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

.nav-container {
  position: relative;
  top: 0;
  width: 100%;
}
</style>
