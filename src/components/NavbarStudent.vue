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
      <v-list-item-group 
        v-model="group"
      >
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>หน้าหลัก</v-list-item-title>
        </v-list-item> 

        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>หน้าหลัก</v-list-item-title>
        </v-list-item> 
        
      </v-list-item-group>
      <!-- ส่วนตัวเลือกเมนู -->
    </v-navigation-drawer>
  <!-- เเถบข้างเเสดงเมนู -->
    
  <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="backedit">
        <v-responsive :aspect-ratio="9/11">
        
      </v-responsive>
      </v-card>
    </v-main>
    <!-- ส่วนจัดเเสดง -->
  </div>
</template>

<script>
export default {
    name:"NavbarStudent",
    data: () => ({
    drawer: null,
  }),
  methods: {
},

}
</script>

<style>
.backedit{
  z-index: -2;
}

</style>