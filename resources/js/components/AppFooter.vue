<script>
export default {
  name: "Footer",
  data: () => ({}),
  
};
</script>

<template>
  <v-footer class="white--text mx-0 ga-16" color="#f6f6f6" height="auto" style="padding: 70px 150px" id="footer">
    <v-container class="d-flex flex-wrap align-center justify-center mt-2 pt-2 h-vh-100" fluid>
        <div class="ga-16 d-flex flex-wrap justify-center align-center" fluid>
            <v-row>
              <v-col md="6">
                  <div class="contact-input mr-16">
                    <h3 class="text title text-indigo-darken-4">Contact Us</h3>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field class="text-h5" label="Name" variant="underlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field label="Email" variant="underlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Subject" variant="underlined"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea label="Notes" variant="underlined" no-resize></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-btn color="indigo-darken-4" style="font-weight: 900; font-size: 24;" size="x-large">SEND MESSAGE</v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col md="6">
                <div class="tb2 d-flex">
                  <div class="contact-info">
                    <h3 class="text pa-2 ma-2 title text-indigo-darken-4">Contact Info</h3>
                    <p class="text pa-2 ma-2 text-indigo-darken-4"><v-icon left>mdi-email</v-icon> rosflorinda.smdc@gmail.com</p>
                    <p class="text pa-2 ma-2 text-indigo-darken-4"><v-icon left>mdi-phone</v-icon> +63 969086607</p>
                    <p class="text pa-2 ma-2 text-indigo-darken-4"><v-icon left>mdi-map-marker</v-icon> 14th floor Two Ecom Bldg. Harbour Drive, Moa Complex, Pasay City, Philippines</p>
                  </div>
        
                  <div class="follow-usp">
                    <h3 class="text pa-2 ma-2 title text-indigo-darken-4">Follow Us</h3>
                    <v-icon size="50" class="mr-2 pa-2 ma-2 text-indigo-darken-4">mdi-twitter</v-icon>                    
                    <v-icon size="50" class="mr-2 pa-2 ma-2 text-indigo-darken-4">mdi-facebook</v-icon>
                    <v-icon size="50" class="mr-2 pa-2 ma-2 text-indigo-darken-4">mdi-instagram</v-icon>
                    <v-icon size="50" class="mr-2 pa-2 ma-2 text-indigo-darken-4">mdi-linkedin</v-icon>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="6">
                <div class="text text-indigo-darken-4 d-flex align-left">&copy; 2024 Cruz. All rights reserved.</div>
              </v-col>
            </v-row>
            
        </div>
    </v-container>
  </v-footer>
</template>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

.text {
  font-family: 'Montserrat', sans-serif;
  color: #585858;
  font-size: 20px;
}

.mr-2 {
  background: #f6f6f6;
}

.contact-input {
  margin-bottom: 20px;
}

.tb2{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
}

.title{
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
}

</style>
