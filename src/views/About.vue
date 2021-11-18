<template>
  <v-app class="mybody">
    <v-row>
      <v-col>
        <h1 class="textlogo">เกี่ยวกับเรา</h1>

        <h2 class="textlogo1">
          ผู้พัฒนา <br />
          นายชญานิน บัวสละ
          <br />
          นายณัฐภูมิ ล้อมเขตร
          <br />
          ผู้ช่วยศาสตราจารย์อัครเดช วัชระภูพงษ์ อาจารย์ที่ปรึกษา
        </h2>

        <h2 class="textlogo1">
          สถานที่ <br />
          สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ชั้น 2
          อาคารกรมหลวงนราธิวาสราชนครินทร์ เลขที่ 1 ซอยฉลองกรุง 1 แขวงลาดกระบัง
          เขตลาดกระบัง
        </h2>
        <v-img height="300px" width="700px" src="../assets/RKR.png"></v-img>
        <br />
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
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    Footer,
  }
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
.img-magin {
  margin: 0px 0px 10px 0px;
}
.textlogo1 {
  font-size: 50px;
  margin: 0px 0px 90px 99px;
}
</style>
