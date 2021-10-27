<template>
  <div>
    <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="cardshow">
        <h1>
      เลือกแบบคำร้อง
      <v-divider></v-divider>
    </h1>
    
    <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="forms in forms"
          :key="forms.no"
          cols="112"
          md="4"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  
                >
                  {{forms.text}}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>





    </v-card>
    </v-main>
    <!-- ส่วนจัดเเสดง -->
    
    

    
    
  </div>
</template>

<script>

export default {
    name:'FormsSTU',
    data() {
    return {
      forms:[
        {no:'1',text:'ฟรอมที่ 1',},
        {no:'2',text:'ฟรอมที่ 2',},
        {no:'3',text:'ฟรอมที่ 3',},
        {no:'4',text:'ฟรอมที่ 4',},
      ],
      
    }
  },
  

}
</script>

<style scoped>
h1{
  text-align: left;
  padding: 10px;
}
.cardshow{
  margin: 8%;
}
</style>