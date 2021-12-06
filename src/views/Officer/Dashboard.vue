<template>
  <!-- ส่วนจัดเเสดง -->
  <div id="DashboardOffice" class="bg-color">
    <NavbarOF />
    <v-card class="cardshow">
      <h1 class="text-center">
        Dashboard officer
        <v-divider></v-divider>
      </h1>
      <v-row>
        <v-col>
          <!-- รายงานเอกสารที่ทำไป -->

          <b-card :img-src="require('../../assets/Docicon.png')" 
            img-width=100
            img-height=100
            img-left=true
            class="mb-3 box-margin"
          >
            <b-card-text>
              คำร้องที่ส่ง
            </b-card-text>
          </b-card>
          
          <!-- รายงานเอกสารที่ทำไป -->
        </v-col>
        <v-col>
          <!-- รายงานเอกสารที่ทำไป -->

          <b-card :img-src="require('../../assets/Docicon2.png')" 
            img-width=100
            img-height=100
            img-left=true
            class="mb-3 box-margin"
          >
            <b-card-text>
              รายงานปัญหา
            </b-card-text>
          </b-card>
         
          <!-- รายงานเอกสารที่ทำไป -->
        </v-col>

        <v-col>
          <!-- รายงานเอกสารที่ทำไป -->

          <b-card :img-src="require('../../assets/Docicon3.png')" 
            img-width=100
            img-height=100
            img-left=true
            class="mb-3 box-margin"
          >
            <b-card-text>
              คำร้องที่สำเร็จ
            </b-card-text>
          </b-card>
         
          <!-- รายงานเอกสารที่ทำไป -->
        </v-col>
      </v-row>
    </v-card>
  </div>
  <!-- ส่วนจัดเเสดง -->
</template>

<script>
import NavbarOF from "../../components/NavbarOfficer.vue";
export default {
  name: "DashboardOffice",
  components: {
    NavbarOF,
  },
  data() {
    return {
      datastu: [
        {
          id: "01",
          Fname: "Chayanin Buasala",
          petition: 50,
          report: 10,
          tarcking: 9,
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-color {
  background: #f0f0f0;
  height: 100%;
}
h2 {
  text-align: center;
  padding: 10px;
}
.cardshow {
  margin: 2%;
}
.box-margin{
  margin: 5%;
}
</style>
