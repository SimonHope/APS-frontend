<template>
  <div>
    
    <div>
      <!-- <v-btn 
    fixed 
     
    left
    width="1920"
    height="300"
    @click="roluser = 'officer'"
    >

    </v-btn> -->
    </div>
    <!-- <Navbar ></Navbar> -->
    
    <Navbar  v-if="roluser == 'null'"/>
    <NavbarStu v-if="roluser == 'Student'"  ></NavbarStu>
    <NavbarHOF v-if="roluser == 'Hoffice'"  ></NavbarHOF>
    <NavbarOF v-if="roluser == 'officer'"  ></NavbarOF>
    <NavbarSuper v-if="roluser == 'admin'" ></NavbarSuper>
    

    
    

  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import NavbarStu from "./components/NavbarStudent.vue"
import NavbarHOF from "./components/NavbarHOfficer.vue"
import NavbarOF from "./components/NavbarOfficer.vue"
import NavbarSuper from "./components/NavbarSuper.vue"


export default {
  name: 'App',
  components: {
    Navbar,
    NavbarStu,
    NavbarHOF,
    NavbarOF,
    NavbarSuper
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
@import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');

* {
  font-family: 'Prompt', sans-serif;
}
</style>