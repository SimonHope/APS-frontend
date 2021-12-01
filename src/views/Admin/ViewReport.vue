<template>
  <div id="AdminViewReport">
    <NavbarAdmin />
    <v-card class="cardmargin">
      <h1 class="text-center">
        การรายงานปัญหา
        <v-divider></v-divider>
      </h1>
    </v-card>
  </div>
</template>

<script>
import NavbarAdmin from "../../components/NavbarAdmin.vue";
export default {
  name: "AdminViewReport",
  components: {
    NavbarAdmin,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.cardmargin {
  margin: 2%;
}
</style>
