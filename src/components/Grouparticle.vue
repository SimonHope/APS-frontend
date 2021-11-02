<template>
  <div id="a-center">
    <v-card>
      <h3>บทความที่น่าสนใจ</h3>
  <v-sheet
    class="mx-auto"
    elevation="6"
    max-width="1920"
    
    
  >
    <v-slide-group
      show-arrows
    >
      <v-slide-item
        v-for="article in article"
        :key="article.menu"
        
         
      >
        <v-card
          class="ma-4"
          height="450"
          width="200"
          router :to="article.route"
          
        >
        <br>
          <h2>{{article.text}}</h2>
          
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  </v-card>
  </div>
</template>

<script>
  export default {
    name:'article',
    data: () => ({
      // model: null,

      article : [
        {menu:'1',text:'หน้าหลัก', route:'/',src: require('@/assets/n1.png')},
        {menu:'2',text:'เข้าสู่ระบบ', route:'/login',src: require('@/assets/n1.png')},
        {menu:'3',text:'เกี่ยวกับ', route:'/about',src: require('@/assets/n1.png')},
        {menu:'4',text:'ข้อตกลง เเละ นโยบาย', route:'/rules',src: require('@/assets/n1.png')},
        {menu:'4',text:'ข้อตกลง เเละ นโยบาย', route:'/rules',src: require('@/assets/n1.png')},
        {menu:'4',text:'ข้อตกลง เเละ นโยบาย', route:'/rules',src: require('@/assets/n1.png')},
        {menu:'4',text:'ข้อตกลง เเละ นโยบาย', route:'/rules',src: require('@/assets/n1.png')},
        
      ],
    }),
  }
</script>

<style scoped>
h2{
  text-align: center;
  
}
h3{
  font-size: 50px;
  padding: 3%;
}

</style>