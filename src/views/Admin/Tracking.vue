<template>
  <div id="AdminTracking">
    <NavbarAdmin />
    <!-- ส่วนจัดเเสดง -->

    <v-card class="cardshow">
      <h1 class="text-center">
        สถานะเอกสาร / คำร้อง
        <v-divider></v-divider>
      </h1>

      <!-- วนเเสดงรายการสถาณะเอสาร -->

      <v-expansion-panels>
        <v-expansion-panel
          v-for="listtracking in listtracking"
          :key="listtracking.num"
        >
          <v-expansion-panel-header>
            {{ listtracking.title }}
            <!-- เเสดงชื่อเอกสาร -->
            <v-spacer></v-spacer>
            {{ listtracking.checktracking }} / {{ listtracking.pointracking }}
            <!-- เเสดงขั้นนตอน-->
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- เเสดงเนื้อหาข้างใน -->

            <v-row>
              <v-col>
                <v-btn
                  fab
                  disabled
                  class="tarkingbtn"
                  v-for="listtracking in listtracking.pointracking"
                  :key="listtracking.pointracking"
                >
                  <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn
                  fab
                  class="checkingbtn"
                  color="#43A047"
                  v-for="listtracking in listtracking.checktracking"
                  :key="listtracking.checktracking"
                >
                </v-btn>
              </v-col>
            </v-row>

            <!-- เเสดงเนื้อหาข้างใน -->
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

    <!-- ส่วนจัดเเสดง -->
  </div>
</template>

<script>
import NavbarAdmin from "../../components/NavbarAdmin.vue";
export default {
  name: "AdminTracking",
  components: {
    NavbarAdmin,
  },
  data() {
    return {
      listtracking: [
        { num: 1, title: "เอกสารที่1", pointracking: 6, checktracking: 3 },
        { num: 2, title: "เอกสารที่2", pointracking: 2, checktracking: 2 },
        { num: 3, title: "เอกสารที่2", pointracking: 2, checktracking: 1 },
      ],
    };
  },
};
</script>

<style scoped>
.cardshow {
  margin: 2%;
}
.trackcrad {
  text-align: center;
}
.text-right {
  text-align: left;
}
.tarkingbtn {
  margin: 10px;
}
.checkingbtn {
  margin: 10px;
}
</style>
