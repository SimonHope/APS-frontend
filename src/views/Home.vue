<template>
<div>
  <!-- พื้นหลังขยับได้ -->
  <div class="bbackpalalax">
    <v-parallax 
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
    </v-parallax>
  </div>
  <!-- พื้นหลังขยับได้ -->

  <!-- ตัวรูปสไลด์ -->
  <div class="banner">
    <v-carousel :show-arrows="false" hide-delimiter-background cycle >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
  </div>
  <!-- ตัวรูปสไลด์ -->

  <!-- ตัวบทความ -->
  <div class="content">
    <v-row>
      <v-col align ="center">บทความ1</v-col>
      <v-col align ="center">บทความ2</v-col>
      <v-col align ="center">บทความ3</v-col>
    </v-row>
  </div>
  <!-- ตัวบทความ -->

  <!-- จุดเเข็ง -->
  <div class="strength">
    
    <v-row>
      <v-col align ="center">
        <v-btn fab width="230" height="230">

        </v-btn>
        <h1>รวดเร็ว</h1>
        <h5>Description</h5>
      </v-col>
      <v-col align ="center">
        <v-btn fab width="230" height="230">
          
        </v-btn>
        <h1>รวดเร็ว</h1>
        <h5>Description</h5>

      </v-col>
      <v-col align ="center">
        <v-btn fab width="230" height="230">
          
        </v-btn>
        <h1>รวดเร็ว</h1>
        <h5>Description</h5>

      </v-col>
    </v-row>
    <br>
    <v-row>
      <v-col align ="center">
        <v-btn fab width="230" height="230"></v-btn>
        <h1>รวดเร็ว</h1>
        <h5>Description</h5>
      </v-col>
      <v-col align ="center">
        <v-btn fab width="230" height="230">
          
        </v-btn>
        <h1>รวดเร็ว</h1>
        <h5>Description</h5>

      </v-col>
      <v-col align ="center">
        <v-btn fab width="230" height="230">
          
        </v-btn>
        <h1>รวดเร็ว</h1>
        <h5>Description</h5>

      </v-col>
    </v-row>

  </div>
  <!-- จุดเเข็ง -->

<!-- footer -->
  <br>
  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
      align ="center"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
  <!-- footer -->
  

</div>
</template>

<script>
export default {
  name: "Home",
  data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            
          },
        ],
        
      }
    },
    
  
};
</script>
<style>
body {
  background-color:#cecece;
}
.content {
  margin: 1% 10% 0% 10%;
  background-color:#7C7A7A;
  
}
.banner {
  margin: 0.5% 10% 0% 10%;

}
.bbackpalalax {
  position: absolute;
  width: 1920px;
  height: 1080px;
}
.strength {
  margin: 1% 10% 0% 10%;
  background-color:#494949;

}
h1 {
  margin: 3% 10% 0% 10%;
  color: rgb(255, 255, 255);
}
h5 {
  color: rgb(255, 255, 255);
}

</style>
