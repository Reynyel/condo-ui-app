<template>
  <v-container class="d-flex align-center justify-center mt-6 pt-16 h-vh-100 py-10" id="container" fluid>
    <v-row class="d-flex justify-center px-4 my-4" align="center">
      <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
        <div class="border-thin elevation-24 rounded-xl sm">
          <v-row>
            <v-col>
              <p class="text-title text-h5 pa-4 ma-4">
                {{ listing.name }}
              </p>
              <p class="text-title text-grey-darken-1 pa-4 ma-4">
                {{ listing.address }}
              </p>
            </v-col>
            
            <v-col>
              <div class="d-flex flex-row-reverse">
                <p class="text-title text-h5 font-weight-black pa-4 ma-4">
                  ${{ listing.price }}
                </p>
              </div>
              
              
            </v-col>
          </v-row>
              
          
          <v-responsive :aspect-ratio="16/9" class="w-100">
            <v-img
              src="images/properties/condo1.png"
              cover
            ></v-img>
          </v-responsive>
          <p class="text-title text-h5 pa-4 ma-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="mt-4 pa-4">
            <v-expansion-panels flat>
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-expansion-panel class="panel-with-underline">
                    <v-expansion-panel-title class="pl-2 ml-2 text-title text-grey-darken-1 text-h6 mt-4">
                      <template v-slot>
                        <v-row no-gutters>
                          <v-col class="d-flex justify-start text" cols="12">
                            Interior
                          </v-col>
                        </v-row>
                      </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      
                  <v-list>
                    <v-list-item class="text-title px-0 mx-0">
                      <v-row>
                        <v-col>
                          <v-list-item-content class="text-left">General</v-list-item-content>
                        </v-col>
                        <v-col>
                          <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">High Ceilings, Walk-In Closet(s)</v-list-item-content>
                        </v-col>
                      </v-row>                       
                    </v-list-item>
                    <v-list-item class=" text-title px-0 mx-0">
                      <v-row>
                        <v-col>
                          <v-list-item-content class="text-left">Appliances</v-list-item-content>
                        </v-col>
                        <v-col>
                          <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">Counter Top, Dishwasher, Disposal, Gas Range, Microwave, Refrigerator</v-list-item-content>
                        </v-col>
                      </v-row>  
                    </v-list-item>
                    <v-list-item class=" text-title px-0 mx-0">
                      <v-row>
                        <v-col>
                          <v-list-item-content class="text-left">Laundry</v-list-item-content>
                        </v-col>
                        <v-col>
                          <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">See Remarks</v-list-item-content>
                        </v-col>
                      </v-row>  
                    </v-list-item>
                    <v-list-item class=" text-title px-0 mx-0">
                      <v-row>
                        <v-col>
                          <v-list-item-content class="text-left">Flooring</v-list-item-content>
                        </v-col>
                        <v-col>
                          <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">Carpet, Tile</v-list-item-content>
                        </v-col>
                      </v-row>  
                    </v-list-item>
                    <v-list-item class=" text-title px-0 mx-0">
                      <v-row>
                        <v-col>
                          <v-list-item-content class="text-left">Central Air</v-list-item-content>
                        </v-col>
                        <v-col>
                          <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">Forced Air, See Remarks</v-list-item-content>
                        </v-col>
                      </v-row>  
                    </v-list-item>
                    <v-list-item class=" text-title px-0 mx-0">
                      <v-row>
                        <v-col>
                          <v-list-item-content class="text-left">Disability Feature</v-list-item-content>
                        </v-col>
                        <v-col>
                          <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">Other</v-list-item-content>
                        </v-col>
                      </v-row>  
                    </v-list-item>   
                  </v-list>
                </v-expansion-panel-text>
                  </v-expansion-panel>
                </template>
              </v-hover>
            </v-expansion-panels>

            <v-expansion-panels flat>
              <v-hover>
                <!-- unused prop -->
                <template v-slot:default="{ isHovering, props }">
                  <v-expansion-panel class="panel-with-underline">
                    <v-expansion-panel-title class="pl-2 ml-2 text-title text-grey-darken-1 text-h6 mt-4">
                      <template v-slot>
                        <v-row no-gutters>
                          <v-col class="d-flex justify-start text" cols="12">
                            Exterior
                          </v-col>
                        </v-row>
                      </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list>
                         <v-list-item class=" text-title px-0 mx-0">
                           <v-row>
                             <v-col>
                               <v-list-item-content class="text-left">Style</v-list-item-content>
                             </v-col>
                             <v-col>
                               <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">Contemporary</v-list-item-content>
                             </v-col>
                           </v-row>  
                         </v-list-item>
                         <v-list-item class=" text-title px-0 mx-0">
                           <v-row>
                             <v-col>
                               <v-list-item-content class="text-left">Pool</v-list-item-content>
                             </v-col>
                             <v-col>
                               <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">In Ground, Association</v-list-item-content>
                             </v-col>
                           </v-row>  
                         </v-list-item>
                         <v-list-item class=" text-title px-0 mx-0">
                           <v-row>
                             <v-col>
                               <v-list-item-content class="text-left">Parking</v-list-item-content>
                             </v-col>
                             <v-col>
                               <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">Driveway, Parking spaces: 6</v-list-item-content>
                             </v-col>
                           </v-row>  
                         </v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </template>
              </v-hover>
            </v-expansion-panels>

            <v-expansion-panels flat>
              <v-hover>
                <!-- unused prop -->
                <template v-slot:default="{ isHovering, props }">
                  <v-expansion-panel class="panel-with-underline">
                    <v-expansion-panel-title class="pl-2 ml-2 text-title text-grey-darken-1 text-h6 mt-4">
                      <template v-slot>
                        <v-row no-gutters>
                          <v-col class="d-flex justify-start text" cols="12">
                            Lot
                          </v-col>
                        </v-row>
                      </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list>
                         <v-list-item class=" text-title px-0 mx-0">
                           <v-row>
                             <v-col>
                               <v-list-item-content class="text-left">Zoning</v-list-item-content>
                             </v-col>
                             <v-col>
                               <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">944363009</v-list-item-content>
                             </v-col>
                           </v-row>  
                         </v-list-item>
                         <v-list-item class=" text-title px-0 mx-0">
                           <v-row>
                             <v-col>
                               <v-list-item-content class="text-left">View</v-list-item-content>
                             </v-col>
                             <v-col>
                               <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">View</v-list-item-content>
                             </v-col>
                           </v-row>  
                         </v-list-item>
                         <v-list-item class=" text-title px-0 mx-0">
                           <v-row>
                             <v-col>
                               <v-list-item-content class="text-left">Acre</v-list-item-content>
                             </v-col>
                             <v-col>
                               <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">{{ listing.acre }}</v-list-item-content>
                             </v-col>
                           </v-row>  
                         </v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </template>
              </v-hover>
            </v-expansion-panels>

            <v-expansion-panels flat>
              <v-hover>
                <!-- unused prop -->
                <template v-slot:default="{ isHovering, props }">
                  <v-expansion-panel class="panel-with-underline">
                    <v-expansion-panel-title class="pl-2 ml-2 text-title text-grey-darken-1 text-h6 mt-4">
                      <template v-slot>
                        <v-row no-gutters>
                          <v-col class="d-flex justify-start text" cols="12">
                            Property
                          </v-col>
                        </v-row>
                      </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list>
                         <v-list-item class=" text-title px-0 mx-0">
                           <v-row>
                             <v-col>
                               <v-list-item-content class="text-left">Year Built</v-list-item-content>
                             </v-col>
                             <v-col>
                               <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">1997</v-list-item-content>
                             </v-col>
                           </v-row>  
                         </v-list-item>
                        
                         <v-list-item class=" text-title px-0 mx-0">
                           <v-row>
                             <v-col>
                               <v-list-item-content class="text-left">Neighborhood</v-list-item-content>
                             </v-col>
                             <v-col>
                               <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">Highlands</v-list-item-content>
                             </v-col>
                           </v-row>  
                         </v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </template>
              </v-hover>
            </v-expansion-panels>

            <v-expansion-panels flat>
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-expansion-panel class="panel-with-underline">
                    <v-expansion-panel-title class="pl-2 ml-2 text-title text-grey-darken-1 text-h6 mt-4">
                      <template v-slot>
                        <v-row no-gutters>
                          <v-col class="d-flex justify-start text" cols="12">
                            Address
                          </v-col>
                        </v-row>
                      </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list>                                         
                          <v-list-item class=" text-title px-0 mx-0">
                            <v-row>
                              <v-col>
                                <v-list-item-content class="text-left">Address</v-list-item-content>
                              </v-col>
                              <v-col>
                                <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">{{ listing.address }}</v-list-item-content>
                              </v-col>
                            </v-row>  
                          </v-list-item>
                        </v-list> 
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </template>
              </v-hover>
            </v-expansion-panels>         

            <v-expansion-panels flat>
              <v-hover>
                <!-- unused prop -->
                <template v-slot:default="{ isHovering, props }">
                  <v-expansion-panel class="panel-with-underline">
                    <v-expansion-panel-title class="pl-2 ml-2 text-title text-grey-darken-1 text-h6 mt-4">
                      <template v-slot>
                        <v-row no-gutters>
                          <v-col class="d-flex justify-start text" cols="12">
                            Pricing
                          </v-col>
                        </v-row>
                      </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list>
                                            
                         <v-list-item class=" text-title px-0 mx-0">
                           <v-row>
                             <v-col>
                               <v-list-item-content class="text-left">Price</v-list-item-content>
                             </v-col>
                             <v-col>
                               <v-list-item-content class="text-right text-indigo-lighten-1 d-flex flex-row-reverse">$ {{ listing.price }}</v-list-item-content>
                             </v-col>
                           </v-row>  
                         </v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </template>
              </v-hover>
            </v-expansion-panels>

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

.panel-with-underline {
  border-bottom: 1px solid #dcdcdc;
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
