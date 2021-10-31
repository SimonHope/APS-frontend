<template>
  <div>
    
    <div>
      
    <!-- ส่วนของ BAR -->
  <v-app-bar color="#F86624" fixed >
    <v-spacer></v-spacer>
      <v-btn icon href=#top>
        <v-img height="128" width="128" src="../assets/logo.png"> </v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>



      

      <v-app-bar-nav-icon @click="openmenu = true"> </v-app-bar-nav-icon>

  </v-app-bar>
  <!-- ส่วนของ BAR -->

  <!-- เเถบข้างเวลากดเเฮมไบเกอร์ -->
    <v-navigation-drawer  v-model="openmenu" fixed temporary right  >
      <v-list-item-group 
        v-model="group"
        active-class="deep-purple--text text--accent-4"
        
      >

        <v-list-item 
        v-for="menu in menu"
          :key="menu.numforms"
          router :to="menu.route"
        >
          <v-list-item  >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title >{{menu.text}}</v-list-item-title>
        </v-list-item> 
    
        </v-list-item> 
        
      </v-list-item-group>
      



    </v-navigation-drawer>
    <!-- เเถบข้างเวลากดเเฮมไบเกอร์ -->

  </div>

  </div>
</template>

<script>
export default {
    name:'Navbar',
    data: () => ({
    openmenu: false,
    menu : [
        {menu:'1',text:'หน้าหลัก', route:'/'},
        {menu:'2',text:'เข้าสู่ระบบ', route:'/login'},
        {menu:'3',text:'เกี่ยวกับ', route:'/about'},
        {menu:'4',text:'ข้อตกลง เเละ นโยบาย', route:'/rules'},
        
      ],
      
  }),

}
</script>

<style>

</style>

