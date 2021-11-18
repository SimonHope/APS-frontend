<template>
  <v-main class="mybody">
    <v-row>
      <v-col align="center">
        <h1 class="textlogo">สร้างเอกสาร หรือ ติดตามคำร้องได้ง่ายๆ ด้วย</h1>
        <v-img height="300px" width="700px" src="../assets/RKR.png"></v-img>
          <br>
        <v-btn class="btn-text" width="400px" height="100px" color="#f57c00" router-link to="/login" > <h1>เริ่มต้นใช้งานกันเลย!</h1> </v-btn>


      </v-col>
      <v-col >
        <section>
        <img src="../assets/vision1.png" id="mtf" class="layer" data-speed="-9" />
        <img src="../assets/vision2.png" id="mtf" class="layer" data-speed="8" />
        <img src="../assets/vision3.png" id="mtf" class="layer" data-speed="0.9" />
        <img src="../assets/mtf.png" id="mtf" class="layer" data-speed="-5" />
         <img src="../assets/mtb.png" id="mtb" class="layer" data-speed="-3">
        </section>
      </v-col>
    </v-row>
    <Footer />
  </v-main>
    
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "home",
  data() {
    return {
     
    };
  },
  components: {
    Footer,
  },
};
</script>
<style>
.textlogo{
  margin: 150px 10px 50px 10px;
}
.mybody {
  background: linear-gradient(#ff993371, #f57b007e);
  
}
.btn-text{
  font-size: 48px;
}
</style>
