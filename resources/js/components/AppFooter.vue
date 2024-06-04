<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>

<template>
  <v-footer class="white--text mx-0 ga-16" color="#f6f6f6" height="auto" style="padding: 70px 150px">
    <v-container>
        <div class="ga-16">
            <v-row>
              <v-col md="6">
                  <div class="contact-input mr-16">
                    <h3 class="text title">Contact Us</h3>
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
                      <v-btn color="grey" style="font-weight: 900; font-size: 24;" size="x-large">SEND MESSAGE</v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col md="6">
                <div class="tb2 ">
                  <div class="contact-info ">
                    <h3 class="text pa-2 ma-2 title">Contact Info</h3>
                    <p class="text pa-2 ma-2"><v-icon left>mdi-email</v-icon>info@ros.com</p>
                    <p class="text pa-2 ma-2"><v-icon left>mdi-phone</v-icon>+1 333 4040 5566</p>
                    <p class="text pa-2 ma-2"><v-icon left>mdi-map-marker</v-icon>647 Purok 2 Ibaba Brgy. Sinalhan, City of Santa Rosa Laguna, Philippines</p>
                  </div>
        
                  <div class="follow-us">
                    <h3 class="text pa-2 ma-2 title">Follow Us</h3>
                    <v-icon size="50" class="mr-2 pa-2 ma-2">mdi-twitter</v-icon>
                    <v-icon size="50" class="mr-2 pa-2 ma-2">mdi-facebook</v-icon>
                    <v-icon size="50" class="mr-2 pa-2 ma-2">mdi-instagram</v-icon>
                    <v-icon size="50" class="mr-2 pa-2 ma-2">mdi-linkedin</v-icon>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="6">
                <div class="text">&copy; 2023 My Company. All rights reserved.</div>
              </v-col>
            </v-row>
            
        </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.text {
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
