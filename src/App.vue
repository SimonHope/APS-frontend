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
    <Navbar v-if="roluser == 'null'"  ></Navbar>
    
    
  

    <router-view></router-view>
    
    
    
    
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    
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

body{
  margin: 6% 8% 0% 8%;
  background-color: rgb(80, 82, 85);
}

</style>