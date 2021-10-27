<template>
  <div>
    <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="cardshow">
        <h1>
          สถานะเอกสาร / คำร้อง
          <v-divider></v-divider>
        </h1>

        <v-card elevation="2" 
        loading 
        class="trackcrad"
        v-for=" listtracking in listtracking "
        :key="listtracking.num"
        >
          <h2>{{listtracking.title}}</h2>
          <v-row>
            <v-col>


          </v-row>
        </v-card>
      </v-card>
    </v-main>
    <!-- ส่วนจัดเเสดง -->
  </div>
</template>

<script>
export default {
  name: "TrackingSTU",
  data() {
    return {
      listtracking : [
        {num:1,title:'เอกสารที่1',pointracking:5,}
      ]
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
  padding: 10px;
}
.cardshow {
  margin: 8%;
}
.trackcrad{
  text-align: center;
  
}
</style>