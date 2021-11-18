<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- <Navbar v-if="roluser == 'null'" />
    <NavbarStu v-if="roluser == 'student'"></NavbarStu>
    <NavbarHOF v-if="roluser == 'Hoffice'"></NavbarHOF>
    <NavbarOF v-if="roluser == 'officer'"></NavbarOF>
    <NavbarSuper v-if="roluser == 'admin'"></NavbarSuper> -->
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import NavbarStu from "./components/NavbarStudent.vue";
// import NavbarHOF from "./components/NavbarHOfficer.vue";
// import NavbarOF from "./components/NavbarOfficer.vue";
// import NavbarSuper from "./components/NavbarSuper.vue";

export default {
  name: "App",
  components: {
    Navbar,
    // NavbarStu,
    // NavbarHOF,
    // NavbarOF,
    // NavbarSuper,
  },
  beforeCreate() {},
  data() {
    return {
      roluser: "null",
    };
  },
  created() {
    let tempdata = JSON.parse(localStorage.getItem("UserData"));
    console.log(tempdata.status);
    this.roluser = tempdata.status;
  },
};
</script>

<style></style>
