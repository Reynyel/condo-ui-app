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
        src: ('https://media.istockphoto.com/id/1355110818/photo/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg?s=612x612&w=is&k=20&c=rxH5vpmngJ8nHkx42YgsPJsj1xpNb7tLYcue5aw9LWc='),
        name: 'John Doe',
        title: 'Broker'
      },
      { 
        src: ('https://images.unsplash.com/photo-1656038339732-89cfc55bc6b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
        name: 'Jane Doe',
        title: 'Agent' 
      },
      { 
        src: ('https://images.unsplash.com/photo-1656038338350-6937f2b5e18b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
        name: 'Elias Doe', 
        title: 'Agent'
      },
      { 
        src: ('https://images.unsplash.com/photo-1597859006360-3c7de7f5f1d3?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
        name: 'Eloisa Doe',
        title: 'Marketing'
      }
    ]
  }),
  methods: {
    zoomIn(event) {
      event.currentTarget.style.transform = 'scale(1.1)';
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
  <div class="d-flex align-center justify-center flex-row flex-wrap ml-10 pa-16" id="container">
    <div class="d-flex flex-wrap justify-center align-center px-16 mx-16">
      <v-row>
        <v-col 
          v-for="service in services" 
          :key="service.name" 
          cols="12" 
          sm="6" 
          md="4" 
          lg="3"
          class="d-flex flex-column justify-center pa-2 service-card"
          @mouseenter="zoomIn($event)"
          @mouseleave="zoomOut($event)"
        >
          <div class="border-thin elevation-24 rounded-xl">
            <v-responsive :aspect-ratio="16/9" >
              <v-img
                :src="service.src"
                cover
                height="400"
                width="500"
              ></v-img>
            </v-responsive>
            <div class="mt-4 pa-4">
              <p class="text-title text-indigo-lighten-1 text-h5">{{ service.name }}</p>
              <p class="text-title text-grey-darken-2 text-h5 mt-4">{{ service.title }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
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
