<template>
  <div id="AdminDashboard">
    <NavbarAdmin />
    <v-card class="cardmargin">
      <h1 class="text-center">
        การอนุมัติ
        <v-divider></v-divider>
      </h1>
    </v-card>
  </div>
</template>

<script>
import NavbarAdmin from "../../components/NavbarAdmin.vue";
export default {
  name: "AdminDashboard",
  components: {
    NavbarAdmin,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.cardmargin {
  margin: 2%;
}
</style>
