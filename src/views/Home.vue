<template>
  <div class="home">
    <v-carousel
      cycle
      show-arrows-on-hover
      hide-delimiter-background
      height="92vh"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

    <v-jumbotron>
      <v-container class="my-16">
        <v-layout>
          <v-flex>
            <h3 class="display-3 text-center">Academic Petition Service</h3>
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
      <h3 class="display-6 text-center">Feature</h3>
      <v-row no-gutters>
        <v-col md="4">
          <v-card class="ma-6" max-width="344">
            <div class="text-center">
              <v-icon class="pt-5" size="100px">mdi-clock</v-icon>
            </div>

            <v-card-title class="justify-center">
              Featrue1
            </v-card-title>

            <v-card-subtitle>
              Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis
              maluisset molestiae id, ad semper lobortis cum. At impetus
              detraxit incorrupte usu, repudiare assueverit ex eum, ne nam
              essent vocent admodum.Lorem ipsum dolor sit amet, pri veniam
              forensibus id. Vis maluisset molestiae id, ad semper lobortis cum.
              At impetus detraxit incorrupte
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card class="ma-6" max-width="344">
            <div class="text-center">
              <v-icon class="pt-5" size="100px">mdi-truck-fast</v-icon>
            </div>

            <v-card-title class="justify-center">
              Featrue1
            </v-card-title>

            <v-card-subtitle>
              Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis
              maluisset molestiae id, ad semper lobortis cum. At impetus
              detraxit incorrupte usu, repudiare assueverit ex eum, ne nam
              essent vocent admodum.Lorem ipsum dolor sit amet, pri veniam
              forensibus id. Vis maluisset molestiae id, ad semper lobortis cum.
              At impetus detraxit incorrupte
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card class="ma-6" max-width="344">
            <div class="text-center">
              <v-icon class="pt-5" size="100px">mdi-bell-outline</v-icon>
            </div>

            <v-card-title class="justify-center">
              Featrue3
            </v-card-title>

            <v-card-subtitle>
              Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis
              maluisset molestiae id, ad semper lobortis cum. At impetus
              detraxit incorrupte usu, repudiare assueverit ex eum, ne nam
              essent vocent admodum.Lorem ipsum dolor sit amet, pri veniam
              forensibus id. Vis maluisset molestiae id, ad semper lobortis cum.
              At impetus detraxit incorrupte
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-parallax
      height="300"
      src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">
            Academic Petition Service
          </h1>
          <h4 class="subheading">
            We believe the right form makes all the difference.
            <br />
            Go from busywork to less work with powerful forms that use
            conditional
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
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
    };
  },
  components: {
    //
  },
};
</script>
<style></style>
