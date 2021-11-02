<template>
  <v-app >
    <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="cardshow">
        <h1>
          จัดการ Officer
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
            <v-btn  class="box-margin" color="#4CAF50" @click="dialogadd = !dialogadd">
          <h2>+ เพิ่มรายชื่อใหม่</h2>
          </v-btn>
          </v-col>
        </v-row>

        <v-card class="box-marginlist">
          <v-row>
            <v-col align ="center">ลำดับ</v-col>
            <v-col align ="center">ชื่อ</v-col>
            <v-col align ="center">นามสกุล</v-col>
            <v-col align ="center">สถานะ</v-col>
            <v-col align ="center">ตัวเลือก</v-col>
          </v-row>
        </v-card>

        <v-row v-for="forms in forms" :key="forms">
            <v-col align ="center" >{{ forms.no }}</v-col>
            <v-col align ="center" >{{ forms.Fname }}</v-col>
            <v-col align ="center" >{{ forms.Lname }}</v-col>
            <v-col align ="center">{{ forms.satatus }}</v-col>
            <v-col>
                  <v-btn color="#FFEB3B" class="btn-magin" @click="dialog = !dialog" > เเก้ไข</v-btn>
                  <v-btn color="#F44336" @click="dialogdel = !dialogdel"> ลบ</v-btn>
            </v-col>
        </v-row>





        <!-- ส่วนจัดเเสดงเวลากดเเก้ไข -->

        <v-dialog v-model="dialog" persistent width="800" >
          
          <v-card >
            <h1>จัดการข้อมูล  Officer</h1>
            
            <v-divider></v-divider>
            <v-btn fab width="250" height="250" left class="text-pprofile-magin">fuck</v-btn>

            <v-text-field
            label="ชื่อ"
            outlined
            readonly
            class="text-pprofile-magin"
          ></v-text-field>
          
          <v-text-field
            label="นามสกุล"
            outlined
            readonly
            class="text-pprofile-magin"
          ></v-text-field>
          <v-text-field
            label="หน่วยงาน"
            outlined
            readonly
            class="text-pprofile-magin"
          ></v-text-field>

          <v-textarea
          label="คำอธิบาย"
          auto-grow
          outlined
          rows="1"
          row-height="15"
          class="text-pprofile-magin"
        ></v-textarea>
            <v-divider></v-divider>
            <v-btn color="green darken-1" text @click="dialog = false">
              ตกลง
            </v-btn>
            <v-btn color="red darken-1" text @click="dialog = false">
              ยกเลิก
            </v-btn>
          </v-card>
        </v-dialog>
        <!-- ส่วนจัดเเสดงเวลากดเเก้ไข -->

        <!-- เพิ่มข้อมูล Head officer -->
        <v-dialog v-model="dialogadd" persistent width="800" >
          
          <v-card >
            <h1>เพิ่มข้อมูล Head officer</h1>
            
            <v-divider></v-divider>
            <v-btn fab width="250" height="250" left class="text-pprofile-magin">fuck</v-btn>

            <v-text-field
            label="ชื่อ"
            outlined
            readonly
            class="text-pprofile-magin"
          ></v-text-field>
          
          <v-text-field
            label="นามสกุล"
            outlined
            readonly
            class="text-pprofile-magin"
          ></v-text-field>
          <v-text-field
            label="หน่วยงาน"
            outlined
            readonly
            class="text-pprofile-magin"
          ></v-text-field>

          <v-textarea
          label="คำอธิบาย"
          auto-grow
          outlined
          rows="1"
          row-height="15"
          class="text-pprofile-magin"
        ></v-textarea>
            <v-divider></v-divider>
            <v-btn color="green darken-1" text @click="dialogadd = false">
              ตกลง
            </v-btn>
            <v-btn color="red darken-1" text @click="dialogadd = false">
              ยกเลิก
            </v-btn>
          </v-card>
        </v-dialog>

        <!-- ลบ Head officer -->

        <v-dialog v-model="dialogdel" persistent width="800" >
          
          <v-card >
            <h1>ยืนยัน</h1>
            
            <v-divider></v-divider>
            <h2>ต้องการลบข้อมูลของ  {{"ตรงนี้ใส่ index คนที่จะลบ"}} </h2>

          
            <v-divider></v-divider>
            <v-btn color="green darken-1" text @click="dialogdel = false">
              ตกลง
            </v-btn>
            <v-btn color="red darken-1" text @click="dialogdel = false">
              ยกเลิก
            </v-btn>
          </v-card>
        </v-dialog>


        <!-- ลบ Head officer -->





      </v-card>
    </v-main>
    <!-- ส่วนจัดเเสดง -->
  </v-app>
</template>

<script>
export default {
  name: "CRUDOFFICEbyH",
  data() {
    return {
      forms: [
        { no: "1", Fname: "ชญานิน", Lname: "บัวสละ", satatus: "H-Officer" },
        { no: "2", Fname: "ชญานิน", Lname: "บัวสละ", satatus: "H-Officer" },
      ],
      dialog:false,
      dialogadd:false,
      dialogdel:false,
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
.btn-magin{
  margin: 3%;
  
}
.btn-groupmargin {
  margin: 3%;
}
.box-margin {
  margin: 10px 0px 10px 0px;
}
.Gprofile-margin1 {
  margin: 50%;
}
.Gprofile-marginin {
  margin: 30%;
}
.text-pprofile-magin{
  margin: 5%;
}
.background-1 {
}
</style>