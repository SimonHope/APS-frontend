<template>
  <div>
      <!-- เเถบข้างเวลากดเเฮมไบเกอร์ -->
    <v-navigation-drawer  v-model="openmenu" fixed left
     stateless width='300'  >
      <v-list-item-group 
        v-model="group"
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

        <v-divider></v-divider>
      </v-list-item-group>
    </v-navigation-drawer>
    <!-- เเถบข้างเวลากดเเฮมไบเกอร์ -->
  </div>
</template>

<script>
export default {
    name:'tabmenu',
    data() {
    return {
       openmenu: true,

    }
  },
}
</script>

<style>

</style>