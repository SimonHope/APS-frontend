<template>
  <!-- ส่วนจัดเเสดง -->
  <div id="ReportSTU">
    <NavbarStu />
    <v-card class="cardshow">
      <h1 class="text-center p-3">
        รายงานเสนอเเนะ
        <v-divider></v-divider>
      </h1>

      <v-form v-model="valid">
        <v-container>
          <v-select :items="items" label="เลือกหัวข้อ"></v-select>
          <v-textarea
            solo
            name="input-7-4"
            label="ใส่เหตุผลในการรายงาน"
          ></v-textarea>
          <v-btn dark color="#2E7D32" @click="submit"> ส่งรายงาน </v-btn>
        </v-container>
      </v-form>
    </v-card>
    <!-- ป้ายเเจ้งเตือน -->
    <v-snackbar v-model="snackbar" :timeout="timeout" color="#2E7D32">
      {{ text }}
    </v-snackbar>
    <!-- ป้ายเเจ้งเตือน -->
  </div>
  <!-- ส่วนจัดเเสดง -->
</template>

<script>
import NavbarStu from "../../components/NavbarUser.vue";
export default {
  name: "ReportSTU",
  components: {
    NavbarStu,
  },
  data() {
    return {
      items: ["หัวข้อที่ 1", "หัวข้อที่ 2", "หัวข้อที่ 3", "หัวข้อที่ 3"],
      snackbar: false,
      text: "ส่งรายงานเเล้ว",
      timeout: 2000,
    };
  },
  methods: {
    submit: function() {
      this.snackbar = true;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  padding: 10px;
}
.cardshow {
  margin: 2%;
}
</style>
