<template>
  <div>
    <Navbar   ></Navbar>
    <!-- <NavbarStu  ></NavbarStu> -->
    <router-view></router-view>
    <footer><footers></footers></footer>
  </div>
</template>

<script>
import Navbar from "./components/NavbarGen.vue";
// import NavbarStu from "./components/NavbarStudent.vue"
import footers from "./components/footers.vue";
export default {
  name: "App",
  components: {
    Navbar,
    // NavbarStu,
    footers,
  },
};
</script>

<style>
body {
  margin: 3% 0% 0% 0%;
  background-color: rgb(255, 255, 255);
  text-align: center;
  background-image: url("./assets/background.png");
  font-family: "Prompt", sans-serif;
}
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
</style>
