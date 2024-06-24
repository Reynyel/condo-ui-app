<template>
  <v-container class="d-flex flex-wrap align-center justify-center mt-2 pt-2 h-vh-100" id="container" fluid>
    <div class="d-flex flex-column">
      <div class="d-flex align-center justify-center">
        <div class="d-flex align-center justify-center flex-wrap flex-column mt-12 text-center px-4">
          <p class="text-title text-h6 text-grey-darken-2">Industry Leading Agency</p>
          <p class="text-title text-h4 text-indigo-darken-4">45 Years of Experience In Luxury Real Estate</p>
        </div>
      </div>
      <div>
        <v-row class="d-flex justify-center px-4 my-8" align="center">
          <v-col cols="12" md="5" class="d-flex flex-wrap pa-4">
            <div>
              <div class="d-flex flex-wrap flex-column justify-center align-center ma-2">
                <p class="text-title text-indigo-darken-4 text-h6 mb-4">Industry Leading Agency</p>
                <p class="text-title text-grey-darken-3 text-body-1 d-flex mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin gravida tortor semper nibh vehicula, in tempor urna dignissim.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia.
                </p>
              </div>
              <div class="d-flex flex-wrap flex-column justify-center align-center ma-2">
                <p class="text-title text-indigo-darken-4 text-h6 mb-4">Tailormade End-To-End Service</p>
                <p class="text-title text-grey-darken-3 text-body-1 d-flex mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin gravida tortor semper nibh vehicula, in tempor urna dignissim.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia.
                </p>
              </div>
              <div class="d-flex flex-wrap flex-column justify-center align-center ma-2">
                <p class="text-title text-indigo-darken-4 text-h6 mb-4">$125 Billion In Sales</p>
                <p class="text-title text-grey-darken-3 text-body-1 d-flex mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin gravida tortor semper nibh vehicula, in tempor urna dignissim.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia.
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" class="d-flex flex-column justify-center pa-4">
            <div class="border-thin elevation-24 rounded-xl sm">
              <v-responsive :aspect-ratio="16/9" class="w-100">
                <v-img
                  src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  cover
                ></v-img>
              </v-responsive>
              <div class="mt-4 pa-4">
                <p class="text-title text-grey-darken-2 text-h5">
                  “Buying real estate is not only the best way, the quickest way,
                  the safest way, but the only way to become wealthy.”
                </p>
                <p class="text-title text-indigo-lighten-1 text-h5 mt-4">Ranielle Cruz</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
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

.mt-12 {
  margin-top: 48px;
}

.pa-4 {
  padding: 16px;
}

.text-center {
  text-align: center;
}
</style>

<script>
export default {
  name: "Testimonials",
  data: () => ({}),
}
</script>
