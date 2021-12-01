<template>
  <v-app>
    <div>
      <!-- <Navbar v-if="roluser == 'null'"></Navbar>
      <NavbarStudent v-if="roluser == 'User'"></NavbarStudent>
      <NavbarHOF v-if="roluser == 'chief'"></NavbarHOF>
      <NavbarOF v-if="roluser == 'officer'"></NavbarOF>
      <NavbarSuper v-if="roluser == 'admin'"></NavbarSuper> -->
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Navbar from "./components/Navbar.vue";
// import NavbarStudent from "./components/NavbarUser.vue";
// import NavbarOF from "./components/NavbarOfficer.vue";
// import NavbarHOF from "./components/NavbarChief.vue";
// import NavbarSuper from "./components/NavbarAdmin.vue";

export default {
  name: "App",
  components: {
    // Navbar,
    // NavbarStudent,
    // NavbarOF,
    // NavbarHOF,
    // NavbarSuper,
  },
  beforeCreate() {},
  data() {
    return {
      roluser: "User",
    };
  },
  created() {
    // let tempdata = JSON.parse(localStorage.getItem("UserData"));
    // console.log(tempdata.status);
    // this.roluser = tempdata.status;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");

* {
  font-family: "Prompt", sans-serif;
}
</style>
