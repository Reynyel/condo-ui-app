<template>
    <v-container class="d-flex flex-wrap align-center justify-center w-100 h-vh-100 py-100" fluid>
      <div class="d-flex align-center flex-column my-2 text-center">
        <p class="my-4 text-title text-grey-darken-1">Testimonials</p>
        <p class="text-title text-h4 text-indigo-darken-4">What Our Clients Say</p>
      </div>
    
      <v-row class="d-flex justify-center my-8" no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="12" md="4" lg="3" class="d-flex flex-column align-center col-margin">
          <v-responsive :aspect-ratio="16/9" class="w-100">
            <v-img
              src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              cover
            ></v-img>
          </v-responsive>
        </v-col>
        <div class="mx-16"></div>
        <v-col cols="12" md="4" lg="3" class="d-flex flex-column align-center col-margin">
          <div class="w-100 mx-10">
            <p class="text-title text-h5 my-4 font-weight-thin text-grey-darken-1">
              “I couldn’t be more impressed with the team at Blair Owens, they found my family our perfect dream home. 
              True professionals from knowledge of the area, to the closing process and everything else in between — thank you!”
            </p>
            <p class="text-body text-h5 text-indigo-darken-4">The Cruz Family</p>
          </div>                
        </v-col>
        <v-spacer></v-spacer>
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
  .bg-indigo-darken-4 {
    background-color: #1a237e; /* Adjust this color as needed */
  }
  .mb-4 {
    margin-bottom: 16px;
  }
  .col-margin {
    margin: 0 16px; /* Adjust this value as needed */
  }
  </style>
  
  <script>
  export default {
    name: "Testimonials",
    data: () => ({}),
  }
  </script>
  