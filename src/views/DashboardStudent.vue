<template>
  <div>
    <NavbarSTU> </NavbarSTU>
    

    <v-row>
      <v-col>
        <v-card width="400" height="1080" flat class="barmenu"></v-card>
      </v-col>
      <v-col>
        

      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavbarSTU from "../components/NavbarStudent.vue";

export default {
  name: "DashboardStudent",
  components: {
    NavbarSTU,
  },
};
</script>

<style>

.barmenu {
  position: fixed;
}
</style>