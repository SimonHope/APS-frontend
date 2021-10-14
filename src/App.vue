<template>
  <div>
    <Navbar></Navbar>

    <router-view></router-view>
    <footer class="buttomm"  ><Foolter/></footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Foolter from "./components/Footer.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    Foolter,
  },

};
</script>

<style>
.viweshow{
  
  background-color: rgba(232, 232, 235, 0.452);
  
}
body{
  margin: 8% 8% 0% 8%;
  background-color: rgb(234, 235, 238);
}
.buttomm{
  margin: 1% ;
  
}
</style>