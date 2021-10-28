<template>
  <div>
    <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="cardshow">
        <h1>
      จัดการแบบฟอร์ม
      <v-divider></v-divider>
        </h1>
        <v-btn width="300" height="150" class="box-margin"> <h2> + <br><br> สร้างเอกสารใหม่</h2></v-btn>

        


        <v-card class="box-marginlist">
          <v-row>
          <v-col>ลำดับ</v-col>
          <v-col>รายการ</v-col>
          <v-col>หน่วยงาน</v-col>
          <v-col>สถานะ</v-col>
        </v-row>
        </v-card>
        <v-row v-for="forms in forms" :key="forms">
          <v-col>{{forms.no}}</v-col>
          <v-col>รายการ</v-col>
          <v-col>หน่วยงาน</v-col>
          <v-col>สถานะ</v-col>
        </v-row>
        
      </v-card>
    </v-main>
    <!-- ส่วนจัดเเสดง -->
    
    

    
    
  </div>
</template>

<script>

export default {
    name:'CRUDFORMSOFFICE',
    data() {
    return {
      forms:[
        {no:'1',text:'ฟรอมที่ 1',},
        {no:'2',text:'ฟรอมที่ 2',},
        {no:'3',text:'ฟรอมที่ 3',},
        {no:'4',text:'ฟรอมที่ 4',},
      ],
    }
  },
  components: {
  },

}
</script>

<style scoped>
h1{
  text-align: left;
  padding: 10px;
}
.cardshow{
  margin: 8%;
}
.box-margin{
  margin: 3%;
}
.box-marginlist{
  margin: 0px 0px 10px 0px;
}
</style>