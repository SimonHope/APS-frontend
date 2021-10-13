<template>
  <div>
      <NavbarSTU> </NavbarSTU>

      
      <v-row>
        <!-- เเถมเมนู -->
        <v-col >
        <v-card width="300px">
      <v-responsive  height="1080" >
        <v-card-text  >
          This card will always be 16:9 (unless you put more stuff in it)
        </v-card-text>
      </v-responsive>
    </v-card>
        </v-col>
        <!-- เเถมเมนู -->

        <v-col width="300px">
          <v-card>
      <v-responsive height="1080">
        <v-card-text>
          This card will always be 16:9 (unless you put more stuff in it)
        </v-card-text>
      </v-responsive>
    </v-card>
        
        </v-col>
      </v-row>
      

  </div>
</template>

<script>
import NavbarSTU from "../components/NavbarStudent.vue";

export default {
    name:"DashboardStudent",
    components: {
    NavbarSTU,
    
  }

}
</script>

<style>
.barmenu{
  width: 400px;
  height: 1080px;
  position:fixed;
  
}
.option{
  width: 1300px;
  
  
}

</style>