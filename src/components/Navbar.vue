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

      <v-app-bar-nav-icon @click="openmenu = true"> </v-app-bar-nav-icon>

  </v-app-bar>
  <!-- ส่วนของ BAR -->

  <!-- เเถบข้างเวลากดเเฮมไบเกอร์ -->
    <v-navigation-drawer  v-model="openmenu" fixed temporary right  >
      <v-list-item-group 
        v-model="group"
        active-class="deep-purple--text text--accent-4"
        
      >

        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>หน้าหลัก</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item to="/login">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>เข้าสู่ระบบ</v-list-item-title>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-alert-octagon</v-icon>
          </v-list-item-icon>
          <v-list-item-title>เกี่ยวกับ</v-list-item-title>
        </v-list-item>

        <v-list-item to="/rules">
          <v-list-item-icon>
            <v-icon>mdi-archive-check</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อตกลง เเละ นโยบาย</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>
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
  }),

}
</script>

<style>

</style>