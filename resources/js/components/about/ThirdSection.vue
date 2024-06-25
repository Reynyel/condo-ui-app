<script>
export default {
  name: "Testimonials",
  data: () => ({
    cursors: ['pointer']
  }),
  setup: () => ({
    title: 'Team',
    services: [
      { 
        src: 'images/man.png',
        name: 'John Doe',
        title: 'Broker'
      },
      { 
        src: 'images/woman.png',
        name: 'Jane Doe',
        title: 'Agent' 
      },
      { 
        src: 'images/elias.png',
        name: 'Elias Doe', 
        title: 'Agent'
      },
      { 
        src: 'images/woman2.png',
        name: 'Eloisa Doe',
        title: 'Marketing'
      }
    ]
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

<template>
  <v-container class="d-flex flex-wrap align-center justify-center mt-2 pt-2 h-vh-100" id="container" fluid>
    <div class="d-flex flex-column">
      <div class="d-flex align-center justify-center">
        <div class="d-flex align-center justify-center flex-wrap flex-column mt-12 text-center px-4">
          <p class="text-title text-h6 text-grey-darken-2">Get To Know Us</p>
          <p class="text-title text-h4 text-indigo-darken-4">Meet The Cruz Team</p>
          <p class="text-title text-h6 text-grey-darken-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin gravida tortor semper nibh vehicula, in tempor urna dignissim.</p>
        </div>
      </div>
    </div>
  </v-container>

  <div class="d-flex align-center justify-center flex-row flex-wrap pa-16" id="container">
    <v-row align="stretch d-flex align-center justify-center">
      <v-col 
        v-for="service in services" 
        :key="service.name" 
        cols="12" md="3"
        class="d-flex flex-column justify-center pa-2 service-card"
        @mouseenter="zoomIn($event)"
        @mouseleave="zoomOut($event)"
      >
        <div class="border-thin elevation-24 rounded-xl d-flex flex-column h-100">
          <v-card class="d-flex flex-column h-100">
            <v-img
              :src="service.src"
              cover
              min-height="300"
              class="flex-grow-1"
            ></v-img>
            <div class="mt-4 pa-4 flex-grow-0">
              <p class="text-title text-indigo-lighten-1 text-h5">{{ service.name }}</p>
              <p class="text-title text-grey-darken-2 text-h5 mt-4">{{ service.title }}</p>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
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

.mt-12 {
  margin-top: 48px;
}

.pa-4 {
  padding: 16px;
}

.text-center {
  text-align: center;
}

.service-card {
  flex: 0 0 auto;
  width: calc(25% - 20px);
  transition: transform 0.3s ease;
  filter: brightness(90%);
}

.service-title {
  position: absolute;
  bottom: 0;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 1200px) {
  .service-card {
    width: calc(33.33% - 20px); /* 3 cards per row on medium screens */
  }
}

@media (max-width: 992px) {
  .service-card {
    width: calc(50% - 20px); /* 2 cards per row on small screens */
  }
}

@media (max-width: 768px) {
  .service-card {
    width: calc(100% - 20px); /* 1 card per row on extra small screens */
  }
}
</style>
