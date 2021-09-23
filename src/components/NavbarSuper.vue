<template>
  <div>
    <!-- ส่วนของ BAR -->
  <v-app-bar color="#E53935" fixed >

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-img height="50" width="34" src="../assets/logo.png"> </v-img>
      </v-btn>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click="openmenu = true"> </v-app-bar-nav-icon>

  </v-app-bar>
  <!-- ส่วนของ BAR -->

  <!-- เเถบข้างเวลากดเเฮมไบเกอร์ -->
    <v-navigation-drawer v-model="openmenu" absolute temporary right>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>หน้าหลัก</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>เข้าสู่ระบบ</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>เข้าสู่ระบบ</v-list-item-title>
        </v-list-item>


      </v-list-item-group>



    </v-navigation-drawer>
    <!-- เเถบข้างเวลากดเเฮมไบเกอร์ -->

  </div>
</template>

<script>
export default {
    name:"NavbarSuper"

}
</script>

<style>

</style>