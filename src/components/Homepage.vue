<template>
  <div >

    <v-row>
      <v-col>
        <div class="viewshow" >
      <v-card class="Billboard" ><Billboard/></v-card>
    </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-col>

        <div class="article" >
      <v-card class="backArticle" color="#FAFAFA">
      <v-row>
        <v-col>
          
        </v-col>
        <v-col>
          <h1 class="topic1">Article</h1>
        </v-col>
        <v-col align="right">
           <v-btn class="btnmore">ทั้งหมด</v-btn>
        </v-col>
      </v-row>
      <v-card class="article"><Article/></v-card>
      <br>
      </v-card>
    </div>
      </v-col>

      </v-col>
    </v-row>

    <v-row>
      <v-col>
      <v-col>
      <div class="article1" >
      <v-card color="#FAFAFA">
      <h1 class="topic1">vision</h1>
      <vision/>
      </v-card>
    </div>

      </v-col>
      </v-col>
    </v-row>
    <footer class="buttomm"  ><FB/></footer>

  </div>
</template>

<script>
import Billboard from '../components/Billboard.vue'
import Article from '../components/Grouparticle.vue'
import vision from '../components/vision.vue'
import FB from '../components/Footer.vue'

  export default {
    name: 'Homepage',
    components: {
    Billboard,
    Article,
    vision,
    FB,
  },

    
  }
</script>
<style scope>
body{
  
}
.Billboard{
  height: 400px;

}
.article{
  margin: 20px 0px 0px 0px;
  height: 450px;

}
.article1{
  margin: 70px 0px 0px 0px;
  height: 300px;

}
.topic1{
  text-align: center;
  padding: 10px;
}
.buttomm{
  margin: 1% ;
  z-index: -2;
  position: sticky;
  
}
</style>
