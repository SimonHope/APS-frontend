<template>
  <!-- ส่วนจัดเเสดง -->
  <div id="Trackingofficer">
    <NavbarOF />
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

            <v-container id="inspire">
              <!-- ส่วนเเสดงเวลากดดู -->
              <v-stepper alt-labels v-model="listtracking.checktracking">
                <v-stepper-header>
                  <v-stepper-step 
                  :complete="listtracking.checktracking > 1"
                  step="1"
                  color="green"
                   > Ad type </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step
                  :complete="listtracking.checktracking > 2"
                  step="2" 
                  color="green"
                  > Ad style </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step 
                  :complete="listtracking.checktracking > 3"
                  step="3"
                  color="green">
                    Ad style
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step 
                  :complete="listtracking.checktracking > 4"
                  step="4"
                  color="green"> Ad style </v-stepper-step>

                  
                </v-stepper-header>
              </v-stepper>
              <!-- ส่วนเเสดงเวลากดดู -->
            </v-container>

            <!-- เเสดงเนื้อหาข้างใน -->
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
  <!-- ส่วนจัดเเสดง -->
</template>

<script>
import NavbarOF from "../../components/NavbarOfficer.vue";
export default {
  name: "Trackingofficer",
  components: {
    NavbarOF,
  },
  data() {
    return {
      listtracking: [
        { num: 1, title: "เอกสารที่1", pointracking: 1, checktracking: 2 },
        { num: 2, title: "เอกสารที่2", pointracking: 2, checktracking: 2 },
        { num: 3, title: "เอกสารที่2", pointracking: 2, checktracking: 4 },
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
