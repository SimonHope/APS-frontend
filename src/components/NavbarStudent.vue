<template>
  <div>
  <!-- ส่วนของ BAR -->
  <v-app-bar color="#F86624" fixed >
    <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn fab color="#F86624"  icon>
        <v-img height="100px" width="100px" src="../assets/logo.png"> </v-img>
      </v-btn>
      <v-spacer></v-spacer>
  </v-app-bar>
  
  <!-- ส่วนของ BAR -->

  <!-- เเถบข้างเเสดงเมนู -->
    
    <v-navigation-drawer
      v-model="drawer"
      app
      class="backNav"
      width='300'
    >
      <!-- ส่วนตัวเลือกเมนู -->
     <v-btn fab width="200" height="200" class="profile">
       <v-img height="100px" width="100px" src="../assets/logo.png"> </v-img>
     </v-btn>
     <v-divider></v-divider>
     


        <v-list-item   >
          <v-list-item to="" @click="opDSTU">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item> 
            <!-- <v-btn block @click="opDSTU"> <v-icon>mdi-home</v-icon> Dashboard<v-spacer></v-spacer></v-btn> -->
        </v-list-item> 

       <v-list-item >
         <v-list-item to="" @click="opFSTU">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>คำร้อง / ยื่นคำร้อง</v-list-item-title>
        </v-list-item> 
          <!-- <v-btn block @click="opFSTU"> <v-icon>mdi-home</v-icon> คำร้อง / ยื่นคำร้อง<v-spacer></v-spacer></v-btn> -->
        </v-list-item>

        <v-list-item>
          <v-list-item to="" @click="opRPSTU">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>รายงานเสนอเเนะ</v-list-item-title>
        </v-list-item> 
          <!-- <v-btn block @click="opRPSTU"> <v-icon>mdi-home</v-icon> รายงานเสนอเเนะ<v-spacer></v-spacer></v-btn> -->
        </v-list-item> 

        <v-list-item >
          <v-list-item to="" @click="opTSTU">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>สถานะเอกสาร/คำร้อง</v-list-item-title>
        </v-list-item> 
           <!-- <v-btn block @click="opTSTU"> <v-icon>mdi-home</v-icon>สถานะเอกสาร/คำร้อง <v-spacer></v-spacer></v-btn> -->
        </v-list-item>  
      <!-- ส่วนตัวเลือกเมนู -->
    </v-navigation-drawer>
  <!-- เเถบข้างเเสดงเมนู -->
    
  <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="backedit">
        <DashboardSTU v-if="openDSTU = openDSTU"></DashboardSTU>
        <FormSTU v-if="openFSTU = openFSTU"></FormSTU>
        <ReportSTU v-if="openRPSTU = openRPSTU"></ReportSTU>
        <TrankingSTU v-if="openTSTU = openTSTU"></TrankingSTU>


        
      </v-card>

      
    </v-main>
    <!-- ส่วนจัดเเสดง -->
  </div>
</template>

<script>
import DashboardSTU from "../components/DashboardSTUDENT/Dashboard.vue"
import FormSTU from "../components/DashboardSTUDENT/From.vue"
import ReportSTU from "../components/DashboardSTUDENT/Report.vue"
import TrankingSTU from "../components/DashboardSTUDENT/Traking.vue"
export default {
    name:"NavbarStudent",
    data: () => ({
    drawer: null,
    openDSTU:true,
    openFSTU:null,
    openRPSTU:null,
    openTSTU:null,
  }),
components:{
  DashboardSTU,
  FormSTU,
  ReportSTU,
  TrankingSTU,
},
methods: {
  opDSTU: function() {
    this.openDSTU = true
    if (this.openDSTU == true) {
      this.openFSTU = false,
      this.openRPSTU = false,
      this.openTSTU = false
    }
  },
  opFSTU: function() {
    this.openFSTU = true
    if (this.openFSTU == true) {
      this.openDSTU = false,
      this.openRPSTU = false,
      this.openTSTU = false
    }
  },
  opRPSTU: function() {
    this.openRPSTU = true
    if (this.openRPSTU == true) {
      this.openDSTU = false,
      this.openFSTU = false,
      this.openTSTU = false
    }
  }
  ,
  opTSTU: function() {
    this.openTSTU = true
    if (this.openTSTU == true) {
      this.openDSTU = false,
      this.openFSTU = false,
      this.openRPSTU = false
    }
  }
  
},

}
</script>

<style>
.backedit{
  z-index: -3;
  margin: 2%;
  
}
.profile{
  margin: 100px 0px 50px 0px;
}

</style>