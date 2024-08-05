import {createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';

import About from './views/About.vue';
import ExclusiveListings from './views/ExclusiveListings.vue';
import OpenHouses from './views/OpenHouses.vue';
import SoldListings from './views/SoldListings.vue';
import Details from './views/Details.vue';

import { components } from 'vuetify/dist/vuetify-labs.js';

const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/exclusivelistings',
    name: 'exclusive_listings',
    component: ExclusiveListings
  }

  ,

  {
    path: '/openhouses',
    name: 'open_houses',
    component: OpenHouses
  }

  ,

  {
    path: '/soldlistings',
    name: 'sold_listings',
    component: SoldListings
  },

  {
    path: '/details',
    name: 'details',
    component: Details
  }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;