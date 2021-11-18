<template>
  <v-app class="mybody">
    

    
    
      <v-row>
      <v-col align="center">
        <h1 class="textlogo">สร้างเอกสาร หรือ ติดตามคำร้องได้ง่ายๆ ด้วย</h1>
        <v-img height="300px" width="700px" src="../assets/RKR.png"></v-img>
          <br>
        <v-btn class="btn-text" width="400px" height="100px" color="#f57c00" router-link to="/login" >  เริ่มต้นใช้งานกันเลย!</v-btn>
      
      
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
    
        
      
    

    <footer class="FB"><FB /></footer>
  </v-app>
</template>

<script>
import FB from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    FB,
  },
};
</script>
<style scoped>
.mybody {
  background: linear-gradient(#ff993371, #f57b007e);
}
.backgroundcolor {
  background-color: #f57c00;
}
.text-magin {
  margin: 20px;
  color: #ffffff;
}
.textlogo {
  font-size: 50px;
  margin: 200px 0px 90px 99px;
}
.btn-text {
  font-size: 30px;
  margin: 20px 0px 0px 0px;
  z-index: 999;
  
}
.FB {
  z-index: 99999;
}
.img-magin {
  margin: 0px 0px 10px 0px;
}
</style>