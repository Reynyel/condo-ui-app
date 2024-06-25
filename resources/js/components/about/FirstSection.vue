<template>
  <v-container class="d-flex align-center justify-center bg-brown-lighten-5 mt-6 pt-16 h-vh-100 py-10" id="container" fluid>
    <v-row class="d-flex justify-center px-4 my-4" align="center">
      <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
        <p class="text-h6 font-weight-light text-title text-grey-darken-1">Ros Properties</p>
        <p class="text-h3 font-weight-light text-title text-indigo-darken-4">Laguna's Top Brokerage Team</p>
      </v-col>
      <v-col cols="12" md="5" class="d-flex flex-wrap pa-4">
        <p class="text-h6 font-weight-light text-body text-grey-darken-1 mx-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

.text-title {
  font-family: 'Montserrat', sans-serif;
}

.text-body {
  font-family: 'Montserrat', sans-serif;
}

.text-grey-darken-1 {
  color: #757575;
}

.text-indigo-darken-4 {
  color: #1a237e;
}

.mt-16 {
  margin-top: 64px;
}

.pt-16 {
  padding-top: 64px;
}

.pa-8 {
  padding: 32px;
}

.h-vh-100 {
  height: 100vh;
}

@keyframes slideUp {
    0% {
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

#container {
    animation: slideUp 0.5s ease-out forwards;
}
</style>

<script>
export default {
  name: "Testimonials",
  data: () => ({}),
}
</script>
