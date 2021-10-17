<template>
  <div>
  <!-- ส่วนของ BAR -->
  <v-app-bar color="#E53935" fixed >
    <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn fab color="#E53935"  icon>
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
          <v-list-item to="" @click="OPDash">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item> 
            <!-- <v-btn block @click="opDSTU"> <v-icon>mdi-home</v-icon> Dashboard<v-spacer></v-spacer></v-btn> -->
        </v-list-item> 

       <v-list-item >
         <v-list-item to="" @click="OPCRUDG">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการกลุ่ม / หน่วยงาน</v-list-item-title>
        </v-list-item> 
          <!-- <v-btn block @click="opFSTU"> <v-icon>mdi-home</v-icon> คำร้อง / ยื่นคำร้อง<v-spacer></v-spacer></v-btn> -->
        </v-list-item>

        <v-list-item>
          <v-list-item to="" @click="OPCRUDHOF">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จักการ HeadOffice</v-list-item-title>
        </v-list-item> 
          <!-- <v-btn block @click="opRPSTU"> <v-icon>mdi-home</v-icon> รายงานเสนอเเนะ<v-spacer></v-spacer></v-btn> -->
        </v-list-item> 

        <v-list-item >
          <v-list-item to="" @click="OPCRUDOF">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จักการหัว Office</v-list-item-title>
        </v-list-item> 
           <!-- <v-btn block @click="opTSTU"> <v-icon>mdi-home</v-icon>สถานะเอกสาร/คำร้อง <v-spacer></v-spacer></v-btn> -->
        </v-list-item> 

        <v-list-item >
          <v-list-item to="" @click="OPBLOG">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จักการหัวบทความ</v-list-item-title>
        </v-list-item> 
        </v-list-item>

        <v-list-item >
          <v-list-item to="" @click="OPTRACK">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>สถานะเอกสาร/คำร้อง</v-list-item-title>
        </v-list-item> 
        </v-list-item>
  

      <!-- ส่วนตัวเลือกเมนู -->
    </v-navigation-drawer>
  <!-- เเถบข้างเเสดงเมนู -->
    
  <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="backedit">
        <SPDashboard v-if="OPSPDash = OPSPDash"></SPDashboard>
        <SPCRUDOF v-if="OPSPCRUDOF = OPSPCRUDOF"></SPCRUDOF>
        <SPCRUDHOF v-if="OPSPCRUDHOF = OPSPCRUDHOF"></SPCRUDHOF>
        <SPCRUDG v-if="OPSPCRUDG = OPSPCRUDG"></SPCRUDG>
        <SPBLOG v-if="OPSPBLOG = OPSPBLOG"></SPBLOG>
        <SPAllSUB v-if="OPSPAllSUB = OPSPAllSUB"></SPAllSUB>
        <SPTRACK v-if="OPSPTRACK = OPSPTRACK"></SPTRACK>
      </v-card>
    </v-main>
    <!-- ส่วนจัดเเสดง -->
  </div>
</template>

<script>
import SPDashboard from "../components/DashboardSuper/Dashboard.vue"
import SPCRUDOF from "../components/DashboardSuper/CRUDOffice.vue"
import SPCRUDHOF from "../components/DashboardSuper/CRUDHOffice.vue"
import SPCRUDG from "../components/DashboardSuper/CRUDGroup.vue"
import SPBLOG from "../components/DashboardSuper/BLOG.vue"
import SPAllSUB from "../components/DashboardSuper/AllSUBmissions.vue"
import SPTRACK from "../components/DashboardSuper/Traking.vue"

export default {
    name:"NavbarSuper",
    data: () => ({
    drawer: null,
    OPSPDash:true,
    OPSPCRUDOF:null,
    OPSPCRUDHOF:null,
    OPSPCRUDG:null,
    OPSPAllSUB:null,
    OPSPTRACK:null,
    OPSPBLOG:null,
    
  }),
components:{
  SPDashboard,
  SPCRUDOF,
  SPCRUDHOF,
  SPCRUDG,
  SPBLOG,
  SPAllSUB,
  SPTRACK,
},
methods: {
  OPDash: function() {
    this.OPSPDash = true
    if (this.OPSPDash == true) {
        this.OPSPCRUDOF = false,
        this.OPSPCRUDHOF = false,
        this.OPSPCRUDG = false,
        this.OPSPAllSUB = false,
        this.OPSPTRACK = false,
        this.OPSPBLOG = false
        }
    },
    OPCRUDG: function() {
    this.OPSPCRUDG = true
    if (this.OPSPCRUDG == true) {
        this.OPSPCRUDOF = false,
        this.OPSPCRUDHOF = false,
        this.OPSPDash = false,
        this.OPSPAllSUB = false,
        this.OPSPTRACK = false,
        this.OPSPBLOG = false
        }
    },
    OPCRUDHOF: function() {
    this.OPSPCRUDHOF = true
    if (this.OPSPCRUDHOF == true) {
        this.OPSPCRUDOF = false,
        this.OPSPCRUDG = false,
        this.OPSPDash = false,
        this.OPSPAllSUB = false,
        this.OPSPTRACK = false,
        this.OPSPBLOG = false
        }
    },
    OPCRUDOF: function() {
    this.OPSPCRUDOF = true
    if (this.OPSPCRUDOF == true) {
        this.OPSPCRUDHOF = false,
        this.OPSPCRUDG = false,
        this.OPSPDash = false,
        this.OPSPAllSUB = false,
        this.OPSPTRACK = false,
        this.OPSPBLOG = false
        }
    },
    OPBLOG: function() {
    this.OPSPBLOG = true
    if (this.OPSPBLOG == true) {
        this.OPSPCRUDHOF = false,
        this.OPSPCRUDG = false,
        this.OPSPDash = false,
        this.OPSPAllSUB = false,
        this.OPSPTRACK = false,
        this.OPSPCRUDOF = false
        }
    },
    OPTRACK: function() {
    this.OPSPTRACK = true
    if (this.OPSPTRACK == true) {
        this.OPSPCRUDHOF = false,
        this.OPSPCRUDG = false,
        this.OPSPDash = false,
        this.OPSPAllSUB = false,
        this.OPSPBLOG = false,
        this.OPSPCRUDOF = false
        }
    },


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