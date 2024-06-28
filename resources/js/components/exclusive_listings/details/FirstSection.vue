<template>
    <v-container class="d-flex align-center justify-center bg-brown-lighten-5 mt-6 pt-16 h-vh-100 py-10" id="container" fluid>
      <v-row class="d-flex justify-center px-4 my-4" align="center">
        <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
          <div class="border-thin elevation-24 rounded-xl sm">
              <v-responsive :aspect-ratio="16/9" class="w-100">
                <v-img
                  src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  cover
                ></v-img>
              </v-responsive>
              <div class="mt-4 pa-4">
                <p class="text-title text-indigo-lighten-1 text-h5 mt-4">Name: {{ listing.name }}</p>
                <p class="text-title text-indigo-lighten-1 text-h5 mt-4">Price: ${{ listing.price }}</p>
                <p class="text-title text-indigo-lighten-1 text-h5 mt-4">Acre: {{ listing.acre }}</p>
              </div>
            </div>
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
import axios from 'axios';

export default {
    name: "Testimonials",
    data() {
        return {
            listing: "",
        };
    },
    created() {
        this.fetchListing();
    },
    methods: {
        fetchListing() {
            axios.get('/listings')
                .then(response => {
                    console.log('Listing:', response.data); // Debug statement
                    if (response.data.length > 0) {
                        this.listing = response.data[0];
                    }
                })
                .catch(error => {
                    console.error('Error fetching listing:', error);
                });
        }
    }
}
</script>
  