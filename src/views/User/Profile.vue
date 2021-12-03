<template>
  <div id="UserProfile" class="bg-color">
    <NavbarUser />
    <v-card class="cardmargin">
      <h1 class="text-center p-3">
        โปรไฟล์
        <v-divider></v-divider>
      </h1>

      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="หัวข้อปัญหา"
                placeholder="ระบุหัวข้อปัญหา"
                v-model="report_title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                solo
                name="input-7-4"
                label="ระบุรายละเอียดปัญหา"
                v-model="report_detail"
              ></v-textarea>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn dark x-large color="#2E7D32" @click="sentreport">
                ส่งรายงาน
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <!-- ป้ายเเจ้งเตือน -->
    <v-snackbar v-model="snackbar" :timeout="timeout" color="#2E7D32">
      {{ text }}
    </v-snackbar>
    <!-- ป้ายเเจ้งเตือน -->
  </div>
</template>

<script>
import NavbarUser from "../../components/NavbarUser.vue";
export default {
  name: "UserProfile",
  components: {
    NavbarUser,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.bg-color {
  background: #f0f0f0;
  height: 100%;
}
.cardmargin {
  margin: 2%;
}
</style>
