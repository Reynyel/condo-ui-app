<template>
  <v-container class="d-flex flex-wrap align-center justify-center mt-2 pt-2 h-vh-100" id="container" fluid>
    <v-row class="d-flex justify-center px-4 my-5" align="center">
      <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
        <div class="d-flex flex-start flex-wrap flex-column">
          <p class="text-left my-4 text-grey-lighten-1 text-title text-h6 font-weight-bold">LA JOLLA, CA</p>
          <p class="text-left mb-4 text-indigo-darken-4 text-title text-h4">An Award Winning Seaside Estate</p>
          <p class="text-left mb-4 text-grey-darken-1 text-title text-body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="text-left mb-4 text-grey-darken-2 text-title text-body-1 font-italic font-weight-light">
            Come by this weekend for the open house starting at 2PM.
          </p>
          <div>
            <v-btn class="bg-indigo-darken-4" size="x-large" rounded="xs">
              <p class="pa-4 text-body-2 font-weight-bold">RSVP</p>
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
        <div class="border-thin elevation-24 rounded-xl sm position-relative">
          <v-responsive :aspect-ratio="16/9" class="w-100">
            <v-img
              src="images/properties/condo4.png"
              cover
            ></v-img>
            <div class="overlay-text position-absolute">
              <p class="text-white text-h6 text-title">913 1st St</p>
              <p class="text-white text-subtitle-2">La Jolla, CA 123456</p>
              <p class="text-white text-h6 font-weight-bold">$1,234,567</p>
              <v-btn class="ma-2" color="green" text>Open House</v-btn>
            </div>
          </v-responsive>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="d-flex justify-center px-4 my-5" align="center">
      <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
        <div class="border-thin elevation-24 rounded-xl sm position-relative">
          <v-responsive :aspect-ratio="16/9" class="w-100">
            <v-img
              src="images/properties/condo1.png"
              cover
            ></v-img>
            <div class="overlay-text position-absolute">
              <p class="text-white text-h6 text-title">8542 El Paseo Grande</p>
              <p class="text-white text-subtitle-2">Rancho Santa Fe, CA 92014</p>
              <p class="text-white text-h6 font-weight-bold">$1,234,567</p>
              <v-btn class="ma-2" color="green" text>Open House</v-btn>
            </div>
          </v-responsive>
        </div>
      </v-col>
      <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
        <div class="d-flex flex-start flex-wrap flex-column">
          <p class="text-left my-4 text-grey-lighten-1 text-title text-h6 font-weight-bold">RANCHO SANTA FE, CA</p>
          <p class="text-left mb-4 text-indigo-darken-4 text-title text-h4">Sprawling Lush Resort Style Living</p>
          <p class="text-left mb-4 text-grey-darken-1 text-title text-body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="text-left mb-4 text-grey-darken-2 text-title text-body-1 font-italic font-weight-light">
            Come by this weekend for the open house starting at 10PM.
          </p>
          <div class="d-flex flex-row-reverse">
            <v-btn class="bg-indigo-darken-4" size="x-large" rounded="xs">
              <p class="pa-4 text-body-2 font-weight-bold">RSVP</p>
            </v-btn>
          </div>
        </div>
      </v-col>   
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Open Houses",
  data: () => ({
    cursors: ['pointer'],
  }),
  methods: {
    zoomIn(event) {
      event.currentTarget.style.transform = 'scale(1.05)';
    },
    zoomOut(event) {
      event.currentTarget.style.transform = 'scale(1)';
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

.text-title {
  font-family: 'Montserrat', sans-serif;
}

.text-grey-darken-2 {
  color: #757575;
}

.text-indigo-lighten-1 {
  color: #1a237e;
}

.pa-4 {
  padding: 16px;
}

.text-left {
  text-align: left;
}

.align-left {
  align-items: flex-start;
}

.service-card {
  transition: transform 0.3s ease;
  filter: brightness(90%);
}

.service-card .v-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-card .v-img {
  min-height: 300px;
  max-height: 300px;
}

/* Applied to the parent container to ensure the absolutely 
positioned text and button are relative to this container. */
.position-relative {
  position: relative;
}

/* Applied to the div containing the overlay text 
and button to position them at the bottom left of the image. */
.position-absolute {
  position: absolute;
  bottom: 16px;
  left: 16px;
}

/* style the overlay text and button, 
including a semi-transparent background for better readability. */
.overlay-text {
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 4px;
}
</style>
