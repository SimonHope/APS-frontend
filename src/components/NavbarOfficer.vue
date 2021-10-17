<template>
  <div>
  <!-- ส่วนของ BAR -->
  <v-app-bar color="#536DFE" fixed >
    <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn fab color="#536DFE"  icon>
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
          <v-list-item to="" @click="opDash">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item> 
            <!-- <v-btn block @click="opDSTU"> <v-icon>mdi-home</v-icon> Dashboard<v-spacer></v-spacer></v-btn> -->
        </v-list-item> 

       <v-list-item >
         <v-list-item to="" @click="opCRUDF">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จักการ Froms</v-list-item-title>
        </v-list-item> 
          <!-- <v-btn block @click="opFSTU"> <v-icon>mdi-home</v-icon> คำร้อง / ยื่นคำร้อง<v-spacer></v-spacer></v-btn> -->
        </v-list-item>

        <v-list-item>
          <v-list-item to="" @click="opTranking">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>สถานะเอกสาร/คำร้อง</v-list-item-title>
        </v-list-item> 
          <!-- <v-btn block @click="opRPSTU"> <v-icon>mdi-home</v-icon> รายงานเสนอเเนะ<v-spacer></v-spacer></v-btn> -->
        </v-list-item> 
      <!-- ส่วนตัวเลือกเมนู -->
    </v-navigation-drawer>
  <!-- เเถบข้างเเสดงเมนู -->
    
  <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="backedit">
        <Dashboard v-if="openDash = openDash"></Dashboard>
        <CRUDForms v-if="openCRUDF = openCRUDF"></CRUDForms>
        <Traking v-if="openTranking = openTranking"></Traking>


        
      </v-card>

      
    </v-main>
    <!-- ส่วนจัดเเสดง -->
  </div>
</template>

<script>
import Dashboard from "../components/DashboardOffice/Dashboard.vue"
import CRUDForms from "../components/DashboardOffice/CRUDForms.vue"
import Traking from "../components/DashboardOffice/Traking.vue"
export default {
    name:"NavbarOffice",
    data: () => ({
    drawer: null,
    openDash:true,
    openTranking:null,
    openCRUDF:null,
  }),
components:{
  Dashboard,
  CRUDForms,
  Traking,
  
},
methods: {
  opDash: function() {
    this.openDash = true
    if (this.openDash == true) {
      this.openTranking = false,
      this.openCRUDF = false
    }
  },
  opCRUDF: function() {
    this.openCRUDF = true
    if (this.openCRUDF == true) {
      this.openTranking = false,
      this.openDash = false
    }
  },
  opTranking: function() {
    this.openTranking = true
    if (this.openTranking == true) {
      this.openDash = false,
      this.openCRUDF = false
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