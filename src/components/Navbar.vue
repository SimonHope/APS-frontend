<template>


  <div  class="backgroundbody">
      
      <router-view></router-view>

    </div>

    
</template>


<script>
export default {
  name: "Navbar",
  data: () => ({
    openmenu: false,
    sidebar:  false,
    menu: [
      { menu: "1", text: "หน้าหลัก", route: "/" },
      { menu: "2", text: "เข้าสู่ระบบ", route: "/login" },
      { menu: "3", text: "เกี่ยวกับ", route: "/about" },
      { menu: "4", text: "ข้อตกลง เเละ นโยบาย", route: "/rules" },
    ],
  }),
};
</script>

<style>
</style>

