<template>
  <!-- ส่วนจัดเเสดง -->
  <div id="DashboardSTU">
    <NavbarStu />
    <v-card class="cardshow">
      <h1>
        Dashboard
        <v-divider></v-divider>
      </h1>
      <v-row>
        <v-col>
          <!-- รายงานเอกสารที่ทำไป -->

          <b-card img-src="https://firebasestorage.googleapis.com/v0/b/imgatm.appspot.com/o/Docicon.png?alt=media&token=125027dd-476a-486f-b7c0-89cb888466a8" img-alt="Card image" img-left class="mb-3 box-margin">
            <b-card-text>
              คำร้องที่ส่ง
            </b-card-text>
          </b-card>
          
          <!-- รายงานเอกสารที่ทำไป -->
        </v-col>
        <v-col>
          <!-- รายงานเอกสารที่ทำไป -->

          <b-card img-src="https://firebasestorage.googleapis.com/v0/b/imgatm.appspot.com/o/Docicon.png?alt=media&token=125027dd-476a-486f-b7c0-89cb888466a8" img-alt="Card image" img-left class="mb-3 box-margin">
            <b-card-text>
              รายงานปัญหา
            </b-card-text>
          </b-card>
         
          <!-- รายงานเอกสารที่ทำไป -->
        </v-col>

        <v-col>
          <!-- รายงานเอกสารที่ทำไป -->

          <b-card img-src="https://firebasestorage.googleapis.com/v0/b/imgatm.appspot.com/o/Docicon.png?alt=media&token=125027dd-476a-486f-b7c0-89cb888466a8" img-alt="Card image" img-left class="mb-3 box-margin">
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
import NavbarStu from "../../components/NavbarUser.vue";
export default {
  name: "DashboardSTU",
  components: {
    NavbarStu,
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
      username: "",
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 10px;
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
