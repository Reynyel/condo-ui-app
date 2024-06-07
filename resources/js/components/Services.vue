<script>
export default {
    name: "Services",
    data: () => ({}),
    setup: () => ({
      title: 'Featured Communities',
      services: [
        { 
            src: ('https://images.unsplash.com/photo-1656038339605-f48e55b367d5?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
            title: 'Community 1'
         },
        { 
            src: ('https://images.unsplash.com/photo-1656038339732-89cfc55bc6b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
            title: 'Community 2' 
        },
        { 
            src: ('https://images.unsplash.com/photo-1656038338350-6937f2b5e18b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
            title: 'Community 3' 
        },
        { 
            src: ('https://images.unsplash.com/photo-1580785692949-7b5b7fd83d25?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
            title: 'Community 4' 

        }
        ,
        { 
            src: ('https://images.unsplash.com/photo-1621781753671-27ff5af295e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
            title: 'Community 5' 

        }
        ,
        { 
            src: ('https://images.unsplash.com/photo-1597859006360-3c7de7f5f1d3?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
            title: 'Community 6' 

        }
      ]
    }),
    methods: {
        zoomIn(event) {
            event.currentTarget.style.transform = 'scale(1.1)';
        },
        zoomOut(event) {
            event.currentTarget.style.transform = 'scale(1)';
        }
    }
}
</script>

<template>
    <v-container class="d-flex justify-center align-center">
        <div class="pa-2 ma-8 d-flex bg-blue-darken-4 w-100">
            <v-col>
                <div class="col-md-6 pa-2 ma-2 text-left">
                    <p class="pa-2 ma-4 text-h4 font-weight-thin text-title">
                        We Offer The Highest Level Of Expertise, Service, And Integrity.
                    </p>
                </div>
            </v-col>
            <v-col>
                <div class="col-md-6 pa-2 ma-4 text-left">
                    <span class="pa-0 ma-0 text-h6 font-weight-thin text-body">
                        Lorem ipsum dolor sit amet, cons ectetur adip cing ellit, 
                        selad do eiusmod tempor tolos dolor the old she roltoy incid 
                        idunt labore ellt dolore magna the alora aliqua.
                    </span>
                </div>
            </v-col>
        </div>
    </v-container>
        <div class="d-flex align-center flex-column flex-wrap mb-5">
            <h1 class="text-indigo-darken-1 text-h3 ma-2 text-title">{{ title }}</h1>
            <p class="paragraph text-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="ga-6 d-flex flex-row flex-wrap my-6 w-75">
                <v-card
                v-for="service in services"
                :key="service.title"
                class="mx-auto service-card w-75"
                height="300"
                :image="service.src" 
                max-width="400"
                theme="dark"
                @mouseenter="zoomIn($event)"
                @mouseleave="zoomOut($event)"
                > 
                <v-card-title class="service-title">{{ service.title }}</v-card-title>
                </v-card>
            </div>
        </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

.text-title{
    font-family: 'Montserrat', sans-serif;
}
.text-body {
    font-family: 'Montserrat', sans-serif;
}
    
.service-card {
    flex: 0 0 auto;
    width: calc(25% - 20px); /* Adjust card width to fit 4 cards in a row with some spacing */
    transition: transform 0.3s ease;
    filter: brightness(90%);
}

.service-title {
  position: absolute;
  bottom: 0;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow for better readability */
}

</style>
