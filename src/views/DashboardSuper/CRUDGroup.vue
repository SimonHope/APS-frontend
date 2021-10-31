<template>
  <div>
    <!-- ส่วนจัดเเสดง -->
    <v-main>
      <v-card class="cardshow">
        <h1>
          จัดการ Group
          <v-divider></v-divider>
        </h1>
        <v-row>
          <v-col v-for="Group in Group" :key="Group.no">
            <v-card width="250" height="300" class="card-magin" color="#BDBDBD">
              <v-row>
                <v-col>
                  <v-btn fab width="90" height="90" class="Gprofile-margin"
                    ><v-icon> mdi-{{ Group.icon }}</v-icon>
                  </v-btn>
                  <h2>{{ Group.name }}</h2>
                  
                  <v-btn color="#FFD740" >จัดการกลุ่ม</v-btn>
                    
                  
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <!-- pop-up เเสดงรายละเอียด  -->
                  

               
                  <!-- pop-up เเสดงรายละเอียด  -->
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      
    </v-main>
    <!-- ส่วนจัดเเสดง -->
  </div>
</template>

<script>

export default {
  
  name: "CRUDGROUPADMIN",
  data() {
    return {
      Group: [
        { no: 1, name: "สำนักศึกษาทั่วไป", icon: "account", color: "#4CAF50" },
        {
          no: 2,
          name: "สำนักงานคอมพิวเตอร์ สจล.",
          icon: "emoticon-poop",
          color: "",
        },
        { no: 3, name: "สำนักถังเช่า", icon: "cross-bolnisi", color: "" },
        {
          no: 4,
          name: "ชนเผ่าวูกาลูลู",
          icon: "arrow-projectile-multiple",
          color: "",
        },
        { no: 5, name: "ชมรมคนเหงา 2021", icon: "car-child-seat", color: "" },
      ],
      dialog: false,
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
.card-magin {
  margin: 3%;
}
.Gprofile-margin {
  margin: 10%;
}
</style>