<template>
  <!-- ส่วนจัดเเสดง -->
  <div id="DashboardOffice">
    <NavbarOF />
    <v-card class="cardshow">
      <h1 class="text-center">
        กระดานข่าวสาร officer
        <v-divider></v-divider>
      </h1>
      <v-row>
        <v-col align="center">
          <!-- รายงานเอกสารที่ทำไป -->
          <v-card
            width="300px"
            height="400px"
            v-for="datastu in datastu"
            :key="datastu"
            class="cardmagin"
          >
            <v-progress-circular
              :rotate="90"
              :size="180"
              :width="15"
              :value="datastu.petition"
              color="#C62828"
              class="progressmagin"
            >
              <h1>{{ datastu.petition }}</h1>
            </v-progress-circular>
            <h2>แบบฟอร์มทั้งหมด</h2>
          </v-card>
          <!-- รายงานเอกสารที่ทำไป -->
        </v-col>
        <v-col align="center">
          <!-- รายงานเอกสารที่ทำไป -->
          <v-card
            width="300px"
            height="400px"
            v-for="datastu in datastu"
            :key="datastu"
            class="cardmagin"
          >
            <v-progress-circular
              :rotate="90"
              :size="180"
              :width="15"
              :value="datastu.report"
              color="#D81B60"
              class="progressmagin"
            >
              <h1>{{ datastu.report }}</h1>
            </v-progress-circular>
            <h2>การรายงานทั้งหมด</h2>
          </v-card>
          <!-- รายงานเอกสารที่ทำไป -->
        </v-col>
        <v-col align="center">
          <!-- รายงานเอกสารที่ทำไป -->
          <v-card
            width="300px"
            height="400px"
            v-for="datastu in datastu"
            :key="datastu"
            class="cardmagin"
          >
            <v-progress-circular
              :rotate="90"
              :size="180"
              :width="15"
              :value="datastu.report"
              color="#448AFF"
              class="progressmagin"
            >
              <h1>{{ datastu.tarcking }}</h1>
            </v-progress-circular>
            <h2>เอกสารที่กำลังดำเนินการ</h2>
          </v-card>
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
h1 {
  text-align: left;
  padding: 10px;
}
.cardshow {
  margin: 8%;
}
.progressmagin {
  margin: 20%;
}
.cardmagin {
  margin: 8%;
}
</style>
