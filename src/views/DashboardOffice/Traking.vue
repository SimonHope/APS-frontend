<template>
  <div>
    <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="cardshow">
        <h1>
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

              <!-- <v-row>
                <v-col>
                  <v-btn
                    fab disabled
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
              </v-row> -->

              <v-app id="inspire">
                <v-stepper alt-labels>
                  <v-stepper-header>
                    <v-stepper-step 
                    step="1"
                    v-for="listtracking in listtracking.pointracking"
                    :key="listtracking.pointracking"
                    
                    > รับข้อมูล </v-stepper-step>
                    

                    


                  
                  </v-stepper-header>
                </v-stepper>
              </v-app>

              <!-- เเสดงเนื้อหาข้างใน -->
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-main>
    <!-- ส่วนจัดเเสดง -->
  </div>
</template>

<script>
export default {
  name: "Trackingofficer",
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
.top-pic {
}
</style>