<template>
  <div >
<!-- 
    <v-row>
      <v-col>
            <v-card class="Billboard" width="100%" height="333px"><Billboard/></v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="article">
          <h1>บทความ</h1>
          <Article/>
          </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="vision"><vision/></v-card>

      </v-col>
    </v-row>

    
    
    <footer class="buttomm"  ><FB/></footer> -->
    
    <header>
      <a href="#" class="logo">
        <div><v-img height="128" width="128" src="../assets/logo1.png"> </v-img></div>
        APS</a>
        <v-spacer></v-spacer>
        
        <ul>
          <li><a href="#" class="active" >เข้าสู่ระบบ</a></li>
          <li><a href="#" >หน้าหลัก</a></li>
        </ul>
    </header>
    <section>
      
      <img src="../assets/star.png" id="stars">
      <img src="../assets/moon.png" id="moon">
      <img src="../assets/mtb.png" id="mtb">
      <h2 class="text1">Hi bitch <br> see you soon...</h2>
      <img src="../assets/mtf.png" id="mtf">
    </section>

     


    
  </div>
</template>

<script>
// import Billboard from '../components/Billboard.vue'
// import Article from '../components/Grouparticle.vue'
// import vision from '../components/vision.vue'
// import FB from '../components/Footer.vue'


  export default {
    name: 'Homepage',
    data() {
      return {
        menu: [
      { menu: "1", text: "หน้าหลัก", route: "/" },
      { menu: "2", text: "เข้าสู่ระบบ", route: "/login" },
      { menu: "3", text: "เกี่ยวกับ", route: "/about" },
      { menu: "4", text: "ข้อตกลง เเละ นโยบาย", route: "/rules" },
    ],
      }
    },
    components: {
    // Billboard,
    // Article,
    // vision,
    // FB,
    
  },
  }
</script>
<style scope>
.Billboard{
  margin: 2% 0% 20% 0%;

}
.article{
  margin: 1% 10% 0% 10%;
}
.vision{
  margin: 1% 10% 0% 10%;
}
.topic1{
  text-align: center;
  padding: 10px;
}
body{
  min-height: 100vh;
  background: linear-gradient(#04d0df,#ffffff,#ffffff);
}
.logo{
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
}
header{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
} 

header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li {
  list-style: none;
  margin-left: 20px;
}

header ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: #ffffff;
  border-radius: 20px;
}

header ul li a:hover,
header ul li a.active {
  background: floralwhite ;
  color: aqua;
}

section  {
  
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
section img#moon{
  mix-blend-mode: screen;
}


section img#mtf{
  z-index: 10;
}
.text1{
  position: absolute;
  color: #ffffff;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 1000;
}


</style>
