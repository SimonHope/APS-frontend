<template>
  <!-- ส่วนจัดเเสดง -->
  <v-app>
    <NavbarOF />
    <v-card class="cardshow">
      <h1 >
        ข้อมูลผู้ใช้งาน
        <v-divider></v-divider>
      </h1>
      <v-row>
        <v-col align="center">
          <v-btn fab width="auto" height="auto" class="">
            <v-img
              class="rounded-circle"
              width="150"
              height="150"
              src="../../assets/5074620687.jpg"
            >
            </v-img>
          </v-btn>
        </v-col>
      </v-row>

      <v-form v-model="valid" v-for="profile in profile" :key="profile">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="profile.Fname"
                :rules="nameRules"
                :counter="10"
                label="ชื่อ"
                required
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="profile.Lname"
                :rules="nameRules"
                :counter="10"
                label="นามสกุล"
                required
                disabled
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="profile.gender"
                :rules="emailRules"
                label="เพศ"
                required
                disabled
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="profile.satus"
                :rules="emailRules"
                label="สถานะผู้ใช้งาน"
                required
                disabled
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="profile.email"
                :rules="emailRules"
                label="E-mail"
                required
                disabled
              ></v-text-field>
            </v-col>
          </v-row>


          <v-row>
            <v-col>
              <v-text-field
                v-model="profile.tell"
                :rules="emailRules"
                label="เบอร์โทร"
                required
                disabled
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="profile.addess"
                :rules="emailRules"
                label="ที่อยู่"
                required
                disabled
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row v-for="heard in heard" :key="heard">
            <v-col align="center" v-if="heard.type == 1">
              <v-row v-for="specifics in specifics" :key="specifics">
                <v-col>
                    {{specifics.titleheard}}
                  <v-text-field
                    v-model="specifics.specificsdetail"
                    :rules="emailRules"
                    label="ใส่ข้อมูลลงที่นี้"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      
        
      
    </v-card>
    <!-- ส่วนจัดเเสดง -->
  </v-app>
</template>
<script>
import NavbarOF from "../../components/NavbarOfficer.vue";
export default {
  name: "DashboardOffice",
  components: {
    NavbarOF,
  },
  data() {
    return {
      detail: "",
      profile: [
        {
          Fname: "ณัฐภูมิ",
          Lname: "ผาจิต",
          gender: "ชาย",
          email: "62015011@kmit.ac.th",
          tell: "0856937521",
          addess:
            "เลขที่ 1 ซอยฉลองกรุง 1แขวงลาดกระบัง เขตลาดกระบังกรุงเทพฯ 10520",
          satus:"Officer",
        },
      ],
      heard: [
        {
          title: "การขอสอบย้อนหลัง",
          type: 2,
        },
      ],
      specifics: [
        { titleheard: "ข้อมูลรายวิชา", specificsdetail: "" },
        { titleheard: "เหตุผล", specificsdetail: "" },
        { titleheard: "เหตุผล", specificsdetail: "" },
        { titleheard: "เหตุผล", specificsdetail: "" },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 10px;
}
h2 {
  text-align: center;
  padding: 10px;
}
.cardshow {
  margin: 2%;
}
.box-margin{
  margin: 5%;
}
</style>
