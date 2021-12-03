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
            {{ listtracking.checktracking }} / {{ listtracking.pointracking }}
            <!-- เเสดงขั้นนตอน-->
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- เเสดงเนื้อหาข้างใน -->

            <v-container id="inspire">
              <v-stepper alt-labels>
                <v-stepper-header>
                  <v-stepper-step
                    step="1"
                    v-for="listtracking in listtracking.pointracking"
                    :key="listtracking.pointracking"
                  >
                    รับข้อมูล
                  </v-stepper-step>
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
              <v-stepper alt-labels>
                <v-stepper-header>
                  <v-stepper-step
                    step="1"
                    v-for="listtracking in listtracking.pointracking"
                    :key="listtracking.pointracking"
                  >
                    รับข้อมูล
                  </v-stepper-step>
                </v-stepper-header>
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
        { num: 1, title: "คำร้องที่1", pointracking: 6, checktracking: 3 },
        { num: 2, title: "คำร้องที่2", pointracking: 2, checktracking: 2 },
        { num: 3, title: "คำร้องที่3", pointracking: 2, checktracking: 1 },
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
