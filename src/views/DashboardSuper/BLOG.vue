<template>
  <!-- ส่วนจัดเเสดง -->
  <div id="Blogmanagement">
    <NavbarSuper />
    <v-card class="cardshow">
      <h1>
        จัดการบทความ
        <v-divider></v-divider>
      </h1>
    </v-card>
  </div>
  <!-- ส่วนจัดเเสดง -->
</template>

<script>
import NavbarSuper from "../../components/NavbarSuper.vue";
export default {
  name: "Blogmanagement",
  components: {
    NavbarSuper,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 10px;
}
h2 {
  text-align: center;
  padding: 10px;
}
.cardshow {
  margin: 8%;
}
</style>
