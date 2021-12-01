<template>
  <!-- ส่วนจัดเเสดง -->
  <v-app>
    <NavbarStu />
    <v-card class="cardshow">
      <h1>
        แบบคำร้อง / ยื่นเรื่อง
        <v-divider></v-divider>
      </h1>
      <h1 v-for="heard in heard" :key="heard" style="text-align: center">
        {{ heard.title }}
      </h1>
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

          <v-row>
            <v-col align="center">
              <v-btn class="ma-2" color="success"> ส่งคำร้อง </v-btn>
            </v-col>

            <v-col align="center">
              <v-btn class="ma-2" outlined color="error"> ย้อนกลับ </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <!-- ส่วนจัดเเสดง -->
  </v-app>
</template>

<script>
import NavbarStu from "../../components/NavbarUser.vue";
export default {
  name: "FormsSTU",
  components: {
    NavbarStu,
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
        },
      ],
      heard: [
        {
          title: "การขอสอบย้อนหลัง",
          type: 1,
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
  padding: 10px;
}
.cardshow {
  margin: 2%;
}
</style>
