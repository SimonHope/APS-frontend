<template>
  <div>
    <!-- ส่วนจัดเเสดง -->
    <v-main >
      <v-card class="cardshow">
        <h1>
          รายงานการส่งทั้งหมด
          <v-divider></v-divider>
        </h1>
        <v-row>
          <v-col align="center" v-if="forms.length">
            <v-btn class="btn-magin" width="150" height="50">
              <v-icon>mdi-file</v-icon>
              <h1>{{ forms.length }}</h1>
            </v-btn>
          </v-col>
        </v-row>

        <v-card class="box-marginlist">
          <v-row>
            <v-col align ="center">ลำดับ</v-col>
            <v-col align ="center">รายการ</v-col>
          </v-row>
        </v-card>

        <v-expansion-panels>
          <v-expansion-panel v-for="forms in forms" :key="forms">
            <v-expansion-panel-header>
              <v-row>
                <v-col align ="center">{{ forms.no_id }}</v-col>
                <v-col align ="center">{{ forms.list }}</v-col>
              </v-row>

              <!-- เเสดงชื่อเอกสาร -->

              <!-- เเสดงขั้นนตอน-->
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <!-- เเสดงเนื้อหาข้างใน -->
              <v-row>
                <v-col
                  v-for="forms in forms.pointracking"
                  :key="forms.pointracking"
                  v-model="forms.pointracking"
                >
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  

                  
                </v-col>
              </v-row>
              <v-row>
                
                <v-col align ="center">
                  <v-btn color="#FFEB3B" class="btn-magin"> เเก้ไขข้อมูล</v-btn>
                  <v-btn color="#F44336"> ลบข้อมูล</v-btn>
                </v-col>
              </v-row>

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
  name: "VIWEALLSUBMITADMIN",
  data() {
    return {
      forms: [
        {
          no_id: "62015021",
          list: "คำขอการเลื่อนชั้นปี",
          satatus: "H-Officer",
          pointracking: 6,
          checktracking: 3,
        },
        {
          no_id: "62015038",
          list: "ยื่นคำร้องเปลืยนเกรด",
          satatus: "H-Officer",
          pointracking: 4,
          checktracking: 3,
        },
      ],
    };
  },
  components: {},
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
  margin: 8%;
}
.box-margin {
  margin: 3%;
}
.box-marginlist {
  margin: 0px 0px 10px 0px;
}
.btn-magin {
  margin: 3%;
}
</style>

