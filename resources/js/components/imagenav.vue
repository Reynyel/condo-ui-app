<script>
export default {
  name:"imagenav",
  data () {
      return {
        items: [
          {
            src: ('https://images.unsplash.com/photo-1580041065738-e72023775cdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'), //Change src to appropriate image
            
          },
          {
            src: ('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
            
          },
          {
            src: ('https://images.unsplash.com/photo-1675585981855-c933229c5adb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
            
          },
        ],
      }
    },
  }
</script>

<template>
    <v-container class="d-flex justify-center align-center px-2 mt-16 w-100" id="container">
        <div class="d-flex flex-wrap">
            <v-row class="d-flex  px-6  w-100">
              <v-col cols="12" md="6" class="d-flex flex-column justify-center mt-16">
                <div class="text-left pl-6" >
                  <p class="mb-2 txt-font text-grey-darken-1">Luxury Real Estate</p>
                  <p class="mb-4 txt-font text-h2 font-weight-thin text-indigo-darken-4"
                  color="#011640"
                  style="
                  text-transform: uppercase">IT'S TIME TO FIND YOUR LUXURY HOME</p>
                  <p class="txt-font text-grey-darken-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incid alor the old familer olfre idunt 
                    ut labore ellt.</p>
                </div>
              </v-col>
        
              <v-col cols="12"  md="6" class="d-flex align-center  px-16 mt-16">
                <v-carousel hide-delimiters :show-arrows="false"
                 cycle
                >
                  <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                    cover
                  >
                  </v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
        </div>
    </v-container>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
    .txt-font{
        font-family: 'Montserrat', sans-serif;
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
