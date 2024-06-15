<template>
    <v-container class="d-flex flex-wrap align-center justify-center my-6">
        <div class="d-flex align-center flex-column my-4">
            <p class="my-4 text-title text-grey-darken-1">Testimonals</p>
            <p class="text-title text-h4 text-indigo-darken-4">What Our Clients Say</p>
        </div>
        <div class="d-flex flex-wrap">
            <v-col>
                <v-img
                :width="600"
                aspect-ratio="1/1"
                cover
                src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></v-img>
            </v-col>
            <v-col>
                <div class="d-flex flex-wrap">
                    <p class="text-title text-h5 my-4 font-weight-thin text-grey-darken-1">
                        “I couldn’t be more impressed with the team at Blair Owens, they found my family our perfect dream home. 
                        True professionals from knowledge of the area, to the closing process and everything else in between — thank you!”
                    </p>
                    <p class="text-title text-h5 text-indigo-darken-4">
                        The Cruz Family
                    </p>
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
</style>
<script>
export default {
    name: "Testimonals",
    data: () => ({}),
    setup() {
        
    },
}
</script>