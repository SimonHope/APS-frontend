<template>
  <v-app class="mybody">
    <Navbar />
    <v-row>
      <v-col align="center">
        <h1 class="textlogo">สร้างเอกสาร หรือ ติดตามคำร้องได้ง่ายๆ ด้วย</h1>
        <v-img height="300px" width="700px" src="../assets/RKR.png"></v-img>
        <br />
        <v-btn
          class="btn-text"
          height="100px"
          color="#f57c00"
          router-link
          to="/login"
        >
          <h2>เริ่มต้นใช้งานกันเลย!</h2>
        </v-btn>
      </v-col>
      <v-col>
        <section>
          <img
            src="../assets/vision1.png"
            id="mtf"
            class="layer"
            data-speed="-9"
          />
          <img
            src="../assets/vision2.png"
            id="mtf"
            class="layer"
            data-speed="8"
          />
          <img
            src="../assets/vision3.png"
            id="mtf"
            class="layer"
            data-speed="0.9"
          />
          <img src="../assets/mtf.png" id="mtf" class="layer" data-speed="-5" />
          <img src="../assets/mtb.png" id="mtb" class="layer" data-speed="-3" />
        </section>
      </v-col>
    </v-row>

    <v-jumbotron>
      <v-container class="my-16">
        <v-layout>
          <v-flex>
            <h3 class="display-3 text-center">Academic Petition Service</h3>
            <v-divider class="my-3"></v-divider>
            <span class="subheading"
              >โครงงาน “ระบบต้นแบบการบริการคำร้องทางวิชาการ” นี้ถูกจัดทำขึ้น
              เพื่อศึกษาและพัฒนาระบบเทคโนโลยีให้นักศึกษา และ
              บุคลากรที่เกี่ยวข้อง
              นำไปใช้งานได้ง่ายขึ้นร่วมกับการทำงานเกี่ยวกับเอกสารคำร้อง</span
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
              <v-icon class="pt-5" size="100px">mdi-bike-fast</v-icon>
            </div>

            <v-card-title class="justify-center">
              รวดเร็ว
            </v-card-title>

            <v-card-subtitle>
              ด้วยบริการที่ ไม่ต้องใช้คนเดินเรื่องเอกสารคำร้อง
              ส่งเเล้วถึงเป้าหมาย
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card class="ma-6" max-width="344">
            <div class="text-center">
              <v-icon class="pt-5" size="100px">mdi-leaf</v-icon>
            </div>

            <v-card-title class="justify-center">
              สะดวกง่าย
            </v-card-title>

            <v-card-subtitle>
              สะด้วยสบายด้วยการทำเอกสารในรูปแบบ ออนไลน์ 100 %
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card class="ma-6" max-width="344">
            <div class="text-center">
              <v-icon class="pt-5" size="100px">mdi-bell-outline</v-icon>
            </div>

            <v-card-title class="justify-center">
              ติดตามได้
            </v-card-title>

            <v-card-subtitle>
              มีระบบ Tracking ในการติดตามเอกสารว่าถึงขั้นตอนใดบ้าง
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
            เราเชื่อว่าจะทำให้ชีวิตของคุณง่ายขึ้น
            <br />
            ด้วยระบบที่ตอบสนอง การติดตามเอกสาร เเละ ออนไลน์แบบ 100%
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style scoped>
.textlogo {
  margin: 150px 10px 50px 10px;
}
.mybody {
  background: linear-gradient(#ff993371, #ffca95);
}
.btn-text {
  font-size: 48px;
}
h2 {
  color: aliceblue;
}
</style>
