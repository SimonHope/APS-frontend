<template>
  <div>
  <v-main>
    <br><br><br><br><br>
    <h1> Hello word roluser {{roluser}}</h1>
    <v-btn @click="roluser = 'officer'" to="/DashboardSTU"></v-btn>
  </v-main>
  </div>
</template>

<script>
export default {
    name: 'login',
    data() {
    return {
      roluser:'null',
    }
  },

}
</script>

<style>

</style>