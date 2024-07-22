<script>
export default {
    name: "Services",
    data: () => ({
        cursors: [
            'pointer'
        ]
    }),
    setup: () => ({
      title: 'Featured Communities',
      services: [
        { 
            src: ('images/projects/3fa1d38c-9f04-4ffd-b23e-d010f569887e.jpeg'),
            title: 'Community 1'
         },
        { 
            src: ('images/projects/b8516da8-ff6a-4891-9c2d-ecaa1f22b25e.jpeg'),
            title: 'Community 2' 
        },
        { 
            src: ('images/projects/e62ad29e-05a9-4ada-9b99-c18f46e6fc85.jpeg'),
            title: 'Community 3' 
        },
        { 
            src: ('images/projects/280d3f1d-49fc-40d2-9f6b-cd6983138289.jpeg'),
            title: 'Community 4' 

        }
        ,
        { 
            src: ('images/projects/fb8eaca9-93d5-4733-9b2e-18c795c0832d.jpeg'),
            title: 'Community 5' 

        }
        ,
        { 
            src: ('images/projects/891e62db-50c1-4721-995e-5f2bcc728756.jpeg'),
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
    <v-container class="d-flex flex-wrap justify-center align-center" id="container">
        <div class="pa-2 ma-8 d-flex flex-wrap bg-blue-darken-4 w-100">
            <v-col>
                <div class="pa-2 ma-2 text-left" cols="12" md="6">
                    <p class="pa-2 ma-4 text-h4 font-weight-thin text-title">
                        We Offer The Highest Level Of Expertise, Service, And Integrity.
                    </p>
                </div>
            </v-col>
            <v-col>
                <div class=" pa-2 ma-4 text-left" cols="12" md="6">
                    <span class="pa-0 ma-0 text-h6 font-weight-thin text-body">
                        Lorem ipsum dolor sit amet, cons ectetur adip cing ellit, 
                        selad do eiusmod tempor tolos dolor the old she roltoy incid 
                        idunt labore ellt dolore magna the alora aliqua.
                    </span>
                </div>
            </v-col>
        </div>
    </v-container>
        <div class="d-flex align-center flex-column flex-wrap mb-5 pa-5" id="container">
            <h1 class="text-indigo-darken-1 text-h3 ma-2 text-title">{{ title }}</h1>
            <p class="paragraph text-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="ga-6 d-flex flex-row flex-wrap my-6 w-75">
                <v-card
                v-for="service in services"
                :key="service.title"
                class="mx-auto service-card w-75"
                height="300"
                :image="service.src" 
                :class="`cursor-${cursors}`"
                max-width="400"
                theme="dark"
                @mouseenter="zoomIn($event)"
                @mouseleave="zoomOut($event)"
                > 
                <v-card-title class="service-title d-flex flex-start flex-wrap pa-0">{{ service.title }}</v-card-title>
                </v-card>
            </div>
        </div>

        
        <v-container class="d-flex flex-wrap justify-center align-center" id="container">
            <div class="pa-2 ma-2 d-flex flex-wrap w-100">
                <v-col>
                    <div class="pa-2 mt-n13 text-left" cols="12" md="6">
                        <p class="pa-2 ma-2 text-h6 font-weight-thin text-title text-grey-darken-1">Ros Properties</p>
                        <p class="pa-2 ma-2 text-h4 font-weight-thin text-title text-indigo-darken-4">A Real Estate Agency Leading The Luxury Properties Market Throughout The World</p>
                    </div>
                </v-col>
                
                <v-col>
                    <div class=" pa-2 ma-4 text-left" cols="12" md="6">
                        <p class="pa-0 ma-0 text-h6 font-weight-thin text-body text-grey-darken-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum.</p>
                        <v-btn variant="text" class="pa-0 ma-0 text-h6 font-weight-thin text-body text-indigo-darken-4" href="/about">
                            <u>
                                About Us
                            </u>
                        </v-btn>
                    </div>
                </v-col>
                </div>
        </v-container>
        
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

</style>
