<template>
  <div>
    <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="cardshow">
        <h1>
          จัดการ Heard Officer
          <v-divider></v-divider>
        </h1 >
        <v-row > 
          <v-col align ="right" v-if="forms.length">
            <v-btn  class="btn-magin"  width="150" height="50">
              <v-icon  >mdi-account</v-icon>
              <h1>{{ forms.length }}</h1>
            </v-btn>
            
            
            
          </v-col>
          <v-col align ="right">
            <v-btn  class="box-margin" color="#4CAF50">
          <h2>+ เพิ่มรายชื่อใหม่</h2>
          </v-btn>
          </v-col>
        </v-row>

        <v-card class="box-marginlist">
          <v-row>
            <v-col>ลำดับ</v-col>
            <v-col>ชื่อ</v-col>
            <v-col>นามสกุล</v-col>
            <v-col>สถานะ</v-col>
            <v-col>ตัวเลือก</v-col>
          </v-row>
        </v-card>

        <v-row v-for="forms in forms" :key="forms">
            <v-col>{{ forms.no }}</v-col>
            <v-col>{{ forms.Fname }}</v-col>
            <v-col>{{ forms.Lname }}</v-col>
            <v-col>{{ forms.satatus }}</v-col>
            <v-col>
                  <v-btn color="#FFEB3B" class="btn-magin"> เเก้ไขข้อมูล</v-btn>
                  <v-btn color="#F44336"> ลบข้อมูล</v-btn>
            </v-col>
        </v-row>
      </v-card>
    </v-main>
    <!-- ส่วนจัดเเสดง -->
  </div>
</template>

<script>
export default {
  name: "CRUDHOFFICEbyADMIN",
  data() {
    return {
      forms: [
        { no: "1", Fname: "ชญานิน", Lname: "บัวสละ", satatus: "H-Officer" },
        { no: "2", Fname: "ชญานิน", Lname: "บัวสละ", satatus: "H-Officer" },
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
.btn-magin{
  margin: 3%;
  
}
</style>