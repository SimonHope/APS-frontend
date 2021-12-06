<template>
  <div id="UserTracking" class="bg-color">
    <NavbarUser />
    <v-card class="cardmargin">
      <h2 class="text-center pa-5">
        สถานะคำร้อง
        <v-divider></v-divider>
      </h2>

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

            <!-- เเสดงขั้นนตอน-->
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- เเสดงเนื้อหาข้างใน -->

            <v-container id="inspire">
              <!-- <v-stepper v-model="listtracking.e1">
                <v-stepper-header>
                  <v-stepper-step :complete="e1 > 1" step="1">
                    Name of step 1
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 2" step="2">
                    Name of step 2
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <v-stepper-content step="1">
                    <v-card class="mb-12" color="grey lighten-1" height="200px">
                      <h2 class="cardshow">รายละเอียด</h2>
                    </v-card>
                    <v-btn color="primary" @click="listtracking.e1 = 2"> Continue </v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    <v-card class="mb-12" color="grey lighten-1" height="200px">
                      <h2 class="cardshow">รายละเอียด</h2>
                    </v-card>
                  </v-stepper-content>

                  <v-stepper-content step="3">
                    <v-card class="mb-12" color="grey lighten-1" height="200px">
                      <h2 class="cardshow">รายละเอียด</h2>
                    </v-card>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper> -->
              <v-stepper alt-labels>
                <v-stepper-header>
                  <v-stepper-step step="3" complete> Ad type </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="4" complete> Ad style </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :rules="[() => false]" step="5">
                    Custom channels
                    <small>Alert message</small>
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="6" complete> Get code </v-stepper-step>
                </v-stepper-header>
              </v-stepper>
            </v-container>

            <!-- เเสดงเนื้อหาข้างใน -->
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

    <v-card class="cardmargin">
      <h2 class="text-center pa-5">
        สถานะการรายงานปัญหาแบบไม่ระบุตัวตน
        <v-divider></v-divider>
      </h2>

      <!-- วนเเสดงรายการสถาณะเอสาร -->

      <v-expansion-panels>
        <v-expansion-panel
          v-for="listReport in listReport"
          :key="listReport.num"
        >
          <v-expansion-panel-header>
            {{ listReport.title }}
            <!-- เเสดงชื่อเอกสาร -->
            <v-spacer></v-spacer>

            <!-- เเสดงขั้นนตอน-->
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- เเสดงเนื้อหาข้างใน -->

            <v-container id="inspire">
              <v-stepper v-model="listReport.e1">
                <v-stepper-header>
                  <v-stepper-step :complete="e1 > 1" step="1">
                    ส่งรายงานปัญหาเเล้ว
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 2" step="2">
                    หน่วยงานรับทราบแล้ว
                  </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <v-stepper-content step="1">
                    <v-card class="mb-12" color="grey lighten-1" height="200px">
                      <h2 class="cardshow">รายละเอียด</h2>
                    </v-card>
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    <v-card class="mb-12" color="grey lighten-1" height="200px">
                      <h2 class="cardshow">รายละเอียด</h2>
                    </v-card>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-container>

            <!-- เเสดงเนื้อหาข้างใน -->
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
import NavbarUser from "../../components/NavbarUser.vue";
export default {
  name: "UserTracking",
  components: {
    NavbarUser,
  },
  data() {
    return {
      listtracking: [
        {
          num: 1,
          title: "เอกสารที่1",
          pointracking: 6,
          checktracking: 3,
          e1: 1,
        },
        {
          num: 2,
          title: "เอกสารที่2",
          pointracking: 2,
          checktracking: 2,
          e1: 1,
        },
        {
          num: 3,
          title: "เอกสารที่2",
          pointracking: 2,
          checktracking: 1,
          e1: 1,
        },
      ],
      listReport: [
        {
          num: 1,
          title: "เหตุเกิดทะเลาะกันในชั้นเรืียน",
          e1: 2,
          detail: "เจอเด็กยกพวกตีกัน ข้างอาคารเรียน 12 ชั้น",
        },
        { num: 2, title: "บัตรประจำตัวนักศึกษาหาย", e1: 1, detail: "" },
        {
          num: 3,
          title: "เจอคนโรคจิตยืนเเก้ผ้าในสถาบันศึกษา",
          e1: 1,
          detail: "",
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
.cardmargin {
  margin: 2%;
}
</style>
