require("./bootstrap");

import { createApp } from "vue";
import App from './layouts/App.vue'
import routes from './routes.js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
    routes,
    
  })

export default createVuetify({
   
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
    
  })

createApp(App)
.use(routes)
//.use(Vuex)
.use(vuetify)
//.use(store)
.mount('#app')