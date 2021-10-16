<template>
  <div>
    <v-row>
      <v-col align="center">
        <v-btn elevation="2" fab class="btnvison" width="100" height="100">
             <v-img src="../assets/Thunder.png" max-height="300" max-width="300"></v-img> 
             </v-btn>
        <h1> รวดเร็ว </h1>
          <p>ทำทำงานที่รวดเร็ว
          </p>
      </v-col>
      <v-col align="center">
        <v-btn elevation="2" fab class="btnvison" width="100" height="100">
             <v-img src="../assets/tracking.png" max-height="300" max-width="70"></v-img>
             </v-btn>
        <h1> ติดตามได้ </h1>
          <p>สามารถติดตามสถานะการทำข้อมูลเอกสาร
          </p>
      </v-col>
      <v-col align="center">
        <v-btn elevation="2" fab class="btnvison"  width="100" height="100">
             <v-img src="../assets/easy.png" max-height="300" max-width="70"></v-img> 
             </v-btn>
        <h1> สะดวกง่าย </h1>
          <p>ใช้งานงาน เข้าใจง่าย
          </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "vision",
};
</script>

<style>
.btnvison{
    margin: 4.5%;
    
}
</style>