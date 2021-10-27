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
      color="#E53935"
      width='300'
    >
      <!-- ส่วนตัวเลือกเมนู -->
     <v-btn fab width="200" height="200" class="profile">
       <v-img height="100px" width="100px" src="../assets/logo.png"> </v-img>
     </v-btn>
     <v-divider></v-divider>
     


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
      <!-- ส่วนตัวเลือกเมนู -->
    </v-navigation-drawer>
  <!-- เเถบข้างเเสดงเมนู -->
    
  
  </div>
</template>

<script>

export default {
    name:"NavbarOffice",
    data: () => ({
    drawer: null,
    menu : [
        {menu:'1',text:'Dashboard', route:'/DashboarAD'},
        {menu:'2',text:'จัดการ Group', route:'/Group'},
        {menu:'3',text:'จัดการ Froms', route:'/FormsAD'},
        {menu:'4',text:'จัดการ Office', route:'/OfficerAD'},
        {menu:'5',text:'จัดการ HeadOffice', route:'/HofficerAD'},
        {menu:'6',text:'สถานะเอกสาร/คำร้อง', route:'/tarckingAD'},
        {menu:'7',text:'จัดการ บทความ', route:'/Blog'},
      ]
  }),
}
</script>

<style>
.profile{
  margin: 100px 0px 50px 0px;
}
.navback{
  z-index: -1;
}

</style>