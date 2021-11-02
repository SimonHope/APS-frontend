<template>
<div>
  <v-carousel hide-delimiters height="100%" cycle :show-arrows="false" >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
    ></v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/n1.png'),
          },
          {
            src: require('@/assets/n2.png'),
          },
          {
            src: require('@/assets/n3.png'),
          },
          {
            src: require('@/assets/n4.png'),
          },
        ],
      }
    },
  }
</script>

<style>

</style>