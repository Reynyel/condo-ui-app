<script>
import loadGoogleMaps from '../../../googleMap.js';

export default {
  name: "ServiceArea",
  components: {
    
  },
  data: () => ({
    map: null,
    geocoder: null,
    selectedCountry: 'Philippines', // initialize to default value
    countries: [
      { name: 'Philippines', code: 'ph', lat: 12.8797, lng: 121.7740 },
      { name: 'Japan', code: 'jp', lat: 36.2048, lng: 138.2529 }
    ],
    pickLocation: "",
    destLocation: "",
    destmark: null,
    pickmark: null,
    pickautocomplete: null,
    destautocomplete: null,
    showClearButton: false,
    address: "7520 High St. Lot, La Mesa, Ph"
  }),

  computed: {
    mapCenter() {
      if (this.selectedCountry) {
        const country = this.countries.find(c => c.name === this.selectedCountry);
        return { lat: country.lat, lng: country.lng };
      }
    },
    autocompleteOptions() {
      if (this.selectedCountry) {
        const country = this.countries.find(c => c.name === this.selectedCountry);
        return { componentRestrictions: { country: country.code } };
      }
    }
  },

  watch: {
    selectedCountry(countryName) {
      if (this.map) {
        const center = this.mapCenter;
        this.map.setZoom(5.5);
        this.map.setCenter(center);
        this.pickautocomplete.setOptions(this.autocompleteOptions);
        this.destautocomplete.setOptions(this.autocompleteOptions);
      }
    }
  },

  mounted() {
    document.title = "Service Area";
    loadGoogleMaps().then((google) => {
      this.initMap();
    });
  },

  methods: {
    initMap() {
      const pickinput = document.getElementById('pick-input');
      const destinput = document.getElementById('dest-input');

      this.pickautocomplete = new google.maps.places.Autocomplete(pickinput, {
        types: ['geocode'],
        ...this.autocompleteOptions
      });

      this.destautocomplete = new google.maps.places.Autocomplete(destinput, {
        types: ['geocode'],
        ...this.autocompleteOptions
      });

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({
        map: this.map,
        suppressMarkers: true
      });

      this.geocoder = new google.maps.Geocoder();

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.mapCenter,
        zoom: 5.5,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: true,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true
      });

      // Geocode the address and center the map at the location
      this.geocodeAddress(this.address);
    },

    geocodeAddress(address) {
      this.geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
          this.map.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
          });
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    }
  }
};
</script>

<template>
    
    <v-main>
      <v-content class="d-flex align-center justify-center">
        <div class = "main-container d-flex align-center justify-center flex-wrap w-75">
        <div class = "country-choice">
          
          <!-- <label for="country-select">Select a country:</label>
            <select id="country-select" v-model="selectedCountry">
        <option v-for="country in countries" :key="country.name" :value="country.name">{{ country.name }}</option>
            </select> -->

        </div>
        <div class="d-flex align-center justify-center flex-wrap w-75">
            <div id="map" class = "b"></div>
        </div>
       </div>
    </v-content>
    </v-main>
</template>

<style scoped>

.iconhead {
    position: relative;
    margin-left: 36rem;
    margin-top: -4rem;
    height: 80px;
    width: 80px;
}

div.b {
    flex: 1;
    width: 80%;
    height: 580px;
    justify-content: center;
    align-items: center;
    
}

div.c {
    flex: 0 0 20%;
    height: 580px;
    
    background-color: azure;
}

.header {
    font-size: 24px;
    text-align: center;
    background-color: gray;
    color: white;
    padding: 10px;
    border-radius: 10px;
}

.space {
    margin-bottom: 3px;
}

.btn-text {
    margin-left: 10px;
    
}

.SABanner {
    margin-top:65px;
    height: 120px;
}


/*
auto completed searches css .pac
*/
.pac-container {
    background-color: #fff;
    border: 1px solid #999;
    font-size: 14px;
    max-height: 300px;
    overflow-y: auto;
    position: absolute;
    top: calc(100% + 5px); /* position the dropdown below the input field */
    width: calc(100% - 2px); /* subtract the border width from the input field width */
    z-index: 9999; /* set a high z-index to make sure the dropdown is displayed on top */
  }
  
  .pac-item {
    cursor: pointer;
    padding: 5px 10px;
  }
  
  .pac-item:hover, .pac-item-selected {
    background-color: #f5f5f5;
  }

</style>
