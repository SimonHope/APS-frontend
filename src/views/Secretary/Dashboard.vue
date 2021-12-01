<template>
  <div id="SecretaryDashboard">
    <NavbarSecretary />
    <v-card class="cardmargin">
      <h1 class="text-center">
        กระดานข่าวสาร Secretary
        <v-divider></v-divider>
      </h1>
    </v-card>
  </div>
</template>

<script>
import NavbarSecretary from "../../components/NavbarSecretary.vue";
export default {
  name: "SecretaryDashboard",
  components: {
    NavbarSecretary,
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
