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
      <v-card class="backArticle" color="#D3D3D3">
      <v-row>
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
      <v-card class="backArticle" color="#D3D3D3">
      <h1 class="topic1">vision</h1>
      <vision/>
      </v-card>
    </div>

      </v-col>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import Billboard from '../components/Billboard.vue'
import Article from '../components/Grouparticle.vue'
import vision from '../components/vision.vue'
  export default {
    name: 'Homepage',
    components: {
    Billboard,
    Article,
    vision,
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
  text-align: left;
}
.backArticle{
  background-color:rgb(129, 128, 128);
}
</style>
