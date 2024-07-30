<template>
  <v-container class="d-flex flex-wrap align-center justify-center mt-2 pt-2 h-vh-100" id="container" fluid>
      <v-row class="d-flex justify-center px-4 my-5" align="center">
            <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
                <div class="d-flex flex-start flex-wrap flex-column">                                             
                    <v-responsive :aspect-ratio="16/9" class="w-100">
                        <v-img
                        src="/images/properties/condo1.png"
                        cover
                        ></v-img>
                    </v-responsive>                  
                </div>   
            </v-col>
            <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
                <div class="d-flex flex-start flex-wrap flex-column">
                <p class="text-left mb-4 text-indigo-darken-4 txt-font text-h4">An Award Winning Seaside Estate</p>
                <p class="text-left mb-4 text-grey-darken-1 txt-font text-body-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
            </v-col>
        </v-row>

      <v-divider></v-divider>
      <v-row class="d-flex justify-center px-4 my-5" align="center">            
            <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
                <div class="d-flex flex-start flex-wrap flex-column">
                <p class="text-left mb-4 text-indigo-darken-4 txt-font text-h4">An Award Winning Seaside Estate</p>
                <p class="text-left mb-4 text-grey-darken-1 txt-font text-body-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
            </v-col>
            <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
                <div class="d-flex flex-start flex-wrap flex-column">                                             
                    <div class="video-container">
                        <iframe :src="link" frameborder="0" allowfullscreen></iframe>
                    </div>                
                </div>   
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MoreInformation',
  data() {
    return {
      link: '/videos/5b6da8e9-a53c-4a87-abdb-5af3004f8e54.mp4'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
.txt-font{
  font-family: 'Montserrat', sans-serif;
}
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
