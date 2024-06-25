<template>
    <v-container class="d-flex flex-wrap align-center justify-center mt-2 pt-2 h-vh-100" id="container" fluid>
      <div class="d-flex align-center justify-center flex-row flex-wrap pa-16" id="container">
        <v-row align="stretch d-flex align-center justify-center">
          <v-col 
            v-for="service in services" 
            :key="service.address" 
            cols="12" md="3"
            class="d-flex flex-column justify-center pa-2 service-card"
            @mouseenter="zoomIn($event)"
            @mouseleave="zoomOut($event)"
          >
            <div class="border-thin elevation-24 rounded-xl d-flex flex-column h-100">
              <v-card class="d-flex flex-column h-100" :class="`cursor-${cursors}`">
                <v-img
                  :src="service.src"
                  cover
                  class="flex-grow-1"
                  
                ></v-img>
                <div class="pa-4 flex-grow-0">
                  <p class="text-title text-indigo-lighten-1 text-h5">{{ service.price }}</p>
                  <p class="text-title text-grey-darken-2 text-h6">{{ service.acre }} Acres</p>
                  <p class="text-title text-grey-darken-2 text-h6">{{ service.address }}</p>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "ExclusiveListings",
    data: () => ({
      cursors: ['pointer'],
      services: [
        { 
          src: 'images/properties/condo1.png',
          address: '7520 High St. Lot, La Mesa, Ph',
          acre: '0.23',
          price: '$325,000'
        },
        { 
          src: 'images/properties/condo2.png',
          address: '7520 High St. Lot, La Mesa, Ph',
          acre: '0.23',
          price: '$15,975,000'
        },
        { 
          src: 'images/properties/condo3.png',
          address: '7520 High St. Lot, La Mesa, Ph',
          acre: '0.23',
          price: '$725,000'
        },
        { 
          src: 'images/properties/condo4.png',
          address: '7520 High St. Lot, La Mesa, Ph',
          acre: '0.23',
          price: '$1,429,000'
        },
        { 
          src: 'images/properties/condo5.png',
          address: '7520 High St. Lot, La Mesa, Ph',
          acre: '0.23',
          price: '$325,000'
        },
        { 
          src: 'images/properties/condo6.png',
          address: '7520 High St. Lot, La Mesa, Ph',
          acre: '0.23',
          price: '$15,975,000'
        },
        { 
          src: 'images/properties/condo7.png',
          address: '7520 High St. Lot, La Mesa, Ph',
          acre: '0.23',
          price: '$725,000'
        },
        { 
          src: 'images/properties/condo8.png',
          address: '7520 High St. Lot, La Mesa, Ph',
          acre: '0.23',
          price: '$1,429,000'
        },
        { 
          src: 'images/properties/condo9.png',
          address: '7520 High St. Lot, La Mesa, Ph',
          acre: '0.23',
          price: '$725,000'
        },
        { 
          src: 'images/properties/condo10.png',
          address: '7520 High St. Lot, La Mesa, Ph',
          acre: '0.23',
          price: '$1,429,000'
        },
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
  

  
  </style>
  