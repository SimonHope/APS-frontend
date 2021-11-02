<template>
  <div>
    <!-- 
    <v-row>
      <v-col>
            <v-card class="Billboard" width="100%" height="333px"><Billboard/></v-card>
      </v-col>
    </v-row>
     -->

    <div class="header">
      <a href="#" class="logo">
        <div>
          <v-img height="128" width="128" src="../assets/logo1.png"> </v-img>
        </div>
        APS</a
      >
      <v-spacer></v-spacer>

      <ul>
        <li><a href="/login" class="active">เข้าสู่ระบบ</a></li>
        <li><a href="/" class="active">หน้าหลัก</a></li>
      </ul>
    </div>
    <section>
      <img src="../assets/star.png" id="stars" class="layer" data-speed="-15">
      <img src="../assets/moon.png" id="moon" class="layer" data-speed="-9">

      <img src="../assets/mtb.png" id="mtb" class="layer" data-speed="-3">

      <h2 class="text1" id="text"></h2>
      <img src="../assets/mtf.png" id="mtf" class="layer" data-speed="5">
    </section>
    <div class="sec">
      
        <div class="headtext1">ASP</div>

      <h1>
        คือบริการแพลตฟอร์มการจัดการเอกสารรูปแบบใหม่
        ที่จะช่วยอำนวยความสะดวกให้ผู้ใช้เปิดประสบการใหม่
        ทั้งผู้ใช้บริการและให้บริการ
      </h1>

      
    </div>

    <v-row>
      <v-col align="center">
        <v-btn elevation="2" fab class="btnvison" width="200" height="200">
             <v-img src="../assets/Thunder.png" max-height="300" max-width="300"></v-img> 
             </v-btn>
        <div class="logo1"> รวดเร็ว </div>
          <p>ทำทำงานที่รวดเร็ว
          </p>
      </v-col>
      <v-col align="center">
        <v-btn elevation="2" fab class="btnvison" width="200" height="200">
             <v-img src="../assets/tracking.png" max-height="300" max-width="70"></v-img>
             </v-btn>
        <div class="logo1"> ติดตามได้ </div>
          <p>สามารถติดตามสถานะการทำข้อมูลเอกสาร
          </p>
      </v-col>
      <v-col align="center">
        <v-btn elevation="2" fab class="btnvison"  width="200" height="200">
             <v-img src="../assets/easy.png" max-height="300" max-width="70"></v-img> 
             </v-btn>
        <div class="logo1"> สะดวกง่าย </div>
          <p>ใช้งานงาน เข้าใจง่าย
          </p>
      </v-col>
    </v-row>
    <v-card class="article" >
      <Article/>
      
    </v-card>

    

    <!-- <img src="../assets/RKR.png" id="RKR" /> -->

  
    
  
    

    

    <footer class="buttomm"><FB /></footer>
  </div>
</template>

<script>
// import Billboard from '../components/Billboard.vue'
import Article from '../components/Grouparticle.vue'
// import vision from '../components/vision.vue'
import FB from "../components/Footer.vue";

export default {
  name: "Homepage",
  data() {
    return {
      menu: [
        { menu: "1", text: "หน้าหลัก", route: "/" },
        { menu: "2", text: "เข้าสู่ระบบ", route: "/login" },
        { menu: "3", text: "เกี่ยวกับ", route: "/about" },
        { menu: "4", text: "ข้อตกลง เเละ นโยบาย", route: "/rules" },
      ],
    };
  },
  components: {
    // Billboard,
    Article,
    // vision,
    FB,
  },
};
</script>
<style scope>
</style>
