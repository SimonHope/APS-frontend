<template>
  <div class="home">
    <v-carousel height="95vh">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <!-- <v-parallax
      height="600"
      dark
      src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">
            Vuetify
          </h1>
          <h4 class="subheading">
            Build your application today!
          </h4>
        </v-col>
      </v-row>
    </v-parallax> -->

    <v-jumbotron>
      <v-container class="my-5" fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Academic Petition Service</h3>
            <v-divider class="my-3"></v-divider>
            <span class="subheading"
              >Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis
              maluisset molestiae id, ad semper lobortis cum. At impetus
              detraxit incorrupte usu, repudiare assueverit ex eum, ne nam
              essent vocent admodum.Lorem ipsum dolor sit amet, pri veniam
              forensibus id. Vis maluisset molestiae id, ad semper lobortis cum.
              At impetus detraxit incorrupte usu, repudiare assueverit ex eum,
              ne nam essent vocent admodum.Lorem ipsum dolor sit amet, pri
              veniam forensibus id. Vis maluisset molestiae id, ad semper
              lobortis cum. At impetus detraxit incorrupte usu, repudiare
              assueverit ex eum, ne nam essent vocent admodum.</span
            >
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

    <v-container class="grey lighten-5">
      <h3 class="display-6">Feature</h3>
      <v-row no-gutters>
        <v-col md="4">
          <v-card class="ma-6" max-width="344">
            <div class="text-center">
              <v-icon class="pt-5" size="100px">mdi-account-circle</v-icon>
            </div>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  สวัดสีดี
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      show: false,
    };
  },
  components: {
    //
  },
};
</script>
<style></style>
