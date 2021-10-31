<template>
  <v-app>
    <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="cardshow">
        <h1>
          จัดการแบบฟอร์ม
          <v-divider></v-divider>
        </h1>
        <v-btn width="300" height="150" class="box-margin">
          <h2>
            + <br /><br />
            สร้างเอกสารใหม่
          </h2></v-btn
        >

        <v-card class="box-marginlist">
          <v-row>
            <v-col>ลำดับ</v-col>
            <v-col>รายการ</v-col>
            <v-col>หน่วยงาน</v-col>
            <v-col>ตัวเลือก</v-col>
          </v-row>
        </v-card>

        <v-card class="box-marginlist">
        <v-row v-for="forms in forms" :key="forms">
          <v-col>{{ forms.no }}</v-col>
          <v-col>{{ forms.text }}</v-col>
          <v-col>{{ forms.agency }}</v-col>
          <v-col>
          <v-btn color="#FFEB3B" class="btn-magin"> เเก้ไขข้อมูล</v-btn>
          <v-btn color="#F44336"> ลบข้อมูล</v-btn>
          </v-col>
          
        </v-row>
        
        </v-card>
      </v-card>
    </v-main>
    <!-- ส่วนจัดเเสดง -->
  </v-app>
</template>

<script>
export default {
  name: "CRUDFORMSHOFFICE",
  data() {
    return {
      forms: [
        { no: "1", text: "ฟรอมที่ 1", agency: "ศึกษาทั่วไป", satatus: true },
        { no: "2", text: "ฟรอมที่ 2", agency: "ศึกษาทั่วไป", satatus: true },
        { no: "3", text: "ฟรอมที่ 3", agency: "ศึกษาทั่วไป", satatus: false },
        { no: "4", text: "ฟรอมที่ 4", agency: "ศึกษาทั่วไป", satatus: true },
      ],
    };
  },
  components: {},
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
.box-margin {
  margin: 3%;
}
.box-marginlist {
  margin: 0px 0px 10px 0px;
}
</style>
