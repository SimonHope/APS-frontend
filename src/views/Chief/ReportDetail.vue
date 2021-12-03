<template>
  <div id="ReportDetail">
    <NavbarChief />
    <v-card class="cardmargin">
      <h1 class="text-center p-2">
        รายละเอียดการรายงานปัญหา
      </h1>
      <v-divider></v-divider>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card outlined class="p-4">
                <h3>หัวข้อปัญหา</h3>
                <p class="subtitle-1">{{ report_title }}</p>
              </v-card>
              <v-card outlined class="p-4 mt-2">
                <h3>รายละเอียดปัญหา</h3>
                <p class="subtitle-1">{{ report_detail }}</p>
              </v-card>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn dark x-large color="#3F3F3F" @click="back">
                ย้อนกลับ
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import NavbarChief from "../../components/NavbarChief.vue";
import axios from "axios";
export default {
  name: "ReportDetail",
  components: {
    NavbarChief,
  },
  data() {
    return {
      report_title: "",
      report_detail: "",
    };
  },
  mounted() {
    this.getreportbyid();
  },
  methods: {
    back() {
      this.$router.push("/ChiefReport");
    },
    getreportbyid() {
      axios
        .get("http://localhost:3000/api/reports/" + this.$route.params.id)
        .then((response) => {
          // handle success
          this.report_title = response.data.report_title;
          this.report_detail = response.data.report_detail;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.cardmargin {
  margin: 2%;
}
</style>
