<template>
  <div id="ChiefReport">
    <NavbarChief />
    <v-card class="cardmargin">
      <h1 class="text-center p-4">
        การรายงานปัญหาทั้งหมด
        <v-divider></v-divider>
      </h1>
      <v-row>
        <v-col align="center" v-if="reports.length">
          <v-btn width="150" height="50">
            <v-icon>mdi-account</v-icon>
            <div class="title">{{ reports.length }}</div>
          </v-btn>
        </v-col>
      </v-row>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        >
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="reports" :search="search">
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn small class="mr-2" @click="chageState(item.id)">
            {{ item.report_state }}
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import NavbarChief from "../../components/NavbarChief.vue";
import axios from "axios";
export default {
  name: "ChiefReport",
  components: {
    NavbarChief,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "ลำดับ",
          align: "start",
          value: "id",
          width: 100,
        },
        { text: "รายการ", width: 500, value: "report_title" },

        { text: "สถานะ", width: 200, value: "actions" },
      ],
      reports: [],
    };
  },
  mounted() {
    this.getreport();
  },

  methods: {
    getreport() {
      axios
        .get("http://localhost:3000/api/reports")
        .then((response) => {
          // handle success
          this.reports = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    chageState(id) {
      console.log(id);
      axios
        .put("http://localhost:3000/api/reports", {
          id: id,
        })
        .then(() => {
          // handle success
          this.$router.push("/ChiefReportDetail/" + id);
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
