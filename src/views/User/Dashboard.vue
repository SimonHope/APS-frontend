<template>
  <div id="DashboardSTU" class="bg-color">
    <NavbarUser />
    <v-card class="cardmargin">
      <h1 class="text-center p-2">
        Dashboard
      </h1>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <!-- รายงานเอกสารที่ทำไป -->
          <v-card
            width="300px"
            height="400px"
            v-for="datastu in datastu"
            :key="datastu"
            class="cardmargin"
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
            <h2>เอกสารที่ทำการทั้งหมด</h2>
          </v-card>
          <!-- รายงานเอกสารที่ทำไป -->
        </v-col>
        <v-col>
          <!-- รายงานเอกสารที่ทำไป -->
          <v-card
            width="300px"
            height="400px"
            v-for="datastu in datastu"
            :key="datastu"
            class="cardmargin"
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

            <!-- <h2>{{ datastu.report }}</h2> -->
          </v-card>
          <!-- รายงานเอกสารที่ทำไป -->
        </v-col>

        <v-col>
          <!-- รายงานเอกสารที่ทำไป -->
          <v-card
            width="300px"
            height="400px"
            v-for="datastu in datastu"
            :key="datastu"
            class="cardmargin"
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

            <!-- <h2>{{ datastu.tarcking }}</h2> -->
          </v-card>
          <!-- รายงานเอกสารที่ทำไป -->
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import NavbarUser from "../../components/NavbarUser.vue";
export default {
  name: "DashboardSTU",
  components: {
    NavbarUser,
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
.bg-color {
  background: #f0f0f0;
  height: 100%;
}
.cardmargin {
  margin: 2%;
}
</style>
