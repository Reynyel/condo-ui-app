import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: "AIzaSyCdxrnYJkfPrz4XWy4y-6KONNPMnD-v_9s",
    version: "weekly",
    libraries: ["places", "geocoding"],
  });
  
  export default function loadGoogleMaps() {
    return new Promise((resolve) => {
      loader.load().then(() => {
        resolve(window.google);
      });
    });
  }
  