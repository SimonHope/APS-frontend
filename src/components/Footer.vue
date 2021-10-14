<template>
  <div>
      <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Academic Petition Service Prototype</strong>
    </v-col>
  </v-footer>

  </div>
</template>

<script>
export default {
    name:'Footer',

}
</script>

<style>
body{
    text-align: center;
}

</style>