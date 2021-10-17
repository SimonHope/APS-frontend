<template>
  <div>
    <NavbarStu v-if="roluser == 'Student'"  ></NavbarStu>
    <NavbarHOF v-if="roluser == 'Hoffice'"  ></NavbarHOF>
    <NavbarOF v-if="roluser == 'officer'"  ></NavbarOF>
    <NavbarSuper v-if="roluser == 'admin'" ></NavbarSuper>


    

    <div>
      
    </div>
    


  </div>
</template>

<script>
import NavbarStu from "../components/NavbarStudent.vue"
import NavbarHOF from "../components/NavbarHOfficer.vue"
import NavbarOF from "../components/NavbarOfficer.vue"
import NavbarSuper from "../components/NavbarSuper.vue"

export default {
  name:'dashboard',
  data() {
    return {
       roluser:'admin',


    }
  },
  components: {
    NavbarStu,
    NavbarHOF,
    NavbarOF,
    NavbarSuper,
    
  },

}
</script>

<style>
.backNav{
  z-index: -1;
}
</style>