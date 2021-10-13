<template>

  <div id="top">
    <div class="proposal">
      <v-carousel cycle :show-arrows="false" height="700" >
    <v-carousel-item
      v-for="(item,i,) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  </div>
<!-- ส่วนของบทความ -->
  <div class="content1" id="article">
    <v-card>
      
      <v-btn>ดูทั้งหมด</v-btn>
    </v-card>
    
  </div>
<!-- ส่วนของบทความ -->
     

  <div class="content2">
    <v-card>
      <v-row>
        <v-col>
          <v-btn fab height="250" width="250">sdfs</v-btn>
          <h1> รวดเร็ว </h1>
          <p>Phasellus feugiat arcu sapien, 
            et iaculis ipsum elementum sit amet. 
            Mauris cursus commodo interdum.
          </p>
        </v-col>
        <v-col>
          <v-btn fab height="250" width="250">sdfs</v-btn>
          <h1>ติดตามได้</h1>
          <p>Phasellus feugiat arcu sapien, 
            et iaculis ipsum elementum sit amet. 
            Mauris cursus commodo interdum.
          </p>
        </v-col>
        <v-col>
          <v-btn fab height="250" width="250">sdfs</v-btn>
          <h1>สะดวกง่าย</h1>
          <p>Phasellus feugiat arcu sapien, 
            et iaculis ipsum elementum sit amet. 
            Mauris cursus commodo interdum.
          </p>
        </v-col>
      </v-row>
    </v-card>
  </div>
    
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
.proposal {
  margin: 3.5% 0% 0% 0%;
  
}
.content1 {
  margin: 2% 5% 0% 5%;
}
.content2 {
  margin: 2% 5% 0% 5%;
}
</style>