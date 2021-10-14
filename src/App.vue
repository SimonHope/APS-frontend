<template>
  <div>
    <div>
      <v-btn 
    fixed 
     
    left
    width="1920"
    height="300"
    @click="roluser = 'officer'"
    >

    </v-btn>
    </div>
    <Navbar v-if="roluser == 'null'" ></Navbar>
    <NavbarStu v-if="roluser == 'Student'" ></NavbarStu>
    <NavbarHOF v-if="roluser == 'Hoffice'" ></NavbarHOF>
    <NavbarOF v-if="roluser == 'officer'" ></NavbarOF>
    <NavbarSuper v-if="roluser == 'admin'"></NavbarSuper>
    
  

    <router-view></router-view>
    
    <footer class="buttomm"  ><Foolter/></footer>
    
    
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import NavbarStu from "./components/NavbarStudent.vue"
import NavbarHOF from "./components/NavbarHOfficer.vue"
import NavbarOF from "./components/NavbarOfficer.vue"
import NavbarSuper from "./components/NavbarSuper.vue"
import Foolter from "./components/Footer.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    NavbarStu,
    NavbarHOF,
    NavbarOF,
    NavbarSuper,
    Foolter,
  },
  beforeCreate() {
        
        
    },
  data() {
    return {
      roluser:'null',
    }
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